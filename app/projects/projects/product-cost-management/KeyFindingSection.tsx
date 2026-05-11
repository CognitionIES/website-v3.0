"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

const keyImage         = "/images/bg/key.jpg";
const deliverablesImage = "/images/bg/deliverables.jpg";

const keyFindings = [
  "Major weight savings and design simplification opportunities were found across valves, cradles, tanks, and support structures.",
  "Several components were over-engineered, leading to excess material usage and fabrication costs.",
  "Benchmark competitors utilised fabricated or modular designs with fewer parts and less hardware.",
  "Opportunities to standardise SKUs across product families were identified to improve inventory and sourcing efficiency.",
  "Areas such as hydraulic tanks, filter systems, and frames showed potential for leaner, cost-effective alternatives.",
];

const deliverables = [
  "SWOT Analysis",
  "Pareto Analysis (80/20)",
  "Idea Pool Generation Report",
  "DFA / DFM / DFMEA Reports",
  "Root Cause Analysis",
  "Should-Costing",
  "FEA Reports",
  "Final Manufacturing Drawings",
  "Costed BOM Evolution",
  "Vendor Identification",
  "Function Cost-Worth Analysis",
  "Physical Competitive Benchmark Report",
];

export default function KeyFindingSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 lg:space-y-8">

        {/* Key Findings */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Findings
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Key Findings &amp; Deliverables
          </h2>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-md">
          <div className="relative h-[260px] sm:h-[340px]">
            <Image
              src={keyImage}
              alt="Key findings"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-[#003C46]/70" />
          </div>
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0098af] mb-4">
              Key Findings
            </p>
            <div className="space-y-2.5">
              {keyFindings.map((finding, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-[#0098af] text-white flex items-center justify-center text-[10px] font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">{finding}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deliverables */}
        <div className="relative rounded-xl overflow-hidden shadow-md">
          <div className="relative h-[240px] sm:h-[300px]">
            <Image
              src={deliverablesImage}
              alt="Deliverables"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-[#003C46]/70" />
          </div>
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0098af] mb-4">
              Deliverables
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {deliverables.map((deliverable, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10"
                >
                  <CheckCircle className="text-[#0098af] h-3.5 w-3.5 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-white/90 leading-snug">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
