"use client";

import { useState, useId, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Box, FileText, Workflow } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingShield,
  faGears,
  faPlugCircleBolt,
  faBridge,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";

interface Discipline {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  roles: { heading: string; points: string[] }[];
}

const disciplines: Discipline[] = [
  {
    id: "plant-process",
    icon: <FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" />,
    title: "Plant & Process Engineering",
    description:
      "Process and piping specialists who can carry plant scopes from FEED through detailed design.",
    roles: [
      {
        heading: "Process & Safety",
        points: [
          "Process Engineers",
          "P&ID / PFD Designers",
          "Mass & Energy Balance",
          "HAZOP / SIL Support",
        ],
      },
      {
        heading: "Piping",
        points: [
          "Piping Layout & GA Designers",
          "Piping Isometric Drafters",
          "Piping Stress Engineers (Caesar II)",
          "Material & Line List Engineers",
        ],
      },
    ],
  },
  {
    id: "mechanical-product",
    icon: <FontAwesomeIcon icon={faGears} className="w-5 h-5" />,
    title: "Mechanical & Product Design",
    description:
      "CAD and mechanical engineers for equipment, product, and detailing work across major platforms.",
    roles: [
      {
        heading: "Design & Modeling",
        points: [
          "Mechanical Design Engineers",
          "3D CAD Modelers",
          "GA & Detailing Draftsmen",
          "Sheet-Metal / Weldment Designers",
        ],
      },
      {
        heading: "Engineering Support",
        points: [
          "Reverse Engineering",
          "BOM / MTO Preparation",
          "Design Validation",
          "GD&T & Tolerance Review",
        ],
      },
    ],
  },
  {
    id: "electrical-instrumentation",
    icon: <FontAwesomeIcon icon={faPlugCircleBolt} className="w-5 h-5" />,
    title: "Electrical & Instrumentation",
    description:
      "Engineers for power distribution, control systems, and field instrumentation.",
    roles: [
      {
        heading: "Electrical",
        points: [
          "Electrical Design Engineers",
          "SLD & Load List",
          "Cable Schedule & Tray Layout",
          "Control Panel Design",
        ],
      },
      {
        heading: "Instrumentation & Control",
        points: [
          "Instrumentation Engineers",
          "Instrument Index & Datasheets",
          "PLC / Control Logic Support",
          "Hook-up & Loop Drawings",
        ],
      },
    ],
  },
  {
    id: "civil-structural",
    icon: <FontAwesomeIcon icon={faBridge} className="w-5 h-5" />,
    title: "Civil & Structural",
    description:
      "Structural and civil engineers for industrial foundations, steelwork, and site infrastructure.",
    roles: [
      {
        heading: "Structural",
        points: [
          "Structural Engineers (STAAD)",
          "Steel Connection Detailing",
          "Pipe Rack & Platform Design",
        ],
      },
      {
        heading: "Civil",
        points: [
          "Foundation & Equipment Design",
          "Rebar Detailing",
          "Site & Drainage Design",
        ],
      },
    ],
  },
  {
    id: "cae-simulation",
    icon: <FontAwesomeIcon icon={faChartArea} className="w-5 h-5" />,
    title: "CAE / Simulation",
    description:
      "Analysts who validate designs with structural, thermal, and flow simulation.",
    roles: [
      {
        heading: "Analysis",
        points: [
          "FEA Analysts",
          "CFD Analysts",
          "Structural & Thermal Simulation",
          "Fatigue & Durability Studies",
        ],
      },
    ],
  },
  {
    id: "plant-digitization",
    icon: <Box className="w-5 h-5" />,
    title: "Plant Digitization & As-Built",
    description:
      "Reality-capture and modeling specialists who turn existing plants into accurate 3D and as-built data.",
    roles: [
      {
        heading: "Capture & Modeling",
        points: [
          "3D Laser-Scan / Point-Cloud Processing",
          "P&ID Digitization",
          "As-Built & Digital-Twin Modeling",
          "AVEVA E3D · Plant 3D · Revit · Navisworks",
        ],
      },
    ],
  },
  {
    id: "technical-publication",
    icon: <FileText className="w-5 h-5" />,
    title: "Technical Publication",
    description:
      "Writers and illustrators who produce clear, compliant technical documentation.",
    roles: [
      {
        heading: "Documentation",
        points: [
          "Technical Writers",
          "2D / 3D Illustrators",
          "IPC / IETM Specialists",
          "SOP & Compliance Docs",
        ],
      },
    ],
  },
];

export default function DisciplinesExpanded() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && disciplines.some((d) => d.id === hash)) {
      setActiveId(hash);
      setTimeout(() => {
        document
          .getElementById(hash)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150);
    }
  }, []);

  const headingId = useId();

  return (
    <section id="disciplines" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Disciplines We Staff
          </span>
          <h2 id={headingId} className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Roles you can add to your team
          </h2>
          <p className="mt-3 text-[#5b5b5b] max-w-2xl">
            We augment across the engineering disciplines we deliver in-house.
            Open any area to see example roles. Need something not listed? Ask —
            our network runs wider than our bench.
          </p>
        </div>

        <div
          className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
          role="list"
          aria-labelledby={headingId}
        >
          {disciplines.map((d, i) => {
            const isOpen = activeId === d.id;
            return (
              <div key={d.id} id={d.id} role="listitem">
                <button
                  onClick={() => setActiveId(isOpen ? null : d.id)}
                  aria-expanded={isOpen}
                  className={`w-full flex items-center gap-4 px-6 py-5 text-left transition-colors duration-200 group ${
                    isOpen
                      ? "bg-[#003C46] text-white"
                      : "bg-white hover:bg-[#E6F0F5]/50 text-[#003C46]"
                  }`}
                >
                  <span
                    className={`text-xs font-mono tabular-nums flex-shrink-0 w-6 ${
                      isOpen ? "text-white/40" : "text-[#0098af]/60"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                      isOpen ? "bg-white/10 text-white" : "bg-[#0098af]/10 text-[#0098af]"
                    }`}
                  >
                    {d.icon}
                  </span>
                  <span className="flex-1 text-base sm:text-lg font-semibold">
                    {d.title}
                  </span>
                  <ChevronDown
                    className={`flex-shrink-0 h-5 w-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-white/60" : "text-gray-400 group-hover:text-[#0098af]"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.32, 0, 0.18, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#f8fbfc] border-t border-[#E6F0F5]">
                        <div className="max-w-7xl mx-auto px-6 py-8">
                          <p className="text-[#5b5b5b] leading-relaxed mb-6 max-w-3xl">
                            {d.description}
                          </p>
                          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                            {d.roles.map((group) => (
                              <div key={group.heading}>
                                <p className="text-xs font-semibold text-[#0098af] uppercase tracking-wider mb-2">
                                  {group.heading}
                                </p>
                                <ul className="grid grid-cols-1 gap-y-1.5">
                                  {group.points.map((pt) => (
                                    <li
                                      key={pt}
                                      className="flex items-start gap-2 text-sm text-[#003C46]"
                                    >
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0098af] flex-shrink-0" />
                                      {pt}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
