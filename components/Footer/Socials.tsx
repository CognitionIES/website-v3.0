"use client";

import Link from "next/link";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import { FOOTER_CONSTANTS } from "@/constants/footer/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Instagram: Instagram,
  Twitter: Twitter,
};

export default function Socials() {
  const { ITEMS } = FOOTER_CONSTANTS.SOCIALS;

  return (
    <div className="flex gap-3 mt-2">
      {ITEMS.map(([label, href]) => {
        const Icon = ICON_MAP[label] ?? Linkedin;
        return (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0098af] transition-colors duration-200"
          >
            <Icon className="w-4 h-4 text-white" />
          </Link>
        );
      })}
    </div>
  );
}