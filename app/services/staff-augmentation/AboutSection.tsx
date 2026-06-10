"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
// Reusing an existing site image for now. Swap to a dedicated photo at
// constants/images/staff-augmentation/about.jpg when one is available.
import aboutImage from "@/constants/images/home/our-services/staff.jpg";
import { STAFF_AUGMENTATION_CONSTANTS } from "@/constants/staff-augmentation/constants";

export default function AboutSection() {
  const { EYEBROW, HEADING, DESCRIPTION_1, DESCRIPTION_2 } =
    STAFF_AUGMENTATION_CONSTANTS.ABOUT;
  const principles = STAFF_AUGMENTATION_CONSTANTS.PRINCIPLES;

  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-28 bg-white overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#003C46 1px,transparent 1px),linear-gradient(90deg,#003C46 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Eyebrow + hairline */}
        <div className="flex items-center gap-6 mb-14">
          <span className="eyebrow !mb-0">{EYEBROW}</span>
          <motion.div
            className="flex-1 h-px bg-[#e2e8f0] origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* Text + image */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] leading-tight">
              {HEADING}
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#5b5b5b] leading-relaxed">
              {DESCRIPTION_1}
            </p>
            <p className="mt-4 text-base sm:text-lg text-[#5b5b5b] leading-relaxed">
              {DESCRIPTION_2}
            </p>
            <Link
              href="#share-requirement"
              className="group mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0098AF] text-white text-sm font-semibold hover:bg-[#003C46] transition-colors duration-200"
            >
              Share your requirement
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[300px] sm:h-[380px] rounded-2xl overflow-hidden shadow-md"
          >
            <Image
              src={aboutImage}
              alt="Engineers working as an extension of a client team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/30 to-transparent" />
          </motion.div>
        </div>

        {/* Principles, full-width row */}
        <div className="mt-16 pt-2 grid sm:grid-cols-3 gap-x-10 gap-y-8 border-t border-[#e2e8f0]">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="pt-8"
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-xs text-[#0098AF]/60 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#0098AF]" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#003C46]">
                {p.title}
              </h3>
              <p className="mt-1.5 text-sm sm:text-[15px] text-[#5b5b5b] leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
