// IT Talent Deployment case study. Content ported from website v2.0.
// NOTE: verify the metrics (attrition, turnaround, KPI before/after values)
// and the testimonial against real project records before publishing.
import {
  Zap, Shield, Users, Target, CheckCircle, TrendingUp, Code,
} from "lucide-react";
// Stand-in images reused from existing assets. Swap to dedicated photos at
// constants/images/projects/it/ when available.
import heroImage from "@/constants/images/home/our-services/staff.webp";
import overviewImage from "@/constants/images/staff-augmentation/about.webp";
import type { CaseStudy } from "./types";

export const IT_TALENT: CaseStudy = {
  slug: "it-talent-deployment",
  title: "IT Talent Deployment",
  eyebrow: "Staffing Case Study",
  heroImage,
  metaDescription:
    "How Cognition IES staffed and managed a full-stack development team (React and Node.js) for a growing IT company, with rapid onboarding and end-to-end payroll and compliance support.",
  overview: {
    heading: "A full-stack team, deployed without the hiring drag",
    para1:
      "A rapidly growing IT firm needed full-stack developers to fast-track a new SaaS platform. They were looking for professionals proficient in React.js and Node.js, with a strong grasp of scalable architecture and agile delivery.",
    para2:
      "The client wanted quick hiring with minimal internal overhead, plus full compliance coverage: payroll, taxation, and documentation. The brief was not just talent, but a complete staffing solution that would integrate with their existing processes.",
    image: overviewImage,
    stats: [
      { value: "12", label: "Month contract" },
      { value: "8", label: "Developers" },
    ],
  },
  objective: {
    statement:
      "Staff and manage a high-performing full-stack development team on contract, with smooth onboarding, delivery readiness, and full compliance coverage.",
    highlights: ["Seamless onboarding", "Full compliance coverage", "Delivery-ready from week one"],
  },
  approach: {
    intro:
      "Our contract staffing model, tailored to IT development roles.",
    steps: [
      { title: "Requirement scoping", description: "Finalized job descriptions, skill expectations, and team composition with the client.", icon: Target },
      { title: "Sourcing and screening", description: "Identified and evaluated candidates from our tech talent pool.", icon: Users },
      { title: "Technical evaluation", description: "Pre-interviews, coding tests, and cultural fit assessments.", icon: Code },
      { title: "Onboarding and documentation", description: "Offer roll-outs, background verification, and documentation handled end to end.", icon: CheckCircle },
      { title: "Payroll and compliance", description: "PF, ESI, taxation, and monthly payroll managed with complete compliance support.", icon: Shield },
      { title: "Ongoing coordination", description: "Regular performance check-ins, engagement tracking, and attrition control.", icon: TrendingUp },
    ],
  },
  results: {
    cards: [
      { title: "Rapid onboarding", description: "From requirement to deployment.", metric: "Under 3 weeks", icon: Zap },
      { title: "Team stability", description: "No attrition across the contract period.", metric: "0% attrition", icon: Shield },
      { title: "Fast integration", description: "Developers aligned with sprint goals in the first week.", metric: "5 days", icon: TrendingUp },
      { title: "Automated operations", description: "Timesheets, billing, and compliance handled through automation.", metric: "100% automated", icon: CheckCircle },
    ],
    kpis: [
      { metric: "Hiring turnaround time", before: "7 to 9 weeks", after: "Under 3 weeks", improvement: "70% faster" },
      { metric: "Attrition rate", before: "~20% per quarter", after: "0% in 6 months", improvement: "100% retention" },
      { metric: "Sprint integration time", before: "2 to 3 weeks", after: "Within 5 working days", improvement: "75% faster" },
      { metric: "Compliance and billing", before: "Manual, delayed processing", after: "Automated, on-time billing", improvement: "Full automation" },
    ],
  },
  roles: [
    { name: "Full-Stack Developers (React, Node.js)", count: "8", icon: Code },
  ],
  tools: [
    { name: "React.js", level: "Expert" },
    { name: "Node.js", level: "Expert" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "CI/CD and GitLab", level: "Advanced" },
    { name: "API Integration", level: "Expert" },
    { name: "Microservices", level: "Advanced" },
  ],
  testimonial: {
    quote:
      "The team delivered quality candidates within days, and took complete responsibility from onboarding to payroll. This allowed us to scale faster and stay focused on our product roadmap.",
    author: "HR Head",
    company: "IT Services Client",
  },
};
