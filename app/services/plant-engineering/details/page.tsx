"use client";

import { useState, useId, useEffect, ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { PLANT_ENGINEERING_CONSTANTS } from "@/constants/plant-engineering/constants";

// Renders whichever icon shape a service happens to carry — this data model
// supports both lucide/tabler components (functions) and FontAwesome IconProp
// objects, both are used across the 11 services in constants.ts.
function ServiceIcon({ icon, className }: { icon: ComponentType<{ className?: string }> | IconProp; className?: string }) {
  if (typeof icon === "function") {
    const Icon = icon;
    return <Icon className={className} />;
  }
  return <FontAwesomeIcon icon={icon as IconProp} className={className} />;
}

export default function PlantServicesExpanded() {
  const { SERVICE_CATEGORIES, SERVICES } = PLANT_ENGINEERING_CONSTANTS;
  const services = SERVICES.ITEMS;
  const [activeId, setActiveId] = useState<string | null>(null);

  const toSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setActiveId(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150);
    }
  }, []);
  const headingId = useId();

  // Group services by category, preserving SERVICE_CATEGORIES order. Any service
  // whose category doesn't match a known one falls into "Other" rather than
  // silently disappearing — that's a sign the data and this list drifted apart.
  const grouped = SERVICE_CATEGORIES.map((category) => ({
    category,
    items: services.filter((svc) => svc.category === category),
  })).filter((group) => group.items.length > 0);

  const uncategorized = services.filter((svc) => !SERVICE_CATEGORIES.includes(svc.category));
  if (uncategorized.length > 0) {
    grouped.push({ category: "Other", items: uncategorized });
  }

  let runningIndex = 0;

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Our Services
          </span>
          <h2 id={headingId} className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Plant Engineering Services
          </h2>
          <p className="mt-3 text-[#5b5b5b] max-w-2xl">
            Click any service to explore the full scope of what we deliver.
          </p>
        </div>

        <div className="space-y-10" aria-labelledby={headingId}>
          {grouped.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-semibold text-[#0098af] uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <div
                className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
                role="list"
              >
                {group.items.map((svc) => {
                  const id = toSlug(svc.title);
                  const isOpen = activeId === id;
                  const index = runningIndex++;
                  return (
                    <div key={id} id={id} role="listitem">
                      <button
                        onClick={() => setActiveId(isOpen ? null : id)}
                        aria-expanded={isOpen}
                        className={`w-full flex items-center gap-4 px-6 py-5 text-left transition-colors duration-200 group ${
                          isOpen
                            ? "bg-[#003C46] text-white"
                            : "bg-white hover:bg-[#E6F0F5]/50 text-[#003C46]"
                        }`}
                      >
                        <span className={`text-xs font-mono tabular-nums flex-shrink-0 w-6 ${isOpen ? "text-white/40" : "text-[#0098af]/60"}`}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 ${isOpen ? "bg-white/10 text-white" : "bg-[#0098af]/10 text-[#0098af]"}`}>
                          <ServiceIcon icon={svc.icon} className="w-5 h-5" />
                        </span>
                        <span className="flex-1 text-base sm:text-lg font-semibold">{svc.title}</span>
                        <ChevronDown className={`flex-shrink-0 h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-white/60" : "text-gray-400 group-hover:text-[#0098af]"}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="panel"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.32, 0, 0.18, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="bg-[#f8fbfc] border-t border-[#E6F0F5]">
                              <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-8 items-start">
                                {/* Left: description + topic groups */}
                                <div>
                                  <p className="text-[#5b5b5b] leading-relaxed mb-6">
                                    {svc.description}
                                  </p>
                                  <div className="space-y-5">
                                    {svc.bulletPoints.map((topic, ti) => (
                                      <div key={`${topic.mainTopic}-${ti}`}>
                                        <p className="text-xs font-semibold text-[#0098af] uppercase tracking-wider mb-2">
                                          {topic.mainTopic}
                                        </p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                                          {topic.subPoints.map((pt) => (
                                            <li key={pt} className="flex items-start gap-2 text-sm text-[#003C46]">
                                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0098af] flex-shrink-0" />
                                              {pt}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Right: image */}
                                <div className="relative h-56 md:h-72 rounded-xl overflow-hidden shadow-md">
                                  <Image
                                    src={svc.image}
                                    alt={svc.alt || svc.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                  />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}