"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Home, ChevronRight, ArrowDown } from "lucide-react";
import heroImage from "@/constants/images/hero/careers-hero.png";

export default function CareersHero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0f1117]" style={{ minHeight: 460 }}>
      <Image src={heroImage} alt="Careers at Cognition IES" fill priority sizes="100vw" quality={85} className="object-cover object-center opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1117]/50 via-[#0f1117]/40 to-[#0f1117]/90" />

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />

      {/* Top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0098AF]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20">

        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1.5 font-sans text-[12px] text-white/35 mb-8"
        >
          <Link href="/" className="flex items-center gap-1 hover:text-white/60 transition-colors">
            <Home className="w-3 h-3" /> Home
          </Link>
          <ChevronRight className="w-3 h-3 text-white/20" />
          <span className="text-[#0098AF]/80">Careers</span>
        </motion.nav>

        <motion.span
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="eyebrow text-[#0098AF]"
        >
          Cognition IES · Careers
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-[1.0] tracking-[-0.03em] max-w-2xl mt-4"
        >
          Join Our Team
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 font-sans text-[16px] text-white/50 max-w-lg leading-[1.75]"
        >
          We build engineering solutions used by teams across the globe. We're looking for people who care deeply about their craft and want to make a real impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <Link
            href="#open-positions"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#003C46] hover:bg-[#0098AF] text-white text-sm font-semibold rounded-full transition-colors duration-200"
          >
            View Open Roles
            <ArrowDown className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* White clip into next section */}
      <div className="absolute bottom-0 inset-x-0 h-12 z-20 pointer-events-none" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}>
        <div className="absolute inset-0 bg-white" />
      </div>
    </section>
  );
}
