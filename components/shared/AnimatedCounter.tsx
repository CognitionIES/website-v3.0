"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function parseValue(raw: string): { prefix: string; target: number; suffix: string } {
  const match = raw.match(/^([^\d]*)(\d+)([^\d]*)$/);
  if (!match) return { prefix: "", target: 0, suffix: raw };
  return { prefix: match[1], target: parseInt(match[2], 10), suffix: match[3] };
}

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ value, duration = 1600, className }: AnimatedCounterProps) {
  const { prefix, target, suffix } = parseValue(value);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;
    const startTime = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
