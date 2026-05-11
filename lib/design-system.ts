/**
 * Cognition IES — Design System
 * Single source of truth for brand tokens.
 * Import from here instead of using raw hex values in components.
 */

export const colors = {
  // Primary brand teal
  primary: "#0098AF",
  primaryDark: "#007B8F",
  primaryLight: "#99D5DF",
  primaryBg: "#E6F0F5",
  primarySubtle: "#F5FDFF",

  // Dark navy (headings, hero overlays)
  dark: "#003C46",

  // Neutral grey (body text, muted elements)
  muted: "#5B5B5B",

  // Backgrounds
  bgWhite: "#FFFFFF",
  bgLight: "#F8FAFB",
  bgGray: "#F3F4F6",

  // Semantic
  success: "#16A34A",
  error: "#DC2626",
} as const;

export const gradients = {
  heroOverlay: "from-[#003C46]/85 to-[#0098AF]/70",
  heroCTABg: "from-[#003C46] to-[#0098AF]",
  sectionAlt: "from-white to-[#E6F0F5]/40",
  ctaBanner: "from-[#0098AF] to-[#003C46]",
} as const;

export const typography = {
  heroTitle: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight",
  sectionTitle: "text-3xl sm:text-4xl font-bold tracking-tight",
  sectionTitleLg: "text-4xl md:text-5xl font-bold tracking-tight",
  cardTitle: "text-xl font-semibold",
  body: "text-base leading-relaxed",
  bodyLg: "text-lg leading-relaxed",
  caption: "text-sm",
  label: "text-xs font-medium uppercase tracking-wider",
} as const;

export const spacing = {
  sectionY: "py-16 sm:py-20 lg:py-24",
  sectionYSm: "py-12 sm:py-16",
  containerX: "px-4 sm:px-6 lg:px-8",
  maxWidth: "max-w-7xl mx-auto",
} as const;

export const animation = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
  staggerChildren: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  },
  scaleHover: {
    rest: { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.2 } },
  },
  cardHover: {
    rest: { y: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.08)" },
    hover: { y: -6, boxShadow: "0 12px 24px rgba(0,152,175,0.15)", transition: { duration: 0.22 } },
  },
} as const;
