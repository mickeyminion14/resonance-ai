"use client";

import { AudioLines } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function GenerationUsageBadge() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.generations.getUsage.queryOptions());

  const { used, limit, remaining, limitReached } = data;
  const usedPercent = limit > 0 ? (used / limit) * 100 : 0;

  const status = limitReached ? "exhausted" : remaining <= 1 ? "low" : "ok";

  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex h-8 cursor-default items-center gap-2 rounded-md border px-2.5 text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
            status === "exhausted" &&
              "border-destructive/30 bg-destructive/10 text-destructive dark:text-destructive/90",
            status === "low" &&
              "border-amber-500/50 bg-amber-500/10 text-amber-900 dark:text-amber-200",
            status === "ok" && "border-border bg-muted/30 text-foreground",
          )}
          aria-label={`${remaining} of ${limit} generations remaining`}
        >
          <AudioLines className="size-3.5 shrink-0 opacity-70" />
          <span className="font-medium tabular-nums leading-none">
            {remaining}
            <span className="font-normal text-muted-foreground">/{limit}</span>
          </span>
          <span
            className={cn(
              "hidden text-muted-foreground sm:inline",
              limitReached && "text-destructive/80 dark:text-destructive/70",
              status === "low" && "text-amber-800/90 dark:text-amber-300/90",
            )}
          >
            {limitReached ? "limit reached" : "left"}
          </span>
          <span
            aria-hidden
            className="ml-0.5 hidden h-1 w-10 overflow-hidden rounded-full bg-muted sm:inline"
          >
            <span
              className={cn(
                "block h-full rounded-full transition-[width]",
                status === "exhausted" && "bg-destructive/70",
                status === "low" && "bg-amber-500",
                status === "ok" && "bg-primary",
              )}
              style={{ width: `${usedPercent}%` }}
            />
          </span>
        </button>
      </TooltipTrigger>

      <TooltipContent
        side="bottom"
        align="end"
        sideOffset={8}
        hideArrow
        className="flex w-52 flex-col items-stretch gap-2 rounded-lg border border-border bg-popover p-3 text-popover-foreground shadow-md"
      >
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-medium">Free generations</span>
          <span className="text-sm font-semibold tabular-nums">
            {remaining}/{limit}
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className={cn(
              "h-full rounded-full transition-[width]",
              status === "exhausted" && "bg-destructive/70",
              status === "low" && "bg-amber-500",
              status === "ok" && "bg-primary",
            )}
            style={{ width: `${usedPercent}%` }}
          />
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">
          {limitReached ? (
            <>
              You&apos;ve used all{" "}
              <span className="font-medium text-foreground">{limit}</span> free
              generations for this workspace.
            </>
          ) : (
            <>
              <span className="font-medium text-foreground">{used}</span> used ·{" "}
              <span className="font-medium text-foreground">{remaining}</span>{" "}
              remaining
            </>
          )}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
