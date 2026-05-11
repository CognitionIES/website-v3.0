"use client";

const technologies = [
  { title: "3D Laser Scanning", desc: "High-precision spatial data acquisition for accurate facility mapping and as-built documentation." },
  { title: "AI-Powered Analysis", desc: "Cross-check scan data against engineering designs and P&IDs to identify deviations before fabrication." },
  { title: "Digital Twin Platform", desc: "Create and maintain an intelligent, living digital replica of the physical facility." },
  { title: "Dashboard & Visualisation", desc: "Real-time monitoring, performance analytics, and alerts for stakeholders across the organisation." },
];

const clientFeedback = {
  quote: "This digital transformation has fundamentally changed how we operate. We now have a living, breathing model of our plant that helps us plan better, run smoother, and grow smarter.",
  cite: "Head of Operations",
  company: "Confidential Client",
};

export default function TechSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-3">
            Technology &amp; Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Technologies Used
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed">
            The toolstack that powered the transformation, and what the client had to say.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Technologies — 3 cols */}
          <div className="md:col-span-3 space-y-3">
            {technologies.map((tech, i) => (
              <div key={i} className="flex gap-4 p-4 sm:p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#0098af]/20 hover:shadow-md transition-all duration-200">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-[#0098af]/10 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-[#0098af] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#003C46] mb-0.5">{tech.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Client Feedback — 2 cols */}
          <div className="md:col-span-2 bg-[#003C46] rounded-xl shadow-sm p-6 sm:p-8 flex flex-col h-full">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-6">
              Client Feedback
            </p>
            <blockquote className="flex-1">
              <p className="text-base sm:text-lg text-white/85 italic leading-relaxed">
                &ldquo;{clientFeedback.quote}&rdquo;
              </p>
            </blockquote>
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0098af]/20 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-[#0098af]">
                  {clientFeedback.cite.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white/80">{clientFeedback.cite}</p>
                <p className="text-xs text-white/40">{clientFeedback.company}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
