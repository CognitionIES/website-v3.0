"use client";

import { useState, useId, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faPlugCircleBolt, faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons";
import { Cpu, FileText, Layers, Printer, Truck, Workflow } from "lucide-react";

import mechImage1 from "@/constants/images/product/side/mech.webp";
import elecImage1 from "@/constants/images/product/side/elec.webp";
import caeImage1 from "@/constants/images/product/side/cae.webp";
import protoImage1 from "@/constants/images/product/side/prototyping.webp";
import hydraImage1 from "@/constants/images/product/side/hydraulic.webp";
import assetImage1 from "@/constants/images/product/side/asset.webp";
import embeddedImage2 from "@/constants/images/product/side/embedded-1.webp";
import techImage1 from "@/constants/images/product/side/tech.webp";
import supplyImage1 from "@/constants/images/product/side/supply.webp";
import { SOFTWARE_PROFICIENCY } from "@/constants/product-engineering/softwareProficiency";

const services = [
  {
    id: "mechanical-design",
    icon: <FontAwesomeIcon icon={faGears} className="w-5 h-5" />,
    title: "Mechanical Design Services",
    description:
      "From product ideation to performance-driven engineering, our mechanical design services bring concepts to life. We integrate innovation with precision to deliver optimized, manufacturable, and cost-effective solutions tailored to your product's lifecycle.",
    image: mechImage1,
    bullets: [
      "Product Design & Development",
      "Engineering Change Management",
      "Value Engineering & Value Analysis",
      "Digital & Physical Competitive Benchmarking",
      "Product Life Cycle Management",
      "Design Optimization (weight/cost reduction)",
      "2D/3D CAD Drafting & Modeling",
      "Reverse Engineering",
      "CDR, DFM, DFA, DFS, DFR, DFMEA, DVP",
      "Prototyping & Design Validation",
    ],
  },
  {
    id: "electrical-engineering",
    icon: <FontAwesomeIcon icon={faPlugCircleBolt} className="w-5 h-5" />,
    title: "Electrical Engineering Services",
    description:
      "We empower your products with smart, efficient, and robust electrical systems. Our expertise spans circuit design, control systems, and renewable integration to ensure seamless functionality and energy efficiency across applications.",
    image: elecImage1,
    bullets: [
      "Circuit Design & Simulation",
      "System Integration & Testing",
      "PCB Design & Development",
      "Energy Efficiency Design",
      "Harness & Wiring Design",
      "Battery Management Systems (BMS)",
      "Electrical Control Panel Design",
      "Renewable Energy Integration",
    ],
  },
  {
    id: "cae-cfd",
    icon: <FontAwesomeIcon icon={faMagnifyingGlassChart} className="w-5 h-5" />,
    title: "CAE / CFD",
    description:
      "Our simulation-led approach reduces physical testing costs and accelerates design decisions. We apply advanced FEA, CFD, and NVH methods to validate designs with confidence before production.",
    image: caeImage1,
    bullets: [
      "Structural & Thermal FEA",
      "Computational Fluid Dynamics (CFD)",
      "NVH Analysis",
      "Crash & Impact Simulation",
      "Fatigue & Durability Studies",
      "Modal & Harmonic Analysis",
      "Multi-Body Dynamics (MBD)",
      "Optimization & Design Sensitivity",
    ],
  },
  {
    id: "prototyping-3d-printing",
    icon: <Printer className="w-5 h-5" />,
    title: "Prototyping & 3D Printing",
    description:
      "Accelerate your development cycle with rapid, accurate prototypes. From concept models to functional prototypes, we deliver physical validation tools that reduce risk and shorten time to market.",
    image: protoImage1,
    bullets: [
      "Rapid Prototyping (FDM, SLA, SLS)",
      "Functional Prototype Development",
      "Design-for-Manufacturing Validation",
      "Low-Volume Production Runs",
      "Material Selection & Testing",
      "Iterative Design Refinement",
      "Assembly Fit & Form Checks",
    ],
  },
  {
    id: "hydraulic-engineering",
    icon: <Workflow className="w-5 h-5" />,
    title: "Hydraulic Engineering Services",
    description:
      "We design and optimize fluid power systems that are reliable, efficient, and compliant. Our expertise covers the full hydraulic engineering lifecycle, from circuit modeling to field commissioning support.",
    image: hydraImage1,
    bullets: [
      "Hydraulic System Design & Simulation",
      "Hydraulic Circuit Design & Analysis",
      "Component Selection & Sizing",
      "Performance Optimization",
      "Seal & Valve Selection",
      "Manifold Block Design",
      "Compliance & Standards Review",
      "Field Commissioning Support",
    ],
  },
  {
    id: "asset-management",
    icon: <Layers className="w-5 h-5" />,
    title: "Asset Management",
    description:
      "Maximize the life and value of your assets through strategic lifecycle management. Our data-driven approach ensures optimized performance, cost control, and risk mitigation through predictive maintenance and intelligent analytics.",
    image: assetImage1,
    bullets: [
      "Asset Lifecycle Management & Cost Analysis",
      "Spare Parts Optimization",
      "Predictive & Preventive Maintenance Strategies",
      "Asset Valuation & Depreciation Analysis",
      "Performance Monitoring & Optimization",
      "Data Analysis for Asset Utilization",
      "Risk Assessment & Contingency Planning",
      "Enterprise Asset Management (EAM) Implementation",
    ],
  },
  {
    id: "embedded-systems",
    icon: <Cpu className="w-5 h-5" />,
    title: "Embedded Systems Engineering",
    description:
      "Drive innovation with intelligent, connected systems. Our embedded engineering solutions cover the full spectrum, from firmware development to IoT integration, ensuring reliable, scalable performance in today's smart products.",
    image: embeddedImage2,
    bullets: [
      "Microcontroller & Microprocessor Programming",
      "AI & ML Integration",
      "Board Support Packages",
      "Cyber Security for Embedded Systems",
      "Vehicle Telematics",
      "System Testing & Debugging",
      "IoT Device Integration",
      "Prototype Development",
    ],
  },
  {
    id: "technical-publication",
    icon: <FileText className="w-5 h-5" />,
    title: "Technical Publication",
    description:
      "Make complexity simple with clear, user-friendly documentation. We create compliant manuals, illustrated guides, and e-learning tools that ensure accurate communication across stakeholders.",
    image: techImage1,
    bullets: [
      "Technical Manuals & User Guides",
      "Maintenance & Service Manuals",
      "Assembly & Disassembly Instructions",
      "Training Manuals & E-learning Content",
      "Illustrated Parts Catalogs (IPC)",
      "Interactive Electronic Technical Manuals (IETM)",
      "SOPs & Regulatory Documentation",
      "2D/3D Illustrations & Exploded Views",
    ],
  },
  {
    id: "supply-chain-management",
    icon: <Truck className="w-5 h-5" />,
    title: "Supply Chain Management",
    description:
      "Optimize your procurement pipeline and reduce costs with strategic supply chain solutions. From vendor selection to contract execution, we help you build resilient, data-backed sourcing models.",
    image: supplyImage1,
    bullets: [
      "Supplier Sourcing & Evaluation",
      "Logistics & Distribution Network Design",
      "Cost Estimation & Should Costing",
      "Supply Chain Risk Analysis & Mitigation",
      "Strategic Procurement Planning",
      "Vendor Performance Monitoring & Auditing",
      "Supplier Negotiation & Contract Management",
      "Inventory Optimization & Demand Forecasting",
    ],
  },
];

export default function ProductServicesExpanded() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setActiveId(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150);
    }
  }, []);
  const headingId = useId();

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Our Services
          </span>
          <h2 id={headingId} className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Product Engineering Services
          </h2>
          <p className="mt-3 text-[#5b5b5b] max-w-2xl">
            Click any service to explore the full scope of what we deliver.
          </p>
        </div>

        {/* Accordion list */}
        <div
          className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
          role="list"
          aria-labelledby={headingId}
        >
          {services.map((svc, i) => {
            const isOpen = activeId === svc.id;
            return (
              <div key={svc.id} id={svc.id} role="listitem">
                {/* Trigger row */}
                <button
                  onClick={() => setActiveId(isOpen ? null : svc.id)}
                  aria-expanded={isOpen}
                  className={`w-full flex items-center gap-4 px-6 py-5 text-left transition-colors duration-200 group ${
                    isOpen
                      ? "bg-[#003C46] text-white"
                      : "bg-white hover:bg-[#E6F0F5]/50 text-[#003C46]"
                  }`}
                >
                  {/* Number */}
                  <span
                    className={`text-xs font-mono tabular-nums flex-shrink-0 w-6 ${
                      isOpen ? "text-white/40" : "text-[#0098af]/60"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                      isOpen
                        ? "bg-white/10 text-white"
                        : "bg-[#0098af]/10 text-[#0098af]"
                    }`}
                  >
                    {svc.icon}
                  </span>

                  {/* Title */}
                  <span className="flex-1 text-base sm:text-lg font-semibold">
                    {svc.title}
                  </span>

                  {/* Chevron */}
                  <ChevronDown
                    className={`flex-shrink-0 h-5 w-5 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 text-white/60"
                        : "text-gray-400 group-hover:text-[#0098af]"
                    }`}
                  />
                </button>

                {/* Expanded panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.32, 0, 0.18, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#f8fbfc] border-t border-[#E6F0F5]">
                        <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-8 items-start">
                          {/* Left: description + bullets + software used */}
                          <div>
                            <p className="text-[#5b5b5b] leading-relaxed mb-6">
                              {svc.description}
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                              {svc.bullets.map((b) => (
                                <li
                                  key={b}
                                  className="flex items-start gap-2 text-sm text-[#003C46]"
                                >
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0098af] flex-shrink-0" />
                                  {b}
                                </li>
                              ))}
                            </ul>

                            {(() => {
                              const cat = SOFTWARE_PROFICIENCY.find((c) => c.id === svc.id);
                              if (!cat) return null;
                              return (
                                <div className="mt-7 pt-6 border-t border-[#E6F0F5]">
                                  <h4 className="text-xs font-semibold uppercase tracking-wide text-[#003C46]/60 mb-3">
                                    Software We Use
                                  </h4>
                                  <div className="flex flex-wrap gap-3">
                                    {cat.tools.map((tool) => (
                                      <div
                                        key={tool.name}
                                        title={tool.uncertain ? `${tool.name} — unconfirmed, please verify` : tool.name}
                                        className={`relative w-12 h-12 bg-white border rounded-xl p-2 flex items-center justify-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${
                                          tool.uncertain ? "border-amber-300" : "border-gray-200"
                                        }`}
                                      >
                                        <Image
                                          src={tool.logo}
                                          alt={tool.name}
                                          width={32}
                                          height={32}
                                          className="object-contain w-full h-full"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              );
                            })()}
                          </div>

                          {/* Right: image */}
                          <div className="relative h-56 md:h-72 rounded-xl overflow-hidden shadow-md">
                            <Image
                              src={svc.image}
                              alt={svc.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}