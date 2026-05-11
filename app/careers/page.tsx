"use client";

import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Send, Upload, Briefcase, Phone, Mail, MapPin, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CAREERS_CONSTANTS } from "@/constants/careersPage/constants";
import { useCallback, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS = { SERVICE_ID: "service_4jm4x6o", TEMPLATE_ID: "template_x7agzcz", PUBLIC_KEY: "YHfV6LAgPBcm9VnHd" };
const INIT = { firstName:"", lastName:"", email:"", phone:"", location:"India", jobTitle:"", message:"", resume:null as File|null, resumeBase64:"", consent:false };

const inp = "h-12 border-[#e2e8f0] bg-[#fafaf8] focus-visible:ring-1 focus-visible:ring-[#0098AF] focus-visible:border-[#0098AF] text-[15px] rounded-xl font-sans placeholder:text-[#718096]/60";

function Lbl({ text, required }: { text: string; required?: boolean }) {
  return <label className="block font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-[#718096] mb-2">{text}{required && <span className="text-[#0098AF] ml-0.5">*</span>}</label>;
}

/* ── Benefits section ── */
const benefits = [
  { icon: "", title: "Work-Life Balance",       desc: "Flexible schedules that respect your personal time and commitments." },
  { icon: "", title: "Learning & Growth",        desc: "Continuous development through training, certifications, and mentorship." },
  { icon: "", title: "Global Exposure",          desc: "Work with international clients across diverse industries." },
  { icon: "", title: "Competitive Compensation", desc: "Industry-leading packages with performance-based incentives." },
  { icon: "", title: "Great Workplace",          desc: "A collaborative, inclusive culture where your voice matters." },
  { icon: "", title: "Health & Wellness",        desc: "Comprehensive health coverage for you and your family." },
];

const values = CAREERS_CONSTANTS.VALUES.ITEMS;

/* ── Application Form ── */
function ApplicationForm() {
  const [form, setForm] = useState(INIT);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");

  const set = useCallback((k: string, v: string | boolean | File | null) => setForm(p => ({ ...p, [k]: v })), []);

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { setErr("File must be under 5 MB."); return; }
    setErr("");
    const reader = new FileReader();
    reader.onload = ev => {
      const b64 = (ev.target?.result as string).split(",")[1];
      setForm(p => ({ ...p, resume: file, resumeBase64: b64 }));
    };
    reader.readAsDataURL(file);
  }, []);

  const submit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent || !form.resume) { setErr("Please upload your resume and accept the privacy policy."); return; }
    setBusy(true); setErr("");
    try {
      const res = await emailjs.send(EMAILJS.SERVICE_ID, EMAILJS.TEMPLATE_ID, {
        from_name: `${form.firstName} ${form.lastName}`, email: form.email, phone: form.phone,
        location: form.location, job_title: form.jobTitle, message: form.message,
        resume_name: form.resume.name, resume_data: form.resumeBase64, resume_type: form.resume.type,
      }, EMAILJS.PUBLIC_KEY);
      if (res.status === 200) { setDone(true); setForm(INIT); } else setErr("Something went wrong. Please try again.");
    } catch { setErr("Submission failed. Please try again."); }
    finally { setBusy(false); }
  }, [form]);

  if (done) return (
    <motion.div initial={{opacity:0,scale:0.96}} animate={{opacity:1,scale:1}}
      className="border border-[#e2e8f0] rounded-2xl p-16 text-center flex flex-col items-center gap-5">
      <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
        <CheckCircle2 className="w-7 h-7 text-green-600" />
      </div>
      <div>
        <h3 className="font-display text-3xl text-[#111827] mb-2">Application Submitted!</h3>
        <p className="font-sans text-[15px] text-[#718096] max-w-sm mx-auto leading-[1.7]">We review every application carefully and will be in touch soon.</p>
      </div>
      <button onClick={() => setDone(false)} className="font-sans text-[13px] text-[#0098AF] hover:text-[#003C46] transition-colors">Submit another application</button>
    </motion.div>
  );

  return (
    <form onSubmit={submit} className="border border-[#e2e8f0] rounded-2xl p-8 sm:p-10 space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <div><Lbl text="First Name" required />
          <div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]/50 pointer-events-none z-10" /><Input placeholder="Jane" value={form.firstName} onChange={e=>set("firstName",e.target.value)} required disabled={busy} className={`${inp} pl-11`} /></div>
        </div>
        <div><Lbl text="Last Name" required />
          <div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]/50 pointer-events-none z-10" /><Input placeholder="Doe" value={form.lastName} onChange={e=>set("lastName",e.target.value)} required disabled={busy} className={`${inp} pl-11`} /></div>
        </div>
        <div><Lbl text="Email" required />
          <div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]/50 pointer-events-none z-10" /><Input type="email" placeholder="jane@example.com" value={form.email} onChange={e=>set("email",e.target.value)} required disabled={busy} className={`${inp} pl-11`} /></div>
        </div>
        <div><Lbl text="Phone" required />
          <div className="relative"><Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]/50 pointer-events-none z-10" /><Input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e=>set("phone",e.target.value)} required disabled={busy} className={`${inp} pl-11`} /></div>
        </div>
        <div><Lbl text="Preferred Location" required />
          <div className="relative"><MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]/50 pointer-events-none z-10" />
            <Select value={form.location} onValueChange={v=>set("location",v)} disabled={busy}>
              <SelectTrigger className={`${inp} pl-11`}><SelectValue /></SelectTrigger>
              <SelectContent><SelectItem value="India">India</SelectItem><SelectItem value="USA">USA</SelectItem><SelectItem value="Remote">Remote</SelectItem></SelectContent>
            </Select>
          </div>
        </div>
        <div><Lbl text="Desired Role" required />
          <div className="relative"><Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]/50 pointer-events-none z-10" /><Input placeholder="e.g. Mechanical Engineer" value={form.jobTitle} onChange={e=>set("jobTitle",e.target.value)} required disabled={busy} className={`${inp} pl-11`} /></div>
        </div>
      </div>

      <div><Lbl text="Tell Us About Yourself" />
        <Textarea placeholder="Share your experience and why you'd like to join Cognition IES…" value={form.message} onChange={e=>set("message",e.target.value)} disabled={busy}
          className="min-h-[110px] border-[#e2e8f0] bg-[#fafaf8] focus-visible:ring-1 focus-visible:ring-[#0098AF] text-[15px] rounded-xl resize-none font-sans placeholder:text-[#718096]/60" />
      </div>

      <div><Lbl text="Resume / CV" required />
        <label htmlFor="resume" className={`flex items-center gap-3 h-12 px-4 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-200 ${form.resume ? "border-[#0098AF] bg-[#0098AF]/5" : "border-[#e2e8f0] hover:border-[#0098AF]/50 bg-[#fafaf8]"}`}>
          <Upload className={`w-4 h-4 shrink-0 ${form.resume ? "text-[#0098AF]" : "text-[#718096]"}`} />
          <span className={`font-sans text-[14px] truncate ${form.resume ? "text-[#003C46] font-medium" : "text-[#718096]"}`}>
            {form.resume ? form.resume.name : "Click to upload PDF, DOC, or DOCX (max 5 MB)"}
          </span>
          <input id="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleFile} className="hidden" disabled={busy} />
        </label>
      </div>

      <div className="flex items-start gap-3">
        <Checkbox id="consent" checked={form.consent} onCheckedChange={c=>set("consent",!!c)} disabled={busy}
          className="mt-0.5 border-[#e2e8f0] data-[state=checked]:bg-[#0098AF] data-[state=checked]:border-[#0098AF]" />
        <label htmlFor="consent" className="font-sans text-[13px] text-[#718096] leading-relaxed cursor-pointer">
          I agree to the <Link href="/privacy-policy" className="text-[#0098AF] hover:underline">Privacy Policy</Link> and consent to data processing for recruitment.
        </label>
      </div>

      <AnimatePresence>{err && <motion.p initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="font-sans text-[13px] text-red-500">{err}</motion.p>}</AnimatePresence>

      <button type="submit" disabled={busy||!form.consent||!form.resume}
        className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#003C46] hover:bg-[#0098AF] text-white font-sans text-[13px] font-semibold tracking-wide rounded-full transition-colors duration-300 disabled:opacity-50">
        {busy ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting…</> : <><Send className="w-4 h-4" />Submit Application</>}
      </button>
    </form>
  );
}

