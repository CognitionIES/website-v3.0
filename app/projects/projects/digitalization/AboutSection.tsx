"use client";

import Image from "next/image";
import aboutImage from "@/constants/images/projects/digitalization/about.jpg";

export default function AboutSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#E6F0F5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Project Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Background &amp; Challenge
          </h2>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-md">
          <div className="relative h-[240px] sm:h-[380px] lg:h-[440px]">
            <Image
              src={aboutImage}
              alt="Digitalization project background"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-[#003C46]/60" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10 lg:p-14">
            <div className="max-w-3xl space-y-4">
              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                The client, a reputed industrial chemical manufacturer, faced
                challenges in scaling production due to manual processes, lack
                of real-time plant performance visibility, and inefficient data
                communication across departments. Errors in equipment layout and
                installation further caused delays and cost overruns.
              </p>
              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                Cognition IES was approached to spearhead a complete digital
                transformation — building a fully integrated, intelligent digital
                ecosystem from layout validation through to live production monitoring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
