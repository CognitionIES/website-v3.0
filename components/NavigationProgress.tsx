"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * NavigationProgress | thin teal bar at the top of the viewport
 * that animates during client-side route transitions.
 *
 * Much lighter than a full loader: appears in ~0 ms, sweeps to 80 %
 * while the new page loads, then completes and fades out.
 */
export default function NavigationProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const prevPath = useRef(pathname);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const completeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const start = () => {
    setVisible(true);
    setProgress(0);
    let p = 0;
    timer.current = setInterval(() => {
      // Accelerate fast to 60 %, then slow asymptotically toward 90 %
      p += (90 - p) * 0.08;
      setProgress(Math.min(p, 90));
    }, 80);
  };

  const complete = () => {
    if (timer.current) clearInterval(timer.current);
    setProgress(100);
    completeTimer.current = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 400);
  };

  useEffect(() => {
    if (pathname !== prevPath.current) {
      complete();
      prevPath.current = pathname;
    }
  }, [pathname]);

  useEffect(() => {
    // Signal start on mount (catches first navigation)
    const handleStart = () => start();
    window.addEventListener("navigation-start", handleStart);
    return () => window.removeEventListener("navigation-start", handleStart);
  }, []);

  if (!visible && progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[99999] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-[#0098AF] transition-all duration-200 ease-out"
        style={{
          width: `${progress}%`,
          opacity: visible ? 1 : 0,
          transition: progress === 100
            ? "width 0.2s ease-out, opacity 0.3s ease-out 0.15s"
            : "width 0.2s ease-out",
        }}
      />
      {/* Glowing tip */}
      <div
        className="absolute top-0 right-0 h-full w-20 pointer-events-none"
        style={{
          background: "linear-gradient(to right, transparent, #0098AF, #00c4df)",
          opacity: visible && progress < 100 ? 0.8 : 0,
          transition: "opacity 0.2s ease",
        }}
      />
    </div>
  );
}
