"use client";

import {
  BookOpen,
  Smile,
  Mic,
  Languages,
  Clapperboard,
  Gamepad2,
  Podcast,
  Brain,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import type { LucideIcon } from "lucide-react";

const pickRandom = (arr: string[]) =>
  arr[Math.floor(Math.random() * arr.length)];

const PROMPT_SUGGESTIONS: {
  label: string;
  prompts: string[];
  icon: LucideIcon;
}[] = [
  {
    label: "Narrate a story",
    prompts: [
      "In a village tucked between mist-covered mountains, there lived an old clockmaker whose clocks never told the right time — but they always told the truth. One rainy evening, a stranger walked in and asked for a clock that could show him his future.",
      "In a village far far away, there was a young girl who was very curious about the world. She wanted to know everything and was always asking questions. One day, she decided to go on a journey to explore the world.",
      "The last bookshop on Earth was hidden at the end of a cobblestone alley. Nobody remembered how it got there. But everyone who walked in found exactly the book they needed most — even if they didn't know it yet.",
    ],
    icon: BookOpen,
  },
  {
    label: "Tell a silly joke",
    prompts: [
      "Why don't scientists trust atoms? Because they make up everything! And honestly, I once asked an atom if it was positive about that — it said it had lost an electron. I said, are you sure? It replied, I'm positive!",
      "I told my wife she was drawing her eyebrows too high. She looked surprised. Then I said I was just kidding — and she looked even more surprised. Honestly, I'm not sure which look was funnier.",
      "Why did the scarecrow win an award? Because he was outstanding in his field! His acceptance speech was short though — just a lot of rustling and standing very still.",
    ],
    icon: Smile,
  },
  {
    label: "Record an advertisement",
    prompts: [
      "Introducing BrightBean Coffee — the smoothest roast you'll ever taste. Sourced from high-altitude farms, slow-roasted to perfection, and delivered fresh to your door every single week. Wake up to something extraordinary. Try BrightBean today and get your first bag free.",
      "Meet Lumina Skincare — science-backed formulas that actually work. No harsh chemicals, no empty promises. Just radiant skin in as little as two weeks. Join thousands who've already made the switch. Your glow-up starts now.",
      "Tired of tangled cables and dead batteries? The AeroPods Pro deliver crystal-clear sound, all-day comfort, and thirty hours of battery life. Tap once to connect. Tap twice to escape the noise. Order today and hear the difference.",
    ],
    icon: Mic,
  },
  {
    label: "Speak in different languages",
    prompts: [
      "Hello and welcome! Today we're going on a journey around the world. Bonjour, comment allez-vous? Hola, bienvenidos a todos. Guten Tag, willkommen bei uns. Ciao a tutti, benvenuti. Let's celebrate the beauty of language together.",
      "Good morning, friends! Let's travel the globe in words. Konnichiwa, genki desu ka? Ni hao, huanying. Shalom, ma shlomcha? Namaste, aap kaise hain? Every language opens a new door — let's walk through them together.",
      "Welcome to our language adventure! From the canals of Amsterdam — Goedemorgen — to the streets of Rio — Bom dia — to the markets of Istanbul — Merhaba. Each greeting is a small bridge between cultures. Shall we cross a few today?",
    ],
    icon: Languages,
  },
  {
    label: "Direct a dramatic movie scene",
    prompts: [
      "The rain hammered against the window as she turned to face him. You knew, didn't you? she whispered, her voice barely holding together. He stepped forward, jaw clenched. I did what I had to do. The silence between them was louder than the storm outside.",
      "The letter lay unopened on the desk. Forty years of silence, and now this. She picked it up with trembling hands. He always said he'd come back. She never believed him — until the postmark proved he had tried.",
      "They stood on opposite sides of the bridge at midnight. One step closer and everything changes, he said. She shook her head. One step back and we lose everything, she replied. Below them, the river carried away the last of the daylight.",
    ],
    icon: Clapperboard,
  },
  {
    label: "Hear from a video game character",
    prompts: [
      "Listen up, adventurer. The realm of Ashenvale is crumbling, and the Crystal of Eternity has been shattered into seven pieces. You are the only one who can reassemble it. Gather your courage, sharpen your blade, and meet me at the Gates of Dawn. Time is not on our side.",
      "Ah, you've finally arrived at the Obsidian Spire. I am Lyra, keeper of the ancient forge. Bring me three embers from the Volcanic Depths, and I shall craft you a weapon worthy of the Shadow King. Fail, and darkness claims us all by moonrise.",
      "Welcome, pilot. The colony ship is twelve hours from impact. I need you to reroute power to the cryo-bay and bypass the corrupted navigation AI. Trust me — I've flown worse. Grab a helmet and meet me in the hangar. We don't have much time.",
    ],
    icon: Gamepad2,
  },
  {
    label: "Introduce your podcast",
    prompts: [
      "Hey everyone, welcome back to another episode of The Curious Mind — the podcast where we dig into the stories, science, and strange ideas that shape our world. I'm your host, and today we have an incredible guest who's going to challenge everything you thought you knew.",
      "What's up listeners, you're tuned into Off the Record — real conversations with people who've seen things most of us only read about. No scripts, no fluff. Just honest talk. Today's episode is one I've been looking forward to for months.",
      "Good morning and welcome to Small Wonders — a show about the tiny things that make life extraordinary. I'm your host, and this week we're exploring how a single habit can reshape your entire week. Grab your coffee and let's dive in.",
    ],
    icon: Podcast,
  },
  {
    label: "Guide a meditation class",
    prompts: [
      "Close your eyes and take a deep breath in. Hold it gently... and release. Feel the weight of the day slowly melting away. With each breath, you're sinking deeper into calm. There is nowhere else you need to be. Just here. Just now. Breathe in peace, breathe out tension.",
      "Gently close your eyes. Imagine a warm golden light washing over you from head to toe, melting away every worry. With each exhale, you release what no longer serves you. You are safe. You are calm. You are enough.",
      "Bring your attention to your feet. Feel the ground beneath you, solid and steady. Now slowly scan upward — your legs, your belly, your chest. At each place, breathe in ease and breathe out tension.",
    ],
    icon: Brain,
  },
];

export default function PromptSuggestions({
  onSelect,
}: {
  onSelect: (prompt: string) => void;
}) {
  return (
    <div className="space-y-2.5">
      <p className="text-sm text-muted-foreground">Get started with</p>
      <div className="flex flex-wrap gap-2">
        {PROMPT_SUGGESTIONS.map((suggestion) => (
          <Badge
            key={suggestion.label}
            variant="outline"
            className="cursor-pointer gap-1.5 py-1 px-2.5 text-xs hover:bg-accent rounded-md"
            onClick={() => onSelect(pickRandom(suggestion.prompts))}
          >
            <suggestion.icon className="size-3.5 shrink-0" />
            {suggestion.label}
          </Badge>
        ))}
      </div>
    </div>
  );
}
