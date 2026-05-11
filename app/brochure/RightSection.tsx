"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { CheckCircle2 } from "lucide-react";
import { BROCHURE_CONSTANTS } from "@/constants/brochurePage/constants";

const PRODUCT_PDF = "/pdf/COGNITION_Brochure_Product.pdf";
const PLANT_PDF = "/pdf/COGNITION_Brochure_Plant.pdf";
const WEB3FORMS_KEY = "aba4ac86-a28e-496a-86bb-e3c981356299";
const INITIAL_FORM = { firstName: "", lastName: "", email: "", companyName: "", jobTitle: "", industry: "", country: "", marketingConsent: false };

const inputClass = "h-10 border-[#e8eaed] bg-[#f9fafb] focus-visible:ring-1 focus-visible:ring-[#0098AF] focus-visible:border-[#0098AF] text-[14px] rounded-lg placeholder:text-[#9ca3af] font-sans";
const selectClass = "h-10 border-[#e8eaed] bg-[#f9fafb] focus:ring-1 focus:ring-[#0098AF] text-[14px] rounded-lg font-sans text-[#556677]";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-[12px] font-bold tracking-[0.08em] uppercase text-[#556677] font-sans">
        {label}{required && <span className="text-[#0098AF] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function RightSection({ selectedBrochure }: { selectedBrochure: "product" | "plant" }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const { TITLE, PRIVACY_LINK, CONSENT_TEXT, COUNTRIES } = BROCHURE_CONSTANTS.RIGHT_CONTENT;
  const industryOptions = BROCHURE_CONSTANTS.INDUSTRIES.flatMap(c => c.subcategories.map(s => ({ value: s, label: s })));

  const handleChange = useCallback((field: string, value: string | boolean) => {
    setFormData(p => ({ ...p, [field]: value }));
  }, []);

  const isValid = formData.firstName && formData.lastName && formData.email &&
    formData.companyName && formData.jobTitle && formData.industry &&
    formData.country && formData.marketingConsent;

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting || !isValid) return;
    setIsSubmitting(true); setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: "New Brochure Download Request", ...formData, brochureType: selectedBrochure }),
      });
      const result = await res.json();
      if (result.success) {
        window.open(selectedBrochure === "product" ? PRODUCT_PDF : PLANT_PDF, "_blank");
        setSubmitted(true); setFormData(INITIAL_FORM);
      } else setError("Submission failed. Please try again.");
    } catch { setError("An error occurred. Please try again."); }
    finally { setIsSubmitting(false); }
  }, [formData, isSubmitting, isValid, selectedBrochure]);

  return (
    <div className="w-full lg:w-1/2">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div key="success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="border border-[#e8eaed] rounded-2xl p-12 text-center flex flex-col items-center gap-4 bg-white">
            <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-[#003C46] mb-1">Download Started!</h3>
              <p className="text-[14px] text-[#556677] max-w-xs mx-auto leading-relaxed font-sans">Your brochure should be open in a new tab.</p>
            </div>
            <button onClick={() => setSubmitted(false)} className="flex items-center gap-2 text-[13px] text-[#0098AF] hover:underline font-sans">
              <FiDownload className="w-4 h-4" /> Download another
            </button>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="border border-[#e8eaed] rounded-2xl overflow-hidden bg-white">
            {/* Header */}
            <div className="bg-[#003C46] px-7 py-5">
              <p className="section-label text-[#0098AF] mb-1">Download Brochure</p>
              <h3 className="font-display text-xl font-bold text-white">{TITLE}</h3>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Field label="First Name" required><Input placeholder="Jane" value={formData.firstName} onChange={e => handleChange("firstName", e.target.value)} required disabled={isSubmitting} className={inputClass} /></Field>
                <Field label="Last Name" required><Input placeholder="Doe" value={formData.lastName} onChange={e => handleChange("lastName", e.target.value)} required disabled={isSubmitting} className={inputClass} /></Field>
                <Field label="Business Email" required><Input type="email" placeholder="jane@company.com" value={formData.email} onChange={e => handleChange("email", e.target.value)} required disabled={isSubmitting} className={inputClass} /></Field>
                <Field label="Company" required><Input placeholder="Acme Ltd." value={formData.companyName} onChange={e => handleChange("companyName", e.target.value)} required disabled={isSubmitting} className={inputClass} /></Field>
              </div>
              <Field label="Job Title" required><Input placeholder="Senior Engineer" value={formData.jobTitle} onChange={e => handleChange("jobTitle", e.target.value)} required disabled={isSubmitting} className={inputClass} /></Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Industry" required>
                  <Select value={formData.industry} onValueChange={v => handleChange("industry", v)} disabled={isSubmitting}>
                    <SelectTrigger className={selectClass}><SelectValue placeholder="Select…" /></SelectTrigger>
                    <SelectContent>{industryOptions.map(o => <SelectItem key={o.value} value={o.value} className="text-[14px] font-sans">{o.label}</SelectItem>)}</SelectContent>
                  </Select>
                </Field>
                <Field label="Country" required>
                  <Select value={formData.country} onValueChange={v => handleChange("country", v)} disabled={isSubmitting}>
                    <SelectTrigger className={selectClass}><SelectValue placeholder="Select…" /></SelectTrigger>
                    <SelectContent>{COUNTRIES.map(c => <SelectItem key={c} value={c} className="text-[14px] font-sans">{c}</SelectItem>)}</SelectContent>
                  </Select>
                </Field>
              </div>

              <div className="flex items-start gap-2.5">
                <Checkbox id="mktConsent" checked={formData.marketingConsent} onCheckedChange={c => handleChange("marketingConsent", !!c)} disabled={isSubmitting} className="mt-0.5 border-[#e8eaed] data-[state=checked]:bg-[#0098AF] data-[state=checked]:border-[#0098AF]" />
                <label htmlFor="mktConsent" className="text-[12px] text-[#9ca3af] leading-relaxed cursor-pointer font-sans">
                  {CONSENT_TEXT} By clicking Submit, you agree to our <Link href={PRIVACY_LINK} className="text-[#0098AF] hover:underline">Privacy Policy</Link>.
                </label>
              </div>

              <AnimatePresence>
                {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[12px] text-red-500 font-sans">{error}</motion.p>}
              </AnimatePresence>

              <button type="submit" disabled={isSubmitting || !isValid} className="group w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#003C46] hover:bg-[#0098AF] text-white text-[13px] font-bold tracking-[0.1em] uppercase rounded-xl transition-colors duration-200 disabled:opacity-50 font-sans">
                {isSubmitting ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting…</>
                ) : (
                  <><FiDownload className="w-4 h-4" />Download Brochure</>
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
