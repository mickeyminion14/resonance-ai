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
  const { orgId } = useAuth();
  const queryClient = useQueryClient();
  const router = useRouter();
  const previousOrgId = useRef<string | null | undefined>(undefined);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedOrgId = sessionStorage.getItem(ACTIVE_ORG_STORAGE_KEY);
    const prev = previousOrgId.current;

    const orgChangedInSession =
      prev !== undefined && prev !== (orgId ?? null);
    const orgChangedAcrossNavigation =
      storedOrgId !== null && orgId !== null && storedOrgId !== orgId;

    if (orgChangedInSession || orgChangedAcrossNavigation) {
      queryClient.clear();
      router.replace("/dashboard");
      router.refresh();
    }

    if (orgId) {
      sessionStorage.setItem(ACTIVE_ORG_STORAGE_KEY, orgId);
    }

    previousOrgId.current = orgId ?? null;
  }, [orgId, queryClient, router]);

  return null;
}
