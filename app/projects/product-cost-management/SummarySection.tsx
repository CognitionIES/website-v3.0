"use client";

import { TrendingUp, BarChart2, Target, Award, CheckCircle2 } from "lucide-react";

const summaryGains = [
  { label: "35% cost of goods reduction",                             icon: TrendingUp },
  { label: "50% margin increase",                                      icon: BarChart2 },
  { label: "Improved market position with competitive SKUs",           icon: Target },
  { label: "Engineering backbone for scalable SKU platforming",        icon: Award },
  { label: "Data-driven, modular, manufacturing-friendly design",      icon: CheckCircle2 },
];

const businessImpacts = [
  { metric: "Manufacturing Cost per Unit",  before: "100%",          after: "65%" },
  { metric: "Gross Profit Margin",          before: "~30%",          after: "45–50%" },
  { metric: "Component Count (avg.)",       before: "High",          after: "Reduced" },
  { metric: "Part Standardisation",         before: "Fragmented",    after: "Streamlined" },
  { metric: "Engineering Complexity",       before: "High",          after: "Optimised" },
  { metric: "Time-to-Market (future SKUs)", before: "100% baseline", after: "~70% baseline" },
];

export default function SummarySection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#E6F0F5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-3">
            Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Summary of Gains &amp; Business Impact
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed">
            The quantified and qualitative outcomes delivered through the PCM engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Business Impact Table */}
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
            <div className="bg-[#003C46] px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0098af]">Before vs After</p>
              <h3 className="text-lg font-bold text-white mt-0.5">Business Impact</h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Metric</th>
                  <th className="text-center px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Before</th>
                  <th className="text-center px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#0098af]">After</th>
                </tr>
              </thead>
              <tbody>
                {businessImpacts.map((impact, idx) => (
                  <tr key={idx} className={`border-t border-gray-50 ${idx % 2 === 1 ? "bg-[#E6F0F5]/20" : ""}`}>
                    <td className="px-5 py-3.5 text-sm font-medium text-[#003C46]">{impact.metric}</td>
                    <td className="px-4 py-3.5 text-center text-sm text-gray-400">{impact.before}</td>
                    <td className="px-4 py-3.5 text-center text-sm font-semibold text-[#0098af]">{impact.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary of Gains */}
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
            <div className="bg-[#003C46] px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0098af]">Outcomes</p>
              <h3 className="text-lg font-bold text-white mt-0.5">Summary of Gains</h3>
            </div>
            <div className="p-5 sm:p-6 space-y-3">
              {summaryGains.map((gain, idx) => {
                const Icon = gain.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#E6F0F5]/30 border border-[#E6F0F5] hover:border-[#0098af]/30 hover:bg-[#E6F0F5]/60 transition-all duration-200"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-[#0098af]/10 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-[#0098af]" />
                    </div>
                    <span className="text-sm sm:text-base text-[#003C46] font-medium leading-snug">{gain.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
