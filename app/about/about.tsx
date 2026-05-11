"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import StatCard from "@/components/shared/StatCard";

export default function AboutSection() {
  const { IMAGES, TEXT, STATS } = ABOUT_CONSTANTS;

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F5FDFF] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Left — text */}
          <div>
            <SectionHeader
              eyebrow="Our Story"
              title={TEXT.STORY_TITLE}
              align="left"
            />
            <div className="space-y-5">
              <p className="text-[15px] sm:text-base text-gray-500 leading-[1.85]">
                {TEXT.STORY_P1}
              </p>
              <p className="text-[15px] sm:text-base text-gray-500 leading-[1.85]">
                {TEXT.STORY_P2}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {STATS.slice(0, 2).map((stat, i) => (
                  <StatCard key={i} stat={stat.stat} label={stat.label} variant="light" />
                ))}
              </div>
            </div>
          </div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="hidden md:block relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={IMAGES.STORY_IMAGE.OurJourneyImage}
              alt="Our Journey at Cognition IES"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 50vw, 640px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/40 to-transparent" />
            <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
              <p className="text-xs font-semibold text-[#003C46] tracking-wide">🌐 Operating across India &amp; USA</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
