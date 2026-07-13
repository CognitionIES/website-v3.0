import type { StaticImageData } from "next/image";

// Mechanical Design Services
import SolidWorksLogo from "@/constants/images/Company_logo/DSSolidWorks_logo.webp";
import CatiaLogo from "@/constants/images/Company_logo/DSCatia_logo.webp";
import CreoLogo from "@/constants/images/Company_logo/Creo_logo.webp";
import SiemensNXLogo from "@/constants/images/Company_logo/SiemensNX_Logo.webp";
import SolidEdgeLogo from "@/constants/images/Company_logo/SolidEdge_logo.webp";
import InventorLogo from "@/constants/images/Company_logo/autoDeskInventor_logoo.webp";
import AutoCADLogo from "@/constants/images/Company_logo/AutoCad_Logo.webp";
import AutodeskMecLogo from "@/constants/images/Company_logo/autodeskMec_logo.webp";
import MastercamLogo from "@/constants/images/Company_logo/masterCam_logo.webp";
import SmartCAMLogo from "@/constants/images/Company_logo/smartCAM_logo.webp";
import DesignXLogo from "@/constants/images/Company_logo/DesignX_logo.webp";

// Electrical Engineering Services
import AltiumLogo from "@/constants/images/Company_logo/AltiumDesigner_logo.webp";
import EagleLogo from "@/constants/images/Company_logo/AutodeskEagle_logo.webp";
import AutoCADElectricalLogo from "@/constants/images/Company_logo/AutodeskElc_logo.webp";
import KiCadLogo from "@/constants/images/Company_logo/KiCad_logo.webp";
import OrCADLogo from "@/constants/images/Company_logo/orCad_logo.webp";
import EplanLogo from "@/constants/images/Company_logo/eplan_logo.webp";

// CAE / CFD
import AnsysLogo from "@/constants/images/Company_logo/Ansys_logo.webp";
import AnsysFluentLogo from "@/constants/images/Company_logo/ansysFluent_logo.webp";
import HyperWorksLogo from "@/constants/images/Company_logo/altairHyperWorks_logo-bg-removed.webp";
import AnsaLogo from "@/constants/images/Company_logo/ansaPreProcessor_logo.webp";
import ComsolLogo from "@/constants/images/Company_logo/comsolMultiphysics_logo.webp";
import AbaqusLogo from "@/constants/images/Company_logo/simbulaAbaqus_logo.webp";
import OptiStructLogo from "@/constants/images/Company_logo/opistruct_logo.webp";
import StarCCMLogo from "@/constants/images/Company_logo/star-cmm_logo.webp";

// Prototyping & 3D Printing
import CuraLogo from "@/constants/images/Company_logo/UltiMakerCura_logo.webp";
import FormlabsLogo from "@/constants/images/Company_logo/formLabs_logo.webp";
import Simplify3DLogo from "@/constants/images/Company_logo/simplify3d_logo.webp";
import KeyShotLogo from "@/constants/images/Company_logo/keyShot_logo.webp";
import RhinoLogo from "@/constants/images/Company_logo/rh_logo.webp";

// Hydraulic Engineering Services
import HyDrawLogo from "@/constants/images/Company_logo/HyDraw_Cad.webp";
import HydroSYMLogo from "@/constants/images/Company_logo/hydroSYM_logo.webp";
import FestoFluidSimLogo from "@/constants/images/Company_logo/festoFluidSim_logo.webp";
import AutomationStudioLogo from "@/constants/images/Company_logo/automationStudio_logo.webp";

// Asset Management
import WindchillLogo from "@/constants/images/Company_logo/windchill_logo.webp";
import TeamcenterLogo from "@/constants/images/Company_logo/TeamCenter_logo.webp";
import EnoviaLogo from "@/constants/images/Company_logo/Enovia_logo.webp";
import MaximoLogo from "@/constants/images/Company_logo/maximo_logo.webp";
import InforEAMLogo from "@/constants/images/Company_logo/inforEAM_logo.webp";
import SapEAMLogo from "@/constants/images/Company_logo/sapEAM_logo.webp";
import AssetPandaLogo from "@/constants/images/Company_logo/assetPanda_logo.webp";

