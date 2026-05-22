"use client";
import React from "react";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6F0F5]/60 via-white to-[#0098af]/10 -z-10" />

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0098af]/8 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 -left-16 w-72 h-72 bg-[#003C46]/6 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 bg-[#0098af] rounded-full" />
            AI-Powered After-Sales Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#003C46] mb-6 leading-tight"
          >
            Intelligent After-Sales,{" "}
            <span className="text-[#0098af]">All-in-One</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#5b5b5b] mb-10 leading-relaxed"
          >
            AI-powered platform unifying claims, Configure Price Quote (CPQ),
            and repair workflows, turning after-sales from a cost centre into a
            growth engine.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0098af] text-white px-8 py-3.5 rounded-md font-medium transition-all duration-300 hover:bg-[#003C46] focus:outline-none focus:ring-2 focus:ring-[#0098af]/50 focus:ring-offset-2 group w-full sm:w-auto"
            >
              Book a Free Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://www.youtube.com/@AuxentiosTechnology/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#0098af] text-[#0098af] px-8 py-3.5 rounded-md font-medium transition-all duration-300 hover:bg-[#0098af] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0098af]/50 focus:ring-offset-2 w-full sm:w-auto"
            >
              <Play className="h-4 w-4" />
              Watch Demo
            </a>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {[
              { value: "30%", label: "Faster Claims" },
              { value: "3×", label: "Quote Speed" },
              { value: "98%", label: "Uptime SLA" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-[#0098af]">{stat.value}</p>
                <p className="text-xs text-[#5b5b5b] mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;