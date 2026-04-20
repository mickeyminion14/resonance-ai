import { Button } from "@/components/ui/button";
import { QuickAction } from "@/interfaces/dashboard";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const QuickActionCard = ({
  description,
  gradient,
  href,
  title,
}: QuickAction) => {
  return (
    <div className="flex gap-4 rounded-xl border bg-card p-3">
      <div
        className={cn(
          "relative h-31 w-41 shrink-0 overflow-hidden rounded-xl bg-linear-to-br",
          gradient,
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-12 rounded-full bg-white/30" />
          <div className="absolute inset-2 rounded-lg ring-2 ring-inset ring-white/20" />
        </div>
      </div>
      <div className="flex flex-col justify-between py-1">
        <div className="space-y-1">
          <h3 className="text-sm font-medium">{title}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        <Button variant={"outline"} size={"xs"} className="w-fit" asChild>
          <Link href={typeof href === "function" ? href() : href}>
            Try Now <ArrowRight className="size-3" />{" "}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default QuickActionCard;
