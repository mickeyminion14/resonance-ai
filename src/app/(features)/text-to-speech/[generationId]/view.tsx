"use client";

import { useSuspenseQueries } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import TextToSpeechForm, {
  defaultTTSValues,
  TTSFormValues,
} from "../_components/text-to-speech-form";
import { TTSVoicesProvider } from "../_contexts/tts-voices-context";
import SettingsPanel from "../_components/settings-panel";
import VoicePreviewPlaceholder from "../_components/voice-preview-placeholder";
import TextInputPanel from "../_components/text-input-panel";
import VoicePreviewPanel from "../_components/voice-preview-panel";
import VoicePreviewMobile from "../_components/voice-preview-mobile";

export function TextToSpeechDetailView({
  generationId,
}: {
  generationId: string;
}) {
  const trpc = useTRPC();
  const [generationQuery, voicesQuery] = useSuspenseQueries({
    queries: [
      trpc.generations.getById.queryOptions({ id: generationId }),
      trpc.voices.getAll.queryOptions(),
    ],
  });

  const data = generationQuery.data;

  const { custom: customVoices, system: systemVoices } = voicesQuery.data;

  const allVoices = [...customVoices, ...systemVoices];
  const fallbackVoiceId = allVoices[0]?.id ?? "";

  // Requested voice may no longer exist (deleted); fall back to first available
  const resolvedVoiceId =
    data?.voiceId && allVoices.some((v) => v.id === data.voiceId)
      ? data.voiceId
      : fallbackVoiceId;

  const defaultValues: TTSFormValues = {
    text: data?.text ?? "",
    voiceId: resolvedVoiceId,
    temperature: data?.temperature ?? defaultTTSValues.temperature,
    topP: data?.topP ?? defaultTTSValues.topP,
    topK: data?.topK ?? defaultTTSValues.topK,
    repetitionPenalty:
      data?.repetitionPenalty ?? defaultTTSValues.repetitionPenalty,
  };

  const generationVoice = {
    id: data?.voiceId,
    name: data?.voiceName,
  };

  return (
    <TTSVoicesProvider value={{ customVoices, systemVoices, allVoices }}>
      <TextToSpeechForm key={generationId} defaultValues={defaultValues}>
        <div className="flex min-h-0 flex-1 overflow-hidden">
          <div className="flex min-h-0 flex-1 flex-col">
            <TextInputPanel />
            <VoicePreviewPanel
              audioUrl={data?.audioUrl}
              voice={generationVoice}
              text={data?.text}
            />
            <VoicePreviewMobile
              audioUrl={data?.audioUrl}
              voice={generationVoice}
              text={data?.text}
            />
          </div>
          <SettingsPanel />
        </div>
      </TextToSpeechForm>
    </TTSVoicesProvider>
  );
}
