"use client";

import { z } from "zod";

import { formOptions } from "@tanstack/react-form";
import { useAppForm } from "@/hooks/use-app-form";
import React from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

const TTSFormSchema = z.object({
  text: z.string().min(1, "Please enter some text"),
  voiceId: z.string().min(1, "Please select a voice"),
  temperature: z.number(),
  topP: z.number(),
  topK: z.number(),
  repetitionPenalty: z.number(),
});

export type TTSFormValues = z.infer<typeof TTSFormSchema>;

export const defaultTTSValues: TTSFormValues = {
  text: "",
  voiceId: "",
  temperature: 0.8,
  topP: 0.95,
  topK: 1000,
  repetitionPenalty: 1.2,
};

export const ttsFormOptions = formOptions({
  defaultValues: defaultTTSValues,
});

const TextToSpeechForm = ({
  children,
  defaultValues,
}: {
  children: React.ReactNode;
  defaultValues?: TTSFormValues;
}) => {
  const trpc = useTRPC();
  const router = useRouter();
  const queryClient = useQueryClient();

  const createMutation = useMutation(
    trpc.generations.create.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries(
          trpc.generations.getUsage.queryFilter(),
        );
      },
    }),
  );

  const form = useAppForm({
    ...ttsFormOptions,
    defaultValues: defaultValues ?? defaultTTSValues,
    validators: {
      onSubmit: TTSFormSchema,
    },
    onSubmit: async ({ value }) => {
      //generation logic will be added later
      try {
        const data = await createMutation.mutateAsync({
          ...value,
          text: value.text.trim(),
        });
        toast.success("Audio generated successfully !");
        router.push(`/text-to-speech/${data.id}`);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Failed to generate audio";
        toast.error(message);
      }
    },
  });
  return <form.AppForm>{children}</form.AppForm>;
};

export default TextToSpeechForm;
