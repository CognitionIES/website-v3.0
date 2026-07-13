"use client";

import Image from "next/image";
import objectiveImage from "@/constants/images/projects/digitalization/objective.webp";

export default function ObjectiveSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#E6F0F5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-3">
            Objective
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Project Objective
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed">
            The single goal that guided every decision throughout the
            engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Image 2 cols */}
          <div className="md:col-span-2 relative h-[260px] sm:h-[340px] rounded-xl overflow-hidden shadow-md">
            <Image
              src={objectiveImage}
              alt="Project objective"
              fill
              className="object-cover object-left-top"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Content 3 cols */}
          <div className="md:col-span-3 space-y-6">
            <div className="p-6 sm:p-8 bg-white border border-gray-100 rounded-xl shadow-sm">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                To transform a traditionally operated manufacturing plant into a
                data-driven, smart facility by implementing advanced digital
                tools, real-time monitoring, and process optimisation systems,
                reducing errors, improving visibility, and enabling sustainable
                scale.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "&lt;2%", label: "Target layout error rate" },
                { value: "&lt;3 hrs", label: "Target monthly downtime" },
                { value: "0", label: "Target rework incidents" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-4 bg-[#003C46] rounded-xl text-center"
                >
                  <p
                    className="text-xl sm:text-2xl font-bold text-[#0098af]"
                    dangerouslySetInnerHTML={{ __html: s.value }}
                  />
                  <p className="text-[11px] text-white/50 mt-1 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
