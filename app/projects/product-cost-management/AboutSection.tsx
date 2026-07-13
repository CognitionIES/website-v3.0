"use client";

import Image from "next/image";

const aboutImage = "/images/projects/pcm/project-overview.webp";

export default function AboutSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-3">
            Project Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Client &amp; Project Overview
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed">
            The context behind the engagement and the strategic goals that shaped the scope of work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-md order-last md:order-first">
            <Image
              src={aboutImage}
              alt="Client profile and project overview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/40 to-transparent" />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0098af]">Client Profile</p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                A leading North American manufacturer of high-performance outdoor power tools,
                log splitters, pressure washers, and air compressors, serving both commercial
                and residential markets.
              </p>
            </div>
            <div className="w-full h-px bg-gray-100" />
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0098af]">Project Overview</p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                A complete cost transformation and design refinement of the Log Splitter lineup.
                The goal was to maintain product quality and safety while achieving substantial
                cost reductions through Cognition&apos;s PCM approach, uncovering inefficiencies,
                benchmarking competitors, and proposing high-impact design optimisations.
              </p>
            </div>

            {/* Outcome callouts */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { value: "35%", label: "Cost of goods reduction" },
                { value: "50%", label: "Margin improvement" },
              ].map((s) => (
                <div key={s.label} className="p-4 bg-[#E6F0F5]/40 rounded-xl border border-[#E6F0F5]">
                  <p className="text-2xl font-bold text-[#0098af]">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