// Embedded Systems Engineering
import KeilLogo from "@/constants/images/Company_logo/keil_logo.webp";
import STM32CubeIDELogo from "@/constants/images/Company_logo/stm32CubeID_logo.webp";
import JTAGLogo from "@/constants/images/Company_logo/jtag_logo.webp";
import LauterbachLogo from "@/constants/images/Company_logo/lauterbachD_Logo.webp";
import QNXLogo from "@/constants/images/Company_logo/qnx_logo.webp";
import VxWorksLogo from "@/constants/images/Company_logo/vxWorks_logo.webp";
import FreeRTOSLogo from "@/constants/images/Company_logo/freeRTOS_logo.webp";

// Technical Publication
import WordLogo from "@/constants/images/Company_logo/word_logo.webp";
import InDesignLogo from "@/constants/images/Company_logo/ID_logo.webp";
import IllustratorLogo from "@/constants/images/Company_logo/AI_logo.webp";
import PhotoshopLogo from "@/constants/images/Company_logo/photoshop_logo.webp";
import FrameMakerLogo from "@/constants/images/Company_logo/FM_logo.webp";
import CorelDrawLogo from "@/constants/images/Company_logo/corelDraw_LOGO.webp";
import MadCapFlareLogo from "@/constants/images/Company_logo/madcapFlare_logo.webp";
import FigmaLogo from "@/constants/images/Company_logo/figma_logo.webp";

// Supply Chain Management
import SAPLogo from "@/constants/images/Company_logo/sap_logo.webp";
import InforLogo from "@/constants/images/Company_logo/infor_logo.webp";
import ArenaLogo from "@/constants/images/Company_logo/arena_logo.webp";
import JDALogo from "@/constants/images/Company_logo/jda_logo.webp";
import OracleLogo from "@/constants/images/Company_logo/oracleNestitute_logo.webp";
import TableauLogo from "@/constants/images/Company_logo/tableau_logo.webp";
import PowerBILogo from "@/constants/images/Company_logo/powerBI_logo.webp";
import QlikLogo from "@/constants/images/Company_logo/qlick_logo.webp";
import SapAnalyticsLogo from "@/constants/images/Company_logo/sapAnalyticsCloud_logo.webp";

export type SoftwareItem = { name: string; logo: StaticImageData; uncertain?: boolean };
export type SoftwareCategory = { id: string; title: string; tools: SoftwareItem[] };

