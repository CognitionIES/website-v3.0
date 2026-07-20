// Engineering Talent Deployment case study. Content ported from website v2.0.
import {
  Zap, Shield, Users, Target, CheckCircle, TrendingUp, Code, Database,
} from "lucide-react";
// Stand-in images reused from existing assets. Swap to dedicated photos at
// constants/images/projects/engineering-talent/ when available.
import heroImage from "@/constants/images/staff-augmentation/hero.webp";
import overviewImage from "@/constants/images/staffing-recruitment/hero.webp";
import type { CaseStudy } from "./types";

export const ENGINEERING_TALENT: CaseStudy = {
  slug: "engineering-talent-deployment",
  title: "Engineering Talent Deployment",
  eyebrow: "Staffing Case Study",
  heroImage,
  metaDescription:
    "How Cognition IES deployed a multi-disciplinary engineering team across mechanical, electrical, instrumentation, and piping roles, screened for tool proficiency in SmartPlant 3D, CAESAR II, STAAD and SPI.",
  overview: {
    heading: "A multi-disciplinary engineering bench, built to spec",
    para1:
      "An engineering organisation needed skilled professionals across mechanical, electrical, instrumentation, and piping disciplines to support design, development, and execution across capital projects, manufacturing setups, and plant engineering functions.",
    para2:
      "The engineers had to be familiar with advanced design tools and standards, and capable of integrating with the client's existing offshore project support team. Tool proficiency was non-negotiable, so screening was built around it.",
    image: overviewImage,
    stats: [
      { value: "28", label: "Engineers deployed" },
      { value: "6", label: "Role categories" },
    ],
  },
  objective: {
    statement:
      "Deliver experienced engineering professionals across disciplines, screened for domain and tool expertise, with onboarding, payroll, and compliance handled end to end.",
    highlights: ["Domain-specific tool expertise", "Multi-disciplinary coverage", "Offshore team integration"],
  },
  approach: {
    intro:
      "Our contract staffing model, tailored to engineering roles.",
    steps: [
      { title: "Requirement scoping and skill mapping", description: "Defined skill sets, project alignment, and tool-specific criteria with project leads.", icon: Target },
      { title: "Sourcing strategy", description: "Targeted hiring campaigns across mechanical, electrical, and instrumentation talent pools.", icon: Users },
      { title: "Tool-based evaluation", description: "Screened candidates for software proficiency: SmartPlant 3D, CAESAR II, STAAD, SPI.", icon: Code },
      { title: "Onboarding and compliance", description: "Streamlined background verification, documentation, and payroll onboarding.", icon: CheckCircle },
      { title: "Post-deployment support", description: "Continuous check-ins, engagement tracking, and attrition control processes.", icon: Shield },
      { title: "Ongoing coordination", description: "Regular follow-ups for performance, engagement, and retention.", icon: TrendingUp },
    ],
  },
  results: {
    cards: [
      { title: "Rapid deployment", description: "From requirement to full team deployment.", metric: "Under 4 weeks", icon: Zap },
      { title: "Zero attrition", description: "Full team retention through the contract period.", metric: "0% turnover", icon: Shield },
      { title: "Cost efficiency", description: "Reduced hiring costs through a streamlined process.", metric: "35% savings", icon: TrendingUp },
      { title: "Quality assurance", description: "All engineers met or exceeded expectations.", metric: "100% success", icon: CheckCircle },
    ],
    kpis: [
      { metric: "Hiring turnaround time", before: "8 to 10 weeks", after: "Under 4 weeks", improvement: "60% faster" },
      { metric: "Team retention rate", before: "85%", after: "100%", improvement: "+15%" },
      { metric: "Client satisfaction score", before: "8.2/10", after: "9.8/10", improvement: "+20%" },
      { metric: "Compliance accuracy", before: "Manual process", after: "Fully automated", improvement: "100%" },
    ],
  },
  roles: [
    { name: "Mechanical Design Engineers", count: "8", icon: Users },
    { name: "Electrical & Instrumentation Engineers", count: "6", icon: Code },
    { name: "Piping Layout & Stress Engineers", count: "5", icon: Target },
    { name: "SmartPlant & SPI Specialists", count: "4", icon: Database },
    { name: "Plant Maintenance Support", count: "3", icon: Shield },
    { name: "HVAC & Utility Systems Designers", count: "2", icon: CheckCircle },
  ],
  tools: [
    { name: "SmartPlant 3D", level: "Expert" },
    { name: "AutoCAD", level: "Expert" },
    { name: "CAESAR II", level: "Advanced" },
    { name: "STAAD.Pro", level: "Advanced" },
    { name: "SPI", level: "Expert" },
    { name: "SolidWorks", level: "Advanced" },
  ],
  testimonial: {
    quote:
      "ABC",
    author: "Project Lead",
    company: "Engineering Client",
  },
};
