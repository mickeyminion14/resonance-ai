"use client";

import { z } from "zod";

import { formOptions, FormOptions } from "@tanstack/react-form";
import { useAppForm } from "@/hooks/use-app-form";
import React from "react";

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
  const form = useAppForm({
    ...ttsFormOptions,
    defaultValues: defaultValues ?? defaultTTSValues,
    validators: {
      onSubmit: TTSFormSchema,
    },
    onSubmit: async () => {
      //generation logic will be added later
    },
  });
  return <form.AppForm>{children}</form.AppForm>;
};

export default TextToSpeechForm;
