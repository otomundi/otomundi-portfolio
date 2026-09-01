import { motion } from "framer-motion";
import { Link } from "wouter";
import { projects as works } from "@/data/projects";
import landingPortrait from "@/assets/images/pages/home/landing-portrait.jpg";
import SEO from "@/components/SEO/SEO";

const GOTHIC = "'Cinzel', Georgia, serif";
const CORMORANT = "'Cormorant Garamond', Georgia, serif";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/otomundi" },
  { label: "YouTube", href: "https://www.youtube.com/@otomundi" },
  { label: "SoundCloud", href: "https://soundcloud.com/otomundi" },
  { label: "Spotify", href: "https://open.spotify.com/artist/1Pr9r0RYuRgh971UdzxSpe" },
];

const latestWork = works[0];

export default function Home() {
  return (
    <>
      <SEO title="ótomundi" description="Interdisciplinary artist, creative director, and music producer." url="/" />
      <main
        className="landing-page relative flex flex-col"
        style={{ background: "#730623" }}
        data-testid="page-landing"
      >
      <div className="grain-overlay" />

      {/* Depth gradient — three layers for more dimensional field */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 15% 90%, rgba(0,0,0,0.65) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 85% 10%, rgba(0,0,0,0.40) 0%, transparent 45%), " +
            "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Latest work — floating right panel, desktop only */}
      <motion.div
        className="absolute hidden md:block"
        style={{ right: "7%", top: "12%", width: "clamp(160px, 18vw, 280px)", zIndex: 20 }}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1.1, ease: "easeOut" }}
        data-testid="latest-work-cta-desktop"
      >
        <Link href={`/works/${latestWork.id}`}>
          <div className="group cursor-crosshair">
            {/* Label row — rule + text */}
            <div className="flex items-center mb-3" style={{ gap: "10px" }}>
              <div
                style={{
                  width: "18px",
                  height: "1px",
                  background: "rgba(245,244,242,0.20)",
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontFamily: GOTHIC,
                  fontSize: "7px",
                  letterSpacing: "0.58em",
                  textTransform: "uppercase",
                  color: "rgba(245,244,242,0.22)",
                  fontWeight: 400,
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                Latest Work
              </p>
            </div>

            {/* Image — framed with thin border */}
            <div
              className="relative transition-transform duration-700 group-hover:scale-[1.01]"
              style={{ border: "1px solid rgba(245,244,242,0.10)" }}
            >
              <img
                src={latestWork.image}
                alt={latestWork.title}
                className="w-full block"
                data-testid="img-latest-work"
              />
              {/* Very subtle bottom fade — softens the cut */}
              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                  height: "28%",
                  background: "linear-gradient(to top, rgba(115,6,35,0.25) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Metadata */}
            <div className="mt-3">
              <p
                style={{
                  fontFamily: GOTHIC,
                  fontSize: "clamp(0.85rem, 1.3vw, 1.2rem)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(245,244,242,0.86)",
                  fontWeight: 400,
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                {latestWork.title}
              </p>
              <p
                className="mt-1"
                style={{
                  fontFamily: GOTHIC,
                  fontSize: "7px",
                  letterSpacing: "0.30em",
                  textTransform: "uppercase",
                  color: "rgba(245,244,242,0.32)",
                  fontWeight: 400,
                  margin: "5px 0 0",
                }}
              >
                {latestWork.releaseDate}
              </p>

              {/* View work — rule + label */}
              <div className="flex items-center mt-3" style={{ gap: "8px" }}>
                <div
                  style={{
                    height: "1px",
                    width: "20px",
                    background: "rgba(245,244,242,0.22)",
                    flexShrink: 0,
                    transition: "width 0.4s ease",
                  }}
                  className="group-hover:w-8"
                />
                <p
                  style={{
                    fontFamily: GOTHIC,
                    fontSize: "7px",
                    letterSpacing: "0.45em",
                    textTransform: "uppercase",
                    color: "rgba(245,244,242,0.28)",
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  View work
                </p>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      <div className="landing-page-inner relative z-10 flex flex-col flex-1">
        <div className="flex-1 flex flex-col items-start justify-end px-6 md:px-12 pb-10 md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Portrait — above the name, links to Bio */}
            <Link href="/bio">
              <motion.div
                className="relative mb-8 cursor-crosshair"
                style={{ width: "clamp(220px, 28vw, 420px)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1.6, ease: "easeOut" }}
                whileHover={{ scale: 1.04 }}
              >
                <img
                  src={landingPortrait}
                  alt="ótomundi"
                  style={{ width: "100%", display: "block" }}
                  data-testid="img-landing-portrait"
                />
              </motion.div>
            </Link>

            <h1
              style={{
                fontFamily: GOTHIC,
                fontSize: "clamp(3.2rem, 10.5vw, 10.5rem)",
                letterSpacing: "0.04em",
                color: "#f5f4f2",
                lineHeight: 0.9,
                fontWeight: 400,
                textTransform: "lowercase",
                textShadow: "0 4px 48px rgba(0,0,0,0.45)",
              }}
              data-testid="text-artist-name"
            >
              ótomundi
            </h1>

            <motion.p
              className="mt-6 italic"
              style={{
                fontFamily: CORMORANT,
                fontSize: "clamp(0.78rem, 1.05vw, 0.95rem)",
                letterSpacing: "0.10em",
                color: "rgba(245,244,242,0.32)",
                fontWeight: 300,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1.2 }}
            >
              creative director, audiovisual artist, and music producer
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
                    style={{ width: "72px" }}
                  >
                    <img
                      src={latestWork.image}
                      alt={latestWork.title}
                      className="w-full block"
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
                      {latestWork.releaseDate}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer bar */}
        <motion.div
          className="flex items-center justify-between px-6 md:px-12 py-5"
          style={{ borderTop: "1px solid rgba(245,244,242,0.09)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.9 }}
        >
          {/* Social — text labels */}
          <div className="flex items-center" style={{ gap: "22px" }}>
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="cursor-crosshair transition-all duration-300"
                style={{ color: "rgba(245,244,242,0.28)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,244,242,0.70)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,244,242,0.28)")}
                data-testid={`link-social-landing-${label.toLowerCase()}`}
              >
                <span
                  style={{
                    fontFamily: GOTHIC,
                    fontSize: "7px",
                    letterSpacing: "0.40em",
                    textTransform: "uppercase",
                    fontWeight: 400,
                  }}
                >
                  {label}
                </span>
              </a>
            ))}
          </div>

          {/* Works link */}
          <a
            href="/works"
            className="flex items-center cursor-crosshair"
            style={{ gap: "10px" }}
          >
            <span
              style={{
                fontFamily: GOTHIC,
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "rgba(245,244,242,0.28)",
                fontWeight: 400,
              }}
            >
              Works
            </span>
            <span
              className="block h-px"
              style={{ width: "28px", background: "rgba(245,244,242,0.20)" }}
            />
          </a>
        </motion.div>
      </div>
      </main>
    </>
  );
}
