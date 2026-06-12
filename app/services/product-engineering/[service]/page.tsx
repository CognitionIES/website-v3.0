import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ProductEngineeringServiceClient from "./ProductEngineeringServiceClient";

//  Route → section-key mapping (slug → sections.tsx key) 
export const SERVICE_SLUG_MAP: Record<string, string> = {
  "mechanical-design":       "mechanical",
  "electrical-engineering":  "electrical",
  "cae-cfd":                 "cae-cfd",
  "prototyping-3d-printing": "prototyping",
  "hydraulic-engineering":   "hydraulic",
  "asset-management":        "asset-management",
  "embedded-systems":        "embedded-systems",
  "technical-publication":   "technical-publication",
  "supply-chain-management": "supply-chain",
};

//  SEO metadata per service 
const SERVICE_META: Record<string, { title: string; description: string; keywords: string[] }> = {
  "mechanical-design": {
    title: "Mechanical Design Services",
    description: "Expert mechanical design services including 3D modeling, CAD, DFM, DFMEA, reverse engineering, and product lifecycle management for product industries.",
    keywords: ["mechanical design", "3D CAD modeling", "DFM", "DFMEA", "reverse engineering", "product design"],
  },
  "electrical-engineering": {
    title: "Electrical Engineering Services",
    description: "Innovative electrical system design, PCB design, harness & wiring, BMS, control panels, and renewable energy integration for modern products.",
    keywords: ["electrical engineering", "PCB design", "harness design", "BMS", "electrical control panel"],
  },
  "cae-cfd": {
    title: "CAE/CFD Analysis Services",
    description: "Advanced computational engineering, FEA structural analysis, CFD fluid dynamics, NVH analysis, crash simulation, and fatigue studies.",
    keywords: ["CAE", "CFD", "FEA", "structural analysis", "fluid dynamics", "NVH analysis", "crash simulation"],
  },
  "prototyping-3d-printing": {
    title: "Prototyping & 3D Printing Services",
    description: "Rapid prototyping and additive manufacturing, functional prototypes, concept models, low-volume production, and design validation.",
    keywords: ["rapid prototyping", "3D printing", "additive manufacturing", "prototype development", "design validation"],
  },
  "hydraulic-engineering": {
    title: "Hydraulic Engineering Services",
    description: "Expert hydraulic system design, circuit modeling, performance optimization, component selection, and compliance, delivering reliable fluid power solutions.",
    keywords: ["hydraulic engineering", "hydraulic system design", "fluid power", "hydraulic circuit"],
  },
  "asset-management": {
    title: "Asset Management Services",
    description: "Strategic asset lifecycle management, predictive maintenance, EAM implementation, performance monitoring, and risk assessment for industrial assets.",
    keywords: ["asset management", "predictive maintenance", "EAM", "asset lifecycle", "risk assessment"],
  },
  "embedded-systems": {
    title: "Embedded Systems Engineering Services",
    description: "Intelligent embedded engineering, firmware development, IoT integration, AI/ML, cybersecurity, microcontroller programming, and vehicle telematics.",
    keywords: ["embedded systems", "firmware development", "IoT", "microcontroller", "AI ML embedded", "vehicle telematics"],
  },
  "technical-publication": {
    title: "Technical Publication Services",
    description: "Clear, compliant technical documentation, user manuals, illustrated parts catalogs, IETM, SOPs, and regulatory documentation for global industries.",
    keywords: ["technical publication", "technical documentation", "user manuals", "IETM", "illustrated parts catalog"],
  },
  "supply-chain-management": {
    title: "Supply Chain Management & Procurement Services",
    description: "Strategic procurement and supply chain solutions, supplier sourcing, logistics design, should costing, risk mitigation, and inventory optimization.",
    keywords: ["supply chain management", "procurement", "supplier sourcing", "logistics", "should costing", "inventory optimization"],
  },
};

//  Generate static params for all service slugs 
export async function generateStaticParams() {
  return Object.keys(SERVICE_SLUG_MAP).map((service) => ({ service }));
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
  const sectionKey = SERVICE_SLUG_MAP[service];

  if (!sectionKey) {
    notFound();
  }

  return <ProductEngineeringServiceClient sectionKey={sectionKey} serviceSlug={service} />;
}
