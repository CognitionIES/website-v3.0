import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getProductService } from "@/constants/product-engineering/services";
import ProductEngineeringServiceClient from "./ProductEngineeringServiceClient";

// Previously there was a separate SERVICE_SLUG_MAP here translating the URL
// slug to a shorter internal key used by constants/sections.ts (e.g.
// "hydraulic-engineering" -> "hydraulic"). Now that all Product Engineering
// content lives in one place (constants/product-engineering/services.ts) with
// `id` equal to the URL slug, that indirection is gone — the slug *is* the id.

//  SEO metadata per service 
const SERVICE_META: Record<string, { title: string; description: string; keywords: string[] }> = {
  "mechanical-design": {
    title: "Mechanical Design Services",
    description: "Expert mechanical design services including 3D modeling, CAD, DFM, DFMEA, reverse engineering, and product lifecycle management for product industries.",
    keywords: [
      "mechanical design", "3D CAD modeling", "DFM", "DFMEA", "reverse engineering", "product design",
      "value engineering", "competitive benchmarking", "product lifecycle management",
      "2D 3D CAD drafting", "design optimization", "DFA DFS DFR analysis",
    ],
  },
  "electrical-engineering": {
    title: "Electrical Engineering Services",
    description: "Innovative electrical system design, PCB design, harness & wiring, BMS, control panels, and renewable energy integration for modern products.",
    keywords: [
      "electrical engineering", "PCB design", "harness design", "BMS", "electrical control panel",
      "circuit design and simulation", "battery management systems", "renewable energy integration",
      "wiring harness design",
    ],
  },
  "cae-cfd": {
    title: "CAE/CFD Analysis Services",
    description: "Advanced computational engineering, FEA structural analysis, CFD fluid dynamics, NVH analysis, crash simulation, and fatigue studies.",
    keywords: [
      "CAE", "CFD", "FEA", "structural analysis", "fluid dynamics", "NVH analysis", "crash simulation",
      "finite element analysis", "fatigue and durability studies", "multi-body dynamics",
      "modal and harmonic analysis", "design sensitivity optimization",
    ],
  },
  "prototyping-3d-printing": {
    title: "Prototyping & 3D Printing Services",
    description: "Rapid prototyping and additive manufacturing, functional prototypes, concept models, low-volume production, and design validation.",
    keywords: [
      "rapid prototyping", "3D printing", "additive manufacturing", "prototype development", "design validation",
      "FDM SLA SLS prototyping", "functional prototype development", "low volume production",
      "design for manufacturing validation",
    ],
  },
  "hydraulic-engineering": {
    title: "Hydraulic Engineering Services",
    description: "Expert hydraulic system design, circuit modeling, performance optimization, component selection, and compliance, delivering reliable fluid power solutions.",
    keywords: [
      "hydraulic engineering", "hydraulic system design", "fluid power", "hydraulic circuit",
      "hydraulic circuit modeling", "manifold block design", "valve and seal selection",
      "field commissioning support",
    ],
  },
  "asset-management": {
    title: "Asset Management Services",
    description: "Strategic asset lifecycle management, predictive maintenance, EAM implementation, performance monitoring, and risk assessment for industrial assets.",
    keywords: [
      "asset management", "predictive maintenance", "EAM", "asset lifecycle", "risk assessment",
      "enterprise asset management implementation", "spare parts optimization",
      "asset valuation and depreciation analysis", "preventive maintenance strategy",
    ],
  },
  "embedded-systems": {
    title: "Embedded Systems Engineering Services",
    description: "Intelligent embedded engineering, firmware development, IoT integration, AI/ML, cybersecurity, microcontroller programming, and vehicle telematics.",
    keywords: [
      "embedded systems", "firmware development", "IoT", "microcontroller", "AI ML embedded", "vehicle telematics",
      "embedded cybersecurity", "board support packages", "IoT device integration",
      "microcontroller programming",
    ],
  },
  "technical-publication": {
    title: "Technical Publication Services",
    description: "Clear, compliant technical documentation, user manuals, illustrated parts catalogs, IETM, SOPs, and regulatory documentation for global industries.",
    keywords: [
      "technical publication", "technical documentation", "user manuals", "IETM", "illustrated parts catalog",
      "interactive electronic technical manual", "maintenance and service manuals",
      "regulatory documentation services", "e-learning content development",
    ],
  },
  "supply-chain-management": {
    title: "Supply Chain Management & Procurement Services",
    description: "Strategic procurement and supply chain solutions, supplier sourcing, logistics design, should costing, risk mitigation, and inventory optimization.",
    keywords: [
      "supply chain management", "procurement", "supplier sourcing", "logistics", "should costing", "inventory optimization",
      "vendor performance monitoring", "supply chain risk mitigation", "strategic procurement planning",
      "logistics network design",
    ],
  },
};

//  Generate static params for all service slugs 
export async function generateStaticParams() {
  return Object.keys(SERVICE_META).map((service) => ({ service }));
}

//  Generate dynamic SEO metadata 
export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const meta = SERVICE_META[service];
  if (!meta) return {};

  return buildMetadata({
    title: meta.title,
    description: meta.description,
    path: `/services/product-engineering/${service}`,
    keywords: meta.keywords,
  });
}

//  Page component 
export default async function ProductEngineeringServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;

  if (!getProductService(service)) {
    notFound();
  }

  return <ProductEngineeringServiceClient serviceSlug={service} />;
}
