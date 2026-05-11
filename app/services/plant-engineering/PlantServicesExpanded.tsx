"use client";

import { useState, useId, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ChevronDown } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingShield, faChartArea, faGaugeHigh,
  faGears, faPlugCircleBolt, faBridge,
} from "@fortawesome/free-solid-svg-icons";
import { Box, Truck, Workflow, Building2 } from "lucide-react";
import { IconSettingsDollar } from "@tabler/icons-react";

import processImage from "@/constants/images/plant/horizontal/01.jpg";
import mechImage from "@/constants/images/plant/horizontal/02.jpg";
import pipingImage from "@/constants/images/plant/horizontal/03.jpg";
import pipeStressImage from "@/constants/images/plant/horizontal/04.jpg";
import civilImage from "@/constants/images/plant/horizontal/05.jpg";
import StructuralImage from "@/constants/images/plant/horizontal/06.png";
import elecImage from "@/constants/images/plant/horizontal/07.jpg";
import InstrumentationImage from "@/constants/images/plant/horizontal/08.jpg";
import ModularImage from "@/constants/images/plant/horizontal/09.jpg";
import ReverseImage from "@/constants/images/plant/horizontal/10.jpg";
import ProcurementImage from "@/constants/images/plant/horizontal/11.jpg";

interface ServiceItem {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  image: StaticImageData;
  topics: { heading: string; points: string[] }[];
}

