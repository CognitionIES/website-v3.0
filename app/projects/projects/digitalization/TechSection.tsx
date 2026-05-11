"use client";

const technologies = [
  { title: "3D Laser Scanning", desc: "High-precision spatial data acquisition equipment for accurate facility mapping." },
  { title: "AI-Powered Analysis", desc: "Validate and cross-check scan data against engineering designs and specifications." },
  { title: "Digital Twin Platform", desc: "Create and manage an intelligent, living digital replica of the physical facility." },
  { title: "Dashboard & Visualisation", desc: "Real-time monitoring, analytics, and stakeholder-facing performance dashboards." },
];

const clientFeedback = {
  quote:
    "This digital transformation has fundamentally changed how we operate. We now have a living, breathing model of our plant that helps us plan better, run smoother, and grow smarter.",
  cite: "Head of Operations, Confidential Client",
};

export default function TechSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#E6F0F5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Technologies Used &amp; Client Feedback
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6 lg:gap-8">
          {/* Technologies */}
          <div className="md:col-span-3 bg-white border border-gray-100 rounded-xl shadow-sm p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-[#003C46] mb-5">
              Technologies Used
            </h3>
            <ul className="space-y-4">
              {technologies.map((tech, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0098af] shrink-0" />
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-[#003C46]">{tech.title}</p>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{tech.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Feedback */}
          <div className="md:col-span-2 bg-[#003C46] rounded-xl shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-5">
              Client Feedback
            </h3>
            <blockquote className="border-l-4 border-[#0098af] pl-4 text-sm sm:text-base text-white/80 italic leading-relaxed flex-1">
              &ldquo;{clientFeedback.quote}&rdquo;
            </blockquote>
            <cite className="not-italic block text-right text-xs sm:text-sm text-white/40 mt-4">
              — {clientFeedback.cite}
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
