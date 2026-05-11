"use client";

import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import heroImage from "@/constants/images/staffing-recruitment/hero.jpg";

export default function HeroSection() {
  return (
    <section>
      <div className="relative h-[450px] overflow-hidden">
        <Image
          src={heroImage}
          alt="Staffing and Recruitment"
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
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md relative"
          >
            Staffing &amp; Recruitment
            <span className="absolute bottom-0 left-0 w-40 h-0.5 bg-gradient-to-r from-[#99D5DF] to-transparent" />
          </motion.h1>

          <nav
            className="absolute bottom-0 left-4 sm:left-8 lg:left-12 mb-6 flex items-center gap-2 text-sm font-light text-white/80"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#99D5DF] flex items-center gap-1 transition-colors duration-200">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-[#99D5DF] transition-colors duration-200">
              Services
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/60">Staffing &amp; Recruitment</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
          >
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}