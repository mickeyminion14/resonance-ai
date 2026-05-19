import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";
import { useDebouncedCallback } from "use-debounce";
import { Search, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MAX_CUSTOM_VOICES_PER_ORG } from "@/constants/constraints";
import { voicesSearchParams } from "@/lib/nuqs";
import { VoiceCreateDialog } from "../voices-create-dialog";

export function VoicesToolbar({
  customVoiceCount,
}: {
  customVoiceCount: number;
}) {
  const [query, setQuery] = useQueryState("query", voicesSearchParams.query);
  const [localQuery, setLocalQuery] = useState(query);

  const debouncedSetQuery = useDebouncedCallback(
    (value: string) => setQuery(value),
    300,
  );

  useEffect(() => {
    setLocalQuery(query);
  }, [query]);

  const limitReached = customVoiceCount >= MAX_CUSTOM_VOICES_PER_ORG;
  const remaining = Math.max(0, MAX_CUSTOM_VOICES_PER_ORG - customVoiceCount);

  const createButton = (
    <Button size="sm" disabled={limitReached}>
      <Sparkles />
      Custom voice
    </Button>
  );

  return (
    <div className="shrink-0 space-y-4">
      <div>
        <h2 className="text-xl font-semibold tracking-tight lg:text-2xl">
          All Libraries
        </h2>
        <p className="text-sm text-muted-foreground">
          Discover your voices, or make your own
          <span className="tabular-nums">
            {" "}
            · {customVoiceCount}/{MAX_CUSTOM_VOICES_PER_ORG} custom voices
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <InputGroup className="lg:max-w-sm">
            <InputGroupAddon>
              <Search className="size-4" />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Search voices..."
              value={localQuery}
              onChange={(e) => {
                setLocalQuery(e.target.value);
                debouncedSetQuery(e.target.value);
              }}
            />
          </InputGroup>
          <div className="ml-auto hidden lg:block">
            {limitReached ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex">{createButton}</span>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="end" hideArrow>
                  <p className="text-xs">
                    You&apos;ve used all {MAX_CUSTOM_VOICES_PER_ORG} custom
                    voice slots for this workspace.
                  </p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <VoiceCreateDialog>{createButton}</VoiceCreateDialog>
            )}
          </div>
          <div className="lg:hidden">
            {limitReached ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex w-full">{createButton}</span>
                </TooltipTrigger>
                <TooltipContent side="bottom" hideArrow>
                  <p className="text-xs">
                    You&apos;ve used all {MAX_CUSTOM_VOICES_PER_ORG} custom
                    voice slots.
                  </p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <VoiceCreateDialog>
                <Button size="sm" className="w-full">
                  <Sparkles />
                  Custom voice
                </Button>
              </VoiceCreateDialog>
            )}
          </div>
        </div>
        {!limitReached && remaining <= 1 && (
          <p className="text-xs text-amber-700 dark:text-amber-400">
            {remaining} custom voice slot remaining
          </p>
        )}
      </div>
    </div>
  );
}
