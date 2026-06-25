"use client";

import React from "react";
import { Factory, Stethoscope, Hammer, Zap, Tractor } from "lucide-react";
import { motion } from "framer-motion";

const industriesData = [
  {
    icon: Factory,
    title: "HVAC Manufacturers & Partners",
    description:
      "Enhance collaboration with partners and streamline product support to deliver faster, more reliable after-sales service.",
  },
  {
    icon: Tractor,
    title: "Heavy Equipment & Construction",
    description:
      "Optimize field service operations, manage complex warranty claims, and reduce equipment downtime with intelligent workflows.",
  },
  {
    icon: Stethoscope,
    title: "Medical Equipment",
    description:
      "Ensure regulatory compliance, improve service quality, and support critical equipment uptime for better patient outcomes.",
  },
  {
    icon: Hammer,
    title: "CNC Machinery",
    description:
      "Boost parts and service revenue through self-service portals, smart service quoting, and predictive maintenance tools.",
  },
  {
    icon: Zap,
    title: "Electrical & Solar Manufacturers",
    description:
      "Improve warranty tracking, automate service contract renewals, and enhance customer satisfaction through digital service enablement.",
  },
];

const Industries = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Sector Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] mb-4">
            Industries We Serve
          </h2>
          <p className="text-[#5b5b5b] max-w-2xl mx-auto">
            Tailored after-sales solutions for manufacturers across diverse
            sectors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white border border-[#E6F0F5] rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden relative"
              >
                <div className="h-0.5 w-full bg-gradient-to-r from-[#0098af] to-[#0098af]/20 rounded-full mb-6" />
                <div className="w-11 h-11 bg-[#0098af]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0098af]/20 transition-colors duration-200">
                  <Icon className="h-5 w-5 text-[#0098af]" />
                </div>
                <h3 className="text-base font-semibold text-[#003C46] mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-[#5b5b5b] leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;