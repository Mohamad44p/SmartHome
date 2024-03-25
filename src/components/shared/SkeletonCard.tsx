import { Skeleton } from "../ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col bg-black rounded-xl">
      <Skeleton className="h-[225px] w-full rounded-t-xl" />
    </div>
  );
}
