"use client";

import TextInputPanel from "./_components/text-input-panel";
import VoicePreviewPlaceholder from "./_components/voice-preview-placeholder";
import SettingsPanel from "./_components/settings-panel";
import TextToSpeechForm, {
  defaultTTSValues,
} from "./_components/text-to-speech-form";

const TextToSpeechPage = () => {
  return (
    <TextToSpeechForm defaultValues={defaultTTSValues}>
      <div className="flex  min-h-0 flex-1 overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col">
          <TextInputPanel />
          <VoicePreviewPlaceholder />
        </div>
        <SettingsPanel />
      </div>
    </TextToSpeechForm>
  );
};

export default TextToSpeechPage;
