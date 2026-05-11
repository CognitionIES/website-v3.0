"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = {
  Company: [
    { label: "About Us",   href: "/about" },
    { label: "Careers",    href: "/careers" },
    { label: "Contact",    href: "/contact" },
    { label: "FAQs",       href: "/faq" },
  ],
  Services: [
    { label: "Product Engineering",  href: "/services/product-engineering" },
    { label: "Plant Engineering",    href: "/services/plant-engineering" },
    { label: "SaaS Solutions",       href: "/services/saas-solution/servicecpq" },
    { label: "Staffing",             href: "/services/staffing" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0f1117] relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-12">

        {/* Top: big wordmark + tagline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 pb-16 border-b border-white/8">
          <div>
            <p className="font-display text-5xl md:text-6xl text-white tracking-[-0.03em] leading-none mb-3">
              Cognition IES
            </p>
            <p className="font-sans text-[14px] text-white/35 max-w-xs leading-relaxed">
              Engineering smarter solutions for industries that shape the world.
            </p>
          </div>
          <Link href="/contact"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 text-white/60 text-[13px] font-semibold hover:border-[#0098AF] hover:text-white transition-all duration-200 font-sans shrink-0">
            Start a conversation
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-white/8">
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h3 className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">
                {heading}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}
                      className="font-sans text-[14px] text-white/50 hover:text-white transition-colors duration-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact info column */}
          <div>
            <h3 className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@cognitionies.com" className="font-sans text-[14px] text-white/50 hover:text-white transition-colors duration-200">
                  info@cognitionies.com
                </a>
              </li>
              <li>
                <a href="https://in.linkedin.com/company/cognition-ies" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-[14px] text-white/50 hover:text-white transition-colors duration-200">
                  LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Location column */}
          <div>
            <h3 className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">Offices</h3>
            <ul className="space-y-3">
              <li className="font-sans text-[14px] text-white/50">India</li>
              <li className="font-sans text-[14px] text-white/50">USA</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[12px] text-white/25">
            © {new Date().getFullYear()} Cognition IES. All rights reserved.
          </p>
          <Link href="/privacy-policy" className="font-sans text-[12px] text-white/25 hover:text-white/50 transition-colors duration-200">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
