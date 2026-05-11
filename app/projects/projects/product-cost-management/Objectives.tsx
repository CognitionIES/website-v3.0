"use client";

import Image from "next/image";

const objectiveImage  = "/images/projects/pcm/objective.jpg";
const objectiveImage2 = "/images/projects/pcm/objective-two.jpg";

const clientObjectives = [
  "Manufacturing Cost Reduction",
  "Improve Margins up to 50%",
  "Move Down the Price Ladder",
  "Re-imagine Product Architecture",
  "Benchmarking with Market Leaders",
  "Reverse Engineering of Competitor Models",
  "Process Quality Enhancement",
  "Factor of Safety Validation on Re-engineered Parts",
];

const businessPerspective = {
  marketPositioning: [
    "Enhance brand value and product appeal",
    "Compete more aggressively on the price ladder",
  ],
  revenueGrowth: [
    "Increased margins with cost-effective designs",
    "Expand customer base with optimised SKUs",
  ],
};

export default function Objectives() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Objectives
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Client Objectives &amp; Business Perspective
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Client Objectives */}
          <div className="relative rounded-xl overflow-hidden shadow-md min-h-[320px]">
            <Image
              src={objectiveImage}
              alt="Client objectives"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#003C46]/65" />
            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0098af] mb-4">
                Client Objectives
              </p>
              <div className="grid grid-cols-1 gap-y-2">
                {clientObjectives.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0098af] shrink-0" />
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Business Perspective */}
          <div className="relative rounded-xl overflow-hidden shadow-md min-h-[320px]">
            <Image
              src={objectiveImage2}
              alt="Business perspective"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#003C46]/65" />
            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0098af] mb-5">
                Business Perspective
              </p>
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                    Market Positioning
                  </p>
                  {businessPerspective.marketPositioning.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 mb-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0098af] shrink-0" />
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                    Revenue Growth
                  </p>
                  {businessPerspective.revenueGrowth.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 mb-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0098af] shrink-0" />
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
