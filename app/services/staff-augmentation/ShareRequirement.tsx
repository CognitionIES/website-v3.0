"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "aba4ac86-a28e-496a-86bb-e3c981356299";

const DISCIPLINES = [
  "Plant / Process / Piping",
  "Mechanical & Product Design",
  "Electrical & Instrumentation",
  "Civil & Structural",
  "CAE / Simulation",
  "Plant Digitization / As-Built",
  "Other / Not sure",
];

const MODELS = [
  "Time & Material",
  "Dedicated Team",
  "Project-Based",
  "Fixed Price",
  "Not sure yet",
];

const INITIAL = {
  name: "",
  email: "",
  company: "",
  discipline: DISCIPLINES[0],
  model: MODELS[4],
  requirement: "",
};

const inputCls =
  "w-full rounded-lg border border-[#e2e8f0] bg-white px-4 py-3 text-[15px] text-[#003C46] placeholder:text-[#a0aec0] outline-none focus:border-[#0098AF] focus:ring-2 focus:ring-[#0098AF]/15 transition-all duration-200";

function FieldLabel({ text, required }: { text: string; required?: boolean }) {
  return (
    <label className="block font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-[#718096] mb-2">
      {text}
      {required && <span className="text-[#0098AF] ml-0.5">*</span>}
    </label>
  );
}

const expectations = [
  {
    title: "We read it the same day",
    desc: "Your brief goes straight to the delivery team, not into a CRM queue.",
  },
  {
    title: "You get profiles, not promises",
    desc: "A short, matched shortlist with relevant experience, shared only when we genuinely have a fit.",
  },
  {
    title: "No fit, we say so",
    desc: "If we can't staff it well, we'll tell you directly instead of stretching.",
  },
];

export default function ShareRequirement() {
  const [form, setForm] = useState(INITIAL);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");

  const set = useCallback(
    (k: keyof typeof INITIAL, v: string) =>
      setForm((p) => ({ ...p, [k]: v })),
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
            body: JSON.stringify({
              access_key: WEB3FORMS_KEY,
              subject: `Staff Augmentation Requirement - ${form.company || form.name}`,
              from_name: "Cognition IES Website",
              ...form,
            }),
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
      id="share-requirement"
      className="relative w-full py-20 sm:py-24 lg:py-28 bg-white overflow-hidden scroll-mt-20"
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
        {/* Eyebrow + hairline */}
        <div className="flex items-center gap-6 mb-14">
          <span className="eyebrow !mb-0">Share Your Requirement</span>
          <motion.div
            className="flex-1 h-px bg-[#e2e8f0] origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: narrative + expectations */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] leading-tight">
              Tell us who you need.
              <br />
              <span className="text-[#0098AF]">We&apos;ll find them.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#5b5b5b] leading-relaxed">
              A role, the software involved, and a rough duration is enough to
              start. Here&apos;s what happens after you press send:
            </p>

            <div className="mt-10 divide-y divide-[#e2e8f0] border-y border-[#e2e8f0]">
              {expectations.map((x, i) => (
                <div
                  key={x.title}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 py-5"
                >
                  <span className="font-mono text-xs text-[#0098AF]/60 tabular-nums pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-[#003C46]">
                      {x.title}
                    </p>
                    <p className="mt-0.5 text-sm text-[#5b5b5b] leading-relaxed">
                      {x.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: the form */}
          <div className="lg:col-span-7">
            {done ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-full min-h-[420px] rounded-2xl border border-[#e2e8f0] bg-[#fafaf8] flex flex-col items-center justify-center text-center px-8 py-16"
              >
                <span className="inline-flex w-14 h-14 rounded-full bg-[#0098af]/10 text-[#0098AF] items-center justify-center mb-6">
                  <CheckCircle2 className="w-7 h-7" />
                </span>
                <h3 className="text-2xl font-bold text-[#003C46]">
                  Requirement received.
                </h3>
                <p className="mt-3 text-[15px] text-[#5b5b5b] leading-relaxed max-w-sm">
                  Thank you. It&apos;s with our delivery team, and we&apos;ll reply
                  from a real inbox, with matched profiles or honest questions.
                </p>
                <button
                  onClick={() => setDone(false)}
                  className="mt-8 text-sm font-medium text-[#0098AF] hover:text-[#003C46] transition-colors underline underline-offset-4"
                >
                  Share another requirement
                </button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={submit}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-[#e2e8f0] bg-white shadow-sm p-6 sm:p-8 lg:p-10"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <FieldLabel text="Your name" required />
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="Full name"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <FieldLabel text="Work email" required />
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="you@company.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <FieldLabel text="Company" />
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => set("company", e.target.value)}
                    placeholder="Company name"
                    className={inputCls}
                  />
                </div>

                <div className="mt-5 grid sm:grid-cols-2 gap-5">
                  <div>
                    <FieldLabel text="Discipline" />
                    <div className="relative">
                      <select
                        value={form.discipline}
                        onChange={(e) => set("discipline", e.target.value)}
                        className={`${inputCls} appearance-none pr-10`}
                      >
                        {DISCIPLINES.map((d) => (
                          <option key={d}>{d}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]" />
                    </div>
                  </div>
                  <div>
                    <FieldLabel text="Engagement model" />
                    <div className="relative">
                      <select
                        value={form.model}
                        onChange={(e) => set("model", e.target.value)}
                        className={`${inputCls} appearance-none pr-10`}
                      >
                        {MODELS.map((m) => (
                          <option key={m}>{m}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]" />
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <FieldLabel text="The requirement" required />
                  <textarea
                    required
                    rows={5}
                    value={form.requirement}
                    onChange={(e) => set("requirement", e.target.value)}
                    placeholder="e.g. Two piping designers with E3D experience for a brownfield revamp, roughly 6 months, offshore preferred…"
                    className={`${inputCls} resize-y min-h-[120px]`}
                  />
                </div>

                {err && (
                  <p className="mt-4 text-sm text-red-600" role="alert">
                    {err}
                  </p>
                )}

                <div className="mt-7 flex items-center justify-between gap-4 flex-wrap">
                  <button
                    type="submit"
                    disabled={busy}
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#003C46] text-white text-sm font-semibold hover:bg-[#0098AF] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {busy ? "Sending…" : "Send requirement"}
                    {!busy && (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    )}
                  </button>
                  <p className="text-xs text-[#a0aec0]">
                    No newsletters. Your brief goes to the delivery team only.
                  </p>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
