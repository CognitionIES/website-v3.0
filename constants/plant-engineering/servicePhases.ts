import type { StaticImageData } from "next/image";
import processImage from "@/constants/images/plant/horizontal/01.webp";
import mechImage from "@/constants/images/plant/horizontal/02.webp";
import pipingImage from "@/constants/images/plant/horizontal/03.webp";
import pipeStressImage from "@/constants/images/plant/horizontal/04.webp";
import civilImage from "@/constants/images/plant/horizontal/05.webp";
import StructuralImage from "@/constants/images/plant/horizontal/06.webp";
import elecImage from "@/constants/images/plant/horizontal/07.webp";
import InstrumentationImage from "@/constants/images/plant/horizontal/08.webp";
import ModularImage from "@/constants/images/plant/horizontal/09.webp";
import ReverseImage from "@/constants/images/plant/horizontal/10.webp";
import ProcurementImage from "@/constants/images/plant/horizontal/11.webp";

// Three-level Engineering Services hierarchy for the Plant Engineering page:
// Phase (numbered heading, not an accordion) -> Category (accordion) -> Scope of work.
//
// REBUILD NOTE (v2): the first version of this file summarized/dropped real content
// from the original constants/plant-engineering/constants.ts — every service's
// top-level `description`, plus several full topic groups (e.g. "Revalidation &
// Retrofitting" under Process & Safety Engineering was missing entirely, HAZID/QRA
// were dropped, FPSO/offshore structural content and specific code references like
// "NC-3685.3 & API Standards" got flattened into generic paraphrases). This version
// preserves all 162 original scope items and all 11 original descriptions,
// redistributed across the 6 phases. Where the original data already labeled a
// group by phase ("Basic Engineering", "Detailed Engineering", "Pre-Bid
// Engineering / FEED"), that labeling was followed directly. Where it wasn't
// (Piping, Civil, Structural, Modular, Procurement, Reverse Engineering), phase
// placement is my EPC/EPCM judgment call, not something stated in your source data
// — flagged per-category below with `sourced: false` on categories/items that are
// genuinely new (Fire & Safety Engineering, most of BIM & 3D Modeling, most of CAD
// Services) rather than pulled from your existing content.

export type ServiceCategory = {
    title: string;
    icon: IconKey;
    description: string;
    scope: string[];
    /** false = newly authored for this redesign, not present in your original site
     * content or source decks — needs a domain-expert review before publishing. */
    sourced?: boolean;
};

// Discipline images live here as a separate lookup, NOT as a field on
// ServiceCategory. A discipline (e.g. "Process & Safety Engineering") can appear
// in multiple phases with different scope subsets, so an image belongs to the
// discipline once — keyed by IconKey — rather than being repeated (and risking
// drift) on every phase-occurrence. Sourced 1:1 from the original 11 images in
// constants/plant-engineering/constants.ts. The 3 categories introduced in this
// v2 rebuild (fire-safety, bim-3d, cad) have no source image yet — intentionally
// left out of the map below rather than given a placeholder.
export const DISCIPLINE_IMAGES: Partial<Record<IconKey, { src: StaticImageData; alt: string }>> = {
    "process-safety": { src: processImage, alt: "Process safety equipment" },
    "piping": { src: pipingImage, alt: "Piping engineering layout" },
    "piping-stress": { src: pipeStressImage, alt: "Piping stress analysis dashboard" },
    "mechanical": { src: mechImage, alt: "Mechanical engineering tools" },
    "electrical": { src: elecImage, alt: "Electrical engineering panel" },
    "instrumentation": { src: InstrumentationImage, alt: "Instrumentation control system" },
    "civil": { src: civilImage, alt: "Civil engineering construction" },
    // NOTE: the original constants.ts reused the "Civil engineering construction"
    // alt text for Structural too (copy-paste, not a real description) — corrected
    // here rather than carried forward.
    "structural": { src: StructuralImage, alt: "Structural engineering steel framework" },
    "reverse-engineering": { src: ReverseImage, alt: "Reverse engineering process" },
    "modular": { src: ModularImage, alt: "Modular plant package" },
    "procurement": { src: ProcurementImage, alt: "Procurement planning meeting" },
};

export type ServicePhase = {
    number: string;
    title: string;
    categories: ServiceCategory[];
};

