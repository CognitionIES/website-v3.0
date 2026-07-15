import type { StaticImageData } from "next/image";

// Side images — used as the large image in both the homepage accordion panel
// and the standalone /[service] page.
import mechImage from "@/constants/images/product/side/mech.webp";
import elecImage from "@/constants/images/product/side/elec.webp";
import caeImage from "@/constants/images/product/side/cae.webp";
import protoImage from "@/constants/images/product/side/prototyping.webp";
import hydraImage from "@/constants/images/product/side/hydraulic.webp";
import assetImage from "@/constants/images/product/side/asset.webp";
import embeddedImage from "@/constants/images/product/side/embedded-1.webp";
import techImage from "@/constants/images/product/side/tech.webp";
import supplyImage from "@/constants/images/product/side/supply.webp";

// Small logo-style images — only ever used on the standalone /[service] pages
// (as `additionalImageUrl` in the old sections.ts). Optional on purpose: not
// every consumer needs them.
import mechLogo from "@/constants/images/product/logo/mech.webp";
import elecLogo from "@/constants/images/product/logo/elec.webp";
import caeLogo from "@/constants/images/product/logo/cae.webp";
import protoLogo from "@/constants/images/product/logo/prototyp.webp";
import hydraLogo from "@/constants/images/product/logo/hydraulic.webp";
import assetLogo from "@/constants/images/product/logo/asset.webp";
import embeddedLogo from "@/constants/images/product/logo/embedded.webp";
import techLogo from "@/constants/images/product/logo/technical.webp";
import supplyLogo from "@/constants/images/product/logo/supply.webp";

/**
 * Single source of truth for the 9 Product Engineering disciplines.
 *
 * Previously this content existed in 3 places that had drifted apart:
 *  - app/services/product-engineering/ProductServicesExpanded.tsx (hardcoded
 *    array powering the homepage accordion)
 *  - constants/sections.ts (powering the standalone /[service] pages)
 *  - constants/product-engineering/constants.ts SERVICES.ITEMS (unused by any
 *    page — confirmed via grep, only .ABOUT from that file is still read)
 *
 * Where the two live sources disagreed, this file keeps the richer/more
 * complete wording and folds in whichever bullets were unique to either side
 * (nothing dropped, near-duplicates merged). One real bug was fixed along the
 * way: sections.ts's CAE/CFD entry had a description that was actually about
 * hydraulics (copy-paste error) — replaced with a real CAE/CFD description.
 * A few smaller typos were also fixed (see inline notes).
 *
 * `id` doubles as the URL slug for /services/product-engineering/[service],
 * so it's used directly with no separate slug-mapping table anymore.
 */
export type ProductServiceIconKey =
  | "mechanical-design"
  | "electrical-engineering"
  | "cae-cfd"
  | "prototyping-3d-printing"
  | "hydraulic-engineering"
  | "asset-management"
  | "embedded-systems"
  | "technical-publication"
  | "supply-chain-management";

export interface ProductService {
  id: ProductServiceIconKey;
  title: string;
  description: string;
  bullets: string[];
  image: StaticImageData;
  logoImage: StaticImageData;
}

