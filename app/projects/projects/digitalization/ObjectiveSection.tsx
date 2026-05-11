"use client";

import Image from "next/image";
import objectiveImage from "@/constants/images/projects/digitalization/objective.jpg";

export default function ObjectiveSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Objective
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Project Objective
          </h2>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-md">
          <div className="relative h-[240px] sm:h-[340px] lg:h-[400px]">
            <Image
              src={objectiveImage}
              alt="Project objective"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-[#003C46]/55" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10 lg:p-14">
            <div className="sm:ml-auto sm:w-3/5">
              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                To transform a traditionally operated manufacturing plant into a
                data-driven, smart facility by implementing advanced digital
                tools, real-time monitoring, and process optimisation systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
