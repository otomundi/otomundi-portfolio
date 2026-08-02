import euvimArtwork from "@/assets/images/EUVIM_ARTWORK.jpg";
import skyArtwork from "@/assets/images/SKY_ARTWORK.png";
import tigreArtwork from "@/assets/images/TIGRE_ARTWORK.JPG";
import desnudoArtwork from "@/assets/images/DESNUDO_ARTWORK.jpg";

import euvimGallery1 from "@/assets/images/EUVIM_GALLERY_1.jpg";
import euvimGallery2 from "@/assets/images/EUVIM_GALLERY_2.jpg";
import euvimGallery3 from "@/assets/images/EUVIM_GALLERY_3.jpg";
import euvimGallery4 from "@/assets/images/EUVIM_GALLERY_4.jpg";
import euvimGallery5 from "@/assets/images/EUVIM_GALLERY_5.jpg";
import euvimGallery6 from "@/assets/images/EUVIM_GALLERY_6.jpg";
import euvimGallery7 from "@/assets/images/EUVIM_GALLERY_7.jpg";
import euvimGallery8 from "@/assets/images/EUVIM_GALLERY_8.jpg";
import euvimGallery9 from "@/assets/images/EUVIM_GALLERY_9.jpg";
import euvimGallery10 from "@/assets/images/EUVIM_GALLERY_10.jpg";
import euvimGallery11 from "@/assets/images/EUVIM_GALLERY_11.jpg";

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
  artist: string;
  medium: string;
  format: string;
  duration: string;
  year: number;
  location: string;
  language: string;
  genre: string;
  releaseDate: string;
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
    artist: "ótomundi",
    medium: "music, audiovisual film, photographic series",
    format: "music, audiovisual film, photographic series",
    duration: "4'15 song, film, 11 photographs",
    year: 2026,
    location: "Barcelona",
    language: "portuguese",
    genre: "industrial funk",
    releaseDate: "May 11, 2026",
    description: "I came, she felt the whole world through me, and we became witnesses to the obsessive games of love.",
    longDescription: "",
    image: euvimArtwork,
    credits: [
      { role: "creative director & artist", name: "ótomundi", instagram: "https://instagram.com/otomundi" },
      { role: "cinematographer", name: "Fuad Koosta", instagram: "#" },
      { role: "director & editor", name: "Pili Mariño", instagram: "#" },
      { role: "photographer", name: "Jan Waffle", instagram: "#" },
      { role: "sound engineer", name: "Alberto Perez", instagram: "#" },
      { role: "trombonist", name: "Kaleb Summers", instagram: "#" },
      { role: "1st AC", name: "Kwame Carlos", instagram: "#" },
      { role: "gaffer", name: "David Arosa", instagram: "#" },
      { role: "spark", name: "Llorenç Florensa", instagram: "#" },
      { role: "AD", name: "Andoni Fernandez", instagram: "#" },
      { role: "set designers", name: "Anna Bociai, Luna Josso", instagram: "#" },
      { role: "costume designer", name: "Viktra Studio", instagram: "#" },
      { role: "hair & make-up artist", name: "Brissa Fernandez", instagram: "#" },
      { role: "cast", name: "Piel Mixta, Vanessa Ries, India Gavroy, Olaia Aguilar", instagram: "#" },
    ],
    media: {
      videoUrl: "https://www.youtube.com/embed/METIanuhyA8",
      audioUrl: "",
      photos: [
        euvimGallery1, euvimGallery2, euvimGallery3, euvimGallery4,
        euvimGallery5, euvimGallery6, euvimGallery7, euvimGallery8,
        euvimGallery9, euvimGallery10, euvimGallery11,
      ],
    },
  },
  {
    id: "sky",
    title: "SKY",
    artist: "ótomundi, Ilya Havok",
    medium: "music, photographic series",
    format: "music, photographic series",
    duration: "4'04 song, 11 photographs",
    year: 2025,
    location: "Luanda, Barcelona",
    language: "portuguese",
    genre: "experimental rap",
    releaseDate: "July 16, 2025",
    description: "A love letter from the gothic underworld, sent to a mythical lover that resides above the realm of mortals.",
    longDescription: "",
    image: skyArtwork,
    credits: [
      { role: "creative director & artist", name: "ótomundi", instagram: "https://instagram.com/otomundi" },
      { role: "photographer", name: "David Ayllón", instagram: "#" },
      { role: "songwriter", name: "Ilya Havok", instagram: "#" },
      { role: "sound engineer", name: "Marcos Reolid", instagram: "#" },
      { role: "special appearance", name: "Jodie Chin", instagram: "#" },
    ],
    media: {
      videoUrl: "https://www.youtube.com/embed/HZM56dheEHs",
      audioUrl: "",
      photos: [],
    },
  },
  {
    id: "tigre",
    title: "TIGRE",
    artist: "ótomundi",
    medium: "music EP, audiovisual film",
    format: "music EP, audiovisual film",
    duration: "3 songs, 3'25 film",
    year: 2025,
    location: "Berguedà, Barcelona",
    language: "portuguese, english",
    genre: "experimental rap",
    releaseDate: "March 9, 2025",
    description: "To run away from desire, while realizing that one is the predator who can't live without it.",
    longDescription: "",
    image: tigreArtwork,
    credits: [
      { role: "artist, producer & creative director", name: "ótomundi", instagram: "https://instagram.com/otomundi" },
      { role: "direction", name: "STICK", instagram: "#" },
      { role: "cinematographer", name: "Fuad Kosta", instagram: "#" },
      { role: "art direction", name: "Amaia Ajuria", instagram: "#" },
      { role: "editor", name: "Ruben Arbide", instagram: "#" },
      { role: "assistant editor", name: "Kaiser", instagram: "#" },
      { role: "hair & make-up artist", name: "Laia Grau", instagram: "#" },
      { role: "sound engineer", name: "Marcos Reolid", instagram: "#" },
      { role: "graphic artist", name: "María Abadía", instagram: "#" },
      { role: "cast", name: "Ela Duas, Noa Najas, Aloïs Pesquer, Edward Long", instagram: "#" },
    ],
    media: {
      videoUrl: "https://www.youtube.com/embed/euLedOnGzwo",
      audioUrl: "",
      photos: [],
    },
  },
  {
    id: "desnudo",
    title: "DESNUDO",
    artist: "ótomundi, DJ Troublesome",
    medium: "music EP, photographic series",
    format: "music EP, photographic series",
    duration: "3 songs, 4 photos",
    year: 2024,
    location: "Barcelona",
    language: "portuguese, english",
    genre: "industrial soul, electronic",
    releaseDate: "April 8, 2024",
    description: "An emotional confession, from a youth who learned to see the world from eyes beyond his ego.",
    longDescription: "",
    image: desnudoArtwork,
    credits: [
      { role: "artist, creative director", name: "ótomundi", instagram: "https://instagram.com/otomundi" },
      { role: "photographer", name: "Pablo De Pastors", instagram: "#" },
      { role: "mixing engineer & composer", name: "DJ Troublesome", instagram: "#" },
      { role: "mastering engineer", name: "Marcos Reolid", instagram: "#" },
    ],
    media: {
      videoUrl: "https://www.youtube.com/embed/videoseries?list=PLzyNg9S9XibS3smyQCnJdV2mmGPcJrFOr",
      audioUrl: "",
      photos: [],
    },
  },
];
