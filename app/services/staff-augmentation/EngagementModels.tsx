"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Target, FileText } from "lucide-react";

interface Model {
  id: string;
  title: string;
  description: string;
  bestFor: string;
  icon: ReactNode;
}

// The same four models presented on the homepage, kept consistent.
const models: Model[] = [
  {
    id: "time-material",
    title: "Time & Material",
    description:
      "Pay for the hours you use, at transparent rates. Best while scope is still taking shape.",
    bestFor: "Evolving scope",
    icon: <Clock className="w-[18px] h-[18px]" />,
  },
  {
    id: "dedicated-team",
    title: "Dedicated Team",
    description:
      "Engineers who work exclusively for you, as a long-term extension of your in-house team.",
    bestFor: "Ongoing workload",
    icon: <Users className="w-[18px] h-[18px]" />,
  },
  {
    id: "project-hiring",
    title: "Project-Based",
    description:
      "A team assembled around one project and its timeline, with the skills the deliverables call for.",
    bestFor: "Defined project",
    icon: <Target className="w-[18px] h-[18px]" />,
  },
  {
    id: "fixed-price",
    title: "Fixed Price",
    description:
      "A set price for a well-defined scope, billed against milestones agreed up front.",
    bestFor: "Clear scope",
    icon: <FileText className="w-[18px] h-[18px]" />,
  },
];

export default function EngagementModels() {
  return (
    <section id="engagement-models" className="w-full py-20 sm:py-24 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Eyebrow + hairline */}
        <div className="flex items-center gap-6 mb-14">
          <span className="eyebrow !mb-0">Engagement Models</span>
          <motion.div
            className="flex-1 h-px bg-[#e2e8f0] origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] leading-tight">
              Engage the way the work demands.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[#5b5b5b] leading-relaxed lg:pt-2">
              Four commercial models, onsite or offshore. Pick one, mix them, or
              tell us the situation and we&apos;ll recommend a fit.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e2e8f0] border border-[#e2e8f0] rounded-2xl overflow-hidden">
          {models.map((model, i) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white p-7 flex flex-col min-h-[230px] hover:bg-[#003C46] transition-colors duration-300"
            >
              <span className="inline-flex w-10 h-10 rounded-lg bg-[#0098af]/10 text-[#0098AF] items-center justify-center mb-5 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                {model.icon}
              </span>
              <h3 className="text-lg font-semibold text-[#003C46] group-hover:text-white transition-colors duration-300">
                {model.title}
              </h3>
              <p className="mt-2 text-sm text-[#5b5b5b] leading-relaxed flex-1 group-hover:text-white/70 transition-colors duration-300">
                {model.description}
              </p>
              <p className="mt-5 pt-4 border-t border-[#eef2f5] group-hover:border-white/15 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0098AF] group-hover:text-[#99D5DF] transition-colors duration-300">
                {model.bestFor}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
