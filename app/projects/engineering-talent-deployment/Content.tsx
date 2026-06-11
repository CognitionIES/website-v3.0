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
import { ENGINEERING_TALENT } from "@/constants/projects/engineering-talent";

export default function Content() {
  return (
    <div className="min-h-screen bg-white">
      <MegaMenu />
      <PageHero
        image={ENGINEERING_TALENT.heroImage}
        title={ENGINEERING_TALENT.title}
        subtitle={ENGINEERING_TALENT.eyebrow}
        breadcrumbs={[
          { label: "Projects", href: "/projects" },
          { label: "Engineering Talent Deployment", href: "/projects/engineering-talent-deployment" },
        ]}
      />
      <OverviewSection study={ENGINEERING_TALENT} />
      <ObjectiveSection study={ENGINEERING_TALENT} />
      <ApproachSection study={ENGINEERING_TALENT} />
      <ResultsSection study={ENGINEERING_TALENT} />
      <TestimonialBand study={ENGINEERING_TALENT} />
      <RolesToolsSection study={ENGINEERING_TALENT} />
      <CTASection />
      <Footer />
    </div>
  );
}
