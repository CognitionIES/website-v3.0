"use client";

import { useState, useId, useEffect, type ReactNode } from "react";
import Image from "next/image";
import { Flame, Cuboid, PenTool } from "lucide-react";
import { getDisciplinesFlat, type IconKey } from "@/constants/plant-engineering/servicePhases";
import { SOFTWARE_BY_DISCIPLINE } from "@/constants/plant-engineering/SoftwareProficiency";
import { AccordionList, AccordionItem, BulletGrid, SoftwareSection } from "@/components/shared/ServiceAccordion";
// Same icon set as the homepage (PlantServicesExpanded.tsx) — kept in sync
// manually since the two pages render different accordion levels (phase vs
// discipline) and can't share one icon-mapping import without introducing a
// dependency between them. If you add a 15th discipline, add its icon here too.
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

export default function PlantServicesDetails() {
  const disciplines = getDisciplinesFlat();
  const [activeId, setActiveId] = useState<string | null>(null);
  const headingId = useId();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setActiveId(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150);
    }
  }, []);

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Our Services
          </span>
          <h2 id={headingId} className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Plant Engineering Services
          </h2>
          <p className="mt-3 text-[#5b5b5b] max-w-2xl">
            Every discipline we deliver, with the full scope of work across every
            project phase it touches.
          </p>
        </div>

        <AccordionList ariaLabelledBy={headingId}>
          {disciplines.map((d, i) => {
            const id = slugify(d.title);
            const isOpen = activeId === id;
            const tools = SOFTWARE_BY_DISCIPLINE[d.icon];
            return (
              <AccordionItem
                key={d.icon}
                id={id}
                index={String(i + 1).padStart(2, "0")}
                icon={ICON_MAP[d.icon]}
                title={d.title}
                isOpen={isOpen}
                onToggle={() => setActiveId(isOpen ? null : id)}
              >
                <div
                  className={`max-w-7xl mx-auto px-6 py-8 grid gap-8 items-start ${
                    d.image ? "md:grid-cols-2" : ""
                  }`}
                >
                  {/* Left: every phase this discipline appears in */}
                  <div className="space-y-6">
                    {d.occurrences.map((occ) => (
                      <div key={`${occ.phaseNumber}-${occ.title}`}>
                        <p className="text-xs font-semibold text-[#0098af] uppercase tracking-wider mb-2">
                          Phase {occ.phaseNumber} · {occ.phaseTitle}
                          {occ.title !== d.title && (
                            <span className="text-[#5b5b5b] normal-case font-normal"> — {occ.title}</span>
                          )}
                          {occ.sourced === false && (
                            <span className="ml-2 text-amber-600 normal-case font-normal">(needs review)</span>
                          )}
                        </p>
                        <p className="text-[#5b5b5b] leading-relaxed mb-3 text-sm">{occ.description}</p>
                        <BulletGrid items={occ.scope} />
                      </div>
                    ))}

                    <SoftwareSection tools={tools} />
                  </div>

                  {/* Right: image, only when we actually have one for this discipline */}
                  {d.image && (
                    <div className="relative h-56 md:h-72 rounded-xl overflow-hidden shadow-md">
                      <Image
                        src={d.image.src}
                        alt={d.image.alt}
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
    </section>
  );
}
