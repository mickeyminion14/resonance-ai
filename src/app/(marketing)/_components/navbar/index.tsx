import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 flex h-14 w-full items-center border-b bg-white px-4 shadow-sm">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-2">
        <Logo href="/" />
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/text-to-speech">
              <span className="sm:hidden">Get started</span>
              <span className="hidden sm:inline">Try Voxora for free</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
