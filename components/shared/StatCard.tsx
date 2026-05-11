"use client";

import { motion } from "framer-motion";
import { animation } from "@/lib/design-system";

interface StatCardProps {
  stat: string;
  label: string;
  variant?: "dark" | "light";
}

export default function StatCard({ stat, label, variant = "dark" }: StatCardProps) {
  if (variant === "light") {
    return (
      <motion.div
        variants={animation.fadeUp}
        className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#0098AF]/10 flex items-center justify-center">
          <span className="text-[#0098AF] font-extrabold text-lg leading-none">{stat}</span>
        </div>
        <p className="text-sm font-semibold text-[#003C46] leading-snug">{label}</p>
      </motion.div>
    );
  }

  // Dark variant — used in StatsSection (dark bg)
  return (
    <motion.div
      variants={animation.fadeUp}
      className="p-5 sm:p-6 bg-white/8 rounded-xl border border-[#0098AF]/40 shadow-lg backdrop-blur-sm"
    >
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-1 text-white tracking-tight">
        {stat}
      </h3>
      <p className="text-sm sm:text-base font-light text-white/75">{label}</p>
    </motion.div>
  );
}
