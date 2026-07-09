"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WHY_PARTNER_CONSTANTS } from "@/constants/home/whyPartner";

export default function WhyPartnerWithUs() {
  const { TITLE, SUBTITLE, ITEMS } = WHY_PARTNER_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="bg-[#fafaf8] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-6 mb-10">
          <span className="eyebrow">Our Commitment</span>
          <motion.div
            className="flex-1 h-px bg-[#e2e8f0] origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] mb-5 max-w-3xl text-balance"
        >
          {TITLE}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-sans text-[16px] text-[#718096] leading-[1.8] max-w-xl mb-14"
        >
          {SUBTITLE}
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
          {ITEMS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white border border-[#e2e8f0] rounded-2xl p-7 hover:border-[#0098AF]/30 transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-full bg-[#0098AF]/10 flex items-center justify-center mb-6 group-hover:bg-[#0098AF] transition-colors duration-200">
                <Icon className="w-5 h-5 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="font-display text-lg text-[#111827] mb-2">{title}</h3>
              <p className="font-sans text-[13px] text-[#718096] leading-[1.7]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}