export type IconKey =
    | "process-safety"
    | "piping"
    | "piping-stress"
    | "mechanical"
    | "electrical"
    | "instrumentation"
    | "civil"
    | "structural"
    | "reverse-engineering"
    | "modular"
    | "procurement"
    | "fire-safety"
    | "bim-3d"
    | "cad";

export type DisciplineOccurrence = {
    phaseNumber: string;
    phaseTitle: string;
    /** This occurrence's own title. Usually matches the parent DisciplineEntry.title,
     * but not always — e.g. "process-safety" appears in phase 05 under two distinct
     * titles ("Process & Safety Engineering" and "Process Safety & Risk Assessment")
     * with different descriptions. Kept as-is rather than collapsed into one, so no
     * original wording is lost or silently merged. */
    title: string;
    description: string;
    scope: string[];
    sourced?: boolean;
};

export type DisciplineEntry = {
    icon: IconKey;
    /** Label for the outer accordion — the title from this discipline's first
     * phase-occurrence. */
    title: string;
    image?: { src: StaticImageData; alt: string };
    occurrences: DisciplineOccurrence[];
};

/**
 * Regroups SERVICE_PHASES (phase -> category) into one entry per discipline
 * (icon -> all its phase occurrences), for pages like /details that want a
 * comprehensive per-discipline view rather than the homepage's phase journey.
 * This is a pure re-indexing of existing data — nothing is merged, summarized,
 * or invented, so it can't drift from SERVICE_PHASES.
 */
export function getDisciplinesFlat(): DisciplineEntry[] {
    const order: IconKey[] = [];
    const map = new Map<IconKey, DisciplineEntry>();

    for (const phase of SERVICE_PHASES) {
        for (const cat of phase.categories) {
            if (!map.has(cat.icon)) {
                order.push(cat.icon);
                map.set(cat.icon, {
                    icon: cat.icon,
                    title: cat.title,
                    image: DISCIPLINE_IMAGES[cat.icon],
                    occurrences: [],
                });
            }
            map.get(cat.icon)!.occurrences.push({
                phaseNumber: phase.number,
                phaseTitle: phase.title,
                title: cat.title,
                description: cat.description,
                scope: cat.scope,
                sourced: cat.sourced,
            });
        }
    }

    return order.map((k) => map.get(k)!);
}

