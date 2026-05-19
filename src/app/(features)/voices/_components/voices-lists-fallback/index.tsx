import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

function VoiceCardSkeleton() {
  return (
    <div className="flex items-center gap-1 overflow-hidden rounded-xl border pr-3 lg:pr-6">
      <div className="relative h-24 w-20 shrink-0 lg:h-30 lg:w-24">
        <Skeleton className="absolute left-0 top-0 h-24 w-10 rounded-none lg:h-30 lg:w-12" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Skeleton className="size-14 rounded-full lg:size-18" />
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1.5 py-1 lg:gap-3">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-3 w-full max-w-[220px]" />
      </div>
      <Skeleton className="ml-1 size-8 shrink-0 rounded-full lg:ml-3" />
    </div>
  );
}

function VoicesListSkeleton({
  titleWidth,
  count,
}: {
  titleWidth: string;
  count: number;
}) {
  return (
    <section className="space-y-4">
      <Skeleton className={cn("h-7", titleWidth)} />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {Array.from({ length: count }).map((_, i) => (
          <VoiceCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}

export function VoicesListsFallback() {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-10 overflow-hidden">
      <VoicesListSkeleton titleWidth="w-32" count={1} />
      <VoicesListSkeleton titleWidth="w-36" count={4} />
    </div>
  );
}
