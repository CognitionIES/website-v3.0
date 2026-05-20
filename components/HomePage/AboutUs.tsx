"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ABOUT_CONSTANTS } from "@/constants/home/about";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "200+", label: "Projects delivered" },
  { value: "2",   label: "Global offices" },
];

export default function AboutUs() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Label + animated divider */}
        <div className="flex items-center gap-6 mb-16">
          <span className="eyebrow">About Cognition IES</span>
          <motion.div
            className="flex-1 h-px bg-[#e2e8f0] origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <motion.h2
          className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] mb-8 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Engineering that moves{" "}
          <em className="not-italic text-[#0098AF]">industries forward.</em>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: body + stats + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[15px] text-[#4a5568] leading-[1.8] mb-5">
              {ABOUT_CONSTANTS.DESCRIPTION_1}
            </p>
            <p className="text-[15px] text-[#4a5568] leading-[1.8] mb-10">
              {ABOUT_CONSTANTS.DESCRIPTION_2}
            </p>

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

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#003C46] hover:text-[#0098AF] transition-colors duration-200"
            >
              Our full story
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative bottom-12 left-0 rounded-2xl overflow-hidden">
              <Image
                src={ABOUT_CONSTANTS.IMAGE}
                alt="Cognition IES"
                width={640}
                height={520}
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/25 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