// `id` matches the service `id` in ProductServicesExpanded.tsx exactly, so the
// tool list for each category can be embedded directly inside that category's own
// accordion instead of living in a separate standalone section.
export const SOFTWARE_PROFICIENCY: SoftwareCategory[] = [
    {
        id: "mechanical-design",
        title: "Mechanical Design Services",
        tools: [
            { name: "SolidWorks", logo: SolidWorksLogo },
            { name: "CATIA", logo: CatiaLogo },
            { name: "Creo", logo: CreoLogo },
            { name: "Siemens NX", logo: SiemensNXLogo },
            { name: "Solid Edge", logo: SolidEdgeLogo },
            { name: "Autodesk Inventor", logo: InventorLogo },
            { name: "AutoCAD", logo: AutoCADLogo },
            { name: "Autodesk Mechanical", logo: AutodeskMecLogo },
            { name: "Mastercam", logo: MastercamLogo },
            { name: "SmartCAM", logo: SmartCAMLogo },
            { name: "DesignX", logo: DesignXLogo, uncertain: true },
        ],
    },
    {
        id: "electrical-engineering",
        title: "Electrical Engineering Services",
        tools: [
            { name: "Altium Designer", logo: AltiumLogo },
            { name: "Autodesk EAGLE", logo: EagleLogo },
            { name: "AutoCAD Electrical", logo: AutoCADElectricalLogo },
            { name: "KiCad", logo: KiCadLogo },
            { name: "OrCAD", logo: OrCADLogo },
            { name: "EPLAN", logo: EplanLogo },
        ],
    },
    {
        id: "cae-cfd",
        title: "CAE / CFD",
        tools: [
            { name: "Ansys", logo: AnsysLogo },
            { name: "Ansys Fluent", logo: AnsysFluentLogo },
            { name: "Altair HyperWorks", logo: HyperWorksLogo },
            { name: "ANSA Pre-Processor", logo: AnsaLogo },
            { name: "COMSOL Multiphysics", logo: ComsolLogo },
            { name: "Abaqus", logo: AbaqusLogo },
            { name: "OptiStruct", logo: OptiStructLogo },
            { name: "STAR-CCM+", logo: StarCCMLogo },
        ],
    },
    {
        id: "prototyping-3d-printing",
        title: "Prototyping & 3D Printing",
        tools: [
            { name: "UltiMaker Cura", logo: CuraLogo },
            { name: "Formlabs", logo: FormlabsLogo },
            { name: "Simplify3D", logo: Simplify3DLogo },
            { name: "KeyShot", logo: KeyShotLogo },
            { name: "Rhino", logo: RhinoLogo },
        ],
    },
    {
        id: "hydraulic-engineering",
        title: "Hydraulic Engineering Services",
        tools: [
            { name: "HyDraw CAD", logo: HyDrawLogo },
            { name: "HydroSYM", logo: HydroSYMLogo },
            { name: "Festo FluidSIM", logo: FestoFluidSimLogo },
            { name: "Automation Studio", logo: AutomationStudioLogo },
        ],
    },
    {
        id: "asset-management",
        title: "Asset Management",
        tools: [
            { name: "PTC Windchill", logo: WindchillLogo },
            { name: "Siemens Teamcenter", logo: TeamcenterLogo },
            { name: "3DEXPERIENCE ENOVIA", logo: EnoviaLogo },
            { name: "IBM Maximo", logo: MaximoLogo },
            { name: "Infor EAM", logo: InforEAMLogo },
            { name: "SAP EAM", logo: SapEAMLogo },
            { name: "Asset Panda", logo: AssetPandaLogo },
        ],
    },
    {
        id: "embedded-systems",
        title: "Embedded Systems Engineering",
        tools: [
            { name: "Keil", logo: KeilLogo },
            { name: "STM32CubeIDE", logo: STM32CubeIDELogo },
            { name: "JTAG", logo: JTAGLogo },
            { name: "Lauterbach", logo: LauterbachLogo },
            { name: "QNX", logo: QNXLogo },
            { name: "VxWorks", logo: VxWorksLogo },
            { name: "FreeRTOS", logo: FreeRTOSLogo },
        ],
    },
    {
        id: "technical-publication",
        title: "Technical Publication",
        tools: [
            { name: "Microsoft Word", logo: WordLogo },
            { name: "Adobe InDesign", logo: InDesignLogo },
            { name: "Adobe Illustrator", logo: IllustratorLogo },
            { name: "Adobe Photoshop", logo: PhotoshopLogo },
            { name: "Adobe FrameMaker", logo: FrameMakerLogo },
            { name: "CorelDRAW", logo: CorelDrawLogo },
            { name: "MadCap Flare", logo: MadCapFlareLogo },
            { name: "Figma", logo: FigmaLogo },
        ],
    },
    {
        id: "supply-chain-management",
        title: "Supply Chain Management",
        tools: [
            { name: "SAP", logo: SAPLogo },
            { name: "Infor", logo: InforLogo },
            { name: "Arena PLM", logo: ArenaLogo },
            { name: "Blue Yonder (JDA)", logo: JDALogo },
            { name: "Oracle NetSuite", logo: OracleLogo, uncertain: true },
            { name: "Tableau", logo: TableauLogo },
            { name: "Power BI", logo: PowerBILogo },
            { name: "Qlik", logo: QlikLogo },
            { name: "SAP Analytics Cloud", logo: SapAnalyticsLogo },
        ],
    },
];