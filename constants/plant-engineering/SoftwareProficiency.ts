import type { IconKey } from "./servicePhases";
import type { SoftwareTool } from "@/components/shared/SoftwareTools";
import SolidWorksLogo from "@/constants/images/Company_logo/DSSolidWorks_logo.webp";
import AnsysLogo from "@/constants/images/Company_logo/Ansys_logo.webp";

// Logos below were cropped from the client-provided "plant software grid"
// image (their own capability slide — same source as the Engineering_Service
// PPTX referenced below), not sourced from the web. Covers every tool that
// previously had no logo.
import AutoCADPlant3DLogo from "@/constants/images/plant-software-logo/autocad_plant3d.webp";
import TeklaStructuresLogo from "@/constants/images/plant-software-logo/tekla_structures.webp";
import AutodeskNavisworksLogo from "@/constants/images/plant-software-logo/autodesk_navisworks.webp";
import AvevaPointCloudLogo from "@/constants/images/plant-software-logo/aveva_pointcloud.webp";
import AutoPlantLogo from "@/constants/images/plant-software-logo/autoplant.webp";
import CADWorxLogo from "@/constants/images/plant-software-logo/cadworx.webp";
import SmartPlant3DLogo from "@/constants/images/plant-software-logo/smartplant3d.webp";
import AdvanceSteelLogo from "@/constants/images/plant-software-logo/advance_steel.webp";
import AvevaEverything3DLogo from "@/constants/images/plant-software-logo/aveva_everything3d.webp";
import RamLogo from "@/constants/images/plant-software-logo/ram.webp";
import CAXpertsLogo from "@/constants/images/plant-software-logo/caxperts.webp";
import EdgeWiseLogo from "@/constants/images/plant-software-logo/edgewise.webp";
import MicroStationLogo from "@/constants/images/plant-software-logo/microstation.webp";
import CaesarIILogo from "@/constants/images/plant-software-logo/caesar_ii.webp";
import PVEliteLogo from "@/constants/images/plant-software-logo/pv_elite.webp";
import ProSteelLogo from "@/constants/images/plant-software-logo/prosteel.webp";
import AutoPipeLogo from "@/constants/images/plant-software-logo/autopipe.webp";
import StaadProLogo from "@/constants/images/plant-software-logo/staad_pro.webp";
import NozzleProLogo from "@/constants/images/plant-software-logo/nozzlepro.webp";
import EtapLogo from "@/constants/images/plant-software-logo/etap.webp";
import PipenetLogo from "@/constants/images/plant-software-logo/pipenet.webp";
import AspenTechLogo from "@/constants/images/plant-software-logo/aspentech.webp";
import AspenPlusLogo from "@/constants/images/plant-software-logo/aspen_plus.webp";
import PdsIntergraphLogo from "@/constants/images/plant-software-logo/pds_intergraph.webp";
import TrimbleLogo from "@/constants/images/plant-software-logo/trimble.webp";
import BluebeamLogo from "@/constants/images/plant-software-logo/bluebeam.webp";
import AutodeskConstructionCloudLogo from "@/constants/images/plant-software-logo/autodesk_construction_cloud.webp";
import AutodeskRevitLogo from "@/constants/images/plant-software-logo/autodesk_revit.webp";

// Sourced from Engineering_Service__2_.pptx, Slide 12 ("Software Proficiency") —
// regrouped from "by software type" to "by discipline" to match IconKey.
// Note: "ProSteel" may be the pre-acquisition name for "Autodesk Advance
// Steel" (Autodesk acquired and rebranded ProSteel) — worth confirming
// whether these should really be two separate entries. Left as-is here since
// that's a content decision, not something to silently merge.
// Similarly, "PDS (Intergraph)" looks like a legacy product name from before
// Intergraph's PP&M business was folded into Hexagon — worth confirming it's
// still the entry you want listed.

export const SOFTWARE_BY_DISCIPLINE: Partial<Record<IconKey, SoftwareTool[]>> = {
  "process-safety": [
    { name: "AspenTech", logo: AspenTechLogo },
    { name: "Aspen Plus", logo: AspenPlusLogo },
    { name: "ETAP", logo: EtapLogo },
  ],
  "piping": [
    { name: "AutoCAD Plant 3D", logo: AutoCADPlant3DLogo },
    { name: "CADWorx Plant Design Suite", logo: CADWorxLogo },
    { name: "SmartPlant 3D", logo: SmartPlant3DLogo },
    { name: "AVEVA Everything3D", logo: AvevaEverything3DLogo },
    { name: "AutoPLANT", logo: AutoPlantLogo },
    { name: "PDS (Intergraph)", logo: PdsIntergraphLogo },
  ],
  "piping-stress": [
    { name: "CAESAR II", logo: CaesarIILogo },
    { name: "AutoPIPE", logo: AutoPipeLogo },
    { name: "NozzlePRO", logo: NozzleProLogo },
  ],
  "mechanical": [
    { name: "SolidWorks", logo: SolidWorksLogo },
    { name: "Ansys", logo: AnsysLogo },
    { name: "PV Elite", logo: PVEliteLogo },
  ],
  "electrical": [{ name: "ETAP", logo: EtapLogo }],
  "civil": [
    { name: "MicroStation", logo: MicroStationLogo },
    { name: "STAAD.Pro", logo: StaadProLogo },
  ],
  "structural": [
    { name: "Tekla Structures", logo: TeklaStructuresLogo },
    { name: "Autodesk Advance Steel", logo: AdvanceSteelLogo },
    { name: "RAM", logo: RamLogo },
    { name: "STAAD.Pro", logo: StaadProLogo },
    { name: "ProSteel", logo: ProSteelLogo },
  ],
  "reverse-engineering": [
    { name: "AVEVA Point Cloud Manager", logo: AvevaPointCloudLogo },
    { name: "Autodesk Navisworks", logo: AutodeskNavisworksLogo },
    { name: "EdgeWise", logo: EdgeWiseLogo },
    { name: "CAXperts", logo: CAXpertsLogo },
    { name: "Trimble", logo: TrimbleLogo },
  ],
  "modular": [
    { name: "Autodesk Navisworks", logo: AutodeskNavisworksLogo },
    { name: "Bluebeam", logo: BluebeamLogo },
  ],
  "procurement": [
    { name: "Bluebeam", logo: BluebeamLogo },
    { name: "Autodesk Construction Cloud", logo: AutodeskConstructionCloudLogo },
  ],
  "fire-safety": [{ name: "PIPENET", logo: PipenetLogo }],
  "bim-3d": [
    { name: "Autodesk Revit", logo: AutodeskRevitLogo },
    { name: "Autodesk Navisworks", logo: AutodeskNavisworksLogo },
    { name: "AVEVA Everything3D", logo: AvevaEverything3DLogo },
    { name: "Autodesk Construction Cloud", logo: AutodeskConstructionCloudLogo },
  ],
};
