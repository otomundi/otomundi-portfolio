import { motion } from "framer-motion";
import { SiInstagram, SiYoutube, SiSoundcloud, SiSpotify } from "react-icons/si";

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

      <div className="relative z-10 flex flex-col flex-1" style={{ minHeight: "100svh" }}>
        <div className="flex-1 flex flex-col items-start justify-end px-6 md:px-12 pb-10 md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p
              className="text-[9px] tracking-[0.5em] uppercase mb-6"
              style={{ color: "rgba(245,244,242,0.38)" }}
            >
              Creative World
            </p>
            <h1
              className="font-extralight lowercase leading-none"
              style={{
                fontSize: "clamp(3.5rem, 11vw, 11rem)",
                letterSpacing: "-0.02em",
                color: "#f5f4f2",
                lineHeight: 0.88,
              }}
              data-testid="text-artist-name"
            >
              ótomundi
            </h1>
            <motion.p
              className="mt-5 font-extralight whitespace-nowrap"
              style={{
                fontSize: "clamp(0.72rem, 1vw, 0.9rem)",
                letterSpacing: "0.12em",
                color: "rgba(245,244,242,0.32)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              music, fashion, audiovisuals, and painting
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="flex items-center justify-between px-6 md:px-12 py-6"
          style={{ borderTop: "1px solid rgba(245,244,242,0.10)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
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
                style={{ color: "rgba(245,244,242,0.28)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,244,242,0.85)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,244,242,0.28)")}
                data-testid={`link-social-landing-${label.toLowerCase()}`}
              >
                <Icon size={13} />
              </a>
            ))}
          </div>

          <a href="/works" className="flex items-center gap-3 cursor-crosshair">
            <span
              className="text-[9px] tracking-[0.4em] uppercase"
              style={{ color: "rgba(245,244,242,0.28)" }}
            >
              Works
            </span>
            <span
              className="block h-px"
              style={{ width: "24px", background: "rgba(245,244,242,0.22)" }}
            />
          </a>
        </motion.div>
      </div>
    </main>
  );
}
