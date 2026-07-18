"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { SOFTWARE_BY_DISCIPLINE } from "@/constants/plant-engineering/SoftwareProficiency";
import { getDisciplinesFlat } from "@/constants/plant-engineering/servicePhases";

export default function SoftwareProficiency() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Map each IconKey -> its human-readable discipline title, then turn the
  // discipline-keyed tool map into the {title, tools}[] shape this section renders.
  const disciplineTitles = Object.fromEntries(
    getDisciplinesFlat().map((d) => [d.icon, d.title])
  );
  const categories = Object.entries(SOFTWARE_BY_DISCIPLINE).map(([icon, tools]) => ({
    title: disciplineTitles[icon] ?? icon,
    tools,
  }));

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Our Toolset
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Software Proficiency
          </h2>
          <p className="mt-3 text-[#5b5b5b] max-w-2xl">
            The platforms behind each service — from mechanical design through
            supply chain management.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.06 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#003C46] mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    title={tool.uncertain ? `${tool.name} — unconfirmed, please verify` : tool.name}
                    className={`flex items-center gap-2.5 bg-white border rounded-xl px-4 py-2.5 hover:shadow-sm transition-shadow duration-200 ${
                      tool.uncertain ? "border-amber-300" : "border-gray-100"
                    }`}
                  >
                    <div className="relative w-6 h-6 flex-shrink-0">
                      {tool.logo && (
                        <Image
                          src={tool.logo}
                          alt={tool.name}
                          fill
                          className="object-contain"
                        />
                      )}
                    </div>
                    <span className="text-[13px] text-[#003C46] font-medium whitespace-nowrap">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}