"use client";

import { useState, useId, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Flame, Cuboid, PenTool } from "lucide-react";
import { SERVICE_PHASES, type IconKey } from "@/constants/plant-engineering/servicePhases";
import { SOFTWARE_BY_DISCIPLINE } from "@/constants/plant-engineering/SoftwareProficiency";

// The 11 core disciplines now use your real icon set (constants/icon/perfect/) —
// recolored to the site's teal accent, same source files as your repo. Fire &
// Safety, BIM & 3D Modeling, and CAD Services are new categories with no matching
// custom icon yet, so they still fall back to lucide icons until you have real
// artwork for those three.
import ProcessIcon from "@/constants/icon/perfect/process.svg";
import PipingIcon from "@/constants/icon/perfect/piping.svg";
import PipingStressIcon from "@/constants/icon/perfect/piping-stress.svg";
import MechanicalIcon from "@/constants/icon/perfect/mechanical.svg";
import ElectricalIcon from "@/constants/icon/perfect/electrical.svg";
import InstrumentationIcon from "@/constants/icon/perfect/intrumentation.svg";
import CivilIcon from "@/constants/icon/perfect/civil.svg";
import StructuralIcon from "@/constants/icon/perfect/structural.svg";
import ReverseIcon from "@/constants/icon/perfect/reverse.svg";
import ModularIcon from "@/constants/icon/perfect/modular.svg";
import ProcurementIcon from "@/constants/icon/perfect/procurement.svg";

const ICON_MAP: Record<IconKey, ReactNode> = {
  "process-safety": <Image src={ProcessIcon} alt="" className="w-5 h-5" />,
  "piping": <Image src={PipingIcon} alt="" className="w-5 h-5" />,
  "piping-stress": <Image src={PipingStressIcon} alt="" className="w-5 h-5" />,
  "mechanical": <Image src={MechanicalIcon} alt="" className="w-5 h-5" />,
  "electrical": <Image src={ElectricalIcon} alt="" className="w-5 h-5" />,
  "instrumentation": <Image src={InstrumentationIcon} alt="" className="w-5 h-5" />,
  "civil": <Image src={CivilIcon} alt="" className="w-5 h-5" />,
  "structural": <Image src={StructuralIcon} alt="" className="w-5 h-5" />,
  "reverse-engineering": <Image src={ReverseIcon} alt="" className="w-5 h-5" />,
  "modular": <Image src={ModularIcon} alt="" className="w-5 h-5" />,
  "procurement": <Image src={ProcurementIcon} alt="" className="w-5 h-5" />,
  "fire-safety": <Flame className="w-4 h-4" />,
  "bim-3d": <Cuboid className="w-4 h-4" />,
  "cad": <PenTool className="w-4 h-4" />,
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

export default function PlantServicesExpanded() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const headingId = useId();

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Our Services
          </span>
          <h2 id={headingId} className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Engineering Services
          </h2>
          <p className="mt-3 text-[#5b5b5b] max-w-2xl">
            Organized by project phase — from Pre-FEED through Digitalization. Click any
            discipline to see the scope of work delivered at that stage.
          </p>
        </div>

        <div className="space-y-16">
          {SERVICE_PHASES.map((phase) => (
            <div key={phase.number}>
              {/* Level 1 — phase heading, not an accordion */}
              <div className="flex items-baseline gap-4 mb-6 pb-4 border-b-2 border-[#003C46]">
                <span className="font-mono text-sm text-[#0098af] tabular-nums">{phase.number}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#003C46] uppercase tracking-wide">
                  {phase.title}
                </h3>
              </div>

              {/* Level 2 — category accordions */}
              <div
                className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
                role="list"
                aria-labelledby={headingId}
              >
                {phase.categories.map((cat) => {
                  const id = `${phase.number}-${slugify(cat.title)}`;
                  const isOpen = openIds.has(id);
                  return (
                    <div key={id} id={id} role="listitem">
                      <button
                        onClick={() => toggle(id)}
                        aria-expanded={isOpen}
                        className={`w-full flex items-center gap-4 px-6 py-4 text-left transition-colors duration-200 group ${
                          isOpen ? "bg-[#003C46] text-white" : "bg-white hover:bg-[#E6F0F5]/50 text-[#003C46]"
                        }`}
                      >
                        <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 ${isOpen ? "bg-white/10 text-white" : "bg-[#0098af]/10 text-[#0098af]"}`}>
                          {ICON_MAP[cat.icon]}
                        </span>
                        <span className="flex-1 text-[15px] sm:text-base font-semibold">{cat.title}</span>
                        <ChevronDown className={`flex-shrink-0 h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-white/60" : "text-gray-400 group-hover:text-[#0098af]"}`} />
                      </button>

                      {/* Level 3 — scope of work for this category, at this phase */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="panel"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.32, 0, 0.18, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="bg-[#f8fbfc] border-t border-[#E6F0F5] px-6 py-6">
                              <p className="text-sm text-[#5b5b5b] mb-4 leading-relaxed">{cat.description}</p>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                                {cat.scope.map((pt) => (
                                  <li key={pt} className="flex items-start gap-2 text-sm text-[#003C46]">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0098af] flex-shrink-0" />
                                    {pt}
                                  </li>
                                ))}
                              </ul>

                              {(() => {
                                const tools = SOFTWARE_BY_DISCIPLINE[cat.icon];
                                if (!tools || tools.length === 0) return null;
                                return (
                                  <div className="mt-6 pt-5 border-t border-[#E6F0F5]">
                                    <h4 className="text-xs font-semibold uppercase tracking-wide text-[#003C46]/60 mb-3">
                                      Software We Use
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                      {tools.map((tool) => (
                                        <span
                                          key={tool}
                                          title={tool}
                                          className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-[12px] text-[#003C46] font-medium"
                                        >
                                          {tool}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })()}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}