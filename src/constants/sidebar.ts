import {
  AudioLines,
  Headphones,
  Home,
  LayoutGrid,
  Settings,
  Volume2,
} from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { MenuItem } from "@/interfaces/sidebar";
export const MAIN_MENU_ITEMS: MenuItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Explore Voices",
    url: "/voices",
    icon: LayoutGrid,
  },
  {
    title: "Text to speech",
    url: "/text-to-speech",
    icon: AudioLines,
  },
];

export const OTHER_MENU_ITEMS = (): MenuItem[] => {
  const clerk = useClerk();
  return [
    {
      title: "Settings",
      icon: Settings,
      onClick: () => clerk.openOrganizationProfile,
    },

    {
      title: "Help and Support",
      url: "mailto:dev.sarthak.agrawal@gmail.com",
      icon: Headphones,
    },
  ];
};
