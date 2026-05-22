"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * PageLoader | full-screen cinematic intro.
 *
 * Shows on first page load only (not on client-side navigation).
 * Design: ink-black (#0f1117) background, the wordmark assembles
 * letter by letter, a teal progress bar sweeps across, then the
 * whole screen slides up revealing the page beneath.
 *
 * Timing: ~1.8 s total | fast enough not to annoy, long enough to feel premium.
 */

const LETTERS = "Cognition IES".split("");
const MIN_MS  = 1800; // minimum display time

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Already dismissed in this tab session? Skip immediately.
    if (typeof window !== "undefined" && sessionStorage.getItem("loader_shown")) {
      setVisible(false);
      return;
    }

    // Animate the progress bar to 100 % over ~1.2 s
    const start = performance.now();
    const dur   = 1200;

    const raf = (ts: number) => {
      const pct = Math.min((ts - start) / dur, 1);
      // Ease-out curve: fast start, smooth finish
      setProgress(1 - Math.pow(1 - pct, 3));
      if (pct < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Hide after MIN_MS
    const t = setTimeout(() => {
      sessionStorage.setItem("loader_shown", "1");
      setVisible(false);
    }, MIN_MS);

    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0f1117] flex flex-col items-center justify-center overflow-hidden"
          aria-hidden="true"
        >
          {/* Subtle grid texture | matches site hero */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px)," +
                "linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          {/* Wordmark  staggered letter reveal */}
          <div className="relative z-10 flex items-baseline gap-0 overflow-hidden mb-10">
            {LETTERS.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`font-display leading-none tracking-[-0.03em] select-none ${
                  char === " " ? "w-4" : ""
                } ${
                  /* "IES" gets teal accent */
                  i >= 10
                    ? "text-[#0098AF] text-4xl sm:text-5xl md:text-6xl"
                    : "text-white text-4xl sm:text-5xl md:text-6xl"
                }`}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-white/35 mb-14"
          >
            Engineering Smarter Solutions
          </motion.p>

          {/* Progress track */}
          <div className="relative w-48 sm:w-64 h-px bg-white/10 overflow-hidden rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 bg-[#0098AF] rounded-full"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
