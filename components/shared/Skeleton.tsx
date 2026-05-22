/**
 * Skeleton | shimmer placeholder components.
 * These are Server Components (no "use client") so they work
 * in loading.tsx files which must be Server Components.
 */

import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
}

/** Single shimmer block */
export function SkeletonBlock({ className, style }: SkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading…"
      style={style}
      className={cn(
        "relative overflow-hidden rounded-lg bg-[#f0f0ee]",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent",
        "before:animate-[shimmer_1.6s_infinite]",
        className
      )}
    />
  );
}

/** Multi-line text placeholder */
export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2.5", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonBlock key={i} className={cn("h-4", i === lines - 1 ? "w-4/5" : "w-full")} />
      ))}
    </div>
  );
}

/** Card placeholder with image area */
export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div className={cn("border border-[#e2e8f0] rounded-2xl overflow-hidden", className)}>
      <SkeletonBlock className="h-52 w-full rounded-none" />
      <div className="p-6 space-y-3">
        <SkeletonBlock className="h-5 w-3/4" />
        <SkeletonText lines={2} />
        <SkeletonBlock className="h-4 w-24" />
      </div>
    </div>
  );
}

/** Section header placeholder (eyebrow + big heading) */
export function SkeletonSectionHeader({ className }: SkeletonProps) {
  return (
    <div className={cn("space-y-4 mb-12", className)}>
      <SkeletonBlock className="h-3 w-20" />
      <SkeletonBlock className="h-14 w-72" />
    </div>
  );
}

/** Three-column stat row */
export function SkeletonStatsRow({ className }: SkeletonProps) {
  return (
    <div className={cn("grid grid-cols-3 border-t border-[#e2e8f0] mt-10", className)}>
      {[0, 1, 2].map(i => (
        <div key={i} className={`py-8 ${i > 0 ? "pl-8 border-l border-[#e2e8f0]" : ""}`}>
          <SkeletonBlock className="h-12 w-20 mb-2" />
          <SkeletonBlock className="h-3 w-32" />
        </div>
      ))}
    </div>
  );
}

/** Full dark hero placeholder */
export function SkeletonHero({ className }: SkeletonProps) {
  return (
    <div className={cn("bg-[#0f1117] relative overflow-hidden min-h-[520px]", className)}>
      <div className="absolute bottom-16 left-6 sm:left-10 lg:left-16 max-w-xl space-y-5">
        <SkeletonBlock className="h-3 w-24 bg-white/10" />
        <SkeletonBlock className="h-12 w-96 bg-white/10" />
        <SkeletonBlock className="h-12 w-80 bg-white/10" />
        <SkeletonBlock className="h-4 w-72 bg-white/5 mt-4" />
        <SkeletonBlock className="h-11 w-40 rounded-full bg-white/10 mt-6" />
      </div>
    </div>
  );
}
