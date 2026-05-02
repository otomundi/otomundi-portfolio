import artwork1 from "@/assets/images/artwork-1.png";
import artwork2 from "@/assets/images/artwork-2.png";
import artwork3 from "@/assets/images/artwork-3.png";
import artwork4 from "@/assets/images/artwork-4.png";

export interface WorkCredit {
  role: string;
  name: string;
  instagram: string;
}

export interface WorkMedia {
  videoUrl?: string;
  audioUrl?: string;
  photos: string[];
}

export interface Work {
  id: string;
  title: string;
  medium: string;
  year: number;
  description: string;
  longDescription: string;
  image: string;
  credits: WorkCredit[];
  media: WorkMedia;
}

export const works: Work[] = [
  {
    id: "euvim",
    title: "EUVIM",
    medium: "Live A/V Performance",
    year: 2026,
    description: "I saw. A first-person reckoning with presence — what it means to witness, to be witnessed, to exist in full.",
    longDescription:
      "EUVIM — 'I saw' in Portuguese — is a live audiovisual performance built from the act of bearing witness. Central to the ótomundi philosophy is the belief that creation is a form of spiritual projection: that to see clearly is to participate in the intelligence that sustains all life. The work moves through personal field recordings, synthesised ancestral frequencies, and audio-reactive visuals to construct a testimony — not of events, but of states. States of perception. States of instinct. States of presence. EUVIM asks: what does it mean to have been fully, devotedly here — and to offer that presence as an act of collective healing?",
    image: artwork4,
    credits: [
      { role: "Direction & Music", name: "óto", instagram: "https://instagram.com/otomundi" },
      { role: "Visuals", name: "Collaborator", instagram: "#" },
      { role: "Performance", name: "Collaborator", instagram: "#" },
    ],
    media: {
      videoUrl: "https://player.vimeo.com/video/148751763",
      audioUrl: "",
      photos: [artwork4, artwork1, artwork2, artwork3],
    },
  },
  {
    id: "tigre",
    title: "TIGRE",
    medium: "Immersive Installation",
    year: 2025,
    description: "Ancestral force made visible. The animal that moves through us — older than memory, faster than thought.",
    longDescription:
      "TIGRE is an immersive installation born from the ótomundi inquiry into ancestral consciousness and the primal codes embedded in human spirituality. Working across sonic field recordings, textile imagery, and spatial light, the piece invokes the symbolic weight of the tiger across African, Iberian, and Eastern ancestral traditions — not as decoration, but as living archive. To enter TIGRE is to be moved by a frequency older than language: the instinct that connects us to the Earth, to our ancestors, and to the unbroken chain of creative intelligence that flows through all living beings.",
    image: artwork2,
    credits: [
      { role: "Direction & Music", name: "óto", instagram: "https://instagram.com/otomundi" },
      { role: "Sound Design", name: "Collaborator", instagram: "#" },
      { role: "Set Design", name: "Collaborator", instagram: "#" },
    ],
    media: {
      videoUrl: "https://player.vimeo.com/video/148751763",
      audioUrl: "",
      photos: [artwork2, artwork3, artwork4, artwork1],
    },
  },
  {
    id: "sky",
    title: "SKY",
    medium: "Film Score + Visuals",
    year: 2025,
    description: "The vertical axis of consciousness. A score composed under open sky — for everything that reaches upward.",
    longDescription:
      "SKY emerges from the ótomundi practice of working under the sun and the full moon as a form of reception — welcoming creative intelligence through sustained presence in the open. The score was composed during extended meditative sessions in open terrain, gathering the acoustic textures of air, altitude, and silence. The visual material layers long-exposure photography with processed atmospheric data to construct a moving image of vertical consciousness: what it means to look upward and feel both infinitely small and cosmically held. SKY is a devotion to the sky as spiritual teacher.",
    image: artwork3,
    credits: [
      { role: "Direction & Composition", name: "óto", instagram: "https://instagram.com/otomundi" },
      { role: "Cinematography", name: "Collaborator", instagram: "#" },
      { role: "Photography", name: "Collaborator", instagram: "#" },
    ],
    media: {
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      audioUrl: "",
      photos: [artwork3, artwork4, artwork1, artwork2],
    },
  },
  {
    id: "desnudo",
    title: "DESNUDO",
    medium: "Audiovisual Performance",
    year: 2024,
    description: "A ceremony of undoing. The body as altar — stripped of ornament and returned to its original radiance.",
    longDescription:
      "DESNUDO is an audiovisual performance that investigates the act of stripping away — layers of cultural conditioning, inherited identity, material armour. Drawing from the ótomundi practice of prolonged meditation and ancestral spirituality, the work creates a ritual space where vulnerability becomes clarity. Sound and image work together to dissolve the self-loathing ego and reveal what remains beneath: a consciousness radiant, undecorated, and whole. DESNUDO is both act and offering — a surrender to the intelligence that precedes language.",
    image: artwork1,
    credits: [
      { role: "Direction & Music", name: "óto", instagram: "https://instagram.com/otomundi" },
      { role: "Visuals & Editing", name: "Collaborator", instagram: "#" },
      { role: "Performance", name: "Collaborator", instagram: "#" },
    ],
    media: {
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      audioUrl: "",
      photos: [artwork1, artwork2, artwork3, artwork4],
    },
  },
];
