import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

export interface CaseStudy {
  slug: string;
  title: string;
  eyebrow: string;
  heroImage: StaticImageData;
  metaDescription: string;
  overview: {
    heading: string;
    para1: string;
    para2: string;
    image: StaticImageData;
    stats: { value: string; label: string }[];
  };
  objective: {
    statement: string;
    highlights: string[];
  };
  approach: {
    intro: string;
    steps: { title: string; description: string; icon: LucideIcon }[];
  };
  results: {
    cards: { title: string; description: string; metric: string; icon: LucideIcon }[];
    kpis: { metric: string; before: string; after: string; improvement: string }[];
  };
  roles: { name: string; count?: string; icon: LucideIcon }[];
  tools: { name: string; level: string }[];
  testimonial?: { quote: string; author: string; company: string };
}
