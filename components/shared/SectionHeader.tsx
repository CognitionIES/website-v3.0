"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  accentWord?: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}

export default function SectionHeader({ eyebrow, title, accentWord, description, align = "left", invert = false, className }: SectionHeaderProps) {
  const isCenter = align === "center";

  const renderTitle = () => {
    if (!accentWord) return title;
    const idx = title.lastIndexOf(accentWord);
    if (idx === -1) return title;
    return <>{title.slice(0, idx)}<em className="not-italic text-[#0098AF]">{accentWord}</em>{title.slice(idx + accentWord.length)}</>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(isCenter ? "text-center" : "text-left", "mb-14", className)}
    >
      {eyebrow && <span className={cn("eyebrow", invert ? "text-[#0098AF]" : "text-[#0098AF]")}>{eyebrow}</span>}
      <h2 className={cn("font-display text-5xl md:text-6xl leading-[1.0] tracking-[-0.03em] text-balance", invert ? "text-white" : "text-[#111827]")}>
        {renderTitle()}
      </h2>
      {description && (
        <p className={cn("mt-5 font-sans text-[16px] leading-[1.75]", invert ? "text-white/55" : "text-[#718096]", isCenter ? "max-w-xl mx-auto" : "max-w-lg")}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
