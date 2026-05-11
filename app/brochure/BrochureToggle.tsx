"use client";

interface Props { selectedBrochure: "product"|"plant"; setSelectedBrochure: (v: "product"|"plant") => void; }
const OPTS = [
  { id: "product" as const, icon: "🛠️", name: "Product Engineering" },
  { id: "plant"   as const, icon: "🏭", name: "Plant Engineering" },
];

export default function BrochureToggle({ selectedBrochure, setSelectedBrochure }: Props) {
  return (
    <div className="inline-flex border border-[#e2e8f0] rounded-2xl p-1.5 gap-1.5 bg-[#fafaf8]" role="tablist">
      {OPTS.map(o => (
        <button key={o.id} role="tab" aria-selected={selectedBrochure===o.id} onClick={() => setSelectedBrochure(o.id)}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-sans text-[13px] font-semibold tracking-wide transition-all duration-200 ${
            selectedBrochure===o.id ? "bg-[#003C46] text-white shadow-sm" : "text-[#718096] hover:text-[#003C46]"
          }`}>
          <span>{o.icon}</span><span className="whitespace-nowrap">{o.name}</span>
        </button>
      ))}
    </div>
  );
}
