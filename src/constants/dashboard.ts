import { QuickAction } from "@/interfaces/dashboard";

const pickRandom = (arr: string[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export const QUICK_ACTIONS: QuickAction[] = [
  {
    title: "Narrate a Story",
    description: "Bring characters to life with expressive AI narration",
    gradient: "from-cyan-400 to-cyan-50",
    href: () =>
      `/text-to-speech?text=${encodeURIComponent(
        pickRandom([
          "In a village far far away, there was a young girl who was very curious about the world. She wanted to know everything and was always asking questions. One day, she decided to go on a journey to explore the world.",
          "A old lighthouse keeper named Samuel had guarded the rocky coast for forty years. One stormy night, he spotted a mysterious glowing ship that never appeared on any map. He grabbed his lantern and rowed out to investigate.",
          "The last bookshop on Earth was hidden at the end of a cobblestone alley. Nobody remembered how it got there. But everyone who walked in found exactly the book they needed most — even if they didn't know it yet.",
        ]),
      )}`,
  },
  {
    title: "Guide a Meditation",
    description: "Guide a meditation session with calming AI voice",
    gradient: "from-purple-400 to-purple-50",
    href: () =>
      `/text-to-speech?text=${encodeURIComponent(
        pickRandom([
          "Take a deep breath in and out. Feel your body relax. Let go of any tension. Focus on your breath. Notice the air moving in and out of your body. Let go of any thoughts. Just be present in the moment.",
          "Gently close your eyes. Imagine a warm golden light washing over you from head to toe, melting away every worry. With each exhale, you release what no longer serves you. You are safe. You are calm. You are enough.",
          "Bring your attention to your feet. Feel the ground beneath you, solid and steady. Now slowly scan upward — your legs, your belly, your chest. At each place, breathe in ease and breathe out tension.",
        ]),
      )}`,
  },
  {
    title: "Learn a Fun Fact",
    description: "Discover a surprising fact every time you tap",
    gradient: "from-yellow-400 to-yellow-50",
    href: () =>
      `/text-to-speech?text=${encodeURIComponent(
        pickRandom([
          "Did you know that honey never spoils? Archaeologists have found 3000-year-old honey in Egyptian tombs that was still perfectly edible. Its low moisture and acidic pH make it one of nature's most remarkable preservatives.",
          "Octopuses have three hearts, blue blood, and nine brains — one central brain and one in each of their eight arms. Each arm can act independently, taste what it touches, and even continue moving after being detached.",
          "A day on Venus is longer than a year on Venus. It takes 243 Earth days to rotate once on its axis, but only 225 Earth days to complete a full orbit around the Sun. And it spins backwards compared to most planets.",
          "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza. The pyramids were built around 2560 BC, Cleopatra was born in 69 BC, and humans landed on the Moon in 1969.",
        ]),
      )}`,
  },
  {
    title: "Morning Affirmations",
    description: "A fresh set of affirmations every morning",
    gradient: "from-orange-400 to-orange-50",
    href: () =>
      `/text-to-speech?text=${encodeURIComponent(
        pickRandom([
          "Today is a new beginning. I am capable, I am strong, and I am ready for whatever comes my way. I choose to focus on the good in every situation. My potential is limitless. I will show up fully and make today count.",
          "I release yesterday's doubts. Today I choose confidence. I trust my instincts, I welcome challenges as opportunities, and I know that every small step I take is moving me closer to where I want to be.",
          "I am grateful for this moment. My mind is clear, my heart is open, and my energy is focused. I have everything I need within me. Today I will be kind to myself and to everyone I meet.",
        ]),
      )}`,
  },
  {
    title: "Bedtime Story",
    description: "A different soothing tale every night",
    gradient: "from-indigo-400 to-indigo-50",
    href: () =>
      `/text-to-speech?text=${encodeURIComponent(
        pickRandom([
          "Once upon a time, under a sky full of twinkling stars, a little rabbit named Pip snuggled into his cozy burrow. The moon smiled down and whispered — sleep now little one, for tomorrow holds new adventures.",
          "High up in the clouds lived a small dragon who was afraid of fire. Instead of flames, she breathed out tiny snowflakes. The other dragons laughed, until one scorching summer when only she could keep the meadows cool.",
          "A sleepy little bear couldn't find the right spot to hibernate. She tried a cave, a hollow log, and a pile of leaves. Finally, she curled up under the stars and realized the whole sky was her blanket.",
        ]),
      )}`,
  },
  {
    title: "Nature Soundscape",
    description: "A vivid new nature scene every listen",
    gradient: "from-green-400 to-green-50",
    href: () =>
      `/text-to-speech?text=${encodeURIComponent(
        pickRandom([
          "Close your eyes and imagine you are standing in a lush forest. Sunlight filters through the canopy, casting golden patterns on the mossy ground. A gentle stream trickles nearby, its murmur blending with birdsong overhead.",
          "You are sitting on a warm sandy beach as the sun sets over the ocean. Waves roll in slowly, one after another, each one whispering as it retreats. The sky shifts from gold to rose to a deep, velvety purple.",
          "Picture yourself on a quiet mountain meadow just after rainfall. The air is sharp and clean. Wildflowers glisten with droplets. Far below, a valley stretches out in every shade of green you have ever seen.",
        ]),
      )}`,
  },
];
