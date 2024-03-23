import { Skeleton } from "../ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col bg-black space-y-3">
      <Skeleton className="h-[225px] w-[450px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[450px]" />
        <Skeleton className="h-4 w-[400px]" />
      </div>
    </div>
  )
}
