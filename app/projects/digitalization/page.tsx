import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";

export const metadata: Metadata = buildMetadata({
  title: "Plant Digitalization | Projects",
  description:
    "Comprehensive digital transformation of a manufacturing plant through 3D scanning, digital twin creation, and real-time data integration for a leading industrial chemical manufacturer.",
  path: "/projects/digitalization",
  keywords: [
    "plant digitalization case study",
    "digital twin manufacturing plant",
    "3D scanning industrial facility",
    "real-time plant performance monitoring",
    "AI powered P&ID analysis",
    "layout error reduction case study",
    "manufacturing digital transformation",
    "industrial chemical plant digitalization",
    "IoT instrumentation integration",
    "plant digitalization India",
  ],
});
import HeroSection from "./HeroSection";
import Footer from "@/components/Footer";
import AboutSection from "./AboutSection";
import ObjectiveSection from "./ObjectiveSection";
import ScopeSection from "./ScopeSection";
import OutcomeSection from "./OutcomeSection";
import AISection from "./AISection";
import TechSection from "./TechSection";
import CTASection from "@/components/CTA";

export default function DigitalizationProject() {
  return (
    <div className="min-h-screen bg-white">
      <MegaMenu />
      <HeroSection />
      <AboutSection />
      <ObjectiveSection />
      <ScopeSection />
      <OutcomeSection />
      <AISection />
      <TechSection />
      <CTASection />
      <Footer />
    </div>
  );
}
