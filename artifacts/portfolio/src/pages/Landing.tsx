import { motion } from "framer-motion";
import { Link } from "wouter";
import { SiInstagram, SiYoutube, SiSoundcloud, SiSpotify } from "react-icons/si";
import { works } from "@/data/works";

const GOTHIC = "'Cinzel', Georgia, serif";
const CORMORANT = "'Cormorant Garamond', Georgia, serif";

const socialLinks = [
  { icon: SiInstagram, href: "https://instagram.com/otomundi", label: "Instagram" },
  { icon: SiYoutube, href: "https://www.youtube.com/@otomundi", label: "YouTube" },
  { icon: SiSoundcloud, href: "https://soundcloud.com/otomundi", label: "SoundCloud" },
  { icon: SiSpotify, href: "https://open.spotify.com/artist/1Pr9r0RYuRgh971UdzxSpe", label: "Spotify" },
];

const latestWork = works[0];

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
            "radial-gradient(ellipse at 20% 80%, rgba(0,0,0,0.50) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(0,0,0,0.30) 0%, transparent 50%)",
        }}
      />

      {/* Latest work — floating right panel, desktop only */}
      <motion.div
        className="absolute hidden md:block"
        style={{ right: "6%", top: "14%", width: "clamp(180px, 19vw, 300px)", zIndex: 20 }}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1.1, ease: "easeOut" }}
        data-testid="latest-work-cta-desktop"
      >
        <Link href={`/works/${latestWork.id}`}>
          <div className="group cursor-crosshair">
            <p
              className="mb-3"
              style={{
                fontFamily: GOTHIC,
                fontSize: "7px",
                letterSpacing: "0.55em",
                textTransform: "uppercase",
                color: "rgba(245,244,242,0.22)",
                fontWeight: 400,
              }}
            >
              Latest Work
            </p>

            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <img
                src={latestWork.image}
                alt={latestWork.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "brightness(0.50) contrast(1.15) saturate(0.60)" }}
                data-testid="img-latest-work"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,2,4,0.85) 0%, transparent 50%), linear-gradient(to bottom, rgba(10,2,4,0.3) 0%, transparent 30%)",
                }}
              />
              {/* Red bleed on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "rgba(115,6,35,0.22)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div
                  className="mb-2 transition-all duration-500 group-hover:w-8"
                  style={{ width: "16px", height: "1px", background: "rgba(245,244,242,0.30)" }}
                />
                <p
                  style={{
                    fontFamily: GOTHIC,
                    fontSize: "clamp(0.9rem, 1.4vw, 1.3rem)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(245,244,242,0.82)",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  {latestWork.title}
                </p>
                <p
                  className="mt-1"
                  style={{
                    fontFamily: GOTHIC,
                    fontSize: "7px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "rgba(245,244,242,0.32)",
                    fontWeight: 400,
                  }}
                >
                  {latestWork.year}
                </p>
              </div>
            </div>

            <p
              className="mt-3"
              style={{
                fontFamily: GOTHIC,
                fontSize: "7px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "rgba(245,244,242,0.20)",
                fontWeight: 400,
              }}
            >
              View work →
            </p>
          </div>
        </Link>
      </motion.div>

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
                fontFamily: CORMORANT,
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

            {/* Latest work — mobile inline block */}
            <motion.div
              className="block md:hidden mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              data-testid="latest-work-cta-mobile"
            >
              <Link href={`/works/${latestWork.id}`}>
                <div className="group cursor-crosshair flex items-center gap-5">
                  <div
                    className="relative overflow-hidden flex-shrink-0"
                    style={{ width: "72px", height: "96px" }}
                  >
                    <img
                      src={latestWork.image}
                      alt={latestWork.title}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                      style={{ filter: "brightness(0.50) contrast(1.1) saturate(0.55)" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(10,2,4,0.75) 0%, transparent 55%)" }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: GOTHIC,
                        fontSize: "7px",
                        letterSpacing: "0.5em",
                        textTransform: "uppercase",
                        color: "rgba(245,244,242,0.22)",
                        fontWeight: 400,
                        marginBottom: "0.4rem",
                      }}
                    >
                      Latest Work
                    </p>
                    <p
                      style={{
                        fontFamily: GOTHIC,
                        fontSize: "1.05rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(245,244,242,0.78)",
                        fontWeight: 400,
                        lineHeight: 1,
                      }}
                    >
                      {latestWork.title}
                    </p>
                    <p
                      className="mt-1"
                      style={{
                        fontFamily: GOTHIC,
                        fontSize: "7px",
                        letterSpacing: "0.35em",
                        textTransform: "uppercase",
                        color: "rgba(245,244,242,0.28)",
                        fontWeight: 400,
                      }}
                    >
                      {latestWork.year} →
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="flex items-center justify-between px-6 md:px-12 py-6"
          style={{ borderTop: "1px solid rgba(245,244,242,0.08)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.9 }}
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