/* ── Page ── */
export default function CareersPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { IMAGE } = CAREERS_CONSTANTS.HERO;
  const benefitsRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.05 });
  const formInView = useInView(formRef, { once: true, amount: 0.05 });

  return (
    <div className="bg-white">
      <MegaMenu />
      <PageHero image={IMAGE} title="Build Something Remarkable" subtitle="Careers" breadcrumbs={[{ label: "Careers", href: "/careers" }]} />

      {/* ── Benefits ── */}
      <section ref={benefitsRef} className="bg-white py-28 md:py-36 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage:"linear-gradient(#003C46 1px,transparent 1px),linear-gradient(90deg,#003C46 1px,transparent 1px)", backgroundSize:"64px 64px" }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center gap-6 mb-20">
            <span className="eyebrow">Why Join Us</span>
            <div className="flex-1 h-px bg-[#e2e8f0]" />
          </div>
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div initial={{opacity:0,y:24}} animate={benefitsInView?{opacity:1,y:0}:{}} transition={{duration:0.65}} className="lg:col-span-4">
              <h2 className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] mb-6 text-balance">
                Why work <em className="not-italic text-[#0098AF]">with us.</em>
              </h2>
              <p className="font-sans text-[16px] text-[#718096] leading-[1.8] mb-8">We believe great work starts with great people. Here&apos;s what we offer.</p>
              <Link href="#apply">
                <button className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#003C46] hover:bg-[#0098AF] text-white font-sans text-[13px] font-semibold tracking-wide rounded-full transition-colors duration-300">
                  Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
            </motion.div>
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-px bg-[#e2e8f0] border border-[#e2e8f0] rounded-2xl overflow-hidden">
                {benefits.map((b, i) => (
                  <motion.div key={i} initial={{opacity:0}} animate={benefitsInView?{opacity:1}:{}} transition={{duration:0.4,delay:i*0.07}}
                    className="group bg-white hover:bg-[#fafaf8] transition-colors duration-200 p-8 relative overflow-hidden">
                    <h3 className="font-display text-xl text-[#111827] mb-2 group-hover:text-[#0098AF] transition-colors duration-200">{b.title}</h3>
                    <p className="font-sans text-[14px] text-[#718096] leading-[1.7]">{b.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Application section ── */}
      <section id="apply" ref={formRef} className="bg-[#fafaf8] py-28 md:py-36 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage:"linear-gradient(#003C46 1px,transparent 1px),linear-gradient(90deg,#003C46 1px,transparent 1px)", backgroundSize:"64px 64px" }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center gap-6 mb-20">
            <span className="eyebrow">Apply Now</span>
            <div className="flex-1 h-px bg-[#e2e8f0]" />
          </div>
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Values sidebar */}
            <motion.div initial={{opacity:0,y:24}} animate={formInView?{opacity:1,y:0}:{}} transition={{duration:0.65}} className="lg:col-span-4">
              <h2 className="font-display text-4xl text-[#111827] leading-[1.05] tracking-[-0.02em] mb-8">Our Values</h2>
              <div className="space-y-3">
                {values.map((v, i) => (
                  <motion.div key={i} initial={{opacity:0,x:-12}} animate={formInView?{opacity:1,x:0}:{}} transition={{duration:0.4,delay:i*0.07}}
                    className="group flex items-start gap-4 p-5 border border-[#e2e8f0] rounded-xl bg-white hover:border-[#0098AF]/30 transition-colors duration-200 relative overflow-hidden">
                    <span className="font-display text-2xl text-[#e2e8f0] group-hover:text-[#0098AF] transition-colors duration-200 shrink-0 tabular-nums">{String(i+1).padStart(2,"0")}</span>
                    <div>
                      <h3 className="font-display text-[16px] text-[#111827] mb-1 group-hover:text-[#0098AF] transition-colors duration-200">{v.title}</h3>
                      <p className="font-sans text-[13px] text-[#718096] leading-[1.6]">{v.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Form */}
            <motion.div initial={{opacity:0,y:24}} animate={formInView?{opacity:1,y:0}:{}} transition={{duration:0.65,delay:0.1}} className="lg:col-span-8">
              <h2 className="font-display text-4xl text-[#111827] leading-[1.05] tracking-[-0.02em] mb-8">Submit Your Application</h2>
              <ApplicationForm />
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Don't see the right role?"
        accentWord="right role?"
        description="We're always looking for exceptional engineers. Send us your resume and we'll keep you in mind."
        buttons={[
          { label: "Contact Us",    href: "/contact",  variant: "primary" },
          { label: "View Services", href: "/services", variant: "outline" },
        ]}
      />
      <Footer />
    </div>
  );
}
