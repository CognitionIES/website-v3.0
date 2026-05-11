"use client";

import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/constants/images/projects/digitalization/hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-[400px] sm:h-[450px] overflow-hidden">
      <Image
        src={HeroImage}
        alt="Projects Showcase"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={80}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 to-[#0098AF]/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
        >
          Projects
          <span className="block mt-2 w-16 h-0.5 bg-gradient-to-r from-[#99D5DF] to-transparent" />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-4 text-lg text-white/80 max-w-xl"
        >
          Showcasing innovative engineering solutions across industries
        </motion.p>
      </div>

      <nav
        aria-label="Breadcrumb"
        className="absolute bottom-6 left-4 sm:left-8 lg:left-12 flex items-center gap-1.5 text-sm text-white/70"
      >
        <Link href="/" className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors">
          <Home className="w-3.5 h-3.5" />
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-white/50">Projects</span>
      </nav>
    </section>
  );
}
