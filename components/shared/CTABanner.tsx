"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButton { label: string; href: string; variant?: "primary" | "outline"; }
interface CTABannerProps { title: string; accentWord?: string; description?: string; buttons: CTAButton[]; className?: string; }

export default function CTABanner({ title, accentWord, description, buttons, className }: CTABannerProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const renderTitle = () => {
    if (!accentWord) return title;
    const idx = title.lastIndexOf(accentWord);
    if (idx === -1) return title;
    return <>{title.slice(0, idx)}<em className="not-italic text-[#0098AF]">{accentWord}</em>{title.slice(idx + accentWord.length)}</>;
  };

  return (
    <section ref={ref} className={cn("relative bg-[#111827] py-28 md:py-40 overflow-hidden", className)}>
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Top rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-white/10 mb-16 origin-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0 items-end">

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-8 md:pr-16"
          >
            <span className="eyebrow">Work With Us</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-[-0.03em] text-balance">
              {renderTitle()}
            </h2>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="md:col-span-4 space-y-3"
          >
            {description && (
              <p className="font-sans text-[15px] text-white/50 leading-[1.7] mb-6">{description}</p>
            )}
            {buttons.map((btn, i) => (
              <Link key={i} href={btn.href} className="block">
                <button className={cn(
                  "w-full flex items-center justify-between px-6 py-4 rounded-xl font-sans text-[13px] font-semibold tracking-wide transition-colors duration-200",
                  btn.variant === "outline"
                    ? "border border-white/15 text-white/70 hover:border-[#0098AF]/60 hover:text-white hover:bg-[#0098AF]/10"
                    : "bg-[#0098AF] hover:bg-[#007a8c] text-white"
                )}>
                  {btn.label}
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-white/10 mt-16 origin-right"
        />
      </div>
    </section>
  );
}
