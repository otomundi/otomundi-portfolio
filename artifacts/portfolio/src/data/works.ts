import artwork1 from "@/assets/images/artwork-1.png";
import artwork2 from "@/assets/images/artwork-2.png";
import artwork3 from "@/assets/images/artwork-3.png";
import artwork4 from "@/assets/images/artwork-4.png";

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
  media: WorkMedia;
}

export const works: Work[] = [
  {
    id: "desnudo",
    title: "DESNUDO",
    medium: "Audiovisual Performance",
    year: 2024,
    description: "Exposure as form. Sound stripped bare, image left without cover.",
    longDescription:
      "DESNUDO explores vulnerability as an artistic and sonic condition. Working without masks — no processing, no concealment — the work presents the unfiltered signal of body, space, and sound in close relation. Each iteration is a live act of undoing, where the materials reveal their own structure through their absence of ornamentation.",
    image: artwork1,
    media: {
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      audioUrl: "",
      photos: [artwork1, artwork2, artwork3, artwork4],
    },
  },
  {
    id: "tigre",
    title: "TIGRE",
    medium: "Immersive Installation",
    year: 2025,
    description: "Predator frequencies. A territory marked in sound and image.",
    longDescription:
      "TIGRE is an immersive installation that maps territorial behavior through spatial audio and shifting light environments. Drawing from field recordings collected across six countries, the work constructs an invisible landscape of dominance, threat, and coexistence. Audiences navigate the space as both observer and observed.",
    image: artwork2,
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
    description: "Upward pressure. The weight of open space translated into sound.",
    longDescription:
      "SKY began as a commission for a documentary on atmospheric science and became a meditation on altitude, scale, and the irreducibility of open space. The score was composed entirely from recordings made above 3,000 metres. The visual work layers meteorological data, satellite imagery, and long-exposure photography into a moving palimpsest.",
    image: artwork3,
    media: {
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      audioUrl: "",
      photos: [artwork3, artwork4, artwork1, artwork2],
    },
  },
  {
    id: "euvim",
    title: "EUVIM",
    medium: "Live A/V Performance",
    year: 2026,
    description: "I saw. A first-person reckoning with presence and its aftermath.",
    longDescription:
      "EUVIM — 'I saw' in Portuguese — is a live audiovisual performance built around the act of witness. The work investigates what it means to have been present at a moment, and how memory rewrites event into archive. Built from personal recordings, the piece moves between documentary and abstraction, language and noise, the seen and the unseen.",
    image: artwork4,
    media: {
      videoUrl: "https://player.vimeo.com/video/148751763",
      audioUrl: "",
      photos: [artwork4, artwork1, artwork2, artwork3],
    },
  },
];
