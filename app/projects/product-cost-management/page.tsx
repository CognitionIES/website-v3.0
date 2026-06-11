import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";

export const metadata: Metadata = buildMetadata({
  title: "Product Cost Management | Projects",
  description:
    "Value engineering and competitive benchmarking of a log splitter product line, identifying cost reduction and margin improvement through detailed cost and function analysis.",
  path: "/projects/product-cost-management",
});
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Objectives from "./Objectives";
import ApproachSection from "./ApproachSection";
import KeyFindingSection from "./KeyFindingSection";
import SummarySection from "./SummarySection";

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
      <CTASection />
      <Footer />
    </div>
  );
}
