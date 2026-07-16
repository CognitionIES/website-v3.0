"use client";

import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import { ScrollSection } from "@/components/ScrollSection";
import { getProductService } from "@/constants/product-engineering/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import frameBackground from "@/constants/images/Background/Frame_8.webp";
interface Props {
  serviceSlug: string;
}

// Human-readable labels for breadcrumbs
const SERVICE_LABELS: Record<string, string> = {
  "mechanical-design":       "Mechanical Design",
  "electrical-engineering":  "Electrical Engineering",
  "cae-cfd":                 "CAE/CFD",
  "prototyping-3d-printing": "Prototyping & 3D Printing",
  "hydraulic-engineering":   "Hydraulic Engineering",
  "asset-management":        "Asset Management",
  "embedded-systems":        "Embedded Systems",
  "technical-publication":   "Technical Publication",
  "supply-chain-management": "Supply Chain Management",
};

export default function ProductEngineeringServiceClient({ serviceSlug }: Props) {
  const service = getProductService(serviceSlug);

  if (!service) {
    notFound();
  }

  const breadcrumbLabel = SERVICE_LABELS[serviceSlug] ?? service.title;

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Navigation */}
      <header className="relative z-50">
        <MegaMenu />
      </header>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-white border-b border-gray-100 px-4 py-3"
      >
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center text-sm text-gray-500 gap-1 flex-wrap">
            <li>
              <Link
                href="/"
                className="hover:text-[#0098af] flex items-center transition-colors"
                aria-label="Home"
              >
                <Home className="h-4 w-4" />
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#0098af] transition-colors"
              >
                Services
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </li>
            <li>
              <Link
                href="/services/product-engineering"
                className="hover:text-[#0098af] transition-colors"
              >
                Product Engineering
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </li>
            <li>
              <span className="text-[#003C46] font-medium" aria-current="page">
                {breadcrumbLabel}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Service Content */}
      <main>
        <div
          className="relative min-h-screen py-16"
          style={{
  backgroundImage: `url(${frameBackground.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-8 rounded-3xl bg-blue-400/5 outline outline-2 outline-black/50 mx-4 lg:mx-auto">
            <ScrollSection
              index={0}
              title={service.title}
              description={service.description}
              imageUrl={service.image.src}
              bulletPoints={service.bullets}
              additionalImageUrl={service.logoImage.src}
            />
          </div>

          {/* Navigation to other services */}
          <div className="max-w-7xl mx-auto px-4 mt-12 text-center">
            <Link
              href="/services/product-engineering"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0098af] text-white rounded-full hover:bg-[#007a8e] transition-colors font-medium"
            >
              ← Back to Product Engineering
            </Link>
          </div>
        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
