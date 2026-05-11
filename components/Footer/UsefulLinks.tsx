"use client";

import Link from "next/link";
import Image from "next/image";
const LinkedinLogo = '/images/linkedinLogo.png';
import { FiArrowUpRight, FiMail } from "react-icons/fi";

const USEFUL_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQs", href: "/faq" },
];

const SERVICE_LINKS = [
  { label: "Product Engineering", href: "/services/product-engineering" },
  { label: "Plant Engineering", href: "/services/plant-engineering" },
  { label: "SaaS Solutions", href: "/services/saas-solution/servicecpq" },
  { label: "Staffing & Recruitment", href: "/services/staffing-recruitment" },
];

function LinkColumn({ title, links, delay = 0 }: { title: string; links: { label: string; href: string }[]; delay?: number }) {
  return (
    <div>
      <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-4 font-sans">{title}</h3>
      <ul className="space-y-2.5">
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href} className="group flex items-center gap-1 text-[14px] text-white/55 hover:text-white transition-colors duration-200 font-sans">
              {link.label}
              <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function UsefulLinks() {
  return (
    <div className="col-span-1 md:col-span-4">
      <div className="grid grid-cols-2 gap-8 sm:gap-10 mb-8">
        <LinkColumn title="Links" links={USEFUL_LINKS} />
        <LinkColumn title="Services" links={SERVICE_LINKS} delay={0.1} />
      </div>
      <div className="pt-6 border-t border-white/8 flex items-center gap-3">
        <Link href="https://in.linkedin.com/company/cognition-ies" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="opacity-60 hover:opacity-100 transition-opacity duration-200">
          <img src={LinkedinLogo} alt="LinkedIn" width={24} height={24} className="brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
        </Link>
        <span className="text-white/20">|</span>
        <Link href="mailto:info@cognitionies.com" className="flex items-center gap-1.5 text-[13px] text-white/50 hover:text-white transition-colors duration-200 font-sans">
          <FiMail className="w-3.5 h-3.5" />
          info@cognitionies.com
        </Link>
      </div>
    </div>
  );
}
