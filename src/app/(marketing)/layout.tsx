import type { Metadata } from "next";

import { getSiteUrl } from "@/lib/site-url";

import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const siteUrl = getSiteUrl();

const marketingDescription =
  "Turn text into natural, expressive speech. Browse built-in voices, clone your own from a short sample, and generate studio-quality audio in seconds.";

export const metadata: Metadata = {
  title: "Voxora — AI Text to Speech & Voice Cloning",
  description: marketingDescription,
  keywords: [
    "text to speech",
    "voice cloning",
    "AI TTS",
    "generative voice",
    "neural TTS",
    "voice AI",
    "Voxora",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Voxora — AI Text to Speech & Voice Cloning",
    description:
      "Studio-quality AI speech for creators and teams. Built-in voices, zero-shot cloning, and fine-tuned delivery.",
    url: siteUrl.origin,
    siteName: "Voxora",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        alt: "Voxora — AI text-to-speech and voice cloning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voxora — AI Text to Speech & Voice Cloning",
    description:
      "Turn text into natural speech with built-in voices and custom clones.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-slate-100">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center px-4 pb-8 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
