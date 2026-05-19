"use client";

import { useAuth } from "@clerk/nextjs";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const ACTIVE_ORG_STORAGE_KEY = "voxora-active-org-id";

/**
 * Clears React Query cache when the active Clerk org changes so org-scoped
 * tRPC data (generations, voices, usage) is not shown from the previous org.
 */
export function OrgQueryCacheReset() {
  const { orgId, isLoaded } = useAuth();
  const queryClient = useQueryClient();
  const router = useRouter();
  const previousOrgId = useRef<string | null | undefined>(undefined);

  useEffect(() => {
    if (typeof window === "undefined" || !isLoaded) return;

    const currentOrgId = orgId ?? null;
    const storedOrgId = sessionStorage.getItem(ACTIVE_ORG_STORAGE_KEY);
    const prev = previousOrgId.current;

    const orgChangedInSession =
      typeof prev === "string" &&
      typeof currentOrgId === "string" &&
      prev !== currentOrgId;

    const orgChangedAcrossNavigation =
      typeof storedOrgId === "string" &&
      typeof currentOrgId === "string" &&
      storedOrgId !== currentOrgId;

    if (orgChangedInSession || orgChangedAcrossNavigation) {
      queryClient.clear();
      router.replace("/dashboard");
      router.refresh();
    }

    if (currentOrgId) {
      sessionStorage.setItem(ACTIVE_ORG_STORAGE_KEY, currentOrgId);
    }

    previousOrgId.current = currentOrgId;
  }, [orgId, isLoaded, queryClient, router]);

  return null;
}
