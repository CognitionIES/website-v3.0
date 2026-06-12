"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { STAFF_AUGMENTATION_PROCESS } from "@/constants/staff-augmentation/constants";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#003C46] overflow-hidden"
    >
      {/* Signature grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Eyebrow + hairline */}
        <div className="flex items-center gap-6 mb-14">
          <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#99D5DF]">
            How It Works
          </span>
          <motion.div
            className="flex-1 h-px bg-white/15 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white max-w-2xl mb-14">
          From a few lines of brief to an engineer
          <span className="text-[#0098AF]"> inside your team</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {STAFF_AUGMENTATION_PROCESS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {i < STAFF_AUGMENTATION_PROCESS.length - 1 && (
                <span className="hidden lg:block absolute top-3.5 left-14 right-[-2rem] h-px bg-white/10" />
              )}
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-3xl font-bold text-[#0098AF] tabular-nums leading-none">
                  {s.step}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#0098AF]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="#share-requirement"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0098AF] text-white text-sm font-semibold hover:bg-white hover:text-[#003C46] transition-colors duration-200"
          >
            Start with step one
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
