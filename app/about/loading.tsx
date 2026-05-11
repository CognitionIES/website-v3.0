import { SkeletonBlock, SkeletonSectionHeader, SkeletonText } from "@/components/shared/Skeleton";

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

export default function Loading() {
  return (
    <div className="bg-white min-h-screen">
      <NavSkeleton />
      <div className="bg-[#0f1117] px-6 sm:px-10 lg:px-16 pt-32 pb-20 space-y-4">
        <SkeletonBlock className="h-3 w-20 bg-white/10" />
        <SkeletonBlock className="h-16 w-96 bg-white/10" />
      </div>
      <div className="py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <SkeletonSectionHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <SkeletonBlock className="h-72 rounded-2xl" />
          <div className="space-y-5 pt-4">
            <SkeletonText lines={6} />
          </div>
        </div>
      </div>
    </div>
  );
}
