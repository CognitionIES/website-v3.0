"use client";

import {
  Table, TableHeader, TableRow, TableHead,
  TableBody, TableCell,
} from "@/components/ui/table";
import { TrendingUp, BarChart2, Target, Award, CheckCircle } from "lucide-react";

const summaryGains = [
  { label: "35% Cost of Goods Reduction",                              icon: TrendingUp },
  { label: "50% Margin Increase",                                      icon: BarChart2 },
  { label: "Improved market position with competitive SKUs",           icon: Target },
  { label: "Engineering backbone for scalable SKU platforming",        icon: Award },
  { label: "Data-driven, modular, manufacturing-friendly design",      icon: CheckCircle },
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
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Summary of Gains &amp; Business Impact
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Business Impact Table */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#003C46] mb-4">
              Business Impact
            </h3>
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="bg-[#003C46] text-white font-semibold uppercase text-xs tracking-wider">Metric</TableHead>
                    <TableHead className="bg-[#003C46] text-white font-semibold uppercase text-xs tracking-wider text-center">Before</TableHead>
                    <TableHead className="bg-[#003C46] text-white font-semibold uppercase text-xs tracking-wider text-center">After</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {businessImpacts.map((impact, idx) => (
                    <TableRow key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#E6F0F5]/30"}>
                      <TableCell className="font-medium text-[#003C46] border-t border-gray-100 text-sm">{impact.metric}</TableCell>
                      <TableCell className="text-center text-gray-400 border-t border-gray-100 text-sm">{impact.before}</TableCell>
                      <TableCell className="text-center text-[#0098af] font-semibold border-t border-gray-100 text-sm">{impact.after}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Summary of Gains */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#003C46] mb-4">
              Summary of Gains
            </h3>
            <div className="space-y-3">
              {summaryGains.map((gain, idx) => {
                const Icon = gain.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#0098af]/30 hover:shadow-md transition-all duration-200"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-full bg-[#0098af]/10 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-[#0098af]" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-600">{gain.label}</span>
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
