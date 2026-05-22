"use client";

import Image from "next/image";
import outcomeImage from "@/constants/images/projects/digitalization/outcome.jpg";

const outcomes = [
  { title: "Improved Accuracy",       content: "3D validation reduced layout deviations drastically, saving hours in installation rework." },
  { title: "Operational Efficiency",  content: "Downtime was minimised through real-time alerts and predictive maintenance insights." },
  { title: "Energy Optimisation",     content: "Monitoring and simulation helped reduce energy consumption per unit produced." },
  { title: "Scalable Infrastructure", content: "The platform is future-ready and adaptable for upcoming automation and robotics integration." },
  { title: "Better Visibility",       content: "Stakeholders can now access real-time status, performance metrics, and alerts via a centralised dashboard." },
];

const metrics = [
  { metric: "Layout Error Rate",   before: "~8%",             after: "<2%",             improvement: "75% reduction" },
  { metric: "Production Downtime", before: "12 hrs / month",  after: "<3 hrs / month",  improvement: "75% reduction" },
  { metric: "Rework Incidents",    before: "5+ / month",      after: "0",               improvement: "Eliminated" },
];

export default function OutcomeSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#E6F0F5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-3">
            Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Key Results &amp; Outcomes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed">
            Measurable impact delivered across accuracy, efficiency, and operational visibility.
          </p>
        </div>

        {/* Metrics bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {metrics.map((m) => (
            <div key={m.metric} className="bg-[#003C46] rounded-xl p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">{m.metric}</p>
              <div className="flex items-end justify-between gap-2">
                <div>
                  <p className="text-xs text-white/40 mb-0.5">Before</p>
                  <p className="text-base font-medium text-white/60 line-through decoration-white/30">{m.before}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#0098af] mb-0.5">After</p>
                  <p className="text-xl sm:text-2xl font-bold text-white">{m.after}</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <span className="text-xs font-semibold text-[#0098af]">{m.improvement}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detail grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          <div className="relative h-[260px] sm:h-[340px] md:h-full min-h-[260px] rounded-xl overflow-hidden shadow-md">
            <Image
              src={outcomeImage}
              alt="Outcome of digitalization project"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="md:col-span-2 bg-white border border-gray-100 rounded-xl shadow-sm p-5 sm:p-6">
            <h3 className="text-base font-semibold text-[#003C46] mb-4">Qualitative Outcomes</h3>
            <ul className="space-y-4">
              {outcomes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0098af] shrink-0" />
                  <div>
                    <span className="text-sm sm:text-base font-semibold text-[#003C46]">{item.title}</span>
                    <span className="text-sm sm:text-base text-gray-500 leading-relaxed">{item.content}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
