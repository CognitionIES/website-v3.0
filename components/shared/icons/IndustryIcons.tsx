import { SVGProps } from "react";

/*
 * Industry icon set matching Engineering_Service__2_.pptx, Slide 6 ("Industries We
 * Serve") — the same 10 sectors, same rough visual language (single-weight line
 * icons). These are hand-drawn approximations, not a vector extraction of the
 * original artwork (that was flattened into a PNG in the deck, so there was
 * nothing to extract) — close enough for consistent site use, but if you get the
 * original icon set as SVG/font from whoever designed the deck, swap these out.
 *
 * All icons: 24x24 viewBox, stroke-based, inherit color via currentColor so they
 * pick up whatever text color class wraps them (e.g. text-[#0098AF]).
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const OilGasIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="6" y="4" width="12" height="16" rx="1.5" />
    <path d="M6 9h12M6 15h12" />
    <path d="M12 10.5c-1 1.2-1.6 2-1.6 2.9a1.6 1.6 0 0 0 3.2 0c0-.9-.6-1.7-1.6-2.9Z" />
  </svg>
);

export const PetrochemicalIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4 20V11l2-2v11M9 20V8l2.5-2.5V20M15 20V10l2-2v12" />
    <path d="M4 20h13" />
    <path d="M17 20v-4a1.5 1.5 0 0 1 3 0v4" />
  </svg>
);

export const ChemicalIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M10 3h4M11 3v5.5L6.5 17a2 2 0 0 0 1.8 3h7.4a2 2 0 0 0 1.8-3L13 8.5V3" />
    <path d="M8.5 14h7" />
    <circle cx="11" cy="16.3" r="0.5" fill="currentColor" stroke="none" />
    <circle cx="13.2" cy="17.2" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

export const PharmaceuticalIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3.5" y="9.5" width="17" height="7" rx="3.5" transform="rotate(-45 12 13)" />
    <path d="M9.2 9.2 14.8 14.8" />
  </svg>
);

export const FoodProcessingIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M3 20V13l3-2 3 2v7" />
    <path d="M3 20h6" />
    <path d="M7 9V5M7 5c1.4 0 2 1 2 2.2M7 5c-1.4 0-2 1-2 2.2" />
    <path d="M11 20V16.5c0-.8.7-1.5 1.5-1.5h4A1.5 1.5 0 0 1 18 16.5V20" />
    <path d="M11 20h9" />
  </svg>
);

export const WaterTreatmentIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3.5c2.4 3 5 6.4 5 9.4a5 5 0 0 1-10 0c0-3 2.6-6.4 5-9.4Z" />
    <path d="M4 19.5c1 .8 2 .8 3 0s2-.8 3 0 2 .8 3 0 2-.8 3 0 2 .8 3 0" />
  </svg>
);

export const FertilizerIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 20V11" />
    <path d="M12 12c0-3 2-4.5 5-5-0.5 3-2 5-5 5Z" />
    <path d="M12 14.5c0-2.5-1.8-3.8-4.3-4.3.4 2.5 1.8 4.3 4.3 4.3Z" />
    <path d="M9 20h6" />
  </svg>
);

export const RenewableEnergyIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="17.5" cy="6" r="1.6" />
    <path d="M17.5 2.3v1M20.5 3.7l-.7.7M21.3 6.5h-1M20.5 9.3l-.7-.7M15.5 9.3l.7-.7M14.7 6.5h1" />
    <path d="M11 20V9" />
    <path d="M11 10.5 6.5 8.2c-.5 1.8.4 3.3 1.9 4.1L11 10.5Z" />
    <path d="M11 10.5 15.2 7c1 1.6.6 3.4-.8 4.5L11 10.5Z" />
    <path d="M11 10.5 9.3 15.4c1.8.4 3.3-.5 4-2.1L11 10.5Z" />
    <path d="M8 20h6" />
  </svg>
);

export const HydrogenIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="3.3" />
    <text x="12" y="13.6" fontSize="5.5" fontWeight="700" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="sans-serif">H2</text>
    <circle cx="5.5" cy="6.5" r="1.6" />
    <circle cx="18.5" cy="6.5" r="1.6" />
    <circle cx="5.5" cy="17.5" r="1.6" />
    <path d="M6.8 7.6 9.6 9.9M17.2 7.6 14.4 9.9M6.8 16.4 9.6 14.1" />
  </svg>
);

export const SpecialtyChemicalsIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M9 4.5 5 7v5l4 2.5 4-2.5V7Z" />
    <path d="M13 9 17 6.5l4 2.5v5l-4 2.5-2.5-1.5" />
    <path d="M9 14v3l4 2.5 4-2.5v-5" />
    <circle cx="9" cy="4.5" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="17" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="13" cy="19" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

// Kept for completeness (used on the Plant Engineering / other pages if the full
// 10-item set is needed elsewhere) — not all 10 are used on the About page, which
// only surfaces a subset. See INDUSTRIES in constants/aboutPage/constants.ts.
export const INDUSTRY_ICON_MAP = {
  "Oil & Gas": OilGasIcon,
  "Petrochemical": PetrochemicalIcon,
  "Chemical": ChemicalIcon,
  "Pharmaceutical": PharmaceuticalIcon,
  "Food Processing": FoodProcessingIcon,
  "Water Treatment": WaterTreatmentIcon,
  "Fertilizer": FertilizerIcon,
  "Renewable Energy": RenewableEnergyIcon,
  "Hydrogen": HydrogenIcon,
  "Specialty Chemicals": SpecialtyChemicalsIcon,
} as const;