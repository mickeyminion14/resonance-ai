import Link from "next/link";
import { ArrowRight, AudioLines } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MarketingPage() {
  return (
    <div className="flex w-full max-w-4xl flex-col items-center px-2 sm:px-0">
      <div className={cn("flex w-full flex-col items-center justify-center")}>
        <div className="mb-4 flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-2 text-center text-xs font-medium uppercase tracking-wide text-violet-700 shadow-sm sm:px-4 sm:text-sm">
          <AudioLines className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
          <span>AI text-to-speech &amp; voice cloning</span>
        </div>
        <h1 className="mb-6 max-w-3xl text-balance px-1 text-center text-2xl font-semibold tracking-tight text-neutral-800 sm:text-3xl md:text-5xl">
          Turn any text into natural, expressive speech
        </h1>
        <p
          className={cn(
            "mb-6 max-w-2xl px-2 text-balance text-center text-sm text-violet-700 sm:text-base md:text-xl",
            "typewriter",
          )}
        >
          Pick a voice, fine-tune the delivery, and hear your words come alive in
          seconds.
        </p>
        <div className="max-w-full rounded-md bg-linear-to-r from-violet-600 via-cyan-500 to-emerald-400 px-4 py-3 text-center text-xl font-semibold text-white sm:px-6 sm:py-4 sm:text-2xl md:text-5xl">
          Give your words a voice.
        </div>
      </div>
      <div className="mt-8 flex w-full flex-col items-center justify-center">
        <h2 className="mb-6 max-w-[800px] text-balance px-2 text-center text-lg font-semibold text-neutral-800 sm:text-xl md:text-4xl">
          Studio-quality speech, built for creators and teams
        </h2>
        <p className="max-w-[800px] px-2 text-balance text-center text-base text-neutral-700 md:text-lg">
          <span className="font-medium text-violet-700">Voxora</span> helps you
          generate lifelike narration from plain text — narrate stories, record
          ads, guide meditations, or prototype podcasts without a recording booth.
          Browse a library of voices, clone your own from a short sample, and
          tweak temperature and pacing until every line sounds{" "}
          <span className="font-medium text-cyan-600">exactly right</span>.
        </p>
      </div>
      <Button
        className="mt-6 w-full max-w-sm bg-violet-600 text-white hover:bg-violet-700 sm:w-auto"
        size="lg"
        asChild
      >
        <Link href="/text-to-speech">
          Try Voxora for free <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
