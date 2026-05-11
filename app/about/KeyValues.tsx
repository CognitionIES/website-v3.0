"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import { animation } from "@/lib/design-system";

export default function KeyValues() {
  const { IMAGES, TEXT, KEY_VALUES } = ABOUT_CONSTANTS;

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Values"
          title={TEXT.VALUES_TITLE}
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={animation.staggerChildren}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {KEY_VALUES.map((value, index) => (
            <motion.div
              key={index}
              variants={animation.fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#0098AF]/30 transition-all duration-250 overflow-hidden"
            >
              {/* Image banner */}
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={IMAGES.KEY_VALUES[index]}
                  alt={value.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-bold text-[#003C46] mb-1.5 group-hover:text-[#0098AF] transition-colors duration-200">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </div>

              {/* Bottom accent line */}
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#0098AF] to-[#99D5DF] transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
