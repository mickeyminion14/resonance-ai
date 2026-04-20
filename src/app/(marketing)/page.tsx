import Link from "next/link";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import { ArrowRight, Pen } from "lucide-react";

export default function MarketingPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={cn("flex items-center justify-center flex-col")}>
        <div className="mb-4 flex items-center rounded-full border border-[#FFD200]/40 bg-[#FFD200]/15 p-4 uppercase text-[#E3073C] shadow-sm">
          <Pen className="mr-2 h-6 w-6" />
          The No. 1 Creative Workspace
        </div>
        <h1 className="mb-6 text-center text-2xl text-neutral-800 md:text-5xl">
          Sketch & Collab makes collaboration effortless
        </h1>
        <div
          className={cn(
            "mb-6 bg-transparent text-center text-small text-[#1F84EF] md:text-xl",
            "typewriter",
          )}
        >
          Sketch ideas, collaborate with your team, and bring your concepts to
          life seamlessly.
        </div>
        <div className="w-fit rounded-md bg-linear-to-r from-[#1F84EF] via-[#06E07F] to-[#FFD200] p-4 text-2xl text-white md:text-5xl">
          Create together.
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center">
        <h1 className="mb-6 max-w-[800px] text-center text-xl text-neutral-800 md:text-4xl">
          Creative Collaboration: fast sketches, connected teams
        </h1>
        <p className="max-w-[800px] text-lg text-neutral-700">
          Bringing ideas to life has never been this seamless. With Sketch &
          <span className="font-medium text-[#E3073C]"> Collab</span>, your team
          can brainstorm, draw, annotate, and share in real time, all in one
          interactive workspace. From wireframes to sticky notes to polished
          designs, everything is collaborative, customizable, and designed to
          keep your team engaged. It&apos;s intuitive, dynamic, and, most
          importantly, <span className="text-[#06E07F]">fun</span>.
        </p>
      </div>
      <Button
        className="mt-6 border-[#1F84EF] bg-[#1F84EF] text-white hover:bg-[#06E07F] hover:text-neutral-950"
        size={"lg"}
        asChild
      >
        <Link href="/dashboard">
          Try Sketch & Collab for free <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
