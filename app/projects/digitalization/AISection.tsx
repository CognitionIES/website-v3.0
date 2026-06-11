"use client";

import { motion } from "framer-motion";
import { Tags, Spline, Gauge, ShieldCheck } from "lucide-react";
import PidTrace from "./PidTrace";

// Only what we actually run in delivery. No platform branding, no speculative
// capabilities, no invented metrics.
const capabilities = [
  {
    icon: Tags,
    title: "Equipment & instrument tags",
    desc: "Tags are read off each P&ID and captured as structured data, instead of being typed out by hand.",
  },
  {
    icon: Spline,
    title: "Line numbers",
    desc: "Line tags are extracted and parsed into the line list: size, service, and sequence.",
  },
  {
    icon: Gauge,
    title: "Drawing complexity",
    desc: "Each sheet is scored for density and legibility, which guides effort estimates and tells us where QA needs to look hardest.",
  },
];

export default function AISection() {
  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-28 bg-white overflow-hidden">
      {/* Subtle grid, matching the contact page */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#003C46 1px,transparent 1px),linear-gradient(90deg,#003C46 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header with hairline rule */}
        <div className="flex items-center gap-6 mb-14">
          <span className="eyebrow !mb-0">AI &amp; Automation</span>
          <motion.div
            className="flex-1 h-px bg-[#e2e8f0] origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: narrative */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] leading-tight">
              Automation does the first pass.
              <br />
              <span className="text-[#0098AF]">Engineers do the rest.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#5b5b5b] leading-relaxed">
              The slowest part of digitizing a plant is reading thousands of
              legacy drawings by hand. Our in-house automation does the
              repetitive first pass on each sheet, so our engineers spend
              their time validating data instead of transcribing it.
            </p>

            {/* Engineer-in-the-loop, as a quiet footnote rather than a banner */}
            <div className="mt-8 flex items-start gap-3 pt-6 border-t border-[#e2e8f0]">
              <ShieldCheck className="w-4 h-4 text-[#0098AF] mt-0.5 shrink-0" />
              <p className="text-sm text-[#718096] leading-relaxed">
                Every extracted tag, line number, and score is reviewed and
                signed off by an engineer before it reaches your deliverables.
              </p>
            </div>
          </div>

          {/* Right: the three capabilities as a numbered ledger */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#e2e8f0] border-y border-[#e2e8f0]">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="group grid grid-cols-[2.5rem_2.75rem_1fr] sm:grid-cols-[3rem_3rem_1fr] items-start gap-4 py-7"
                  >
                    <span className="font-mono text-xs text-[#0098AF]/60 tabular-nums pt-1.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-flex w-10 h-10 rounded-lg bg-[#0098af]/10 text-[#0098AF] items-center justify-center group-hover:bg-[#003C46] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-[18px] h-[18px]" />
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-[#003C46]">
                        {cap.title}
                      </h3>
                      <p className="mt-1 text-sm sm:text-[15px] text-[#5b5b5b] leading-relaxed max-w-xl">
                        {cap.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Self-drawing P&ID: show the extraction, don't just describe it */}
        <PidTrace />
      </div>
    </section>
  );
}
