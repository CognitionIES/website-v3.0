// Three-level Engineering Services hierarchy for the Plant Engineering page:
// Phase (numbered heading, not an accordion) -> Category (accordion) -> Scope of work.
//
// Where possible, scope items are pulled from the real content that already existed
// in PlantServicesExpanded.tsx (several disciplines already had phase-labeled topic
// groups like "Pre-Bid Engineering / FEED", "Basic Engineering", "Detailed
// Engineering" — that content is redistributed here, not reinvented). The three
// categories that didn't exist anywhere on the site before — Fire & Safety
// Engineering, BIM & 3D Modeling, CAD Services — are original content written to
// match standard EPC/EPCM practice. Flag these three for a domain-expert review
// before publishing, the way you would for any new service claim.

export type ServiceCategory = {
    title: string;
    icon: IconKey;
    scope: string[];
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

export const SERVICE_PHASES: ServicePhase[] = [
    {
        number: "01",
        title: "Pre-FEED",
        categories: [
            {
                title: "Process & Safety Engineering",
                icon: "process-safety",
                scope: [
                    "Feasibility studies and process concept screening",
                    "Preliminary mass & energy balance",
                    "Order-of-magnitude utility consumption summary",
                    "Technology / licensor evaluation support",
                    "Preliminary P&ID development",
                ],
            },
            {
                title: "Procurement Support",
                icon: "procurement",
                scope: [
                    "Long-lead equipment identification",
                    "Budgetary vendor engagement and market survey",
                    "Licensor / technology package sourcing support",
                    "Preliminary vendor list development",
                ],
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
                scope: [
                    "Process Flow Diagrams (PFDs) and P&ID development",
                    "Hydraulic analysis and line sizing",
                    "Pipeline sizing and line list development",
                    "Piping service index and preliminary thermal design for heat exchangers",
                    "HAZID / preliminary HAZOP facilitation",
                ],
            },
            {
                title: "Piping Engineering",
                icon: "piping",
                scope: [
                    "Overall and unit plot plan development",
                    "Equipment layout and GA drawings",
                    "Piping layout and routing philosophy",
                    "Pipe rack and tie-in point planning",
                ],
            },
            {
                title: "Civil Engineering",
                icon: "civil",
                scope: [
                    "Site grading and drainage design basis",
                    "Road and paving conceptual layout",
                    "Underground utility routing philosophy",
                    "Geotechnical assessment support",
                ],
            },
            {
                title: "Procurement Support",
                icon: "procurement",
                scope: [
                    "RFI / RFQ preparation for long-lead equipment",
                    "Vendor list development and pre-qualification",
                    "Technical clarification support during bidding",
                    "Budgetary cost estimate inputs",
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
                scope: [
                    "PSV sizing and relief system design",
                    "Heat exchanger design and thermal rating",
                    "Process optimization and efficiency assessment",
                    "HAZOP studies and SIL assessment",
                    "Emergency Shutdown (ESD) design philosophy",
                ],
            },
            {
                title: "Mechanical Design Engineering",
                icon: "mechanical",
                scope: [
                    "Equipment list and mechanical datasheets",
                    "Mechanical schematic diagrams",
                    "Vessel and heat exchanger design",
                    "Pump and compressor selection",
                    "HVAC system design basis",
                ],
            },
            {
                title: "Electrical Design Engineering",
                icon: "electrical",
                scope: [
                    "Electrical load list",
                    "Single Line Diagram (SLD)",
                    "Power system studies",
                    "Grounding and lightning protection design",
                ],
            },
            {
                title: "Instrumentation Engineering",
                icon: "instrumentation",
                scope: [
                    "Instrument index and datasheets",
                    "Cause & Effect matrix",
                    "P&ID development (instrumentation)",
                    "Control philosophy and system architecture selection",
                ],
            },
            {
                title: "Civil Engineering",
                icon: "civil",
                scope: [
                    "Foundation design basis and loading criteria",
                    "Building and structure layout concepts",
                    "Retaining wall and boundary design basis",
                    "Preliminary civil BOQ",
                ],
            },
            {
                title: "Structural Engineering",
                icon: "structural",
                scope: [
                    "Steel and concrete structure design basis",
                    "Pipe rack and equipment support concept design",
                    "Mezzanine and platform layout concepts",
                    "Structural design criteria and load basis",
                ],
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
                scope: [
                    "Piping isometric drawings",
                    "Line list / line schedule finalization",
                    "Piping support design and load calculations",
                    "Piping Material Specification (PMS)",
                    "MTO / BOM preparation and valve datasheets",
                ],
            },
            {
                title: "Mechanical Design Engineering",
                icon: "mechanical",
                scope: [
                    "Equipment layout and arrangement drawings",
                    "GA drawings for equipment",
                    "Nozzle and manhole detail drawings",
                    "Finalized mechanical equipment datasheets",
                ],
            },
            {
                title: "Electrical Design Engineering",
                icon: "electrical",
                scope: [
                    "Cable routing and tray layout",
                    "Switchgear and MCC design",
                    "Cable schedule and BOM",
                    "Control panel design and schematics",
                    "Area classification drawings",
                ],
            },
            {
                title: "Instrumentation Engineering",
                icon: "instrumentation",
                scope: [
                    "Loop diagrams",
                    "Instrument hook-up drawings",
                    "Cable schedule and routing",
                    "PLC / DCS I/O lists",
                    "Instrument location plans",
                ],
            },
            {
                title: "Civil Engineering",
                icon: "civil",
                scope: [
                    "Equipment and machinery foundation drawings",
                    "Industrial and commercial building design",
                    "Retaining wall and boundary drawings",
                    "Civil BOM and BOQ finalization",
                ],
            },
            {
                title: "Structural Engineering",
                icon: "structural",
                scope: [
                    "Connection design and detailing",
                    "Structural BOM and fabrication drawings",
                    "Staircase and handrail design",
                    "Structural steel detailing for construction",
                ],
            },
            {
                title: "Procurement Support",
                icon: "procurement",
                scope: [
                    "Technical Bid Evaluation (TBE) and Commercial Bid Evaluation (CBE)",
                    "Vendor document review and approval",
                    "Inspection & Test Plan (ITP) review",
                    "Expediting and delivery monitoring",
                    "Material receiving and inspection support",
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
                scope: [
                    "Finite Element Analysis (FEA)",
                    "Nozzle load calculations against equipment allowables",
                    "Spring hanger sizing and expansion loop design",
                    "Occasional load analysis (wind & seismic)",
                    "CAESAR II / AutoPIPE modeling",
                ],
            },
            {
                title: "Structural Engineering",
                icon: "structural",
                scope: [
                    "Structural stress analysis (STAAD / ETABS)",
                    "Seismic and wind load analysis",
                    "Vibration analysis for equipment foundations",
                    "Transportation and lifting studies",
                ],
            },
            {
                title: "Reverse Engineering",
                icon: "reverse-engineering",
                scope: [
                    "3D laser scanning and dimensional verification",
                    "As-built documentation for design validation",
                    "Design recreation and optimization from legacy assets",
                    "Material and process identification",
                ],
            },
            {
                title: "Modular Package Engineering",
                icon: "modular",
                scope: [
                    "Process skid engineering",
                    "Utility skid design (water treatment, compressed air)",
                    "Electrical & instrumentation skid integration",
                    "Skid structural and mechanical design",
                    "Transportation and lifting coordination",
                ],
            },
            {
                title: "Fire & Safety Engineering",
                icon: "fire-safety",
                scope: [
                    "Fire and gas detection system design",
                    "Fire water network hydraulic design",
                    "Passive fire protection (PFP) specification",
                    "Escape route and emergency response layout",
                    "QRA (Quantitative Risk Assessment) support",
                ],
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
                scope: [
                    "Point cloud to intelligent 3D model conversion",
                    "As-built verification against design models",
                    "Legacy asset digitization for brownfield projects",
                ],
            },
            {
                title: "BIM & 3D Modeling",
                icon: "bim-3d",
                scope: [
                    "Intelligent 3D plant modeling",
                    "Clash detection and constructability review",
                    "Digital twin model development",
                    "4D construction sequencing visualization",
                ],
            },
            {
                title: "CAD Services",
                icon: "cad",
                scope: [
                    "2D drafting and drawing conversion",
                    "As-built drawing updates",
                    "CAD standardization and template development",
                    "Drawing digitization and archival",
                ],
            },
        ],
    },
];