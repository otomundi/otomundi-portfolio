import { motion } from "framer-motion";
import { SiSpotify, SiApplemusic, SiSoundcloud, SiYoutube } from "react-icons/si";

const GOTHIC = "'Cinzel', Georgia, serif";
const CRIMSON = "#a81a2e";
const dim = (a: number) => `rgba(245,244,242,${a})`;

const platforms = [
  {
    name: "YouTube",
    icon: SiYoutube,
    href: "https://www.youtube.com/@otomundi",
    color: "#FF0000",
    description: "Watch on YouTube",
  },
  {
    name: "Spotify",
    icon: SiSpotify,
    href: "https://open.spotify.com/artist/1Pr9r0RYuRgh971UdzxSpe",
    color: "#1DB954",
    description: "Stream on Spotify",
  },
  {
    name: "Apple Music",
    icon: SiApplemusic,
    href: "https://music.apple.com/es/artist/%C3%B3tomundi/1739394893",
    color: "#fc3c44",
    description: "Listen on Apple Music",
  },
  {
    name: "SoundCloud",
    icon: SiSoundcloud,
    href: "https://soundcloud.com/otomundi",
    color: "#ff5500",
    description: "Play on SoundCloud",
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
            style={{
              fontFamily: GOTHIC,
              fontSize: "8px",
              letterSpacing: "0.55em",
              textTransform: "uppercase",
              color: dim(0.20),
              fontWeight: 400,
              marginBottom: "0.75rem",
            }}
          >
            Discography
          </p>
          <h1
            className="mb-8"
            style={{
              fontFamily: GOTHIC,
              fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: CRIMSON,
              fontWeight: 400,
            }}
          >
            Music
          </h1>
          <p
            className="italic"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)",
              lineHeight: 1.75,
              color: dim(0.38),
              fontWeight: 300,
              maxWidth: "42ch",
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
                transition={{ delay: i * 0.09, duration: 0.6 }}
                data-testid={`link-platform-${platform.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${platform.color}15`,
                    border: `1px solid ${platform.color}25`,
                  }}
                >
                  <Icon
                    size={17}
                    style={{ color: platform.color, opacity: 0.6 }}
                    className="group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="flex-1">
                  <div
                    style={{
                      fontFamily: GOTHIC,
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: dim(0.50),
                      fontWeight: 400,
                    }}
                  >
                    {platform.name}
                  </div>
                  <div
                    className="mt-0.5"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "0.82rem",
                      color: dim(0.22),
                      fontStyle: "italic",
                    }}
                  >
                    {platform.description}
                  </div>
                </div>
                <div style={{ fontSize: "11px", color: dim(0.16) }}>→</div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
