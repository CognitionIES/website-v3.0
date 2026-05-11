"use client";

import { motion } from "framer-motion";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";
import { animation } from "@/lib/design-system";

export default function StatsSection() {
  const { STATS } = ABOUT_CONSTANTS;

  return (
    <section className="py-20 sm:py-24 bg-[#003C46] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,152,175,0.25)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,152,175,0.15)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 rounded-full bg-white/10 text-[#99D5DF] text-[11px] font-semibold uppercase tracking-[0.1em]">
            <span className="w-1 h-1 rounded-full bg-[#99D5DF] inline-block" />
            By the Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-[-0.03em]">Our Impact</h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={animation.staggerChildren}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {STATS.map((item, index) => (
            <motion.div
              key={index}
              variants={animation.fadeUp}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/8 transition-colors duration-200"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2 text-white tracking-[-0.03em]">
                {item.stat}
              </div>
              <div className="text-xs sm:text-sm text-white/60 font-medium uppercase tracking-wider leading-snug">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
