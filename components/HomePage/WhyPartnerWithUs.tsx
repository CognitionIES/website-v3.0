"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WHY_PARTNER_CONSTANTS } from "@/constants/home/whyPartner";

export default function WhyPartnerWithUs() {
  const { TITLE, SUBTITLE, ITEMS } = WHY_PARTNER_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-[#0f1117] py-20 md:py-28 overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0098AF]/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-6 mb-8">
              <span className="eyebrow text-[#0098AF]">Our Commitment</span>
              <motion.div
                className="flex-1 h-px bg-white/15 origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl md:text-5xl text-white leading-[1.05] tracking-[-0.03em] text-balance mb-5"
            >
              {TITLE}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-sans text-[15px] text-white/50 leading-[1.8]"
            >
              {SUBTITLE}
            </motion.p>
          </div>
        </div>

        {/* Editorial index list — deliberately not another equal-box card grid */}
        <div className="border-t border-white/10">
          {ITEMS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-[auto_1fr] sm:grid-cols-[80px_auto_1fr] items-center gap-x-5 sm:gap-x-8 py-6 sm:py-7 border-b border-white/10 hover:bg-white/[0.03] transition-colors duration-300 px-2 -mx-2"
            >
              <span className="hidden sm:block font-display text-lg text-white/20 tabular-nums group-hover:text-[#0098AF] transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#0098AF] group-hover:border-[#0098AF] transition-colors duration-300 flex-shrink-0">
                <Icon className="w-4.5 h-4.5 text-[#0098AF] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="col-span-2 sm:col-span-1 mt-3 sm:mt-0 sm:pl-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                <h3 className="font-display text-xl text-white sm:w-56 flex-shrink-0">{title}</h3>
                <p className="font-sans text-[14px] text-white/50 leading-[1.7]">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}