"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
import { Send, CheckCircle2, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { CONTACT_CONSTANTS } from "@/constants/contactPage/constants";

const INTEREST_OPTIONS = [
  "Product Engineering",
  "Plant Engineering",
  "ServiceCPQ",
  "Others",
];
const INITIAL = {
  name: "",
  email: "",
  company: "",
  phone: "",
  subject: "",
  interestedIn: "",
  message: "",
  consent: false,
};
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "aba4ac86-a28e-496a-86bb-e3c981356299";

const inp =
  "h-12 border-[#e2e8f0] bg-[#fafaf8] focus-visible:ring-1 focus-visible:ring-[#0098AF] focus-visible:border-[#0098AF] text-[15px] rounded-xl font-sans placeholder:text-[#718096]/60";

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <label className="block font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-[#718096] mb-2">
      {text}
      {required && <span className="text-[#0098AF] ml-0.5">*</span>}
    </label>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState(INITIAL);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const { TITLE, DESCRIPTION, EMAIL } = CONTACT_CONSTANTS.CONTACT;

  const set = useCallback(
    (k: string, v: string | boolean) => setForm((p) => ({ ...p, [k]: v })),
    [],
  );

  const submit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (busy) return;
      setBusy(true);
      setErr("");
      try {
        const r = await (
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...form }),
          })
        ).json();
        if (r.success) {
          setDone(true);
          setForm(INITIAL);
        } else setErr("Something went wrong. Please try again.");
      } catch {
        setErr("Network error. Please try again.");
      } finally {
        setBusy(false);
      }
    },
    [form, busy],
  );

  return (
    <section
      ref={ref}
      className="bg-white py-28 md:py-36 overflow-hidden relative"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#003C46 1px,transparent 1px),linear-gradient(90deg,#003C46 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-6 mb-20">
          <span className="eyebrow">Reach Out</span>
          <motion.div
            className="flex-1 h-px bg-[#e2e8f0] origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <h2 className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] mb-8 text-balance">
              {TITLE}
            </h2>
            <p className="font-sans text-[16px] text-[#4a5568] leading-[1.8] mb-10">
              {DESCRIPTION}
            </p>

            <div className="space-y-4">
              <div className="group flex items-start gap-4 p-5 border border-[#e2e8f0] rounded-xl hover:border-[#0098AF]/30 transition-colors duration-200 relative overflow-hidden">
                <div className="w-10 h-10 rounded-full bg-[#0098AF]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0098AF] transition-colors duration-200">
                  <Mail className="w-4 h-4 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-[#718096] mb-1">
                    {EMAIL.TITLE}
                  </p>
                  <a
                    href={`mailto:${EMAIL.ADDRESS}`}
                    className="font-sans text-[15px] text-[#0098AF] hover:text-[#003C46] transition-colors"
                  >
                    {EMAIL.ADDRESS}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 border border-[#e2e8f0] rounded-xl">
                <div className="w-10 h-10 rounded-full bg-[#0098AF]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#0098AF]" />
                </div>
                <div>
                  <p className="font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-[#718096] mb-1">
                    Offices
                  </p>
                  <p className="font-sans text-[15px] text-[#4a5568]">
                    USA (HQ) &amp; India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-8"
          >
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="border border-[#e2e8f0] rounded-2xl p-16 text-center flex flex-col items-center gap-5"
                >
                  <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl text-[#111827] mb-2">
                      Message Sent!
                    </h3>
                    <p className="font-sans text-[15px] text-[#718096] max-w-sm mx-auto leading-[1.7]">
                      Thank you for reaching out. We&apos;ll be in touch
                      shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setDone(false)}
                    className="font-sans text-[13px] text-[#0098AF] hover:text-[#003C46] transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={submit}
                  className="border border-[#e2e8f0] rounded-2xl p-8 sm:p-10 space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label text="Full Name" required />
                      <Input
                        placeholder="Jane Doe"
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        required
                        disabled={busy}
                        className={inp}
                      />
                    </div>
                    <div>
                      <Label text="Email" required />
                      <Input
                        type="email"
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        required
                        disabled={busy}
                        className={inp}
                      />
                    </div>
                    <div>
                      <Label text="Company" />
                      <Input
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={(e) => set("company", e.target.value)}
                        disabled={busy}
                        className={inp}
                      />
                    </div>
                    <div>
                      <Label text="Phone" />
                      <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        disabled={busy}
                        className={inp}
                      />
                    </div>
                    <div>
                      <Label text="Subject" required />
                      <Input
                        placeholder="How can we help?"
                        value={form.subject}
                        onChange={(e) => set("subject", e.target.value)}
                        required
                        disabled={busy}
                        className={inp}
                      />
                    </div>
                    <div>
                      <Label text="Service" />
                      <Select
                        value={form.interestedIn}
                        onValueChange={(v) => set("interestedIn", v)}
                        disabled={busy}
                      >
                        <SelectTrigger className="h-12 border-[#e2e8f0] bg-[#fafaf8] text-[15px] rounded-xl font-sans">
                          <SelectValue placeholder="Select…" />
                        </SelectTrigger>
                        <SelectContent>
                          {INTEREST_OPTIONS.map((o) => (
                            <SelectItem
                              key={o}
                              value={o}
                              className="font-sans text-[14px]"
                            >
                              {o}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label text="Message" required />
                    <Textarea
                      placeholder="Tell us about your project…"
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      required
                      disabled={busy}
                      className="min-h-[120px] border-[#e2e8f0] bg-[#fafaf8] focus-visible:ring-1 focus-visible:ring-[#0098AF] text-[15px] rounded-xl resize-none font-sans placeholder:text-[#718096]/60"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={form.consent}
                      onCheckedChange={(c) => set("consent", !!c)}
                      disabled={busy}
                      className="mt-0.5 border-[#e2e8f0] data-[state=checked]:bg-[#0098AF] data-[state=checked]:border-[#0098AF]"
                    />
                    <label
                      htmlFor="consent"
                      className="font-sans text-[13px] text-[#718096] leading-relaxed cursor-pointer"
                    >
                      I agree to receive communication per the{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-[#0098AF] hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>
                  <AnimatePresence>
                    {err && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="font-sans text-[13px] text-red-500"
                      >
                        {err}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <div className="flex items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={busy || !form.consent}
                      className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#003C46] hover:bg-[#0098AF] text-white font-sans text-[13px] font-semibold tracking-wide rounded-full transition-colors duration-300 disabled:opacity-50"
                    >
                      {busy ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                    <p className="font-sans text-[12px] text-[#718096]">
                      Reply within 1–2 business days
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
