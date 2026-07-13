"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// Real-world topojson (Natural Earth 110m, via a public CDN) — this renders actual
// geography rather than a hand-drawn approximation. Requires `react-simple-maps`
// and `d3-geo` as dependencies: npm install react-simple-maps d3-geo
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const LOCATIONS = [
  { name: "USA", label: "Representative Office", coordinates: [-98, 39] as [number, number] },
  { name: "India", label: "2 Locations", coordinates: [78, 22] as [number, number] },
];

export default function GlobalPresence() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-[#fafaf8] py-20 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-6 mb-10">
          <span className="eyebrow">Global Presence</span>
          <motion.div
            className="flex-1 h-px bg-[#e2e8f0] origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white border border-[#e2e8f0] rounded-3xl overflow-hidden"
        >
          <ComposableMap
            projectionConfig={{ scale: 155, center: [10, 20] }}
            className="w-full h-auto"
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo: { rsmKey: any; }) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#e6edf0"
                    stroke="#ffffff"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "#d5e3e8" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {LOCATIONS.map((loc) => (
              <Marker key={loc.name} coordinates={loc.coordinates}>
                <circle r={5} fill="#0098AF" stroke="#fff" strokeWidth={2} />
                <circle r={9} fill="#0098AF" fillOpacity={0.25}>
                  <animate attributeName="r" values="9;16;9" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="0.25;0;0.25" dur="2.5s" repeatCount="indefinite" />
                </circle>
              </Marker>
            ))}
          </ComposableMap>

          {/* Labels — positioned as simple overlays rather than plotted inside the
              SVG, so text stays crisp and readable at any zoom level */}
          <div className="absolute bottom-6 left-6 sm:left-10">
            <p className="text-[13px] font-semibold text-[#003C46]">
              Representative Office in the <span className="text-[#0098AF]">USA</span>
            </p>
          </div>
          <div className="absolute bottom-6 right-6 sm:right-10 text-right">
            <p className="text-[13px] font-semibold text-[#003C46]">
              2 Locations in <span className="text-[#0098AF]">India</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}