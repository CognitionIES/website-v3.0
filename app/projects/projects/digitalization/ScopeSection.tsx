"use client";

const scopeItems = [
  {
    title: "Dimensional Laser Survey Scanning",
    desc: "Conducted high-precision 3D scans of the facility to capture accurate spatial data, ensuring a comprehensive digital representation of the plant layout.",
  },
  {
    title: "Digital Dimensional Control",
    desc: "Utilised AI-powered software to validate laser survey scans against engineering designs and P&IDs, identifying necessary adjustments before fabrication and installation.",
  },
  {
    title: "Intelligent Digital Twin Creation",
    desc: "Developed a dynamic digital twin of the facility, integrating real-time data and enabling simulation of operational scenarios for proactive decision-making.",
  },
  {
    title: "Software Application Integration",
    desc: "Implemented a suite of applications within the digital twin to drive efficiencies across departments — maintenance scheduling, inventory management, and performance analytics.",
  },
  {
    title: "Evergreen Programme Implementation",
    desc: "Established a continuous update mechanism to maintain the accuracy and relevance of the digital twin, ensuring it reflects real-time changes in the facility.",
  },
];

export default function ScopeSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#E6F0F5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Scope of Work
          </h2>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
          <ul className="divide-y divide-gray-100">
            {scopeItems.map((item, i) => (
              <li key={i} className="flex gap-4 p-5 sm:p-6 hover:bg-[#E6F0F5]/20 transition-colors">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0098af] shrink-0" />
                <div>
                  <p className="text-sm sm:text-base font-semibold text-[#003C46] mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
