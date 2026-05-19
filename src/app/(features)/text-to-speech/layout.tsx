// src/app/(features)/text-to-speech/layout.tsx
import { Suspense } from "react";
import type { Metadata } from "next";

import PageHeader from "@/components/page-header";
import { HydrateClient, prefetch, trpc } from "@/trpc/server";

import GenerationUsageBadge from "./_components/generation-usage-badge";

export const metadata: Metadata = {
  title: "Text to speech",
};

export default async function TextToSpeechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  prefetch(trpc.generations.getUsage.queryOptions());

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      <HydrateClient>
        <PageHeader
          title="Text to speech"
          trailing={
            <Suspense
              fallback={
                <div className="h-8 w-24 animate-pulse rounded-md border bg-muted/40" />
              }
            >
              <GenerationUsageBadge />
            </Suspense>
          }
        />
      </HydrateClient>
      {children}
    </div>
  );
}
