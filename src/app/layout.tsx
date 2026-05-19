import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TRPCReactProvider } from "../trpc/client";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Voxora",
    template: `Voxora | %s`,
  },
  description: "AI Powered text to speech and voice cloning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          organizationSwitcherPopoverRootBox: {
            pointerEvents: "auto",
          },
          userButtonPopoverRootBox: {
            pointerEvents: "auto",
          },
        },
      }}
    >
      <html lang="en" className={cn("h-full", "antialiased", inter.variable)}>
        <body className="min-h-full flex flex-col">
          <TRPCReactProvider>
            <NuqsAdapter>
              <TooltipProvider>{children}</TooltipProvider>
            </NuqsAdapter>
          </TRPCReactProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
