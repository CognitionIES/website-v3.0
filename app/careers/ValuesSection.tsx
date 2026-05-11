"use client";

import { motion } from "framer-motion";
import { CAREERS_CONSTANTS } from "@/constants/careersPage/constants";

const VALUE_ICONS = ["🤝", "🙋", "🎯", "🌱"];

export default function ValuesSection() {
  const { ITEMS } = CAREERS_CONSTANTS.VALUES;

  return (
    <div id="careers-form" className="space-y-3">
      <div className="mb-8">
        <p className="section-label">Who We Are</p>
        <h2 className="font-display text-2xl font-bold text-[#003C46] mb-2">Our Values</h2>
        <p className="text-[13px] text-[#556677] font-sans leading-relaxed">The principles that guide every decision we make.</p>
      </div>

      <div className="space-y-2">
        {ITEMS.map((value, index) => (
          <motion.div key={index} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }} className="group flex items-start gap-4 border border-[#e8eaed] rounded-xl p-5 hover:border-[#0098AF]/30 bg-white transition-colors duration-200 relative overflow-hidden">
            <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#0098AF]/8 flex items-center justify-center text-base">{VALUE_ICONS[index] ?? "✦"}</div>
            <div>
              <h3 className="font-display text-[14px] font-bold text-[#003C46] group-hover:text-[#0098AF] transition-colors duration-200">{value.title}</h3>
              <p className="text-[12px] text-[#778899] mt-0.5 font-sans leading-relaxed">{value.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