const services: ServiceItem[] = [
  {
    id: "process-safety-engineering",
    icon: <FontAwesomeIcon icon={faBuildingShield} className="w-5 h-5" />,
    title: "Process & Safety Engineering",
    description:
      "Comprehensive engineering solutions to optimize plant processes, ensure safety compliance, and enhance operational efficiency across all plant lifecycle stages.",
    image: processImage,
    topics: [
      {
        heading: "Pre-Bid Engineering / FEED",
        points: [
          "Preliminary P&ID",
          "Hydraulic Analysis",
          "Mass & Energy Balance",
          "Utility Consumption Summary",
          "Pipeline Sizing & Line List Development",
          "Piping Service Index",
          "Preliminary Thermal Design for HE",
        ],
      },
      {
        heading: "Process Design & Optimization",
        points: [
          "Pressure Safety Valve (PSV) Sizing",
          "HE Design & Thermal Rating",
          "Efficiency Assessment",
          "Process Optimization",
        ],
      },
      {
        heading: "Safety & Risk Assessment",
        points: [
          "HAZOP Studies",
          "SIL Assessment",
          "Risk & Consequence Analysis",
          "Emergency Shutdown (ESD) Design",
        ],
      },
    ],
  },
  {
    id: "piping-engineering",
    icon: <Workflow className="w-5 h-5" />,
    title: "Piping Engineering",
    description:
      "Designing and managing efficient piping systems to ensure safe and reliable transport of fluids and gases throughout plant facilities.",
    image: pipingImage,
    topics: [
      {
        heading: "Piping Layout & Design",
        points: [
          "Overall & Unit Plot Plans",
          "Equipment Layout & GA Drawings",
          "Piping Layout & GA Drawings",
          "Piping Isometric Drawings",
          "Line List / Line Schedule",
          "Piping Support Design & Load Calculations",
        ],
      },
      {
        heading: "Material & Specification Management",
        points: [
          "Piping Material Specification (PMS)",
          "Line Pipe & Fittings Selection",
          "MTO / BOM Preparation",
          "Valve Sizing & Datasheet",
        ],
      },
    ],
  },
  {
    id: "piping-stress-analysis",
    icon: <FontAwesomeIcon icon={faChartArea} className="w-5 h-5" />,
    title: "Piping Stress Analysis",
    description:
      "Comprehensive analysis of piping systems to ensure structural integrity, safety, and reliability under all operating and environmental conditions.",
    image: pipeStressImage,
    topics: [
      {
        heading: "Analysis Types",
        points: [
          "Finite Element Analysis (FEA)",
          "Surge & Slug Flow Analysis",
          "Fatigue & Creep Assessment",
          "Displacement & Deflection Studies",
          "Occasional Load Analysis (Wind & Seismic)",
          "Sustained / Longitudinal Stress Evaluation",
          "Piping Flexibility & Support Optimization",
        ],
      },
      {
        heading: "Engineering Calculations & Validations",
        points: [
          "Nozzle Load Calculations",
          "Expansion Loop Design",
          "Spring Hanger Sizing",
          "Caesar II / AutoPipe Modeling",
        ],
      },
    ],
  },
  {
    id: "mechanical-design-engineering",
    icon: <FontAwesomeIcon icon={faGears} className="w-5 h-5" />,
    title: "Mechanical Design Engineering",
    description:
      "Engineering and maintaining high-performance mechanical systems to ensure plant reliability, efficiency, and uptime.",
    image: mechImage,
    topics: [
      {
        heading: "Equipment Drawings & Detailing",
        points: [
          "Equipment List & Mechanical Datasheets",
          "Mechanical Schematic Diagrams",
          "Equipment Layout & Arrangement Drawing",
          "GA Drawings for Equipment",
          "Nozzle & Manhole Detail Drawings",
        ],
      },
      {
        heading: "Static and Rotating Equipment",
        points: [
          "Vessel & Heat Exchanger Design",
          "Pump & Compressor Selection",
          "HVAC System Design",
          "Mechanical Equipment Datasheets",
        ],
      },
    ],
  },
  {
    id: "electrical-design-engineering",
    icon: <FontAwesomeIcon icon={faPlugCircleBolt} className="w-5 h-5" />,
    title: "Electrical Design Engineering",
    description:
      "Implementing reliable, safe, and energy-efficient electrical systems to power plant operations.",
    image: elecImage,
    topics: [
      {
        heading: "Basic Engineering",
        points: [
          "Electrical Load List",
          "Single Line Diagram (SLD)",
          "Power System Studies",
          "Grounding & Lightning Protection Design",
        ],
      },
      {
        heading: "Detailed Engineering",
        points: [
          "Cable Routing & Tray Layout",
          "Switchgear & MCC Design",
          "Cable Schedule & BOM",
          "Control Panel Design & Schematics",
          "Area Classification Drawings",
        ],
      },
    ],
  },
  {
    id: "reverse-engineering",
    icon: <FontAwesomeIcon icon={faGaugeHigh} className="w-5 h-5" />,
    title: "Reverse Engineering",
    description:
      "Analyzing existing systems to recreate or improve designs for enhanced performance, obsolescence management, and cost reduction.",
    image: ReverseImage,
    topics: [
      {
        heading: "Advanced Scanning & Data Capture",
        points: [
          "3D Laser Scanning",
          "Point Cloud Processing",
          "As-Built Documentation",
          "Dimensional Verification",
        ],
      },
      {
        heading: "Deliverables & Output",
        points: [
          "3D CAD Model Generation",
          "2D Engineering Drawings",
          "Material & Process Identification",
          "Design Recreation & Optimization",
        ],
      },
    ],
  },
  {
    id: "instrumentation-engineering",
    icon: <IconSettingsDollar className="w-5 h-5" />,
    title: "Instrumentation Engineering",
    description:
      "Integrating advanced instrumentation for precise monitoring and control of plant processes.",
    image: InstrumentationImage,
    topics: [
      {
        heading: "Basic Engineering",
        points: [
          "Instrument Index & Datasheet",
          "Cause & Effect Matrix",
          "P&ID Development",
          "Control Philosophy",
        ],
      },
      {
        heading: "Detailed Engineering",
        points: [
          "Loop Diagrams",
          "Instrument Hook-up Drawings",
          "Cable Schedule & Routing",
          "PLC / DCS I/O Lists",
          "Instrument Location Plans",
        ],
      },
    ],
  },
  {
    id: "civil-engineering",
    icon: <Building2 className="w-5 h-5" />,
    title: "Civil Engineering",
    description:
      "Providing foundational civil engineering solutions for durable and safe plant infrastructure.",
    image: civilImage,
    topics: [
      {
        heading: "Site Development & Infrastructure",
        points: [
          "Site Grading & Drainage Design",
          "Road & Paving Design",
          "Underground Utility Design",
          "Geotechnical Assessment Support",
        ],
      },
      {
        heading: "Foundation & Building Design",
        points: [
          "Equipment & Machinery Foundation Design",
          "Industrial & Commercial Building Design",
          "Retaining Wall & Boundary Design",
          "Civil BOM & BOQ",
        ],
      },
    ],
  },
  {
    id: "structural-engineering",
    icon: <FontAwesomeIcon icon={faBridge} className="w-5 h-5" />,
    title: "Structural Engineering",
    description:
      "Designing strong, stable structures to support plant operations and withstand environmental challenges.",
    image: StructuralImage,
    topics: [
      {
        heading: "Structural Design",
        points: [
          "Steel & Concrete Structure Design",
          "Pipe Rack & Equipment Support Design",
          "Mezzanine & Platform Design",
          "Staircase & Handrail Design",
        ],
      },
      {
        heading: "Analysis & Detailing",
        points: [
          "Structural Stress Analysis (STAAD / ETABS)",
          "Connection Design & Detailing",
          "Structural BOM & Fabrication Drawings",
          "Transportation & Lifting Studies",
        ],
      },
    ],
  },
  {
    id: "modular-package",
    icon: <Box className="w-5 h-5" />,
    title: "Modular Package",
    description:
      "Delivering pre-engineered modular solutions for faster installation and operational flexibility.",
    image: ModularImage,
    topics: [
      {
        heading: "Modular Skid Design & Engineering",
        points: [
          "Process Skid Engineering",
          "Utility Skid (Water Treatment, Compressed Air)",
          "Electrical & Instrumentation Skid",
          "HVAC & Fire Protection Modules",
          "Skid Structural & Mechanical Design",
        ],
      },
    ],
  },
  {
    id: "procurement-support",
    icon: <Truck className="w-5 h-5" />,
    title: "Procurement Support",
    description:
      "End-to-end procurement management from vendor inquiry to material delivery, ensuring cost-effective and timely sourcing.",
    image: ProcurementImage,
    topics: [
      {
        heading: "Inquiry & Vendor Management",
        points: [
          "RFI / RFQ / RFP Preparation",
          "Vendor List Development & Qualification",
          "Technical Bid Evaluation (TBE)",
          "Commercial Bid Evaluation (CBE)",
        ],
      },
      {
        heading: "Vendor Coordination & Review",
        points: [
          "Vendor Document Review & Approval",
          "Inspection & Test Plan (ITP) Review",
          "Expediting & Delivery Monitoring",
          "Material Receiving & Inspection Support",
        ],
      },
    ],
  },
];

