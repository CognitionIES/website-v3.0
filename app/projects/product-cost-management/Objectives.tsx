"use client";

const clientObjectives = [
  "Manufacturing cost reduction",
  "Improve margins up to 50%",
  "Move down the price ladder",
  "Re-imagine product architecture",
  "Benchmarking with market leaders",
  "Reverse engineering of competitor models",
  "Process quality enhancement",
  "Factor of safety validation on re-engineered parts",
];

const businessPerspective = [
  { group: "Market Positioning", points: ["Enhance brand value and product appeal", "Compete more aggressively on the price ladder"] },
  { group: "Revenue Growth",     points: ["Increased margins with cost-effective designs", "Expand customer base with optimised SKUs"] },
];

export default function Objectives() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#E6F0F5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-3">
            Objectives
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Client Objectives &amp; Business Perspective
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed">
            What the client needed to achieve and the business rationale driving each priority.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Client Objectives */}
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
            <div className="bg-[#003C46] px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0098af]">Client Objectives</p>
              <h3 className="text-lg font-bold text-white mt-0.5">What they needed to achieve</h3>
            </div>
            <ul className="divide-y divide-gray-50">
              {clientObjectives.map((item, i) => (
                <li key={i} className="flex items-start gap-3 px-6 py-3.5 hover:bg-[#E6F0F5]/20 transition-colors">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-[#0098af]/10 text-[#0098af] text-[10px] font-bold flex items-center justify-center mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm sm:text-base text-gray-600 leading-snug">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Perspective */}
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
            <div className="bg-[#003C46] px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0098af]">Business Perspective</p>
              <h3 className="text-lg font-bold text-white mt-0.5">The strategic rationale</h3>
            </div>
            <div className="p-6 space-y-6">
              {businessPerspective.map((group) => (
                <div key={group.group}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#0098af] mb-3">
                    {group.group}
                  </p>
                  <ul className="space-y-2.5">
                    {group.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0098af] shrink-0" />
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
