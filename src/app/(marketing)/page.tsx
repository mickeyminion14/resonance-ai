import Link from "next/link";
import { ArrowRight, AudioLines } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MarketingPage() {
  return (
    <div className="flex w-full max-w-4xl flex-col items-center">
      <div className={cn("flex flex-col items-center justify-center")}>
        <div className="mb-4 flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium uppercase tracking-wide text-violet-700 shadow-sm">
          <AudioLines className="mr-2 h-5 w-5" />
          AI text-to-speech &amp; voice cloning
        </div>
        <h1 className="mb-6 max-w-3xl text-center text-2xl font-semibold tracking-tight text-neutral-800 md:text-5xl">
          Turn any text into natural, expressive speech
        </h1>
        <p
          className={cn(
            "mb-6 max-w-2xl bg-transparent text-center text-sm text-violet-700 md:text-xl",
            "typewriter",
          )}
        >
          Pick a voice, fine-tune the delivery, and hear your words come alive in
          seconds.
        </p>
        <div className="w-fit rounded-md bg-linear-to-r from-violet-600 via-cyan-500 to-emerald-400 px-6 py-4 text-2xl font-semibold text-white md:text-5xl">
          Give your words a voice.
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center">
        <h2 className="mb-6 max-w-[800px] text-center text-xl font-semibold text-neutral-800 md:text-4xl">
          Studio-quality speech, built for creators and teams
        </h2>
        <p className="max-w-[800px] text-center text-lg text-neutral-700">
          <span className="font-medium text-violet-700">Voxora</span> helps you
          generate lifelike narration from plain text — narrate stories, record
          ads, guide meditations, or prototype podcasts without a recording booth.
          Browse a library of voices, clone your own from a short sample, and
          tweak temperature and pacing until every line sounds{" "}
          <span className="font-medium text-cyan-600">exactly right</span>.
        </p>
      </div>
      <Button
        className="mt-6 bg-violet-600 text-white hover:bg-violet-700"
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
