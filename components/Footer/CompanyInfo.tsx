"use client";

import { motion } from "framer-motion";
import { FOOTER_CONSTANTS } from "@/constants/footer/constants";
import Image from "next/image";

export default function CompanyInfo() {
  const { DESCRIPTION, iamge } = FOOTER_CONSTANTS.COMPANY;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="col-span-1 md:col-span-5"
    >
      <div className="mb-5">
        <Image src={iamge} alt="Cognition IES Logo" width={200} height={44} className="h-auto w-auto max-w-[180px] sm:max-w-[220px] brightness-0 invert" />
      </div>
      <p className="text-[14px] text-white/50 leading-relaxed mb-6 max-w-sm font-sans font-light">{DESCRIPTION}</p>
      <div className="w-12 h-px bg-[#0098AF]/60" />
    </motion.div>
  );
}
