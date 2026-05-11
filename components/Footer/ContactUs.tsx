"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FOOTER_CONSTANTS } from "@/constants/footer/constants";

export default function ContactUs() {
  const { TITLE, ITEMS } = FOOTER_CONSTANTS.CONTACT;

  return (
    <div>
      <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-5">
        {TITLE}
      </h3>
      <ul className="space-y-3">
        {ITEMS.map(([type, href, text]) => (
          <li key={text}>
            <Link
              href={href}
              className="flex items-center gap-2 text-sm text-white/60 hover:text-[#0098af] transition-colors duration-200"
            >
              {type === "Email" ? (
                <Mail className="w-4 h-4 flex-shrink-0" />
              ) : (
                <Phone className="w-4 h-4 flex-shrink-0" />
              )}
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}