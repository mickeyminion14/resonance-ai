import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { PER_CHARACTER_RATE, TEXT_MAX_LENGTH } from "@/constants/constraints";
import { useTypedAppFormContext } from "@/hooks/use-app-form";
import { Coins } from "lucide-react";
import { ttsFormOptions } from "../text-to-speech-form";
import GenerateButton from "../generate-button";
import { useStore } from "@tanstack/react-form";

const TextInputPanel = () => {
  const form = useTypedAppFormContext(ttsFormOptions);

  const {
    isValid,
    isSubmitting,
    values: { text },
  } = useStore(form.store, (s) => s);

  return (
    <div className="flex h-full min-h-0 flex-col flex-1">
      <div className="relative min-h-0 flex-1">
        <form.Field name="text">
          {(field) => (
            <Textarea
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Start typing or paste your text here..."
              className="absolute inset-0 resize-none border-0 bg-transparent p-4 pb-6 lg:p-6 lg:pb-8 text-base! leading-relaxed tracking-tight shadow-none wrap-break-word focus-visible:ring-0"
              maxLength={TEXT_MAX_LENGTH}
              disabled={isSubmitting}
            />
          )}
        </form.Field>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-background to-transparent" />
      </div>
      <div className="shrink-0 p-4 lg:p-6">
        {/* Mobile */}
        <div className="flex flex-col gap-3 lg:hidden">
          <GenerateButton
            className="w-full"
            disabled={isSubmitting || !isValid}
            isSubmitting={isSubmitting}
            onSubmit={() => form.handleSubmit()}
          />
        </div>
        {/* Desktop */}
        {text && text.length > 0 ? (
          <div className="hidden items-center justify-between lg:flex">
            <Badge variant={"outline"} className="gap-1.5 border-dashed">
              <Coins className="size-3 text-chart-5" />
              <span className="tabular-nums">
                ${(text.length * PER_CHARACTER_RATE).toFixed(4)} estimated
              </span>
            </Badge>
            <div className="flex items-center gap-3">
              <p className="text-xs tracking-tight">
                {text.length.toLocaleString()}
                <span className="text-muted-foreground">
                  / {TEXT_MAX_LENGTH.toLocaleString()} characters
                </span>
              </p>
              <GenerateButton
                size="sm"
                disabled={isSubmitting || !isValid}
                isSubmitting={isSubmitting}
                onSubmit={() => form.handleSubmit()}
              />
            </div>
          </div>
        ) : (
          <div className="hidden lg:block">
            <p className="text-sm text-muted-foreground">
              Get started by typing or pasting text above
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInputPanel;
