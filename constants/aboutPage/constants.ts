
// Constants for the About page to keep content and assets modular and reusable
import { StaticImageData } from 'next/image'
import HeroImage from '@/constants/images/about/about-hero.jpg'
import OurJourneyImage from '@/constants/images/about/about-our-journey.jpg'
import flexScaleImage from '@/constants/images/about/flex-scale.jpg'
import lifeCycleImage from '@/constants/images/about/lifecyle-mastery.jpg'
import qualityCoreImage from '@/constants/images/about/quality-core.jpg'
import coInnovativeImage from '@/constants/images/about/coinnovative.jpg'
import missionVisionImage from '@/constants/images/about/missionvision.jpg'
import statsImage from '@/constants/images/about/stats.jpg'
export const ABOUT_CONSTANTS = {
  // Image URLs
  IMAGES: {
    HERO_IMAGE: { HeroImage },
    STORY_IMAGE: { OurJourneyImage },
    MISSION_VISION_BG:
      missionVisionImage,
    TECH_PATTERN: statsImage,
    KEY_VALUES: [
      coInnovativeImage,
      lifeCycleImage,
      qualityCoreImage,
      flexScaleImage,

    ],
  },
  keywords: [
    "about cognition ies",
    "engineering consultancy india usa",
    "engineering company history",
    "product engineering firm",
    "plant engineering company",
    "ISO 9001 certified engineering company",
    "global engineering consultancy",
    "engineering company since 2005",
    "co-innovation engineering partner",
    "product lifecycle engineering partner",
    "AVEVA certified partner",
    "NASSCOM member company",
  ],
  // Text Content
  TEXT: {
    COMPANY_NAME: "Cognition IES",
    HERO_SUBTITLE:
      "Engineering the future with innovation, agility, and a human-first approach since 2005.",
    STORY_TITLE: "Our Journey",
    STORY_P1:
      "Born in 2005, Cognition IES has evolved into a global innovator. We’ve reimagined engineering by breaking down traditional hierarchies, connecting our expert engineers directly with clients to deliver seamless solutions for industries like automotive, aerospace, and medical devices.",
    STORY_P2:
      "Our unique blend of startup agility and deep services drives us to create value that’s bold, practical, and sustainable, every single day.",
    MISSION_TITLE: "Our Mission",
    MISSION_DESC:
      "To spark engineering innovation with a people-first mindset, empowering every team member to deliver exceptional value directly to our clients.",
    VISION_TITLE: "Our Vision",
    VISION_DESC:
      "To lead as the world’s trusted engineering partner, thriving on self-driven teams and sustainable, collaborative brilliance.",
    VALUES_TITLE: "What Drives Us",
    CERTIFICATIONS_TITLE: "Certifications & Partnerships",
    CERTIFICATIONS_DESC:
      "Recognized standards and strategic alliances that back the quality and reach of our engineering delivery.",
    CTA_TITLE: "Shape the Future with Us",
    CTA_DESC:
      "Ready to turn your engineering challenges into opportunities? Let’s connect and create something extraordinary together.",
  },

  // Animation Variants
  ANIMATIONS: {
    STAGGER_CHILDREN: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, delayChildren: 0.2 },
      },
    },
    SCALE_HOVER: {
      rest: { scale: 1 },
      hover: { scale: 1.03, transition: { duration: 0.3 } },
    },
  },

  // Stats and Values
  STATS: [
    { stat: "50+", label: "Skilled Engineers" },
    { stat: "65+", label: "Years of Services" },
    { stat: "100%", label: "On-Time Delivery" },
    { stat: "ISO 9001", label: "Certified Quality" },
  ],
  KEY_VALUES: [
    { title: "Co-Innovation", desc: "Co-creating patents with you." },
    { title: "Lifecycle Mastery", desc: "From vision to victory." },
    { title: "Quality Core", desc: "Precision every time." },
    { title: "Flex & Scale", desc: "Adapting to your pace." },
  ],

  // Certifications & Partnerships
  // To use a real logo: drop the file into constants/images/about/partners/,
  // import it at the top of this file, and set `logo` below (e.g. logo: AvevaLogo).
  // Leave `logo` undefined to fall back to the text badge styling.
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
