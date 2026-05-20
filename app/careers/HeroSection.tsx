import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Home, ArrowDown } from "lucide-react";
import Image from "next/image";
import heroImage from "@/constants/images/hero/careers-hero.png";
import Link from "next/link";

export default function CareersHero() {
  return (
    <section className="relative h-[500px]  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Careers - Join Our Team"
          className="w-full h-full object-cover"
          fill
          priority
        />
      </div>

      {/* Layered overlay — deep teal base with subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 via-[#004f5e]/75 to-[#0098AF]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#002930]/60 via-transparent to-transparent" />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 0.35, 0],
              y: [0, -110],
              x: [0, (i % 2 === 0 ? 1 : -1) * (20 + (i * 13) % 60)],
            }}
            transition={{
              duration: 5 + (i * 0.4) % 3,
              repeat: Infinity,
              delay: (i * 0.37) % 4,
              ease: "easeOut",
            }}
            className="absolute w-1 h-1 bg-[#0098AF]/60 rounded-full"
            style={{
              left: `${12 + (i * 6.2) % 76}%`,
              bottom: "18%",
            }}
          />
        ))}
      </div>

      {/* Horizontal accent line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#0098AF]/60 to-transparent origin-left"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 h-full flex flex-col justify-center">

        {/* Breadcrumb */}
        <motion.nav
          className="absolute bottom-8 flex items-center gap-2 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 text-white/50 hover:text-white/90 transition-colors duration-300"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="text-xs font-medium tracking-wide">Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <span className="text-xs font-medium tracking-wide text-[#0098AF]/90">
            Careers
          </span>
        </motion.nav>

        {/* Hero content */}
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0098AF] mb-5"
          >
            Cognition IES · Careers
          </motion.p>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] text-white font-bold tracking-tight leading-[1.02]">
              Join Our{" "}
              <span className="text-[#0098AF]">Team</span>
            </h1>

            {/* Animated underline accent */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-3 left-0.5 h-[3px] bg-gradient-to-r from-[#0098AF] to-transparent rounded-full"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed"
          >
            We build engineering solutions used by teams across the globe.
            We're looking for people who care deeply about their craft and
            want to make a real impact.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="flex items-center gap-5 mt-8"
          >
            <Link
              href="#open-positions"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0098AF] hover:bg-[#007B8F] text-white text-sm font-semibold rounded-lg transition-colors duration-200"
            >
              View Open Roles
              <ArrowDown className="w-4 h-4" />
            </Link>
            <span className="text-white/40 text-xs tracking-widest">
              {/* optional stat */}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}