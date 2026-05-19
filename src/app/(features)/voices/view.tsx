"use client";

import { Suspense } from "react";
import { useQueryState } from "nuqs";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

import { voicesSearchParams } from "@/lib/nuqs";
import { useTRPC } from "@/trpc/client";

import { VoicesList } from "./_components/voices-list";
import { VoicesListsFallback } from "./_components/voices-lists-fallback";
import { VoicesToolbar } from "./_components/voices-toolbar";

function VoicesLists({ query }: { query: string }) {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.voices.getAll.queryOptions({ query }));

  return (
    <>
      <VoicesList title="Team Voices" voices={data.custom} />
      <VoicesList title="Built-in Voices" voices={data.system} />
    </>
  );
}

export function VoicesView() {
  const trpc = useTRPC();
  const [query] = useQueryState("query", voicesSearchParams.query);
  const { data } = useQuery(trpc.voices.getAll.queryOptions({ query }));
  const customVoiceCount = data?.custom.length ?? 0;

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-scroll p-3 lg:p-6">
      <VoicesToolbar customVoiceCount={customVoiceCount} />
      <Suspense fallback={<VoicesListsFallback />}>
        <VoicesLists query={query} />
      </Suspense>
    </div>
  );
}
