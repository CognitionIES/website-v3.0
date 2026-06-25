"use client";

import React from "react";
import { Wrench, Target, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Wrench,
    number: "01",
    title: "Deep Expertise",
    description:
      "With hands-on experience implementing Service CPQ, our team ensures a seamless rollout and smooth integration into your existing ecosystem.",
  },
  {
    icon: Target,
    number: "02",
    title: "Full Customization",
    description:
      "No two businesses are alike. We customize every Service CPQ deployment to align with your operational goals, ensuring maximum efficiency and ROI.",
  },
  {
    icon: Handshake,
    number: "03",
    title: "End-to-End Support",
    description:
      "From first consultation to long-term post-implementation assistance, our dedicated experts are with you at every stage of the journey.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#E6F0F5]/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Our Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Why Choose Cognition IES for Service CPQ?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-[#E6F0F5] rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-[#0098af]/10 rounded-xl flex items-center justify-center">
                    <Icon className="h-6 w-6 text-[#0098af]" />
                  </div>
                  <span className="text-3xl font-bold text-[#0098af]/20">
                    {reason.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#003C46] mb-3">
                  {reason.title}
                </h3>
                <p className="text-[#5b5b5b] leading-relaxed text-sm">
                  {reason.description}
                </p>
                <div className="mt-6 h-0.5 w-10 bg-[#0098af] rounded-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;