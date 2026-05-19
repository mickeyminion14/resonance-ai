import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
  href?: string;
  className?: string;
};

export const Logo = ({ href = "/dashboard", className }: LogoProps) => {
  return (
    <Link href={href}>
      <div
        className={cn(
          "flex items-center gap-x-2 transition hover:opacity-75",
          className,
        )}
      >
        <Image src="/logo.svg" alt="Voxora" height={30} width={30} />
        <p className="hidden pb-1 text-lg text-neutral-700 sm:block">Voxora</p>
      </div>
    </Link>
  );
};
