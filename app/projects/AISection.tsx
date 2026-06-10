"use client";

import { motion } from "framer-motion";
import {
  ScanLine,
  Spline,
  Gauge,
  Network,
  GitCompare,
  ListChecks,
  ShieldCheck,
} from "lucide-react";

// Real P&ID / drawing-digitization tasks that AI handles in practice. Keep the
// cards that match what Cognition IES runs today; trim or reword any you don't.
const capabilities = [
  {
    icon: ScanLine,
    title: "Equipment & Instrument Tag Extraction",
    desc: "Detects equipment, instrument, and valve tags on each P&ID and reads them with OCR — P-101, PT-1001, FV-2003 — turning them into structured, searchable records instead of hand-typed lists.",
  },
  {
    icon: Spline,
    title: "Line Number Extraction",
    desc: "Reads line tags straight off the drawing and parses them into a clean line list — size, service, sequence, and spec — so the line schedule isn't rebuilt by hand.",
  },
  {
    icon: Gauge,
    title: "Drawing Complexity Scoring",
    desc: "Scores every sheet by symbol, line, and instrument density and by scan legibility — an objective basis for effort estimation and pricing, and a flag for the busy drawings that need closer QA.",
  },
  {
    icon: Network,
    title: "Symbol Detection & Connectivity",
    desc: "Recognises equipment, valve, and instrument symbols and traces line connectivity, including off-page connectors, so the digital P&ID reflects how the plant is actually wired.",
  },
  {
    icon: GitCompare,
    title: "Revision & Markup Comparison",
    desc: "Compares two issues of a drawing automatically and highlights exactly what changed between revisions — cutting slow, error-prone manual red-line checking.",
  },
  {
    icon: ListChecks,
    title: "Tag Validation & Auto-Count",
    desc: "Cross-checks extracted tags against the master register to flag missing or duplicate tags, and auto-counts valves, fittings, and instruments for takeoffs and MTOs.",
  },
];

export default function AISection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#E6F0F5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-3">
            Artificial Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Turning drawings into intelligent data
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 leading-relaxed">
            The slowest part of digitizing a plant is reading thousands of
            legacy P&amp;IDs and drawings by hand. AI does the first pass —
            pulling equipment tags, line numbers, and connectivity off each
            sheet and sizing up how complex it is — so our engineers spend their
            time validating data, not transcribing it.
          </p>
        </div>

        {/* Capability grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-2xl border border-gray-100 bg-white p-6 hover:border-[#0098af]/40 hover:shadow-md transition-all duration-200"
              >
                <span className="inline-flex w-11 h-11 rounded-xl bg-[#0098af]/10 text-[#0098af] items-center justify-center mb-4 group-hover:bg-[#003C46] group-hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="text-base font-semibold text-[#003C46] mb-1.5">
                  {cap.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {cap.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Honest accountability line — reassures engineering buyers wary of black-box AI */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-[#003C46] px-6 py-5">
          <span className="shrink-0 w-9 h-9 rounded-lg bg-[#0098af]/20 text-[#0098af] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </span>
          <p className="text-sm sm:text-[15px] text-white/80 leading-relaxed">
            <span className="font-semibold text-white">Engineer-in-the-loop.</span>{" "}
            AI accelerates the work, but every output — recognised tags,
            extracted line numbers, validated counts — is reviewed and signed
            off by our engineers before it reaches your model or your asset
            register.
          </p>
        </div>
      </div>
    </section>
  );
}