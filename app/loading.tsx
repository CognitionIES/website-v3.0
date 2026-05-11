import { SkeletonBlock, SkeletonSectionHeader, SkeletonStatsRow, SkeletonHero } from "@/components/shared/Skeleton";

function NavSkeleton() {
  return (
    <div className="h-16 border-b border-[#e2e8f0] flex items-center px-6 sm:px-10 lg:px-16 gap-8">
      <SkeletonBlock className="h-6 w-36" />
      <div className="hidden md:flex gap-8 flex-1">
        {[96, 80, 112, 72, 80].map((w, i) => (
          <SkeletonBlock key={i} className="h-4" style={{ width: w }} />
        ))}
      </div>
      <SkeletonBlock className="h-9 w-28 rounded-full ml-auto" />
    </div>
  );
}

export default function RootLoading() {
  return (
    <div className="bg-white min-h-screen">
      <NavSkeleton />
      <SkeletonHero />
      <div className="py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <SkeletonSectionHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <SkeletonBlock className="h-14 w-full mb-4" />
            <SkeletonBlock className="h-14 w-4/5 mb-8" />
            <SkeletonStatsRow />
          </div>
          <SkeletonBlock className="h-80 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