export const SERVICE_PHASES: ServicePhase[] = [
    {
        number: "01",
        title: "Pre-FEED",
        categories: [
            {
                title: "Process & Safety Engineering",
                icon: "process-safety",
                description: "Early-stage process definition to frame scope and risk before formal design begins.",
                scope: ["Preliminary P&ID", "Mass & Energy Balance", "Utility Consumption Summary"],
            },
            {
                title: "Procurement Support",
                icon: "procurement",
                description: "Building a qualified vendor base ahead of formal procurement activity.",
                scope: ["Development of Approved Vendor Lists"],
            },
        ],
    },
    {
        number: "02",
        title: "FEED",
        categories: [
            {
                title: "Process & Safety Engineering",
                icon: "process-safety",
                description: "Comprehensive engineering solutions to optimize plant processes, ensure safety compliance, and enhance operational efficiency through advanced design and risk assessment.",
                scope: [
                    "Hydraulic Analysis",
                    "Pipeline Sizing & Line List Development",
                    "Piping Service Index",
                    "Preliminary Thermal Design for HE",
                ],
            },
            {
                title: "Piping Engineering",
                icon: "piping",
                description: "Designing and managing efficient piping systems to ensure safe and reliable transport of fluids and gases across the plant.",
                scope: [
                    "Overall & Unit Plot Plans",
                    "Equipment Layout & GA Drawings",
                    "Piping Layout & GA Drawings",
                ],
            },
            {
                title: "Civil Engineering",
                icon: "civil",
                description: "Providing foundational civil engineering solutions for durable and safe plant infrastructure.",
                scope: [
                    "Site Preparation, Grading, and Fencing",
                    "Underground Utilities, Valve Pits, Duct Banks, and Culverts",
                    "Drainage, Roads, and Paving Layouts",
                ],
            },
            {
                title: "Procurement Support",
                icon: "procurement",
                description: "Streamlining procurement processes to source quality materials and equipment on time and within budget.",
                scope: [
                    "Preparation of Inquiry Specifications for Equipment, E&I, Piping, C&S",
                    "Floating Inquiries & Managing Vendor Communication",
                ],
            },
        ],
    },
    {
        number: "03",
        title: "Basic Engineering",
        categories: [
            {
                title: "Process & Safety Engineering",
                icon: "process-safety",
                description: "Comprehensive engineering solutions to optimize plant processes, ensure safety compliance, and enhance operational efficiency through advanced design and risk assessment.",
                scope: [
                    "Pressure Safety Valve (PSV) Sizing",
                    "HE Design & Thermal Rating",
                    "Efficiency Assessment",
                    "Process Optimization",
                    "Utility Consumption Optimization",
                    "Distribution Network Hydraulics and Surge Analysis",
                ],
            },
            {
                title: "Mechanical Design Engineering",
                icon: "mechanical",
                description: "Engineering and maintaining high-performance mechanical systems to ensure plant reliability, efficiency, and safety through detailed design and analysis.",
                scope: [
                    "Equipment List & Mechanical Datasheets",
                    "Mechanical Schematic Diagrams",
                    "Pressure Vessels & Heat Exchangers",
                    "Columns & Towers",
                    "Storage Tanks",
                    "Dryers & Cooling Towers",
                    "Pumps & Pumping Systems",
                    "Air & Gas Compressors System",
                    "HVAC System Design Basis",
                ],
            },
            {
                title: "Electrical Design Engineering",
                icon: "electrical",
                description: "Implementing reliable electrical systems to power plant operations efficiently and safely.",
                scope: [
                    "Electrical Design Basis",
                    "Preliminary Load List & Equipment Sizing",
                    "Preliminary Single Line Diagram (SLD)",
                    "Main Equipment & Switchgear Layouts",
                ],
            },
            {
                title: "Instrumentation Engineering",
                icon: "instrumentation",
                description: "Integrating advanced instrumentation for precise monitoring and control of plant processes.",
                scope: [
                    "Instrumentation Design Basis",
                    "I/O List",
                    "Instrument Cable Block Diagram",
                    "Preliminary Instrument List / Index",
                    "Instrument Process Datasheets",
                    "Process Optimization",
                ],
            },
            {
                title: "Civil Engineering",
                icon: "civil",
                description: "Providing foundational civil engineering solutions for durable and safe plant infrastructure.",
                scope: [
                    "Equipment Foundations Static & Dynamic Analysis",
                    "Foundation Layouts & Design Reports",
                ],
            },
            {
                title: "Structural Engineering",
                icon: "structural",
                description: "Designing strong, stable structures to support plant operations and withstand environmental challenges.",
                scope: [
                    "Structural design basis and load criteria",
                    "Preliminary framing concepts for pipe racks and equipment support",
                ],
                sourced: false,
            },
        ],
    },
    {
        number: "04",
        title: "Detailed Engineering",
        categories: [
            {
                title: "Piping Engineering",
                icon: "piping",
                description: "Designing and managing efficient piping systems to ensure safe and reliable transport of fluids and gases across the plant with advanced analysis and material specifications.",
                scope: [
                    "Piping Isometric Drawings",
                    "Line List / Line Schedule",
                    "Piping Support Design & Load Calculations",
                    "Nozzle Orientation, Spool, Special Supports & Platform Design Drawings",
                    "Piping MTO & BOM",
                    "Insulation, Painting, & Material Spec.",
                    "Specialty Items List",
                    "Valve & Piping Special Component Data Sheets",
                ],
            },
            {
                title: "Mechanical Design Engineering",
                icon: "mechanical",
                description: "Engineering and maintaining high-performance mechanical systems to ensure plant reliability, efficiency, and safety through detailed design and analysis.",
                scope: [
                    "Equipment Layout & Arrangement Drawing",
                    "GA Drawings for Equipment",
                    "Nozzle & Manhole Detail Drawings",
                    "Equipment & Pipe Support Drawing",
                    "Ladder & Platform Support Drawings",
                    "Tray Support & Welded Internal Details",
                    "Tube Bundle Detailing for Shell & Tube HE",
                    "Fatigue & Failure Analysis (FFA)",
                    "MTO & BOM",
                    "Heat Load Calculation",
                    "Ducting Layout & Routing",
                    "Duct Fabrication Drawings",
                ],
            },
            {
                title: "Electrical Design Engineering",
                icon: "electrical",
                description: "Implementing reliable electrical systems to power plant operations efficiently and safely.",
                scope: [
                    "Electrical Equipment Spec. & Datasheet",
                    "Final Single Line Diagram (SLD)",
                    "Electrical Equipment & Components Layouts",
                    "Earthing System Design & Layout",
                    "Detailed Load List & Feeder Lists for Switchgear, MCCs, DB",
                    "HV/LV Power Cable Sizing & Routing",
                    "Plant Intercommunication System",
                    "Power & Control Cable Listings",
                    "Electrical Bill of Materials (BOM)",
                    "Cable, Illumination & Lightning Protection Layout",
                    "Erection Tender Preparation",
                    "As-Built Drawings & Documentation",
                    "Relay Setting Schedules & Protection Coordination Chart",
                ],
            },
            {
                title: "Instrumentation Engineering",
                icon: "instrumentation",
                description: "Integrating advanced instrumentation for precise monitoring and control of plant processes.",
                scope: [
                    "Final Instrumentation Design Basis",
                    "Instrument Location Layout",
                    "Instrument Index & Specification Datasheets",
                    "DCS Control Room Layout",
                    "I/O List & Cause-Effect Diagram/List",
                    "Cable Tray Routing & Layout",
                    "Instrument Installation Details",
                    "Junction Box Grouping",
                    "Instrument Cable Schedule and Wiring Diagram",
                    "Instrument Termination Drawings",
                    "Cable Tray & Fittings MTO",
                    "Hook-Up Drawings & Erection Hardware MTO",
                    "As-Built Drawings & Documentation",
                ],
            },
            {
                title: "Civil Engineering",
                icon: "civil",
                description: "Providing foundational civil engineering solutions for durable and safe plant infrastructure.",
                scope: [
                    "Schedule of Quantities (SOQ)",
                    "Admin Buildings, Canteens, Utility Blocks, and Non-Plant Structures",
                ],
            },
            {
                title: "Structural Engineering",
                icon: "structural",
                description: "Designing strong, stable structures to support plant operations and withstand environmental challenges.",
                scope: [
                    "GA, Erection, and Fabrication Drawings",
                    "Pipe Supports, Pipe Racks, Shelters, Platforms, Crossovers, and Sleepers",
                ],
            },
            {
                title: "Procurement Support",
                icon: "procurement",
                description: "Streamlining procurement processes to source quality materials and equipment on time and within budget.",
                scope: [
                    "Evaluation of Vendor Offers & Comparison Reports",
                    "Preparation of Technical Queries (TQ) & Clarifications",
                    "Vendor Coordination & Follow-Ups",
                    "Review & Approval of Vendor Drawings",
                    "Integration & Implementation of Vendor Data into Engineering",
                ],
            },
        ],
    },
    {
        number: "05",
        title: "Specialized Engineering",
        categories: [
            {
                title: "Piping Stress Analysis",
                icon: "piping-stress",
                description: "Comprehensive analysis of piping systems to ensure structural integrity, safety, and reliability under diverse operating conditions through advanced stress evaluations and calculations.",
                scope: [
                    "Finite Element Analysis (FEA)",
                    "Surge & Slug Flow Analysis",
                    "Fatigue & Creep Assessment",
                    "Displacement & Deflection Studies",
                    "Occasional Load Analysis (Wind & Seismic)",
                    "Sustained / Longitudinal Stress Evaluation",
                    "Piping Flexibility & Support Optimization",
                    "Elastic & Plastic Stress Analysis",
                    "Trunnion Support Load Check",
                    "Upheaval & Buckling Analysis",
                    "Weld Strength Evaluation",
                    "U-Bolt Load Calculations",
                    "Collapse & Structural Stability",
                    "Flange Integrity Analysis (NC-3685.3 & API Standards)",
                ],
            },
            {
                title: "Structural Engineering",
                icon: "structural",
                description: "Designing strong, stable structures to support plant operations and withstand environmental challenges.",
                scope: [
                    "Hot Oil Heater Supporting Structures",
                    "Waste Heat Recovery Units (WHRU)",
                    "Reactor Structures & FPSO Modules",
                    "Technological Structures & Heavy Industrial Frameworks",
                    "Barge Transport & Offshore Load Handling",
                    "Dropped Object Impact Studies",
                    "Transit & Survival Load Assessments",
                    "Fire, Blast, and Fatigue Conditions",
                    "In-Place Analysis (Operating, Damage, Extreme Scenarios)",
                    "Lifting Analysis, Reports & Drawings",
                    "Structural Integrity Assessments",
                ],
            },
            {
                title: "Reverse Engineering",
                icon: "reverse-engineering",
                description: "Analyzing existing systems to recreate or improve designs for enhanced performance.",
                scope: [
                    "High Precision Laser Scanning for Existing Plants & Equipment",
                    "Creating Accurate 3D Laser Models from Point Cloud Data",
                    "Supported File Formats: .pptx, .pcg, .xyz, .dwg, .dgn, .rvt, .fls, .ifd, .lfm, .rcp",
                    "Extraction & Submission of Detailed Drawings & Reports",
                    "P&ID/Engineering Data As-Built Verification",
                    "Integration of Reverse Engineered Models into Existing Design Workflows",
                ],
            },
            {
                title: "Modular Package Engineering",
                icon: "modular",
                description: "Delivering pre-engineered modular solutions for faster installation and operational flexibility.",
                scope: [
                    "3D Modeling of Skid Package Design",
                    "Fabrication Isometric Drawings",
                    "Monorail Calculations",
                    "MTO & BOM Preparation",
                    "Weight & COG Calculation for Lifting Arrangement",
                    "Structural Steel Calculations (Including Anchor/Foundation Loads)",
                    "2D General Arrangement Drawings",
                    "Detailed Structural Fabrication Drawings",
                    "Lifting Lug Design & Details",
                    "Piping & Structural Stress Analysis Reports",
                    "Lifting Arrangement Drawings and Calculations",
                    "E&I Skid Engineering (Cable Tray, Junction Box, Small-Bore Containment, etc.)",
                    "Custody Transfer Skids",
                    "Heat Exchanger Skids",
                    "High-Pressure Systems",
                    "Fuel Oil Unloading & Transfer Skids",
                    "Corrosion Inhibitor Skids",
                    "Chemical Process Skids (Metering, Injection, Dosing, Feeding, Transport, Blending, Extraction & Filtration)",
                ],
            },
            {
                title: "Process & Safety Engineering",
                icon: "process-safety",
                description: "Revalidating and retrofitting existing process systems as operating conditions or standards change.",
                scope: [
                    "Process Equipment Reassessment",
                    "Hydraulics Pipeline Review",
                    "Hydraulics Pump System Re-evaluation",
                ],
            },
            {
                title: "Process Safety & Risk Assessment",
                icon: "process-safety",
                description: "Comprehensive engineering solutions to optimize plant processes, ensure safety compliance, and enhance operational efficiency through advanced design and risk assessment.",
                scope: [
                    "HAZID",
                    "HAZOP",
                    "SIL",
                    "Quantitative Risk Assessment (QRA)",
                ],
            },
            {
                title: "Fire & Safety Engineering",
                icon: "fire-safety",
                description: "Fire, gas, and emergency-response engineering for high-hazard industrial facilities.",
                scope: [
                    "Fire and gas detection system design",
                    "Fire water network hydraulic design",
                    "Passive fire protection (PFP) specification",
                    "Escape route and emergency response layout",
                ],
                sourced: false,
            },
        ],
    },
    {
        number: "06",
        title: "Digitalization",
        categories: [
            {
                title: "Reverse Engineering",
                icon: "reverse-engineering",
                description: "Analyzing existing systems to recreate or improve designs for enhanced performance.",
                scope: [
                    "Generating Dumb Models from Laser Scans",
                    "Transforming Dumb Models into Intelligent Models",
                    "Converting As-Built Data into Millimeter Accurate 3D CAD Models",
                ],
            },
            {
                title: "BIM & 3D Modeling",
                icon: "bim-3d",
                description: "Intelligent 3D plant modeling built on top of your existing engineering and scan data.",
                scope: [
                    "3D Modeling & Visualization",
                    "3D Modeling & Simulation",
                    "Clash detection and constructability review",
                    "Digital twin model development",
                ],
                sourced: false,
            },
            {
                title: "CAD Services",
                icon: "cad",
                description: "Drafting, conversion, and standardization support across your CAD documentation set.",
                scope: [
                    "As-Built Documentation & Updates",
                    "2D drafting and drawing conversion",
                    "CAD standardization and template development",
                ],
                sourced: false,
            },
        ],
    },
];