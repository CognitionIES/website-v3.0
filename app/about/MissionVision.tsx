"use client";

import { motion } from "framer-motion";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";
import SectionHeader from "@/components/shared/SectionHeader";

interface CardProps {
  title: string;
  description: string;
  variant: "primary" | "dark";
  index: number;
}

function MissionVisionCard({ title, description, variant, index }: CardProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 overflow-hidden"
    >
      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-[60px] ${isPrimary ? "bg-[#0098AF]/8" : "bg-[#003C46]/6"}`} />

      <div className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl mb-5 ${isPrimary ? "bg-[#0098AF]/10" : "bg-[#003C46]/8"}`}>
        <span className="text-xl">{isPrimary ? "🎯" : "🔭"}</span>
      </div>

      <h3 className={`text-xl font-bold mb-3 tracking-tight ${isPrimary ? "text-[#0098AF]" : "text-[#003C46]"}`}>
        {title}
      </h3>
      <p className="text-[15px] text-gray-500 leading-[1.85]">{description}</p>

      <div className={`mt-6 h-[2px] w-10 rounded-full ${isPrimary ? "bg-[#0098AF]" : "bg-[#003C46]"}`} />
    </motion.div>
  );
}

export default function MissionVision() {
  const { TEXT } = ABOUT_CONSTANTS;

  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFB] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,152,175,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Purpose"
          title="Mission & Vision"
          align="center"
          className="mb-12"
        />
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          <MissionVisionCard title={TEXT.MISSION_TITLE} description={TEXT.MISSION_DESC} variant="primary" index={0} />
          <MissionVisionCard title={TEXT.VISION_TITLE} description={TEXT.VISION_DESC} variant="dark" index={1} />
        </div>
      </div>
    </section>
  );
}
