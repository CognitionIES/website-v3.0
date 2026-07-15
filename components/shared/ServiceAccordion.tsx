"use client";

import { type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SoftwareTools, { type SoftwareTool } from "@/components/shared/SoftwareTools";

/**
 * Shared accordion primitives for the services pages.
 *
 * Before this file existed, the same button+icon+chevron+animated-panel markup
 * (and the same #003C46 / #0098af / #E6F0F5 color trio) was copy-pasted across:
 *   - app/services/plant-engineering/PlantServicesExpanded.tsx  (homepage)
 *   - app/services/plant-engineering/details/PlantServicesExpanded.tsx (/details)
 *   - app/services/product-engineering/ProductServicesExpanded.tsx (homepage)
 * Any visual tweak (spacing, animation timing, colors) had to be made in three
 * places and only ever landed in one. This file is the single place now.
 *
 * These components are deliberately unopinionated about *what* goes in the
 * panel — phase-grouped plant data, flat discipline data, and product data all
 * have different panel content (some have images, some have nested sub-groups),
 * so panel content stays as `children`, passed in by each page.
 */

export function AccordionList({
  children,
  ariaLabelledBy,
}: {
  children: ReactNode;
  ariaLabelledBy?: string;
}) {
  return (
    <div
      className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
      role="list"
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </div>
  );
}

export function AccordionItem({
  id,
  icon,
  title,
  index,
  isOpen,
  onToggle,
  children,
}: {
  id: string;
  icon: ReactNode;
  title: string;
  /** Optional leading number badge, e.g. "01". Omit to hide it. */
  index?: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div id={id} role="listitem">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`w-full flex items-center gap-4 px-6 py-4 sm:py-5 text-left transition-colors duration-200 group ${
          isOpen ? "bg-[#003C46] text-white" : "bg-white hover:bg-[#E6F0F5]/50 text-[#003C46]"
        }`}
      >
        {index !== undefined && (
          <span
            className={`text-xs font-mono tabular-nums flex-shrink-0 w-6 ${
              isOpen ? "text-white/40" : "text-[#0098af]/60"
            }`}
          >
            {index}
          </span>
        )}
        <span
          className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-colors duration-200 ${
            isOpen ? "bg-white/10 text-white" : "bg-[#0098af]/10 text-[#0098af]"
          }`}
        >
          {icon}
        </span>
        <span className="flex-1 text-[15px] sm:text-base font-semibold">{title}</span>
        <ChevronDown
          className={`flex-shrink-0 h-5 w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-white/60" : "text-gray-400 group-hover:text-[#0098af]"
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0, 0.18, 1] }}
            className="overflow-hidden"
          >
            <div className="bg-[#f8fbfc] border-t border-[#E6F0F5]">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** The recurring two-column bullet list with a small teal dot marker. */
export function BulletGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
      {items.map((pt) => (
        <li key={pt} className="flex items-start gap-2 text-sm text-[#003C46]">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0098af] flex-shrink-0" />
          {pt}
        </li>
      ))}
    </ul>
  );
}

/** The recurring "Software We Use" block. Renders nothing if there are no tools. */
export function SoftwareSection({ tools }: { tools?: SoftwareTool[] }) {
  if (!tools || tools.length === 0) return null;
  return (
    <div className="mt-6 pt-5 border-t border-[#E6F0F5]">
      <h4 className="text-xs font-semibold uppercase tracking-wide text-[#003C46]/60 mb-3">
        Software We Use
      </h4>
      <SoftwareTools tools={tools} />
    </div>
  );
}
