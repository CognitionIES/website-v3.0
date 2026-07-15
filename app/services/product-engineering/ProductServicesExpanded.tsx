"use client";

import { useState, useId, useEffect, type ReactNode } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faPlugCircleBolt, faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons";
import { Cpu, FileText, Layers, Printer, Truck, Workflow } from "lucide-react";
import { AccordionList, AccordionItem, BulletGrid, SoftwareSection } from "@/components/shared/ServiceAccordion";
import { PRODUCT_SERVICES, type ProductServiceIconKey } from "@/constants/product-engineering/services";
import { SOFTWARE_PROFICIENCY } from "@/constants/product-engineering/softwareProficiency";

// Icons stay presentational (component-side), same convention as the Plant
// Engineering pages — the canonical data file has no JSX in it.
const ICON_MAP: Record<ProductServiceIconKey, ReactNode> = {
  "mechanical-design": <FontAwesomeIcon icon={faGears} className="w-5 h-5" />,
  "electrical-engineering": <FontAwesomeIcon icon={faPlugCircleBolt} className="w-5 h-5" />,
  "cae-cfd": <FontAwesomeIcon icon={faMagnifyingGlassChart} className="w-5 h-5" />,
  "prototyping-3d-printing": <Printer className="w-5 h-5" />,
  "hydraulic-engineering": <Workflow className="w-5 h-5" />,
  "asset-management": <Layers className="w-5 h-5" />,
  "embedded-systems": <Cpu className="w-5 h-5" />,
  "technical-publication": <FileText className="w-5 h-5" />,
  "supply-chain-management": <Truck className="w-5 h-5" />,
};

export default function ProductServicesExpanded() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setActiveId(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150);
    }
  }, []);
  const headingId = useId();

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Our Services
          </span>
          <h2 id={headingId} className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Product Engineering Services
          </h2>
          <p className="mt-3 text-[#5b5b5b] max-w-2xl">
            Click any service to explore the full scope of what we deliver.
          </p>
        </div>

        {/* Accordion list */}
        <AccordionList ariaLabelledBy={headingId}>
          {PRODUCT_SERVICES.map((svc, i) => {
            const isOpen = activeId === svc.id;
            return (
              <AccordionItem
                key={svc.id}
                id={svc.id}
                index={String(i + 1).padStart(2, "0")}
                icon={ICON_MAP[svc.id]}
                title={svc.title}
                isOpen={isOpen}
                onToggle={() => setActiveId(isOpen ? null : svc.id)}
              >
                <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-8 items-start">
                  {/* Left: description + bullets + software used */}
                  <div>
                    <p className="text-[#5b5b5b] leading-relaxed mb-6">{svc.description}</p>
                    <BulletGrid items={svc.bullets} />
                    <SoftwareSection
                      tools={SOFTWARE_PROFICIENCY.find((c) => c.id === svc.id)?.tools}
                    />
                  </div>

                  {/* Right: image */}
                  <div className="relative h-56 md:h-72 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </AccordionItem>
            );
          })}
        </AccordionList>
      </div>
    </section>
  );
}
