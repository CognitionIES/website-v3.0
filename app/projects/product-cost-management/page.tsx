import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";

export const metadata: Metadata = buildMetadata({
  title: "Product Cost Management | Projects",
  description:
    "Value engineering and competitive benchmarking of a log splitter product line, identifying cost reduction and margin improvement through detailed cost and function analysis.",
  path: "/projects/product-cost-management",
  keywords: [
    "product cost management case study",
    "VAVE value engineering",
    "should costing analysis",
    "competitive benchmarking case study",
    "DFMA DFMEA review",
    "FEA structural analysis case study",
    "function cost worth analysis",
    "outdoor power tools cost optimisation",
    "manufacturing cost reduction project",
    "Pareto cost analysis",
  ],
});
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Objectives from "./Objectives";
import ApproachSection from "./ApproachSection";
import KeyFindingSection from "./KeyFindingSection";
import SummarySection from "./SummarySection";
import CTABanner from "@/components/shared/CTABanner";

export default function ProductCostManagement() {
  return (
    <div className="min-h-screen bg-white">
      <MegaMenu />
      <HeroSection />
      <AboutSection />
      <Objectives />
      <ApproachSection />
      <KeyFindingSection />
      <SummarySection />
    <CTABanner
          title="Ready to Start Your Project?"
          accentWord="Project?"
          description="Contact us today to see how we can bring your ideas to life."
          buttons={[
            { label: "Get in Touch", href: "/contact", variant: "primary" },
            { label: "View Services", href: "/services/product-engineering", variant: "outline" },
          ]}
        />
      <Footer />
    </div>
  );
}
