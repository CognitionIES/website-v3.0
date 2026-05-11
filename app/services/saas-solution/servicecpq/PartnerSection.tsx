"use client";

import React from "react";
import { motion } from "framer-motion";

const PartnerSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#E6F0F5]/40 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-6">
            Authorized Dealer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] mb-6">
            Powered by Service CPQ, Delivered by Cognition IES
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            As an authorized dealer of Service CPQ, Cognition IES offers
            cutting-edge, AI-driven after-sales solutions tailored for
            manufacturers, dealers, and service organizations. Our collaboration
            brings a unified platform that streamlines warranty management,
            enhances repair workflows, and accelerates service quoting — all in
            one place.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSection;