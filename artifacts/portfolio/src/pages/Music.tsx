import { motion } from "framer-motion";
import { SiSpotify, SiApplemusic, SiSoundcloud, SiYoutube } from "react-icons/si";
import SEO from "@/components/SEO/SEO";

const GOTHIC = "'Cinzel', Georgia, serif";
const CRIMSON = "#a81a2e";
const dim = (a: number) => `rgba(245,244,242,${a})`;

const platforms = [
  {
    name: "YouTube",
    icon: SiYoutube,
    href: "https://www.youtube.com/@otomundi",
    color: "#FF0000",
    label: "Watch",
  },
  {
    name: "Spotify",
    icon: SiSpotify,
    href: "https://open.spotify.com/artist/1Pr9r0RYuRgh971UdzxSpe",
    color: "#1DB954",
    label: "Stream",
  },
  {
    name: "Apple Music",
    icon: SiApplemusic,
    href: "https://music.apple.com/es/artist/%C3%B3tomundi/1739394893",
    color: "#fc3c44",
    label: "Listen",
  },
  {
    name: "SoundCloud",
    icon: SiSoundcloud,
    href: "https://soundcloud.com/otomundi",
    color: "#ff5500",
    label: "Play",
  },
];

export default function Music() {
  return (
    <>
      <SEO title="Music" description="Listen to music by ótomundi across streaming platforms." url="/music" />
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
        </motion.div>

        <div className="space-y-3" data-testid="streaming-platforms-list">
          {platforms.map((platform, i) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 px-6 py-5 cursor-crosshair transition-all duration-300"
                style={{
                  border: `1px solid ${dim(0.08)}`,
                  background: "rgba(245,244,242,0.02)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `${platform.color}10`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${platform.color}35`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(245,244,242,0.02)";
                  (e.currentTarget as HTMLElement).style.borderColor = dim(0.08);
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.09, duration: 0.6 }}
                data-testid={`link-platform-${platform.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: `${platform.color}18`,
                    border: `1px solid ${platform.color}30`,
                  }}
                >
                  <Icon
                    size={22}
                    style={{ color: platform.color, opacity: 0.75 }}
                    className="group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <div className="flex-1">
                  <div
                    style={{
                      fontFamily: GOTHIC,
                      fontSize: "13px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: dim(0.70),
                      fontWeight: 400,
                    }}
                    className="group-hover:text-[#f5f4f2] transition-colors duration-300"
                  >
                    {platform.name}
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: GOTHIC,
                    fontSize: "8px",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: dim(0.22),
                    fontWeight: 400,
                  }}
                  className="group-hover:opacity-60 transition-opacity duration-300"
                >
                  {platform.label} →
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
      </main>
    </>
  );
}
