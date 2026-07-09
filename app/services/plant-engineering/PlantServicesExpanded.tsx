"use client";

import { useState, useId, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingShield, faChartArea, faGaugeHigh,
  faGears, faPlugCircleBolt, faBridge,
} from "@fortawesome/free-solid-svg-icons";
import { Box, Truck, Workflow, Building2, Flame, Cuboid, PenTool } from "lucide-react";
import { IconSettingsDollar } from "@tabler/icons-react";
import { SERVICE_PHASES, type IconKey } from "@/constants/plant-engineering/servicePhases";

const ICON_MAP: Record<IconKey, ReactNode> = {
  "process-safety": <FontAwesomeIcon icon={faBuildingShield} className="w-4 h-4" />,
  "piping": <Workflow className="w-4 h-4" />,
  "piping-stress": <FontAwesomeIcon icon={faChartArea} className="w-4 h-4" />,
  "mechanical": <FontAwesomeIcon icon={faGears} className="w-4 h-4" />,
  "electrical": <FontAwesomeIcon icon={faPlugCircleBolt} className="w-4 h-4" />,
  "instrumentation": <IconSettingsDollar className="w-4 h-4" />,
  "civil": <Building2 className="w-4 h-4" />,
  "structural": <FontAwesomeIcon icon={faBridge} className="w-4 h-4" />,
  "reverse-engineering": <FontAwesomeIcon icon={faGaugeHigh} className="w-4 h-4" />,
  "modular": <Box className="w-4 h-4" />,
  "procurement": <Truck className="w-4 h-4" />,
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
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                                {cat.scope.map((pt) => (
                                  <li key={pt} className="flex items-start gap-2 text-sm text-[#003C46]">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0098af] flex-shrink-0" />
                                    {pt}
                                  </li>
                                ))}
                              </ul>
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