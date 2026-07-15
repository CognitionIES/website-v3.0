"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ABOUT_CONSTANTS } from "@/constants/home/about";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
// Kept in sync with constants/aboutPage/constants.ts STATS — do not hardcode
// different numbers here. Previously this said "15+ Years" / "200+ Projects" /
// "2 Global offices" while the About page said "20+ Years" and left the project
// count as an unresolved placeholder. Same company, same numbers, everywhere.

const stats = [
  { value: "2005", label: "Established" },
  { value: "20+", label: "Years of excellence" },
  { value: "7+", label: "Industries served" },
];

export default function AboutUs() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Label + animated divider */}
        <div className="flex items-center gap-6 mb-10">
          <span className="eyebrow">About Cognition IES</span>
          <motion.div
            className="flex-1 h-px bg-[#e2e8f0] origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
<h2 className="font-display text-4xl md:text-5xl text-[#111827] leading-[1.05] tracking-[-0.03em] mb-8 text-balance">
              Engineering that moves{" "}
              <em className="not-italic text-[#0098AF]">industries forward</em>
            </h2>
        <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-16 items-start">
          {/* Left: heading + image, stacked */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 "
          >
            {/* <h2 className="font-display text-4xl md:text-5xl text-[#111827] leading-[1.05] tracking-[-0.03em] mb-8 text-balance">
              Engineering that moves{" "}
              <em className="not-italic text-[#0098AF]">industries forward</em>
            </h2> */}
            <div className="relative rounded-2xl overflow-hidden mb-2">
              <Image
                src={ABOUT_CONSTANTS.IMAGE}
                alt="Cognition IES engineering team at work"
                width={640}
                height={520}
                className="w-full h-[320px] md:h-[380px] object-cover  "
              />
              <div className=" absolute inset-2 bg-gradient-to-t from-[#003C46]/25 to-transparent " />
            </div>
             <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#003C46] hover:text-[#0098AF] transition-colors duration-200 mt-8 "
            >
              Our full story
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Right: body + stats + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="space-y-5 mb-8">
              <p className="text-[15px] text-[#4a5568] leading-[1.8]">
                {ABOUT_CONSTANTS.DESCRIPTION_1}
              </p>
              <p className="text-[15px] text-[#4a5568] leading-[1.8]">
                {ABOUT_CONSTANTS.DESCRIPTION_2}
              </p>
              <p className="text-[15px] text-[#4a5568] leading-[1.8]">
                {ABOUT_CONSTANTS.DESCRIPTION_3}
              </p>
            </div>

            <div className="grid grid-cols-3 border-t border-[#e2e8f0] pt-8 mb-10">
              {stats.map((s, i) => (
                <div key={i} className={i > 0 ? "border-l border-[#e2e8f0] pl-6" : ""}>
                  <p className="font-display text-3xl text-[#003C46] mb-1">
                    <AnimatedCounter value={s.value} />
                  </p>
                  <p className="text-[12px] text-[#718096] leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            {/* <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#003C46] hover:text-[#0098AF] transition-colors duration-200"
            >
              Our full story
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}