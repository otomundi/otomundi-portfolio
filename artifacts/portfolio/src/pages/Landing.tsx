import { motion } from "framer-motion";
import { SiInstagram, SiYoutube, SiSoundcloud, SiSpotify } from "react-icons/si";

const GOTHIC = "'Cinzel', Georgia, serif";

const socialLinks = [
  { icon: SiInstagram, href: "https://instagram.com/otomundi", label: "Instagram" },
  { icon: SiYoutube, href: "https://www.youtube.com/@otomundi", label: "YouTube" },
  { icon: SiSoundcloud, href: "https://soundcloud.com/otomundi", label: "SoundCloud" },
  { icon: SiSpotify, href: "https://open.spotify.com/artist/1Pr9r0RYuRgh971UdzxSpe", label: "Spotify" },
];

export default function Landing() {
  return (
    <main
      className="relative flex flex-col"
      style={{ minHeight: "100svh", background: "#730623" }}
      data-testid="page-landing"
    >
      <div className="grain-overlay" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(0,0,0,0.45) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(0,0,0,0.25) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 flex flex-col flex-1" style={{ minHeight: "100svh" }}>
        <div className="flex-1 flex flex-col items-start justify-end px-6 md:px-12 pb-10 md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <p
              className="mb-7"
              style={{
                fontFamily: GOTHIC,
                fontSize: "8px",
                letterSpacing: "0.55em",
                textTransform: "uppercase",
                color: "rgba(245,244,242,0.32)",
                fontWeight: 400,
              }}
            >
              Creative World
            </p>

            <h1
              style={{
                fontFamily: GOTHIC,
                fontSize: "clamp(3.2rem, 10.5vw, 10.5rem)",
                letterSpacing: "0.04em",
                color: "#f5f4f2",
                lineHeight: 0.9,
                fontWeight: 400,
                textTransform: "lowercase",
              }}
              data-testid="text-artist-name"
            >
              ótomundi
            </h1>

            <motion.p
              className="mt-6 italic"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(0.78rem, 1.1vw, 1rem)",
                letterSpacing: "0.08em",
                color: "rgba(245,244,242,0.30)",
                fontWeight: 300,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1.2 }}
            >
              music, fashion, audiovisuals, and painting
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="flex items-center justify-between px-6 md:px-12 py-6"
          style={{ borderTop: "1px solid rgba(245,244,242,0.08)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.9 }}
        >
          <div className="flex items-center gap-7">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-all duration-300 cursor-crosshair"
                style={{ color: "rgba(245,244,242,0.25)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,244,242,0.80)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,244,242,0.25)")}
                data-testid={`link-social-landing-${label.toLowerCase()}`}
              >
                <Icon size={12} />
              </a>
            ))}
          </div>

          <a href="/works" className="flex items-center gap-3 cursor-crosshair">
            <span
              style={{
                fontFamily: GOTHIC,
                fontSize: "8px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "rgba(245,244,242,0.25)",
                fontWeight: 400,
              }}
            >
              Works
            </span>
            <span
              className="block h-px"
              style={{ width: "22px", background: "rgba(245,244,242,0.18)" }}
            />
          </a>
        </motion.div>
      </div>
    </main>
  );
}
