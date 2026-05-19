import type { Metadata } from "next";
import { cookies } from "next/headers";

import { OrgQueryCacheReset } from "@/components/org-query-cache-reset";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import FeatureSidebar from "./_components/sidebar";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const FeatureLaylout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen} className="h-svh">
      <OrgQueryCacheReset />
      <FeatureSidebar />
      <SidebarInset className="min-h-0 min-w-0">
        <main className="flex min-h-0 flex-1 flex-col">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default FeatureLaylout;