export const PRODUCT_SERVICES: ProductService[] = [
  {
    id: "mechanical-design",
    title: "Mechanical Design Services",
    // Identical in both original sources — no changes needed.
    description:
      "From product ideation to performance-driven engineering, our mechanical design services bring concepts to life. We integrate innovation with precision to deliver optimized, manufacturable, and cost-effective solutions tailored to your product's lifecycle.",
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
    image: mechImage,
    logoImage: mechLogo,
  },
  {
    id: "electrical-engineering",
    // sections.ts had "Electrical Design Services" — standardized on
    // "Engineering Services" to match the naming pattern used by every other
    // "...Engineering Services" entry on this list.
    title: "Electrical Engineering Services",
    description:
      "We empower your products with smart, efficient, and robust electrical systems. Our expertise spans circuit design, control systems, and renewable integration to ensure seamless functionality and energy efficiency across applications.",
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
    image: elecImage,
    logoImage: elecLogo,
  },
  {
    id: "cae-cfd",
    title: "CAE / CFD",
    // sections.ts's original description here was actually about hydraulic
    // engineering (copy-paste error) — replaced with the homepage's real
    // CAE/CFD description.
    description:
      "Our simulation-led approach reduces physical testing costs and accelerates design decisions. We apply advanced FEA, CFD, and NVH methods to validate designs with confidence before production.",
    // Merged from both sources — overlapping concepts consolidated under one
    // clearer bullet each, unique items from both sides kept.
    bullets: [
      "Structural & Thermal FEA",
      "Computational Fluid Dynamics (CFD)",
      "Multi-Physics Simulations",
      "NVH (Noise, Vibration & Harshness) Analysis",
      "Crash & Impact Simulation",
      "Fatigue & Durability Analysis",
      "Modal & Harmonic Analysis",
      "Multi-Body Dynamics (MBD)",
      "Mold Flow & Casting Simulations",
      "Failure Analysis & Root Cause Determination",
      "Optimization & Design Sensitivity",
    ],
    image: caeImage,
    logoImage: caeLogo,
  },
  {
    id: "prototyping-3d-printing",
    title: "Prototyping & 3D Printing",
    description:
      "Accelerate your development cycle with rapid, accurate prototypes. From concept models to functional prototypes, we deliver physical validation tools that reduce risk and shorten time to market.",
    bullets: [
      "Rapid Prototyping (FDM, SLA, SLS, CNC Machining)",
      "Functional Prototype Development & Testing",
      "Design-for-Manufacturing (DFM) Validation",
      "Concept Validation Models",
      "Low-Volume Production Runs (Additive Manufacturing)",
      "Material Selection & Testing",
      "Assembly Fit, Form & Design Validation Checks",
      "Iterative Design Refinement",
    ],
    image: protoImage,
    logoImage: protoLogo,
  },
  {
    id: "hydraulic-engineering",
    title: "Hydraulic Engineering Services",
    // Kept the fuller homepage description over sections.ts's one-line version.
    description:
      "We design and optimize fluid power systems that are reliable, efficient, and compliant. Our expertise covers the full hydraulic engineering lifecycle, from circuit modeling to field commissioning support.",
    bullets: [
      "Hydraulic System Design, Modeling & Simulation",
      "Hydraulic Circuit Design & Analysis",
      "Component Selection & Sizing (Pumps, Valves, Actuators)",
      "Performance Optimization",
      "Seal & Valve Selection",
      "Manifold Block Design",
      "System Testing, Validation & Failure Analysis",
      "Environmental & Standards Compliance",
      "Hydraulic System Retrofitting",
      "Field Commissioning Support",
    ],
    image: hydraImage,
    logoImage: hydraLogo,
  },
  {
    id: "asset-management",
    title: "Asset Management",
    // Identical in both original sources.
    description:
      "Maximize the life and value of your assets through strategic lifecycle management. Our data-driven approach ensures optimized performance, cost control, and risk mitigation through predictive maintenance and intelligent analytics.",
    bullets: [
      "Asset Lifecycle Management & Cost Analysis",
      "Spare Parts Optimization",
      "Predictive & Preventive Maintenance Strategies",
      "Asset Valuation & Depreciation Analysis",
      "Performance Monitoring & Optimization",
      "Data Analysis for Asset Utilization",
      // sections.ts had "...for Critical Assets" appended — kept the more
      // general homepage wording since not all managed assets are "critical".
      "Risk Assessment & Contingency Planning",
      "Enterprise Asset Management (EAM) Implementation",
    ],
    image: assetImage,
    logoImage: assetLogo,
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems Engineering",
    // Identical in both original sources.
    description:
      "Drive innovation with intelligent, connected systems. Our embedded engineering solutions cover the full spectrum, from firmware development to IoT integration, ensuring reliable, scalable performance in today's smart products.",
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
    image: embeddedImage,
    logoImage: embeddedLogo,
  },
  {
    id: "technical-publication",
    title: "Technical Publication",
    // Kept sections.ts's fuller description (adds a concrete detail the
    // homepage version didn't have).
    description:
      "Make complexity simple with clear, user-friendly documentation. We create compliant manuals, illustrated guides, and e-learning tools that ensure accurate communication across stakeholders, from field technicians to end-users.",
    bullets: [
      "Technical Manuals & User Guides",
      "Maintenance & Service Manuals",
      "Assembly & Disassembly Instructions",
      "Training Manuals & E-learning Content",
      "Illustrated Parts Catalogs (IPC)",
      "Interactive Electronic Technical Manuals (IETM)",
      "SOPs & Regulatory Documentation",
      "2D/3D Illustrations & Exploded Views",
      // Unique to sections.ts, kept — genuinely distinct from the bullet above.
      "Document Conversion to Digital Formats",
    ],
    image: techImage,
    logoImage: techLogo,
  },
  {
    id: "supply-chain-management",
    // sections.ts had a trailing space in this title — trimmed.
    title: "Supply Chain Management",
    // Kept sections.ts's fuller description (adds a concrete outcome clause).
    description:
      "Optimize your procurement pipeline and reduce costs with strategic supply chain solutions. From vendor selection to contract execution, we help you build resilient, data-backed sourcing models that boost profitability and operational efficiency.",
    bullets: [
      "Supplier Sourcing & Evaluation",
      "Logistics & Distribution Network Design",
      "Cost Estimation & Should Costing",
      "Supply Chain Risk Analysis & Mitigation",
      "Strategic Procurement Planning",
      "Vendor Performance Monitoring & Auditing",
      "Supplier Negotiation & Contract Management",
      "Inventory Optimization & Demand Forecasting",
      // Unique to sections.ts, kept, typos fixed ("Component" -> "Components",
      // "Dem&" -> "Demand" was already fixed above, "Rfi, Rfp..." -> proper
      // acronym casing).
      "Procurement of Raw Materials & Components",
      "RFI, RFP, RFQ, IFB, LOI, PO Preparation & Evaluation",
    ],
    image: supplyImage,
    logoImage: supplyLogo,
  },
];

export function getProductService(id: string): ProductService | undefined {
  return PRODUCT_SERVICES.find((s) => s.id === id);
}
