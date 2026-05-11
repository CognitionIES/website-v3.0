"use client";

const scopeItems = [
  {
    number: "01",
    title: "Dimensional Laser Survey Scanning",
    desc: "Conducted high-precision 3D scans of the facility to capture accurate spatial data, ensuring a comprehensive digital representation of the plant layout.",
  },
  {
    number: "02",
    title: "Digital Dimensional Control",
    desc: "Utilised AI-powered software to validate laser survey scans against engineering designs and P&IDs, identifying necessary adjustments before fabrication and installation.",
  },
  {
    number: "03",
    title: "Intelligent Digital Twin Creation",
    desc: "Developed a dynamic digital twin of the facility, integrating real-time data and enabling simulation of operational scenarios for proactive decision-making.",
  },
  {
    number: "04",
    title: "Software Application Integration",
    desc: "Implemented a suite of applications within the digital twin to drive efficiencies across departments — maintenance scheduling, inventory management, and performance analytics.",
  },
  {
    number: "05",
    title: "Evergreen Programme Implementation",
    desc: "Established a continuous update mechanism to maintain the accuracy and relevance of the digital twin, ensuring it reflects real-time changes in the facility.",
  },
];

export default function ScopeSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-3">
            Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Scope of Work
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed">
            Five interconnected workstreams that together formed the complete digital transformation programme.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden sm:block absolute left-[22px] top-3 bottom-3 w-px bg-gradient-to-b from-[#0098af]/40 via-[#0098af]/20 to-transparent" />

          <div className="space-y-4">
            {scopeItems.map((item, i) => (
              <div key={i} className="flex gap-5 group">
                {/* Number node */}
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white border-2 border-[#0098af]/30 group-hover:border-[#0098af] group-hover:bg-[#0098af] flex items-center justify-center transition-all duration-200 z-10 shadow-sm">
                  <span className="text-[11px] font-bold text-[#0098af] group-hover:text-white transition-colors duration-200 tabular-nums">
                    {item.number}
                  </span>
                </div>

                {/* Card */}
                <div className="flex-1 pb-4">
                  <div className="bg-white border border-gray-100 rounded-xl p-5 sm:p-6 shadow-sm group-hover:border-[#0098af]/20 group-hover:shadow-md transition-all duration-200">
                    <p className="text-sm sm:text-base font-semibold text-[#003C46] mb-1.5">
                      {item.title}
                    </p>
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
