import artwork1 from "@/assets/images/artwork-1.png";
import artwork2 from "@/assets/images/artwork-2.png";
import artwork3 from "@/assets/images/artwork-3.png";
import artwork4 from "@/assets/images/artwork-4.png";
import artwork5 from "@/assets/images/artwork-5.png";

export interface Work {
  id: string;
  title: string;
  medium: string;
  year: number;
  description: string;
  longDescription: string;
  image: string;
  planetColor: string;
  planetSize: number;
  orbitRadius: number;
  orbitDuration: number;
  orbitOffset: number;
  glowColor: string;
}

export const works: Work[] = [
  {
    id: "void-signal",
    title: "Void Signal",
    medium: "Audiovisual Installation",
    year: 2024,
    description: "A transmission from the edges of perception — where signal meets silence.",
    longDescription:
      "Void Signal is an immersive audiovisual installation that confronts the boundary between signal and noise. Visitors move through a darkened space where radio transmissions from deep space are translated into shifting light fields and granular sound textures. The piece asks: what lives in the gap between what we send and what is received?",
    image: artwork1,
    planetColor: "#4f9eff",
    planetSize: 38,
    orbitRadius: 110,
    orbitDuration: 22,
    orbitOffset: 0,
    glowColor: "rgba(79,158,255,0.6)",
  },
  {
    id: "chromatic-drift",
    title: "Chromatic Drift",
    medium: "Live A/V Performance",
    year: 2023,
    description: "Color as frequency. Light as rhythm. A live synthesis of image and sound.",
    longDescription:
      "Chromatic Drift is a live audiovisual performance built around generative color synthesis. Frequencies are mapped to hue, amplitude to saturation, rhythm to form. Every performance is unique — a conversation between the artist, the algorithm, and the room. The result is a chromatic language that bypasses words entirely.",
    image: artwork2,
    planetColor: "#c850c0",
    planetSize: 28,
    orbitRadius: 160,
    orbitDuration: 35,
    orbitOffset: 72,
    glowColor: "rgba(200,80,192,0.55)",
  },
  {
    id: "event-horizon",
    title: "Event Horizon",
    medium: "Film Score + Visuals",
    year: 2023,
    description: "A score written at the threshold of collapse — music and image in free fall.",
    longDescription:
      "Event Horizon began as a film score and became something else entirely. The original footage was processed, corrupted, and re-animated through audio-reactive algorithms. What remains is a 42-minute descent through gravitational memory — a collaboration between the original filmmaker and the physics of entropy.",
    image: artwork3,
    planetColor: "#ff6b35",
    planetSize: 44,
    orbitRadius: 215,
    orbitDuration: 48,
    orbitOffset: 144,
    glowColor: "rgba(255,107,53,0.5)",
  },
  {
    id: "liminal-frequencies",
    title: "Liminal Frequencies",
    medium: "Generative Soundscape + Video",
    year: 2022,
    description: "Between states. Between spaces. An architecture built from thresholds.",
    longDescription:
      "Liminal Frequencies is an ongoing generative work that produces a never-repeating audiovisual environment. Algorithms model the behavior of transition states in quantum physics — superposition, collapse, entanglement — and translate them into evolving sound and image. No two viewings are the same.",
    image: artwork4,
    planetColor: "#7bff8e",
    planetSize: 22,
    orbitRadius: 265,
    orbitDuration: 60,
    orbitOffset: 216,
    glowColor: "rgba(123,255,142,0.45)",
  },
  {
    id: "dark-matter",
    title: "Dark Matter",
    medium: "Immersive Dome Experience",
    year: 2021,
    description: "What you cannot see shapes everything you can. A dome of invisible forces.",
    longDescription:
      "Dark Matter is a 360-degree dome experience created for fulldome projection environments. The piece draws on cosmological data from ESA and NASA to construct an immersive journey through the unseen fabric of the universe. Audiences lie beneath a dome where invisible forces become visible — a meditation on what exists beyond the range of human perception.",
    image: artwork5,
    planetColor: "#b58aff",
    planetSize: 32,
    orbitRadius: 310,
    orbitDuration: 75,
    orbitOffset: 288,
    glowColor: "rgba(181,138,255,0.5)",
  },
];
