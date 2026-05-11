"use client";

import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import ContactSection from "./ContactSection";
import CTABanner from "@/components/shared/CTABanner";
import { CONTACT_CONSTANTS } from "@/constants/contactPage/constants";

export default function ContactPage() {
  const { IMAGE, TITLE } = CONTACT_CONSTANTS.HERO;
  return (
    <div className="bg-white">
      <MegaMenu />
      <PageHero image={IMAGE} title={TITLE} subtitle="Contact" breadcrumbs={[{ label: "Contact Us", href: "/contact" }]} />
      <ContactSection />
      <CTABanner
        title="Prefer to talk directly?"
        accentWord="directly?"
        description="Our team is available for calls and meetings. Let us know the best time to connect."
        buttons={[
          { label: "Email Us",         href: "mailto:info@cognitionies.com", variant: "primary" },
          { label: "Explore Services", href: "/services",                    variant: "outline" },
        ]}
      />
      <Footer />
    </div>
  );
}
