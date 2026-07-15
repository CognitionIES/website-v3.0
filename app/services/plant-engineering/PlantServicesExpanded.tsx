"use client";

import { useState, useId, type ReactNode } from "react";
import Image from "next/image";
import { Flame, Cuboid, PenTool } from "lucide-react";
import { SERVICE_PHASES, DISCIPLINE_IMAGES, type IconKey } from "@/constants/plant-engineering/servicePhases";
import { SOFTWARE_BY_DISCIPLINE } from "@/constants/plant-engineering/SoftwareProficiency";
import { AccordionList, AccordionItem, BulletGrid, SoftwareSection } from "@/components/shared/ServiceAccordion";
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
  // Single-open state, matching /details and the Product Engineering homepage —
  // opening one item closes whichever else was open. This used to be a
  // Set<string> here (independent multi-open per item), which is why this page
  // behaved differently from the other two.
  const [activeId, setActiveId] = useState<string | null>(null);
  const headingId = useId();

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
              <AccordionList ariaLabelledBy={headingId}>
                {phase.categories.map((cat, i) => {
                  const id = `${phase.number}-${slugify(cat.title)}`;
                  const isOpen = activeId === id;
                  const image = DISCIPLINE_IMAGES[cat.icon];
                  return (
                    <AccordionItem
                      key={id}
                      id={id}
                      index={String(i + 1).padStart(2, "0")}
                      icon={ICON_MAP[cat.icon]}
                      title={cat.title}
                      isOpen={isOpen}
                      onToggle={() => setActiveId(isOpen ? null : id)}
                    >
                      {/* Level 3 — scope of work for this category, at this phase */}
                      <div
                        className={`max-w-7xl mx-auto px-6 py-8 grid gap-8 items-start ${
                          image ? "md:grid-cols-2" : ""
                        }`}
                      >
                        <div>
                          <p className="text-sm text-[#5b5b5b] mb-4 leading-relaxed">{cat.description}</p>
                          <BulletGrid items={cat.scope} />
                          <SoftwareSection tools={SOFTWARE_BY_DISCIPLINE[cat.icon]} />
                        </div>

                        {image && (
                          <div className="relative h-56 md:h-72 rounded-xl overflow-hidden shadow-md">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        )}
                      </div>
                    </AccordionItem>
                  );
                })}
              </AccordionList>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
