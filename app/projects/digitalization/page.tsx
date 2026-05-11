import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import HeroSection from "./HeroSection";
import Footer from "@/components/Footer";
import AboutSection from "./AboutSection";
import ObjectiveSection from "./ObjectiveSection";
import ScopeSection from "./ScopeSection";
import OutcomeSection from "./OutcomeSection";
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
      <TechSection />
      <CTASection />
      <Footer />
    </div>
  );
}
