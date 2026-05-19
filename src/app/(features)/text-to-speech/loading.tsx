import { Skeleton } from "@/components/ui/skeleton";

function TextInputPanelSkeleton() {
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      <div className="relative min-h-0 flex-1 space-y-3 p-4 lg:p-6">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[95%]" />
        <Skeleton className="h-4 w-[88%]" />
        <Skeleton className="h-4 w-[92%]" />
        <Skeleton className="h-4 w-[70%]" />
      </div>
      <div className="shrink-0 p-4 lg:p-6">
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 flex-1 rounded-md" />
            <Skeleton className="size-9 shrink-0 rounded-md" />
          </div>
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        <div className="hidden space-y-2.5 lg:block">
          <Skeleton className="h-4 w-28" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-7 w-28 rounded-md" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VoicePreviewPanelSkeleton() {
  return (
    <div className="hidden h-full flex-1 flex-col border-t lg:flex">
      <div className="p-6 pb-0">
        <Skeleton className="h-5 w-32" />
      </div>
      <div className="flex flex-1 items-center justify-center px-6">
        <Skeleton className="h-16 w-full max-w-2xl rounded-lg" />
      </div>
      <div className="flex items-center justify-center py-4">
        <Skeleton className="h-9 w-36" />
      </div>
      <div className="p-6">
        <div className="grid w-full grid-cols-3 items-center gap-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-full max-w-48" />
            <div className="flex items-center gap-2">
              <Skeleton className="size-5 rounded-full" />
              <Skeleton className="h-3 w-20" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Skeleton className="size-10 rounded-md" />
            <Skeleton className="size-12 rounded-full" />
            <Skeleton className="size-10 rounded-md" />
          </div>
          <div className="flex justify-end">
            <Skeleton className="h-8 w-24 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

function VoicePreviewMobileSkeleton() {
  return (
    <div className="border-t p-4 lg:hidden">
      <div className="grid grid-cols-[1fr_auto] items-center gap-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full max-w-xs" />
          <div className="flex items-center gap-2">
            <Skeleton className="size-5 rounded-full" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="size-9 rounded-md" />
          <Skeleton className="size-9 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function SettingsPanelSkeleton() {
  return (
    <div className="hidden w-105 min-h-0 flex-col border-l lg:flex">
      <div className="flex h-12 shrink-0 border-b">
        <Skeleton className="mx-4 my-3 h-6 flex-1 rounded-md" />
        <Skeleton className="mx-4 my-3 h-6 flex-1 rounded-md" />
      </div>
      <div className="border-b border-dashed p-4">
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
      <div className="flex flex-1 flex-col gap-8 p-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-4 w-28" />
            <div className="flex justify-between">
              <Skeleton className="h-3 w-12" />
              <Skeleton className="h-3 w-12" />
            </div>
            <Skeleton className="h-1 w-full rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <div className="flex min-h-0 flex-1 flex-col">
        <TextInputPanelSkeleton />
        <VoicePreviewPanelSkeleton />
        <VoicePreviewMobileSkeleton />
      </div>
      <SettingsPanelSkeleton />
    </div>
  );
}
