// components/shared/SoftwareTools.tsx
"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useId, useState } from "react";

export type SoftwareTool = {
  name: string;
  logo?: StaticImageData;
  uncertain?: boolean;
};

function initials(name: string) {
  const words = name.split(/\s+/).filter(Boolean);
  // Single-word tool names (AspenTech, ETAP, Bluebeam, PIPENET...) used to
  // collapse to one lone letter here, which reads as broken rather than as
  // a placeholder. Two words still take one letter each as before.
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function SoftwareTile({ tool }: { tool: SoftwareTool }) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        tabIndex={0}
        aria-describedby={tooltipId}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className={`w-12 h-12 bg-white border rounded-xl p-2 flex items-center justify-center transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#0098af]/40 ${
          tool.uncertain ? "border-amber-300" : "border-gray-200"
        }`}
      >
        {tool.logo ? (
          <Image
            src={tool.logo}
            alt={tool.name}
            width={32}
            height={32}
            className="object-contain w-full h-full"
          />
        ) : (
          <span className="text-[11px] font-semibold text-[#0098af] select-none">
            {initials(tool.name)}
          </span>
        )}
      </div>

      {/* Tooltip */}
      <div
        id={tooltipId}
        role="tooltip"
        className={`pointer-events-none absolute left-1/2 bottom-full -translate-x-1/2 mb-2 z-20 transition-all duration-150 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
      >
        <div className="whitespace-nowrap rounded-lg bg-[#003C46] text-white text-[11px] font-medium px-2.5 py-1.5 shadow-lg">
          {tool.name}
          {tool.uncertain && (
            <span className="block text-[10px] text-amber-300 font-normal">
              Unconfirmed — please verify
            </span>
          )}
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 -mt-1 rotate-45 bg-[#003C46]" />
      </div>
    </div>
  );
}

export default function SoftwareTools({ tools }: { tools: SoftwareTool[] }) {
  if (!tools || tools.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-3">
      {tools.map((tool) => (
        <SoftwareTile key={tool.name} tool={tool} />
      ))}
    </div>
  );
}