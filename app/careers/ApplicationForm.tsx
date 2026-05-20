"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, User, Briefcase, Upload, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
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
  });

  const handleInputChange = (field: string, value: string | boolean | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({ title: "File Too Large", description: "Please upload a file smaller than 5MB", variant: "destructive" });
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target?.result as string;
        setFormData((prev) => ({ ...prev, resume: file, resumeBase64: base64String.split(",")[1] }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent || !formData.resume || !formData.resumeBase64) {
      toast({ title: "Missing required fields", description: "Please complete all required fields and upload a resume.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        job_title: formData.jobTitle,
        message: formData.message,
        resume_name: formData.resume.name,
        resume_data: formData.resumeBase64,
        resume_type: formData.resume.type,
      };
      const response = await emailjs.send("service_4jm4x6o", "template_x7agzcz", templateParams, "YHfV6LAgPBcm9VnHd");
      if (response.status === 200) {
        toast({ title: "Application Submitted", description: "Thank you for your application! We'll be in touch soon." });
        setFormData({ firstName: "", lastName: "", email: "", phone: "", location: "India", jobTitle: "", message: "", resume: null, resumeBase64: "", consent: false });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({ title: "Submission Failed", description: "There was an error submitting your application. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -15% 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const fieldClass =
    "h-11 text-[15px] bg-[#f7f8fa] dark:bg-[#13131a] border border-[#e8eaed] dark:border-[#1e1e2e] rounded-lg text-[#003C46] dark:text-white placeholder:text-[#aabbcc] focus-visible:ring-1 focus-visible:ring-[#0098AF]/40 focus-visible:border-[#0098AF] transition-colors";

  return (
    <section ref={sectionRef} className="py-10 lg:py-14">

      {/* Section header */}
      <div className="mb-8">
        <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-2">
          Apply Now
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#003C46] dark:text-white mb-2"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          Start your{" "}
          <em className="not-italic text-[#0098AF]">application.</em>
        </h2>
        <p className="text-[15px] text-[#778899] dark:text-[#6677aa]">
          Fill in the details below and we'll be in touch soon.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-[#0d0d14] rounded-xl border border-[#e8eaed] dark:border-[#1e1e2e] p-6 lg:p-8 space-y-6"
        >

          {/* Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="firstName" className="text-[13px] font-semibold text-[#003C46] dark:text-[#ccddee] tracking-wide">
                First Name <span className="text-[#0098AF]">*</span>
              </Label>
              <div className="relative">
                <Input id="firstName" value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required placeholder="First name" disabled={isSubmitting}
                  className={`pl-10 ${fieldClass}`} />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#aabbcc]" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lastName" className="text-[13px] font-semibold text-[#003C46] dark:text-[#ccddee] tracking-wide">
                Last Name <span className="text-[#0098AF]">*</span>
              </Label>
              <div className="relative">
                <Input id="lastName" value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required placeholder="Last name" disabled={isSubmitting}
                  className={`pl-10 ${fieldClass}`} />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#aabbcc]" />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-[13px] font-semibold text-[#003C46] dark:text-[#ccddee] tracking-wide">
                Email <span className="text-[#0098AF]">*</span>
              </Label>
              <div className="relative">
                <Input id="email" type="email" value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required placeholder="you@example.com" disabled={isSubmitting}
                  className={`pl-10 ${fieldClass}`} />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#aabbcc]" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-[13px] font-semibold text-[#003C46] dark:text-[#ccddee] tracking-wide">
                Phone <span className="text-[#0098AF]">*</span>
              </Label>
              <div className="relative">
                <Input id="phone" type="tel" value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required placeholder="+91 98765 43210" disabled={isSubmitting}
                  className={`pl-10 ${fieldClass}`} />
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#aabbcc]" />
              </div>
            </div>
          </div>

          {/* Location + Job Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="location" className="text-[13px] font-semibold text-[#003C46] dark:text-[#ccddee] tracking-wide">
                Preferred Location <span className="text-[#0098AF]">*</span>
              </Label>
              <div className="relative">
                <Select value={formData.location} onValueChange={(v) => handleInputChange("location", v)} disabled={isSubmitting}>
                  <SelectTrigger className={`pl-10 ${fieldClass} w-full`}>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-[#13131a] border-[#e8eaed] dark:border-[#1e1e2e]">
                    <SelectItem value="India">India</SelectItem>
                    <SelectItem value="USA">USA</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#aabbcc] z-10 pointer-events-none" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="jobTitle" className="text-[13px] font-semibold text-[#003C46] dark:text-[#ccddee] tracking-wide">
                Job Title <span className="text-[#0098AF]">*</span>
              </Label>
              <div className="relative">
                <Input id="jobTitle" value={formData.jobTitle}
                  onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                  required placeholder="Desired role" disabled={isSubmitting}
                  className={`pl-10 ${fieldClass}`} />
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#aabbcc]" />
              </div>
            </div>
          </div>

          {/* Resume upload */}
          <div className="space-y-1.5">
            <Label className="text-[13px] font-semibold text-[#003C46] dark:text-[#ccddee] tracking-wide">
              Resume / CV <span className="text-[#0098AF]">*</span>
            </Label>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <input id="resume" type="file" onChange={handleFileChange}
                accept=".pdf,.doc,.docx" className="hidden" disabled={isSubmitting} />
              <label htmlFor="resume" className="cursor-pointer">
                <span className="inline-flex items-center gap-2 h-11 px-4 text-[14px] font-semibold bg-[#f7f8fa] dark:bg-[#13131a] border border-[#e8eaed] dark:border-[#1e1e2e] text-[#003C46] dark:text-white rounded-lg hover:border-[#0098AF] hover:text-[#0098AF] transition-colors duration-200">
                  <Upload className="w-4 h-4 flex-shrink-0" />
                  <span className="max-w-[180px] truncate">
                    {formData.resume ? formData.resume.name : "Upload Resume"}
                  </span>
                </span>
              </label>
              <span className="text-[13px] text-[#aabbcc]">PDF, DOC or DOCX · max 5 MB</span>
            </div>
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3 pt-1">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleInputChange("consent", checked === true)}
              disabled={isSubmitting}
              className="mt-0.5 border-[#e8eaed] data-[state=checked]:bg-[#0098AF] data-[state=checked]:border-[#0098AF]"
            />
            <Label htmlFor="consent" className="text-[13px] text-[#778899] dark:text-[#6677aa] leading-relaxed cursor-pointer">
              I agree to the{" "}
              <a href="/privacy-policy" className="text-[#0098AF] hover:underline font-medium">
                Privacy Policy
              </a>{" "}
              and consent to my data being processed for recruitment purposes.
            </Label>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#e8eaed] dark:bg-[#1e1e2e]" />

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting || !formData.consent || !formData.resume}
            className="w-full h-12 text-[15px] font-semibold bg-[#0098AF] hover:bg-[#007B8F] text-white rounded-lg transition-colors duration-200 disabled:opacity-40"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting…
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Submit Application
                <Send className="w-4 h-4" />
              </span>
            )}
          </Button>

        </form>
      </motion.div>
    </section>
  );
};

export default ApplicationForm;