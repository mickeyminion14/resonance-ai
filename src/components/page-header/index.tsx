import { Headphones, ThumbsUp } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";

const PageHeader = ({
  title,
  className,
  trailing,
}: {
  title: string;
  className?: string;
  trailing?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b px-4 py-4",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        {trailing}
        <Button variant="outline" size="sm" asChild>
          <Link href="mailto:dev.sarthak.agrawal@gmail.com">
            <ThumbsUp />
            <span className="hidden lg:block">Feedback</span>
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href="mailto:dev.sarthak.agrawal@gmail.com">
            <Headphones />
            <span className="hidden lg:block">Need Help ?</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
