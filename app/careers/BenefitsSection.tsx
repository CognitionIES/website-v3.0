"use client";

import { motion } from "framer-motion";
import { CAREERS_CONSTANTS } from "@/constants/careersPage/constants";


export default function BenefitsSection() {
  const { ITEMS, TITLE } = CAREERS_CONSTANTS.BENEFITS;

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: `linear-gradient(#003C46 1px, transparent 1px), linear-gradient(90deg, #003C46 1px, transparent 1px)`, backgroundSize: "64px 64px" }} />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#0098AF]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="mb-14">
          <p className="section-label">Benefits &amp; Perks</p>
          <h2 className="font-display text-4xl md:text-[2.75rem] font-bold leading-tight text-[#003C46] mb-4">
            Why work <em className="not-italic text-[#0098AF]">with us.</em>
          </h2>
          <p className="text-[15px] text-[#556677] max-w-lg leading-relaxed font-sans">
            We believe in taking care of our people with meaningful benefits and a culture built on trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8eaed] rounded-xl overflow-hidden border border-[#e8eaed]">
          {ITEMS.map((benefit, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45, delay: index * 0.07 }} className="group bg-white p-7 lg:p-8 hover:bg-[#f7fbfc] transition-colors duration-200 relative overflow-hidden">
              <h3 className="font-display text-[17px] font-bold text-[#003C46] mb-2 group-hover:text-[#0098AF] transition-colors duration-200">{benefit.title}</h3>
              <p className="text-[13px] text-[#778899] leading-relaxed font-sans">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
