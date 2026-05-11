"use client";

import Image from "next/image";

const approachImage = "/images/projects/pcm/pcm-approach.jpg";

const sections = [
  {
    title: "Cost Analysis & Optimisation",
    points: [
      "Conducted a thorough review of material costs, design efficiency, and manufacturing processes.",
      "Applied value engineering principles to identify cost-saving opportunities.",
      "Implemented should-costing methodologies to drive supplier negotiations.",
    ],
  },
  {
    title: "Physical Benchmarking",
    points: [
      "Performed hands-on analysis of competitor equipment to gain actionable insights.",
      "Compared product performance and material choices against industry standards.",
      "Leveraged reverse engineering to understand competitor cost structures.",
    ],
  },
  {
    title: "Applied VAVE Method",
    points: [
      "Utilised VAVE methodology to optimise design and manufacturing simultaneously.",
      "Focused on enhancing product value while reducing unnecessary costs.",
      "Implemented a phased approach with regular feedback loops to refine recommendations.",
    ],
  },
  {
    title: "Cross-functional Collaboration",
    points: [
      "Engaged with client teams across engineering, procurement, and operations.",
      "Facilitated workshops to identify and implement cost-saving opportunities.",
      "Provided training and knowledge transfer to internal teams for continuous improvement.",
    ],
  },
];

export default function ApproachSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#E6F0F5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Cognition&apos;s PCM Approach
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Approach steps */}
          <div className="lg:col-span-2 space-y-4">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-xl p-5 sm:p-6 shadow-sm"
              >
                <h3 className="text-sm sm:text-base font-bold text-[#003C46] mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0098af]/10 text-[#0098af] text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  {section.title}
                </h3>
                <ul className="space-y-2 pl-8">
                  {section.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-600">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0098af] shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sticky image */}
          <div className="hidden lg:block relative h-[480px] rounded-xl overflow-hidden shadow-md sticky top-24">
            <Image
              src={approachImage}
              alt="PCM approach"
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
