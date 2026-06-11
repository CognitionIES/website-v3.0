"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

// A miniature P&ID that draws itself, then "detects" its tags: a visual
// demonstration of the first pass, not a screenshot of the real software.
export default function PidTrace() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();

  // When reduced motion is preferred, render the finished drawing instantly.
  const draw = (delay: number, dur = 0.8) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: inView ? { pathLength: 1, opacity: 1 } : {},
          transition: { duration: dur, delay, ease: EASE },
        };
  const appear = (delay: number, dur = 0.4) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0 },
          animate: inView ? { opacity: 1 } : {},
          transition: { duration: dur, delay, ease: EASE },
        };
  const detect = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, scale: 0.85 },
          animate: inView ? { opacity: 1, scale: 1 } : {},
          transition: { duration: 0.45, delay, ease: EASE },
        };

  const line = { stroke: "#003C46", strokeWidth: 1.6, fill: "none" } as const;
  const mono =
    "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

  return (
    <div ref={ref} className="mt-16">
      <div className="flex items-center justify-between gap-4 mb-4">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#718096]">
          The first pass, illustrated
        </p>
        <motion.p
          {...appear(reduce ? 0 : 3.4)}
          className="font-mono text-[11px] tracking-wider text-[#0098AF]"
        >
          3 tags · 1 line number extracted
        </motion.p>
      </div>

      <div className="relative rounded-2xl border border-[#e2e8f0] bg-white overflow-hidden">
        {/* Fine drawing grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#003C46 1px,transparent 1px),linear-gradient(90deg,#003C46 1px,transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <svg
          viewBox="0 0 880 220"
          className="relative w-full h-auto"
          role="img"
          aria-label="Illustration of a P&ID with equipment tag, instrument tag, and line number being detected"
        >
          {/* ── Pipe run ── */}
          <motion.path d="M 80 140 H 360" {...line} {...draw(0.1)} />
          <motion.path d="M 400 140 H 660" {...line} {...draw(0.9)} />
          <motion.path d="M 660 140 H 700 V 90" {...line} {...draw(1.5, 0.5)} />

          {/* ── Pump P-101: circle with discharge tangent ── */}
          <motion.circle cx="80" cy="140" r="26" {...line} {...draw(0.0, 0.6)} />
          <motion.path d="M 62 122 L 98 122" {...line} {...draw(0.5, 0.3)} />
          <motion.text x="80" y="196" textAnchor="middle" fontFamily={mono} fontSize="13" fill="#003C46" {...appear(0.7)}>
            P-101
          </motion.text>

          {/* ── Gate valve at mid-run ── */}
          <motion.path d="M 360 126 L 400 154 M 360 154 L 400 126" {...line} {...draw(0.9, 0.4)} />

          {/* ── Instrument bubble PT-1001, dashed lead line ── */}
          <motion.path d="M 520 140 V 84" stroke="#003C46" strokeWidth="1.2" strokeDasharray="4 4" fill="none" {...draw(1.4, 0.4)} />
          <motion.circle cx="520" cy="62" r="22" {...line} {...draw(1.7, 0.5)} />
          <motion.path d="M 498 62 H 542" {...line} {...draw(2.0, 0.25)} />
          <motion.text x="520" y="58" textAnchor="middle" fontFamily={mono} fontSize="11" fill="#003C46" {...appear(2.1)}>
            PT
          </motion.text>
          <motion.text x="520" y="72" textAnchor="middle" fontFamily={mono} fontSize="11" fill="#003C46" {...appear(2.1)}>
            1001
          </motion.text>

          {/* ── Vessel V-201 ── */}
          <motion.rect x="676" y="34" width="48" height="58" rx="10" {...line} {...draw(1.9, 0.5)} />
          <motion.text x="700" y="116" textAnchor="middle" fontFamily={mono} fontSize="13" fill="#003C46" {...appear(2.2)}>
            V-201
          </motion.text>

          {/* ── Line number along the pipe ── */}
          <motion.text x="230" y="128" textAnchor="middle" fontFamily={mono} fontSize="12" fill="#003C46" {...appear(1.2)}>
            6&quot;-CW-1023-A1
          </motion.text>

          {/* ── Detection highlights: what the pipeline pulls out ── */}
          {/* equipment tag */}
          <motion.g {...detect(2.6)}>
            <rect x="52" y="182" width="56" height="20" rx="4" fill="none" stroke="#0098AF" strokeWidth="1.4" />
            <text x="116" y="196" fontFamily={mono} fontSize="10" fill="#0098AF">✓ TAG</text>
          </motion.g>
          {/* line number */}
          <motion.g {...detect(2.85)}>
            <rect x="172" y="112" width="118" height="22" rx="4" fill="none" stroke="#0098AF" strokeWidth="1.4" />
            <text x="298" y="127" fontFamily={mono} fontSize="10" fill="#0098AF">✓ LINE</text>
          </motion.g>
          {/* instrument tag */}
          <motion.g {...detect(3.1)}>
            <circle cx="520" cy="62" r="28" fill="none" stroke="#0098AF" strokeWidth="1.4" />
            <text x="554" y="58" fontFamily={mono} fontSize="10" fill="#0098AF">✓ TAG</text>
          </motion.g>
          {/* vessel tag */}
          <motion.g {...detect(3.35)}>
            <rect x="672" y="102" width="56" height="20" rx="4" fill="none" stroke="#0098AF" strokeWidth="1.4" />
            <text x="736" y="116" fontFamily={mono} fontSize="10" fill="#0098AF">✓ TAG</text>
          </motion.g>
        </svg>
      </div>

      <p className="mt-3 text-xs text-[#a0aec0]">
        Illustration of the extraction pass on a typical sheet, drawn for the
        web. Real P&amp;IDs are denser; the principle is the same.
      </p>
    </div>
  );
}
