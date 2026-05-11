"use client";

import CTABanner from "@/components/shared/CTABanner";

const CTA = () => (
  <CTABanner
    title="Ready to Start Your Project?"
    accentWord="Project?"
    description="Contact us today to see how we can bring your ideas to life."
    buttons={[
      { label: "Get in Touch", href: "/contact", variant: "primary" },
      { label: "View Services", href: "/services", variant: "outline" },
    ]}
  />
);

export default CTA;
