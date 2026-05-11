"use client";

import Image from "next/image";

const aboutImage = "/images/projects/pcm/project-overview.jpg";

export default function AboutSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#E6F0F5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-xl overflow-hidden shadow-md">
          <div className="relative h-[300px] sm:h-[440px] lg:h-[520px]">
            <Image
              src={aboutImage}
              alt="Client profile and project overview"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-[#003C46]/60" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10 lg:p-14">
            <div className="max-w-3xl space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0098af] mb-2">
                  Client Profile
                </p>
                <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Our client is a leading manufacturer in the industrial equipment
                  sector, known for delivering high-performance outdoor power tools
                  such as log splitters, pressure washers, and air compressors.
                  Serving both commercial and residential markets across North America.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0098af] mb-2">
                  Project Overview
                </p>
                <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                  The engagement targeted a complete cost transformation and design
                  refinement of the Log Splitter lineup — maintaining product quality
                  and safety while achieving substantial cost reductions. Cognition&apos;s
                  PCM approach uncovered inefficiencies, benchmarked competitors, and
                  proposed high-impact design optimisations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
