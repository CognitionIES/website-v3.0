import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
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
