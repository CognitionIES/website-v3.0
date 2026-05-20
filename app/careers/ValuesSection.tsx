/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CAREERS_CONSTANTS } from "@/constants/careersPage/constants";

export default function ValuesSection() {
  const { ITEMS } = CAREERS_CONSTANTS.VALUES;
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -15% 0px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-10 sm:py-14 lg:py-16">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8"
      >
        <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
          What Drives Us
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#003C46] dark:text-white"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          Our <em className="not-italic text-[#0098AF]">values.</em>
        </h2>
      </motion.div>

      {/* Values list */}
      <div className="space-y-0 divide-y divide-[#e8eaed] dark:divide-[#1e1e2e] border-y border-[#e8eaed] dark:border-[#1e1e2e]">
        {ITEMS.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -12 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
            transition={{
              duration: 0.45,
              delay: 0.1 + index * 0.08,
              ease: "easeOut",
            }}
            className="group py-5 hover:bg-[#0098AF]/[0.03] dark:hover:bg-[#0098AF]/[0.05] px-2 rounded-lg transition-colors duration-200 cursor-default"
          >
            {/* Number + title row */}
            <div className="flex items-start gap-3 mb-1.5">
              <span className="text-[11px] font-bold tracking-[0.12em] text-[#0098AF]/50 tabular-nums mt-0.5 w-5 shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[15px] font-semibold text-[#003C46] dark:text-white group-hover:text-[#0098AF] transition-colors duration-200 leading-snug">
                {value.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-[13px] text-[#778899] dark:text-[#6677aa] leading-relaxed pl-8">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}