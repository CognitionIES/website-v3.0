"use client";

import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/projects/pcm/hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-[420px] sm:h-[480px] overflow-hidden">
      <Image
        src={heroImage}
        alt="Log Splitter Cost Optimisation & Benchmarking"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/90 via-[#003C46]/70 to-[#0098AF]/50" />

      {/* Breadcrumb — inside max-w-7xl, bottom aligned */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60">
            <Link href="/" className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors duration-200">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/projects" className="hover:text-[#99D5DF] transition-colors duration-200">Projects</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/40">Product Cost Management</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pb-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#99D5DF] mb-4"
        >
          <span className="w-5 h-px bg-[#99D5DF]" />
          Case Study
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-2xl leading-tight"
        >
          Log Splitter Cost Optimisation &amp; Benchmarking
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22, ease: "easeOut" }}
          className="mt-4 text-base sm:text-lg text-white/70 max-w-xl leading-relaxed"
        >
          Value engineering and competitive benchmarking to achieve 35% cost reduction and 50% margin improvement.
        </motion.p>

        {/* Meta pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34, ease: "easeOut" }}
          className="flex flex-wrap gap-2 mt-6"
        >
          {["Product Cost Management", "Value Engineering", "VAVE"].map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/70 text-xs font-medium backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
