"use client";

import { Button } from "@/components/ui/button";
import TextInputPanel from "./_components/text-input-panel";
import VoicePreviewPlaceholder from "./_components/voice-preview-placeholder";
import SettingsPanel from "./_components/settings-panel";

const TextToSpeechPage = () => {
  return (
    <div className="flex  min-h-0 flex-1 overflow-hidden">
      <div className="flex min-h-0 flex-1 flex-col">
        <TextInputPanel />
        <VoicePreviewPlaceholder />
      </div>
      <SettingsPanel />
    </div>
  );
};

export default TextToSpeechPage;
