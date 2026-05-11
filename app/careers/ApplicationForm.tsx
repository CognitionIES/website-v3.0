"use client";

import { useCallback, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, User, Briefcase, Upload, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const EMAILJS_CONFIG = {
  SERVICE_ID: "service_4jm4x6o",
  TEMPLATE_ID: "template_x7agzcz",
  PUBLIC_KEY: "YHfV6LAgPBcm9VnHd",
} as const;

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "India",
  jobTitle: "",
  message: "",
  resume: null as File | null,
  resumeBase64: "",
  consent: false,
};

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function FormField({ id, label, required, icon, children }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#556677] font-sans">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5B5B5B]/50 pointer-events-none z-10">
          {icon}
        </div>
        {children}
      </div>
    </div>
  );
}

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState(INITIAL_FORM);

  const handleChange = useCallback((field: string, value: string | boolean | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError("File must be smaller than 5MB.");
      return;
    }
    setError("");

    const reader = new FileReader();
    reader.onload = (ev) => {
      const base64 = (ev.target?.result as string).split(",")[1];
      setFormData((prev) => ({ ...prev, resume: file, resumeBase64: base64 }));
    };
    reader.readAsDataURL(file);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent || !formData.resume) {
      setError("Please upload your resume and accept the privacy policy.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const res = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          job_title: formData.jobTitle,
          message: formData.message,
          resume_name: formData.resume.name,
          resume_data: formData.resumeBase64,
          resume_type: formData.resume.type,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (res.status === 200) {
        setSubmitted(true);
        setFormData(INITIAL_FORM);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Submission failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm text-center flex flex-col items-center gap-4"
      >
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#003C46] mb-1">Application Submitted!</h3>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
            Thank you for applying. We review every application carefully and will be in touch soon.
          </p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm text-[#0098AF] hover:underline"
        >
          Submit another application
        </button>
      </motion.div>
    );
  }

  const inputClass = "pl-10 h-11 border-[#e8eaed] bg-[#f9fafb] focus-visible:ring-1 focus-visible:ring-[#0098AF] focus-visible:border-[#0098AF] text-[14px] rounded-lg font-sans";

  return (
    <div>
      <div className="mb-6">
        <span className="inline-block px-3 py-1 bg-[#0098AF]/10 text-[#0098AF] text-xs font-semibold uppercase tracking-widest rounded-full mb-2">
          Join Our Team
        </span>
        <h2 className="text-2xl font-display font-bold text-[#003C46]">Apply Now</h2>
        <p className="text-sm text-gray-500 mt-1">Fill in your details and we&apos;ll get back to you.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-5"
      >
        {/* Name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField id="firstName" label="First Name" required icon={<User className="w-4 h-4" />}>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              placeholder="Jane"
              required
              disabled={isSubmitting}
              className={inputClass}
            />
          </FormField>
          <FormField id="lastName" label="Last Name" required icon={<User className="w-4 h-4" />}>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              placeholder="Doe"
              required
              disabled={isSubmitting}
              className={inputClass}
            />
          </FormField>
        </div>

        {/* Contact row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField id="email" label="Email" required icon={<Mail className="w-4 h-4" />}>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="jane@example.com"
              required
              disabled={isSubmitting}
              className={inputClass}
            />
          </FormField>
          <FormField id="phone" label="Phone" required icon={<Phone className="w-4 h-4" />}>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+91 98765 43210"
              required
              disabled={isSubmitting}
              className={inputClass}
            />
          </FormField>
        </div>

        {/* Location + Job Title */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="location" className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#556677] font-sans">
              Preferred Location <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5B5B5B]/50 z-10 pointer-events-none" />
              <Select
                value={formData.location}
                onValueChange={(v) => handleChange("location", v)}
                disabled={isSubmitting}
              >
                <SelectTrigger className="pl-10 h-11 border-gray-200 focus:ring-1 focus:ring-[#0098AF] text-sm rounded-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="USA">USA</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <FormField id="jobTitle" label="Desired Job Title" required icon={<Briefcase className="w-4 h-4" />}>
            <Input
              id="jobTitle"
              value={formData.jobTitle}
              onChange={(e) => handleChange("jobTitle", e.target.value)}
              placeholder="e.g. Mechanical Engineer"
              required
              disabled={isSubmitting}
              className={inputClass}
            />
          </FormField>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <Label htmlFor="message" className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#556677] font-sans">
            Tell Us About Yourself
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Share your experience and why you'd like to join Cognition IES..."
            disabled={isSubmitting}
            className="min-h-[90px] border-gray-200 focus-visible:ring-1 focus-visible:ring-[#0098AF] text-sm rounded-lg resize-none transition-all duration-200"
          />
        </div>

        {/* Resume upload */}
        <div className="space-y-1.5">
          <Label className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#556677] font-sans">
            Resume / CV <span className="text-red-500">*</span>
          </Label>
          <label
            htmlFor="resume"
            className={`flex items-center gap-3 w-full h-11 px-4 rounded-lg border-2 border-dashed cursor-pointer transition-all duration-200 ${
              formData.resume
                ? "border-[#0098AF] bg-[#0098AF]/5"
                : "border-gray-200 hover:border-[#0098AF]/50 bg-gray-50 hover:bg-[#F5FDFF]"
            }`}
          >
            <Upload className={`w-4 h-4 flex-shrink-0 ${formData.resume ? "text-[#0098AF]" : "text-gray-400"}`} />
            <span className={`text-sm truncate ${formData.resume ? "text-[#003C46] font-medium" : "text-gray-400"}`}>
              {formData.resume ? formData.resume.name : "Click to upload PDF, DOC, or DOCX (max 5MB)"}
            </span>
            <input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
              disabled={isSubmitting}
            />
          </label>
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(c) => handleChange("consent", c === true)}
            disabled={isSubmitting}
            className="mt-0.5 border-gray-300 data-[state=checked]:bg-[#0098AF] data-[state=checked]:border-[#0098AF]"
          />
          <Label htmlFor="consent" className="text-xs text-gray-500 cursor-pointer leading-relaxed">
            I agree to the{" "}
            <a href="/privacy-policy" className="text-[#0098AF] hover:underline">
              Privacy Policy
            </a>{" "}
            and consent to having my data processed for recruitment.
          </Label>
        </div>

        {/* Error feedback */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xs text-red-500 font-medium"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        <Button
          type="submit"
          disabled={isSubmitting || !formData.consent || !formData.resume}
          className="w-full group flex items-center justify-center gap-2 h-11 bg-[#003C46] hover:bg-[#0098AF] text-white text-[13px] font-bold tracking-[0.1em] uppercase rounded-xl transition-colors duration-200 disabled:opacity-50 font-sans"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Submitting…
            </span>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>
    </div>
  );
}
