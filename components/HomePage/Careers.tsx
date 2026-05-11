"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CAREERS_CONSTANTS } from "@/constants/home/careers";

interface CareersData { IMAGE: string; SUBTITLE: string; DESCRIPTION: string; }

const perks = ["Competitive compensation", "Global exposure", "Continuous learning"];

export default function Careers() {
  const { IMAGE, SUBTITLE, DESCRIPTION } = CAREERS_CONSTANTS as unknown as CareersData;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-white py-28 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Top label row */}
        <div className="flex items-center gap-6 mb-20">
          <span className="eyebrow">Join Our Team</span>
          <div className="flex-1 h-px bg-[#e2e8f0]" />
          <span className="font-sans text-[12px] text-[#718096] tracking-widest uppercase">We&apos;re hiring</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: image with floating badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden group aspect-[4/3]">
              <Image
                src={IMAGE}
                alt="Join Cognition IES"
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/50 to-transparent" />
            </div>

            {/* Floating perk pills */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl p-5 max-w-[220px] border border-[#e2e8f0]">
              <p className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-[#0098AF] mb-3">Why join us</p>
              <ul className="space-y-2">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-2 font-sans text-[13px] text-[#4a5568]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0098AF] shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-justify lg:text-left"
          >
            <h2 className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] mb-8 text-balance">
              Shape the future of<br />
              <em className="not-italic text-[#0098AF]">engineering</em>
            </h2>

            <p className="font-sans text-[15px] font-semibold text-[#003C46] mb-4 leading-snug text-justify">{SUBTITLE}</p>
            <p className="font-sans text-[16px] text-[#4a5568] leading-[1.8] mb-10 text-justify">{DESCRIPTION}</p>

            <Link href="/careers">
              <button className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#003C46] hover:bg-[#0098AF] text-white text-[13px] font-semibold tracking-wide rounded-full transition-all duration-300">
                View Open Roles
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
