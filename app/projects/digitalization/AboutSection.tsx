"use client";

import Image from "next/image";
import aboutImage from "@/constants/images/projects/digitalization/about.jpg";

export default function AboutSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-3">
            Project Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Background &amp; Challenge
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed">
            The context that shaped the engagement and the core problem Cognition IES was brought in to solve.
          </p>
        </div>

        {/* Two-column text + image */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-5">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              The client, a reputed industrial chemical manufacturer, faced challenges in scaling
              production due to manual processes, a lack of real-time plant performance
              visibility, and inefficient data communication across departments. Errors in
              equipment layout and installation further caused delays and cost overruns.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Cognition IES was engaged to lead a complete digital transformation — building a
              fully integrated, intelligent digital ecosystem from layout validation through to
              live production monitoring.
            </p>

            {/* Stat callouts */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { value: "8%", label: "Layout error rate before engagement" },
                { value: "12 hrs", label: "Monthly production downtime" },
              ].map((s) => (
                <div key={s.label} className="p-4 bg-[#E6F0F5]/40 rounded-xl border border-[#E6F0F5]">
                  <p className="text-2xl font-bold text-[#0098af]">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[300px] sm:h-[380px] rounded-xl overflow-hidden shadow-md">
            <Image
              src={aboutImage}
              alt="Digitalization project background"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/30 to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
}