export default function PlantServicesExpanded() {
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
        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Our Services
          </span>
          <h2 id={headingId} className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Plant Engineering Services
          </h2>
          <p className="mt-3 text-[#5b5b5b] max-w-2xl">
            Click any service to explore the full scope of what we deliver.
          </p>
        </div>

        <div
          className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
          role="list"
          aria-labelledby={headingId}
        >
          {services.map((svc, i) => {
            const isOpen = activeId === svc.id;
            return (
              <div key={svc.id} id={svc.id} role="listitem">
                <button
                  onClick={() => setActiveId(isOpen ? null : svc.id)}
                  aria-expanded={isOpen}
                  className={`w-full flex items-center gap-4 px-6 py-5 text-left transition-colors duration-200 group ${
                    isOpen
                      ? "bg-[#003C46] text-white"
                      : "bg-white hover:bg-[#E6F0F5]/50 text-[#003C46]"
                  }`}
                >
                  <span className={`text-xs font-mono tabular-nums flex-shrink-0 w-6 ${isOpen ? "text-white/40" : "text-[#0098af]/60"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 ${isOpen ? "bg-white/10 text-white" : "bg-[#0098af]/10 text-[#0098af]"}`}>
                    {svc.icon}
                  </span>
                  <span className="flex-1 text-base sm:text-lg font-semibold">{svc.title}</span>
                  <ChevronDown className={`flex-shrink-0 h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-white/60" : "text-gray-400 group-hover:text-[#0098af]"}`} />
                </button>

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
                          {/* Left: description + topic groups */}
                          <div>
                            <p className="text-[#5b5b5b] leading-relaxed mb-6">
                              {svc.description}
                            </p>
                            <div className="space-y-5">
                              {svc.topics.map((topic) => (
                                <div key={topic.heading}>
                                  <p className="text-xs font-semibold text-[#0098af] uppercase tracking-wider mb-2">
                                    {topic.heading}
                                  </p>
                                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                                    {topic.points.map((pt) => (
                                      <li key={pt} className="flex items-start gap-2 text-sm text-[#003C46]">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0098af] flex-shrink-0" />
                                        {pt}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
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
