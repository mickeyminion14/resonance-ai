import { type LucideIcon } from "lucide-react";

export interface MenuItem {
  title: string;
  url?: string;
  icon: LucideIcon;
  onClick?: () => void;
}

export interface NavSectionProps {
  label?: string;
  items: MenuItem[];
  pathname: string;
}
