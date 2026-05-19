import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="shrink-0 w-full border-t bg-slate-100 p-4">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <Logo href="/" />
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </footer>
  );
};
