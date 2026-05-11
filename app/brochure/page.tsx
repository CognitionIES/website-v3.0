"use client";

import { useState } from "react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import { BROCHURE_CONSTANTS } from "@/constants/brochurePage/constants";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import BrochureToggle from "./BrochureToggle";

export default function BrochurePage() {
  const [selected, setSelected] = useState<"product"|"plant">("product");

  return (
    <div className="bg-white">
      <MegaMenu />
      <PageHero
        image={BROCHURE_CONSTANTS.BANNER_IMAGE.heroImage}
        title="Engineering Brochures"
        subtitle="Resources"
        breadcrumbs={[{ label: "Brochures", href: "/brochure" }]}
      />

      <section className="bg-white py-20 md:py-28 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage:"linear-gradient(#003C46 1px,transparent 1px),linear-gradient(90deg,#003C46 1px,transparent 1px)", backgroundSize:"64px 64px" }} />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center gap-6 mb-14">
            <span className="eyebrow">Download Resources</span>
            <div className="flex-1 h-px bg-[#e2e8f0]" />
          </div>
          <BrochureToggle selectedBrochure={selected} setSelectedBrochure={setSelected} />
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start mt-10">
            <LeftSection selectedBrochure={selected} setSelectedBrochure={setSelected} />
            <RightSection selectedBrochure={selected} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
