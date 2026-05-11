"use client";

import React, { useState } from "react";
import {
  Zap,
  Settings,
  Bot,
  DollarSign,
  FileText,
  ClipboardCheck,
  Database,
  Wrench,
  Users,
  Activity,
  ShoppingCart,
  Package,
  Brain,
  Globe,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const featureCategories = [
  {
    id: "cpq",
    title: "AI-Powered CPQ",
    icon: Zap,
    features: [
      {
        icon: Settings,
        title: "Intelligent Service Configuration",
        description:
          "Design and customize maintenance plans, repair options, and parts agreements through an intuitive guided interface.",
      },
      {
        icon: DollarSign,
        title: "Dynamic Pricing Engine",
        description:
          "Utilize AI to calculate real-time pricing based on equipment usage, service lifecycle, breakdown nature, and market conditions.",
      },
      {
        icon: FileText,
        title: "Automated Quote Generation",
        description:
          "Create accurate, detailed quotes using natural language inputs — streamlining even the most complex service configurations.",
      },
      {
        icon: ClipboardCheck,
        title: "Customizable Workflows",
        description:
          "Integrate effortlessly with CRM and ERP systems to adapt CPQ processes to your unique business operations.",
      },
    ],
  },
  {
    id: "warranty",
    title: "Warranty & Claims",
    icon: Database,
    features: [
      {
        icon: Bot,
        title: "Automated Processing",
        description:
          "Leverage AI to automate warranty claims, minimizing manual efforts and significantly reducing processing time.",
      },
      {
        icon: Clock,
        title: "Real-Time Tracking",
        description:
          "Track claim statuses in real-time and gain insights into frequent part failures and overall warranty costs.",
      },
      {
        icon: ClipboardCheck,
        title: "Compliance Assurance",
        description:
          "Ensure adherence to global and regional warranty regulations with built-in compliance checks.",
      },
    ],
  },
  {
    id: "repair",
    title: "Repair Management",
    icon: Wrench,
    features: [
      {
        icon: ClipboardCheck,
        title: "Streamlined Workflows",
        description:
          "Manage repair jobs end-to-end — from service request intake to job completion, with integrated billing and invoicing.",
      },
      {
        icon: Users,
        title: "Technician Efficiency",
        description:
          "Optimize scheduling and dispatch using technician availability and skill-based matching for better job allocation.",
      },
      {
        icon: Activity,
        title: "Performance Analytics",
        description:
          "Gain actionable insights into repair trends, bottlenecks, and service quality for continuous improvement.",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "B2B E-Commerce",
    icon: ShoppingCart,
    features: [
      {
        icon: Package,
        title: "Unified Product Catalog",
        description:
          "Display all spare parts, consumables, and service packages in one centralized and searchable portal.",
      },
      {
        icon: ClipboardCheck,
        title: "Order Management",
        description:
          "Simplify order placement, payment, and confirmation — accelerating order fulfillment and customer satisfaction.",
      },
      {
        icon: Brain,
        title: "AI-Led Inventory Optimization",
        description:
          "Use predictive analytics to forecast demand and maintain ideal inventory levels across your network.",
      },
      {
        icon: Globe,
        title: "Global Scalability",
        description:
          "Support multi-currency, multilingual operations — enabling global sales and service reach with ease.",
      },
    ],
  },
];

const KeyFeatures = () => {
  const [activeCategory, setActiveCategory] = useState("cpq");
  const active = featureCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="key-features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Platform Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] mb-4">
            Key Features of Service CPQ
          </h2>
          <p className="text-[#5b5b5b] max-w-2xl mx-auto">
            Comprehensive solutions designed for modern after-sales service
            operations.
          </p>
        </div>

        {/* Tab strip */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {featureCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-[#0098af] text-white border-[#0098af] shadow-md"
                    : "bg-white text-[#5b5b5b] border-gray-200 hover:border-[#0098af] hover:text-[#0098af]"
                }`}
              >
                <Icon className="h-4 w-4" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Feature grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {active.features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-[#E6F0F5]/40 border border-[#E6F0F5] rounded-xl p-6 hover:shadow-md hover:border-[#0098af]/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-[#0098af]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-[#0098af]" />
                  </div>
                  <h4 className="text-base font-semibold text-[#003C46] mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-[#5b5b5b] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default KeyFeatures;