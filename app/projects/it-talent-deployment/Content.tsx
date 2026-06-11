"use client";

import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import PageHero from "@/components/shared/PageHero";
import {
  OverviewSection,
  ObjectiveSection,
  ApproachSection,
  ResultsSection,
  TestimonialBand,
  RolesToolsSection,
} from "@/components/projects/CaseStudy";
import { IT_TALENT } from "@/constants/projects/it-talent";

export default function Content() {
  return (
    <div className="min-h-screen bg-white">
      <MegaMenu />
      <PageHero
        image={IT_TALENT.heroImage}
        title={IT_TALENT.title}
        subtitle={IT_TALENT.eyebrow}
        breadcrumbs={[
          { label: "Projects", href: "/projects" },
          { label: "IT Talent Deployment", href: "/projects/it-talent-deployment" },
        ]}
      />
      <OverviewSection study={IT_TALENT} />
      <ObjectiveSection study={IT_TALENT} />
      <ApproachSection study={IT_TALENT} />
      <ResultsSection study={IT_TALENT} />
      <TestimonialBand study={IT_TALENT} />
      <RolesToolsSection study={IT_TALENT} />
      <CTASection />
      <Footer />
    </div>
  );
}
