"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const GenerateButton = ({
  size,
  disabled,
  isSubmitting,
  onSubmit,
  className,
}: {
  size?: "default" | "sm";
  disabled: boolean;
  isSubmitting: boolean;
  onSubmit: () => void;
  className?: string;
}) => {
  return (
    <Button
      className={className}
      size={size}
      onClick={onSubmit}
      disabled={disabled}
    >
      {isSubmitting ? (
        <>
          <Spinner className="size-3" /> Generating...
        </>
      ) : (
        "Generate speech"
      )}
    </Button>
  );
};
export default GenerateButton;
