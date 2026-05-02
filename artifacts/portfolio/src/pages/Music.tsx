import { motion } from "framer-motion";
import {
  SiSpotify,
  SiApplemusic,
  SiSoundcloud,
  SiBandcamp,
  SiYoutubemusic,
} from "react-icons/si";

const platforms = [
  {
    name: "Spotify",
    icon: SiSpotify,
    href: "#",
    color: "#1DB954",
    description: "Stream on Spotify",
  },
  {
    name: "Apple Music",
    icon: SiApplemusic,
    href: "#",
    color: "#fc3c44",
    description: "Listen on Apple Music",
  },
  {
    name: "SoundCloud",
    icon: SiSoundcloud,
    href: "#",
    color: "#ff5500",
    description: "Play on SoundCloud",
  },
  {
    name: "Bandcamp",
    icon: SiBandcamp,
    href: "#",
    color: "#1da0c3",
    description: "Buy on Bandcamp",
  },
  {
    name: "YouTube Music",
    icon: SiYoutubemusic,
    href: "#",
    color: "#ff0000",
    description: "Watch on YouTube Music",
  },
];

export default function Music() {
  return (
    <main className="min-h-screen bg-void relative pt-28 pb-20 px-6" data-testid="page-music">
      <div className="grain-overlay" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-[9px] tracking-[0.5em] uppercase mb-3"
            style={{ color: "rgba(245,244,242,0.25)" }}
          >
            Discography
          </p>
          <h1
            className="text-4xl font-extralight tracking-[0.08em] uppercase mb-6"
            style={{ color: "#f5f4f2" }}
          >
            Music
          </h1>
          <p
            className="text-sm font-light leading-relaxed max-w-md"
            style={{ color: "rgba(245,244,242,0.35)" }}
          >
            Recordings, live captures, and compositions available across all major platforms.
            Each release is an extension of the audiovisual practice into pure sound.
          </p>
        </motion.div>

        <div
          className="space-y-px"
          data-testid="streaming-platforms-list"
        >
          {platforms.map((platform, i) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 py-6 cursor-crosshair"
                style={{ borderBottom: "1px solid rgba(245,244,242,0.06)" }}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                data-testid={`link-platform-${platform.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${platform.color}18`,
                    border: `1px solid ${platform.color}30`,
                  }}
                >
                  <Icon
                    size={20}
                    style={{ color: platform.color, opacity: 0.7 }}
                    className="group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <div className="flex-1">
                  <div
                    className="text-sm tracking-[0.12em] uppercase transition-colors duration-300"
                    style={{ color: "rgba(245,244,242,0.6)" }}
                  >
                    {platform.name}
                  </div>
                  <div
                    className="text-xs mt-0.5 font-light tracking-wide"
                    style={{ color: "rgba(245,244,242,0.25)" }}
                  >
                    {platform.description}
                  </div>
                </div>

                <div
                  className="text-xs tracking-widest transition-colors duration-300"
                  style={{ color: "rgba(245,244,242,0.15)" }}
                >
                  →
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="mt-20 pt-12"
          style={{ borderTop: "1px solid rgba(245,244,242,0.05)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p
            className="text-[9px] tracking-[0.4em] uppercase text-center"
            style={{ color: "rgba(245,244,242,0.20)" }}
          >
            Physical releases and limited editions available via direct inquiry
          </p>
        </motion.div>
      </div>
    </main>
  );
}
