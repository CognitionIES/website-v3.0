"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BROCHURE_CONSTANTS } from "@/constants/brochurePage/constants";

function BulletList({ items, label }: { items: string[]; label: string }) {
  return (
    <div className="mb-8">
      <h3 className="font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-[#718096] mb-4">{label}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-1 h-1 rounded-full bg-[#0098AF] mt-2.5 shrink-0" />
            <span className="font-sans text-[15px] text-[#4a5568] leading-[1.75]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LeftSection({ selectedBrochure }: { selectedBrochure: "product"|"plant"; setSelectedBrochure: (v: "product"|"plant")=>void }) {
  const content = BROCHURE_CONSTANTS.LEFT_CONTENT[selectedBrochure];
  return (
    <div className="w-full lg:w-1/2 lg:pr-12">
      <AnimatePresence mode="wait">
        <motion.div key={selectedBrochure} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{duration:0.35,ease:[0.22,1,0.36,1]}}>
          <h2 className="font-display text-4xl md:text-5xl text-[#111827] mb-6 leading-[1.05] tracking-[-0.02em]">{content.TITLE}</h2>
          <p className="font-sans text-[16px] text-[#4a5568] mb-10 leading-[1.8]">{content.DESCRIPTION}</p>
          <BulletList items={content.WHY_DOWNLOAD} label="Why Download?" />
          <BulletList items={content.UNIQUE_POINTS} label="What Makes Our Services Unique?" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
