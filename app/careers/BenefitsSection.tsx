import React from "react";
import { CAREERS_CONSTANTS } from "@/constants/careersPage/constants";
import { motion } from "framer-motion";

const BenefitsSection = () => {
  const { ITEMS } = CAREERS_CONSTANTS.BENEFITS;

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#0a0a0f] relative overflow-hidden">

      {/* Faint grid texture matching OpenPositions */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#003C46 1px, transparent 1px), linear-gradient(90deg, #003C46 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Accent blob */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#0098AF]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
            Benefits &amp; Perks
          </p>
          <h2
            className="text-4xl md:text-[2.75rem] font-bold leading-tight tracking-tight text-[#003C46] dark:text-white mb-4"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Why work{" "}
            <em className="not-italic text-[#0098AF]">with us.</em>
          </h2>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-lg leading-relaxed">
            We believe in taking care of our people with meaningful benefits
            and a culture built on trust.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8eaed] dark:bg-[#1e1e2e] rounded-xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e]">
          {ITEMS.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="group bg-white dark:bg-[#0a0a0f] p-7 lg:p-8 hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors duration-200 relative"
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-5">
                <span className="text-[11px] font-bold tracking-[0.15em] text-[#0098AF]/60 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-semibold text-[#003C46] dark:text-white mb-2.5 leading-snug">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-[#778899] dark:text-[#6677aa] leading-relaxed">
                {benefit.description}
              </p>

              {/* Bottom accent — appears on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0098AF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;