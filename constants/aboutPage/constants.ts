// Constants for the About page to keep content and assets modular and reusable
import { StaticImageData } from 'next/image'
import HeroImage from '@/constants/images/about/about-hero.webp'
import OurJourneyImage from '@/constants/images/about/about-our-journey.webp'
import flexScaleImage from '@/constants/images/about/flex-scale.webp'
import lifeCycleImage from '@/constants/images/about/lifecyle-mastery.webp'
import qualityCoreImage from '@/constants/images/about/quality-core.webp'
import coInnovativeImage from '@/constants/images/about/coinnovative.webp'

// NOTE: `missionVisionImage` and `statsImage` (about/missionvision.webp, about/stats.webp)
// were imported here previously but never rendered anywhere in AboutPage. Removed.
// If you find you need a background texture for those sections, re-add deliberately —
// don't let it sit as a dead import again.

export const ABOUT_CONSTANTS = {
  // Image URLs
  IMAGES: {
    HERO_IMAGE: { HeroImage },
    STORY_IMAGE: { OurJourneyImage },
    KEY_VALUES: [
      coInnovativeImage,
      lifeCycleImage,
      qualityCoreImage,
      flexScaleImage,
    ],
  },

  // NOTE: verify this is actually consumed by a generateMetadata()/buildMetadata()
  // call in this route's layout.tsx before touching it. It's not referenced by
  // AboutPage itself, so if nothing imports it, it's dead weight in this file.
  keywords: [
    "about cognition ies",
    "multidisciplinary engineering consultancy",
    "process industry engineering",
    "plant engineering company",
    "ISO 9001 certified engineering company",
    "engineering company since 2005",
    "digital twin engineering",
    "process mechanical piping engineering",
    "AVEVA certified partner",
    "NASSCOM member company",
    "oil and gas engineering consultancy",
    "petrochemical engineering services",
  ],

  // Text Content — Hero, Story, Mission/Vision, and the closing quote are verbatim
  // (or near-verbatim) from Cognition_IES_Engineering_Excellence.pptx. Only the
  // "XXX+ Projects Successfully Delivered" stat below is unresolved — that's a
  // placeholder in your own deck, not something I filled in.
  TEXT: {
    COMPANY_NAME: "Cognition IES",
    HERO_HEADING: "Engineering Excellence. Digital Intelligence.",
    HERO_SUBTITLE: "A multidisciplinary engineering consultancy for the process industry — from concept to commissioning.",
    STORY_TITLE: "Two Decades of Engineering Trust",
    STORY_P1:
      "Established in 2005, Cognition IES is a multidisciplinary engineering consultancy delivering comprehensive engineering solutions for the process industry. With over two decades of experience, we partner with clients to transform concepts into fully operational facilities through innovative engineering, technical excellence, and a commitment to quality — underpinned by our ISO 9001:2015-certified quality management systems.",
    STORY_P2:
      "Our expertise spans the complete project lifecycle—from conceptual studies and process design to detailed engineering, procurement support, construction assistance, and commissioning. We are particularly recognized for our strengths in Process Engineering, Mechanical Engineering, and Piping Engineering, delivering practical, efficient, and reliable solutions for complex industrial projects.",
    CLOSING_QUOTE:
      "At Cognition IES, we believe engineering is more than designing systems—it's about building trusted partnerships and delivering solutions that power the industries of tomorrow.",
    INDUSTRIES_TITLE: "Industries We Serve",
    INDUSTRIES_DESC:
      "Our multidisciplinary team combines engineering expertise with advanced digital technologies to deliver integrated, cost-effective, and sustainable solutions tailored to each client's objectives.",
    MISSION_TITLE: "Our Mission",
    MISSION_DESC:
      "To deliver innovative, reliable, and cost-effective engineering solutions that create lasting value for our clients through technical excellence, quality, safety, and sustainable engineering practices.",
    // Matches the bolded/teal phrase on the deck's Mission & Vision slide exactly —
    // must be a verbatim substring of MISSION_DESC above or the highlight won't render.
    MISSION_HIGHLIGHT: "cost-effective engineering solutions",
    VISION_TITLE: "Our Vision",
    VISION_DESC:
      "To become a trusted global engineering partner recognized for delivering world-class process engineering, EPC support, and digital engineering solutions with innovation, integrity, and commitment to a sustainable future.",
    // Same as above — verbatim substring of VISION_DESC.
    VISION_HIGHLIGHT: "world-class process engineering, EPC support, and digital engineering solutions",
    PROCESS_TITLE: "End-to-End Engineering, Concept to Commissioning",
    PROCESS_DESC:
      "Recognized strengths in Process, Mechanical & Piping Engineering — delivering practical, efficient, and reliable solutions for complex industrial projects.",
    DIGITAL_TWIN_TITLE: "Digital Twin Expertise",
    DIGITAL_TWIN_TAGLINE: "For Complex Industrial Facilities",
    DIGITAL_TWIN_DESC:
      "As industries continue to embrace digital transformation, Cognition IES has developed advanced capabilities in Digital Twin technology. We have successfully delivered a complete Digital Twin for a large-scale refinery, showcasing our expertise in creating intelligent digital assets that enhance plant visualization, operational efficiency, maintenance planning, and lifecycle management.",
    VALUES_TITLE: "What Drives Us",
    CERTIFICATIONS_TITLE: "Certifications & Partnerships",
    CERTIFICATIONS_DESC:
      "Recognized standards and strategic alliances that back the quality and reach of our engineering delivery.",
    CTA_TITLE: "Shape the Future with Us",
    CTA_DESC:
      "Ready to turn your engineering challenges into opportunities? Let's connect and create something extraordinary together.",
  },

  // Stats — from Slide 4 ("By the Numbers") of the deck. "XXX+" is literally what's
  // in your own deck — you hadn't filled in a real project count there either.
  // Replace it before this ships; I'm not going to guess a number for you.
  STATS: [
    { stat: "2005", label: "Established" },
    { stat: "20+", label: "Years of Engineering Excellence" },
    { stat: "XXX+", label: "Projects Successfully Delivered" }, // TODO: replace XXX with real count
    { stat: "50+", label: "Engineering Professionals" },
    { stat: "7+", label: "Industries Served" },
  ],
  KEY_VALUES: [
    { title: "Co-Innovation", desc: "Co-creating patents with you." },
    { title: "Lifecycle Mastery", desc: "From vision to victory." },
    { title: "Quality Core", desc: "Precision every time." },
    { title: "Flex & Scale", desc: "Adapting to your pace." },
  ],

  // Industries — corrected to match Engineering_Service__2_.pptx, Slide 6
  // ("Industries We Serve") exactly — this is the dedicated, authoritative list
  // with its own icon set, not the shorter 7-sector summary mentioned in the
  // narrative text of the other deck. Icons live in
  // components/shared/icons/IndustryIcons.tsx, hand-drawn to match the deck's
  // icon style since the originals were flattened into a PNG.
  INDUSTRIES: [
    { title: "Oil & Gas", desc: "Upstream, midstream, and downstream engineering across the hydrocarbon value chain." },
    { title: "Petrochemical", desc: "Detailed engineering for petrochemical processing and derivative production units." },
    { title: "Chemical", desc: "Process and plant engineering for chemical manufacturing and handling facilities." },
    { title: "Pharmaceutical", desc: "Engineering support for pharmaceutical manufacturing with regulatory traceability built in." },
    { title: "Food Processing", desc: "Plant engineering for food and beverage production and processing facilities." },
    { title: "Water Treatment", desc: "Engineering for water and wastewater treatment infrastructure." },
    { title: "Fertilizer", desc: "Process engineering for fertilizer and agrochemical production plants." },
    { title: "Renewable Energy", desc: "Engineering support for wind, solar, and other renewable energy infrastructure." },
    { title: "Hydrogen", desc: "Engineering for hydrogen production, storage, and handling facilities." },
    { title: "Specialty Chemicals", desc: "Tailored process engineering for specialty and fine chemical production lines." },
  ],

  // Project lifecycle — Slide 8 of the deck ("End-to-End Engineering, Concept to
  // Commissioning"). This replaces the earlier generic 4-step placeholder process.
  PROCESS: [
    { step: "01", title: "Conceptual Studies", desc: "Feasibility & process design." },
    { step: "02", title: "Detailed Engineering", desc: "Full design package." },
    { step: "03", title: "Procurement Support", desc: "Vendor & bid evaluation." },
    { step: "04", title: "Construction Assistance", desc: "Site engineering support." },
    { step: "05", title: "Commissioning", desc: "Start-up & handover." },
  ],

  // Digital Twin highlights — Slide 6 of the deck.
  DIGITAL_TWIN_HIGHLIGHTS: [
    "Plant Visualization",
    "Operational Efficiency",
    "Maintenance Planning",
    "Lifecycle Management",
  ],

  // Certifications & Partnerships
  // `logo` should point to an actual imported asset (StaticImageData) once you have
  // the official files:
  //   - ISO 9001: get the mark from your certification body (BSI/DNV/TÜV/etc.),
  //     not a generic "ISO" logo — ISO's own trademark policy doesn't allow that.
  //   - AVEVA: pull from the AVEVA Partner Network portal (gated behind verified
  //     partner status).
  //   - NASSCOM: pull from the NASSCOM member portal.
  // Until then this falls back to the text badge — that's intentional, not a bug.
  CERTIFICATIONS: [
    {
      badge: "ISO 9001",
      logo: undefined as StaticImageData | undefined,
      title: "ISO 9001:2015 Certified",
      desc: "Our quality management systems are certified to the ISO 9001:2015 standard, reflecting consistent, audit-ready engineering delivery.",
    },
    {
      badge: "AVEVA",
      logo: undefined as StaticImageData | undefined,
      title: "AVEVA Certified Partner",
      desc: "Recognized as a certified partner of AVEVA, enabling us to deliver engineering and digital solutions built on industry-leading AVEVA software.",
    },
    {
      badge: "NASSCOM",
      logo: undefined as StaticImageData | undefined,
      title: "NASSCOM Member",
      desc: "A certified member of NASSCOM, India's apex industry association for the technology sector, reinforcing our standing within the national tech ecosystem.",
    },
  ],
};