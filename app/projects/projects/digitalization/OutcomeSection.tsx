"use client";

import Image from "next/image";
import outcomeImage from "@/constants/images/projects/digitalization/outcome.jpg";

const outcomes = [
  { title: "Improved Accuracy",        content: "3D validation reduced layout deviations drastically, saving hours in installation rework." },
  { title: "Operational Efficiency",   content: "Downtime was minimised through real-time alerts and predictive maintenance insights." },
  { title: "Energy Optimisation",      content: "Monitoring and simulation helped reduce energy consumption per unit produced." },
  { title: "Scalable Infrastructure",  content: "The platform is future-ready and adaptable for upcoming automation and robotics integration." },
  { title: "Better Visibility",        content: "Stakeholders can now access real-time status, performance metrics, and alerts via a centralised dashboard." },
];

const metrics = [
  { metric: "Layout Error Rate",        before: "~8%",             after: "<2%" },
  { metric: "Production Downtime",      before: "12 hrs / month",  after: "<3 hrs / month" },
  { metric: "Rework — fit issues",      before: "5+ incidents/mo", after: "0 incidents" },
];

export default function OutcomeSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Key Results &amp; Outcomes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Image */}
          <div className="relative h-56 sm:h-72 md:h-full min-h-[320px] rounded-xl overflow-hidden shadow-md">
            <Image
              src={outcomeImage}
              alt="Outcome of digitalization project"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Outcomes list + table */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 sm:p-6">
              <ul className="space-y-3">
                {outcomes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0098af] shrink-0" />
                    <span>
                      <span className="font-semibold text-[#003C46]">{item.title}: </span>
                      {item.content}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#003C46] text-white">
                    <th className="px-4 py-3 font-semibold uppercase text-left text-xs tracking-wider">Metric</th>
                    <th className="px-4 py-3 font-semibold uppercase text-center text-xs tracking-wider">Before</th>
                    <th className="px-4 py-3 font-semibold uppercase text-center text-xs tracking-wider">After</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#E6F0F5]/30"}>
                      <td className="px-4 py-3 text-[#003C46] font-medium border-t border-gray-100">{row.metric}</td>
                      <td className="px-4 py-3 border-t border-gray-100 text-center text-gray-500">{row.before}</td>
                      <td className="px-4 py-3 border-t border-gray-100 text-center text-[#0098af] font-semibold">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
