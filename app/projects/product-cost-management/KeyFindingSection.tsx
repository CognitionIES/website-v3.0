"use client";

import { CheckCircle2 } from "lucide-react";

const keyFindings = [
  "Major weight savings and design simplification opportunities were found across valves, cradles, tanks, and support structures.",
  "Several components were over-engineered, leading to excess material usage and fabrication costs.",
  "Benchmark competitors utilised fabricated or modular designs with fewer parts and less hardware.",
  "Opportunities to standardise SKUs across product families to improve inventory and sourcing efficiency.",
  "Hydraulic tanks, filter systems, and frames showed potential for leaner, cost-effective alternatives.",
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
  "Competitive Benchmark Report",
];

export default function KeyFindingSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-3">
            Findings
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Key Findings &amp; Deliverables
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed">
            What the analysis revealed, and the set of outputs delivered to the client.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Key Findings */}
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
            <div className="bg-[#003C46] px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0098af]">Analysis</p>
              <h3 className="text-lg font-bold text-white mt-0.5">Key Findings</h3>
            </div>
            <ul className="divide-y divide-gray-50">
              {keyFindings.map((finding, idx) => (
                <li key={idx} className="flex items-start gap-3 px-6 py-4">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-[#0098af] text-white flex items-center justify-center text-[10px] font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{finding}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
            <div className="bg-[#003C46] px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0098af]">Outputs</p>
              <h3 className="text-lg font-bold text-white mt-0.5">Deliverables</h3>
            </div>
            <div className="p-5 sm:p-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {deliverables.map((deliverable, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#E6F0F5]/30 border border-[#E6F0F5] hover:border-[#0098af]/30 transition-colors">
                    <CheckCircle2 className="text-[#0098af] h-4 w-4 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#003C46] font-medium leading-snug">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
