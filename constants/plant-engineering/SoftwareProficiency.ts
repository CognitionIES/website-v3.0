import type { IconKey } from "./servicePhases";

// Sourced from Engineering_Service__2_.pptx, Slide 12 ("Software Proficiency") —
// same tool list as before, but regrouped from "by software type" (3D Design,
// 2D, Analysis, Misc.) to "by discipline" (matching the IconKey categories used
// in PlantServicesExpanded.tsx), so each accordion can show only the tools
// relevant to it instead of a separate standalone section.
//
// IMPORTANT: the deck itself never grouped these tools by discipline — this
// regrouping is my own engineering judgment call about which tool fits which
// discipline, not something stated in your source material. Please sanity-check
// it; a couple of these (e.g. ETAP under both Process and Electrical) are
// genuinely cross-disciplinary and I've picked one home for them rather than
// duplicating everywhere.
//
// Still rendered as text badges, not logos — no vendor logo files exist for
// these tools yet (unlike the Product Engineering set, which you provided real
// logos for). Send these and I'll swap to the same logo-tile treatment.
//
// Also unmapped: Instrumentation Engineering and CAD Services have no tool from
// this list that clearly fits — left empty rather than force a bad match.

export const SOFTWARE_BY_DISCIPLINE: Partial<Record<IconKey, string[]>> = {
  "process-safety": ["AspenTech", "Aspen Plus", "ETAP"],
  "piping": [
    "AutoCAD Plant 3D",
    "CADWorx Plant Design Suite",
    "SmartPlant 3D",
    "AVEVA Everything3D",
    "AutoPLANT",
    "PDS (Intergraph)",
  ],
  "piping-stress": ["CAESAR II", "AutoPIPE", "NozzlePRO"],
  "mechanical": ["SolidWorks", "Ansys", "PV Elite"],
  "electrical": ["ETAP"],
  "civil": ["MicroStation", "STAAD.Pro"],
  "structural": ["Tekla Structures", "Autodesk Advance Steel", "RAM", "STAAD.Pro", "ProSteel"],
  "reverse-engineering": ["AVEVA Point Cloud Manager", "Autodesk Navisworks", "EdgeWise", "CAXperts", "Trimble"],
  "modular": ["Autodesk Navisworks", "Bluebeam"],
  "procurement": ["Bluebeam", "Autodesk Construction Cloud"],
  "fire-safety": ["PIPENET"],
  "bim-3d": ["Autodesk Revit", "Autodesk Navisworks", "AVEVA Everything3D", "Autodesk Construction Cloud"],
};