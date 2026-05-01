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
          <p className="text-[9px] tracking-[0.5em] uppercase text-white/25 mb-3">Discography</p>
          <h1 className="text-4xl font-extralight tracking-[0.08em] uppercase text-white/90 mb-6">
            Music
          </h1>
          <p className="text-sm text-white/35 font-light leading-relaxed max-w-md">
            Recordings, live captures, and compositions available across all major platforms.
            Each release is an extension of the audiovisual practice into pure sound.
          </p>
        </motion.div>

        <div className="space-y-px" data-testid="streaming-platforms-list">
          {platforms.map((platform, i) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 py-6 border-b border-white/5 last:border-0 cursor-crosshair"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                data-testid={`link-platform-${platform.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0 transition-all duration-400 group-hover:scale-110"
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
                  <div className="text-sm tracking-[0.12em] uppercase text-white/60 group-hover:text-white/90 transition-colors duration-300">
                    {platform.name}
                  </div>
                  <div className="text-xs text-white/25 mt-0.5 font-light tracking-wide">
                    {platform.description}
                  </div>
                </div>

                <div className="text-white/15 group-hover:text-white/40 transition-colors text-xs tracking-widest">
                  →
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="mt-20 pt-12 border-t border-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-[9px] tracking-[0.4em] uppercase text-white/20 text-center">
            Physical releases and limited editions available via direct inquiry
          </p>
        </motion.div>
      </div>
    </main>
  );
}
