import { motion } from "framer-motion";
import {
  SiSpotify,
  SiApplemusic,
  SiSoundcloud,
  SiBandcamp,
  SiYoutubemusic,
} from "react-icons/si";

const dim = (a: number) => `rgba(245,244,242,${a})`;

const platforms = [
  { name: "Spotify", icon: SiSpotify, href: "#", color: "#1DB954", description: "Stream on Spotify" },
  { name: "Apple Music", icon: SiApplemusic, href: "#", color: "#fc3c44", description: "Listen on Apple Music" },
  { name: "SoundCloud", icon: SiSoundcloud, href: "#", color: "#ff5500", description: "Play on SoundCloud" },
  { name: "Bandcamp", icon: SiBandcamp, href: "#", color: "#1da0c3", description: "Buy on Bandcamp" },
  { name: "YouTube Music", icon: SiYoutubemusic, href: "#", color: "#ff0000", description: "Watch on YouTube" },
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
            style={{ color: dim(0.22) }}
          >
            Discography
          </p>
          <h1
            className="text-4xl font-extralight tracking-[0.08em] uppercase mb-8"
            style={{ color: "#f5f4f2" }}
          >
            Music
          </h1>
          <p
            className="font-extralight leading-relaxed max-w-lg"
            style={{
              fontSize: "clamp(0.88rem, 1.3vw, 1.1rem)",
              lineHeight: 1.75,
              color: dim(0.38),
            }}
          >
            Sound is the first language of ótomundi's practice — the carrier of ancestral frequency, instinct, and spiritual presence. Recordings move between composition and ritual, between the made and the received.
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
                className="group flex items-center gap-6 py-6 cursor-crosshair"
                style={{ borderBottom: `1px solid ${dim(0.05)}` }}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                data-testid={`link-platform-${platform.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${platform.color}18`,
                    border: `1px solid ${platform.color}28`,
                  }}
                >
                  <Icon
                    size={18}
                    style={{ color: platform.color, opacity: 0.65 }}
                    className="group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="flex-1">
                  <div
                    className="text-sm tracking-[0.12em] uppercase font-light transition-colors duration-300"
                    style={{ color: dim(0.55) }}
                  >
                    {platform.name}
                  </div>
                  <div
                    className="text-xs mt-0.5 font-light"
                    style={{ color: dim(0.22) }}
                  >
                    {platform.description}
                  </div>
                </div>
                <div
                  className="text-xs tracking-widest transition-colors duration-300"
                  style={{ color: dim(0.14) }}
                >
                  →
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="mt-20 pt-12"
          style={{ borderTop: `1px solid ${dim(0.05)}` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p
            className="font-extralight italic leading-relaxed"
            style={{
              fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
              color: dim(0.20),
              maxWidth: "42ch",
            }}
          >
            Physical releases and limited editions available via direct inquiry. Each object is conceived as an extension of the spiritual work it carries.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
