"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem { label: string; href: string; }

interface PageHeroProps {
  image: StaticImageData | string;
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  align?: "left" | "center";
}

export default function PageHero({ image, title, subtitle, description, breadcrumbs, align = "left" }: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const isCenter = align === "center";

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0f1117]" style={{ minHeight: 420 }}>
      <Image src={image} alt={title} fill priority sizes="100vw" quality={85} className="object-cover object-center opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1117]/60 via-[#0f1117]/50 to-[#0f1117]/90" />

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
      {/* Top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0098AF]/50 to-transparent" />

      <div className={`relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20 ${isCenter ? "text-center" : ""}`}>

        {/* Breadcrumb */}
        {!isCenter && breadcrumbs?.length && (
          <motion.nav
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 font-sans text-[12px] text-white/35 mb-8"
          >
            <Link href="/" className="flex items-center gap-1 hover:text-white/60 transition-colors"><Home className="w-3 h-3" /> Home</Link>
            {breadcrumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-white/20" />
                <span className="text-[#0098AF]/80">{c.label}</span>
              </span>
            ))}
          </motion.nav>
        )}

        {subtitle && (
          <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.05 }}
            className="eyebrow text-[#0098AF]">{subtitle}</motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`font-display text-5xl sm:text-6xl md:text-7xl text-white leading-[1.0] tracking-[-0.03em] ${isCenter ? "mx-auto max-w-3xl" : "max-w-2xl"}`}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`mt-4 font-sans text-[16px] text-white/50 leading-[1.75] ${isCenter ? "mx-auto max-w-xl" : "max-w-lg"}`}
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* White clip into next section */}
      <div className="absolute bottom-0 inset-x-0 h-12 z-20 pointer-events-none"
        style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}>
        <div className="absolute inset-0 bg-white" />
      </div>
    </section>
  );
}
