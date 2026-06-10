"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// Reusing an existing site image for now. Swap to a dedicated photo at
// constants/images/staff-augmentation/hero.jpg when one is available.
import heroImage from "@/constants/images/home/who-we-are.jpg";
import { STAFF_AUGMENTATION_CONSTANTS } from "@/constants/staff-augmentation/constants";

export default function HeroSection() {
  const { TITLE, SUBTITLE } = STAFF_AUGMENTATION_CONSTANTS.HERO;

  return (
    <section className="relative h-[400px] sm:h-[450px] overflow-hidden">
      <Image
        src={heroImage}
        alt="Staff Augmentation"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={75}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/85 to-[#0098AF]/70" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md"
        >
          {TITLE}
          <span className="block mt-2 w-16 h-0.5 bg-gradient-to-r from-[#99D5DF] to-transparent" />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-lg text-white/80 max-w-xl"
        >
          {SUBTITLE}
        </motion.p>
      </div>
    </section>
  );
}
