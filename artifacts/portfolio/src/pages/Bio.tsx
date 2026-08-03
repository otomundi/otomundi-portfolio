import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import bio1 from "@/assets/images/bio-1.jpg";
import bio2 from "@/assets/images/bio-2.jpg";
import bio3 from "@/assets/images/bio-3.jpg";

const GOTHIC = "'Cinzel', Georgia, serif";
const CORMORANT = "'Cormorant Garamond', Georgia, serif";
const dim = (a: number) => `rgba(245,244,242,${a})`;

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/otomundi" },
  { label: "YouTube", href: "https://www.youtube.com/@otomundi" },
  { label: "SoundCloud", href: "https://soundcloud.com/otomundi" },
  { label: "Spotify", href: "https://open.spotify.com/artist/1Pr9r0RYuRgh971UdzxSpe" },
];

export default function Bio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const imgFloat1Y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const imgFloat2Y = useTransform(scrollYProgress, [0, 1], [30, -40]);

  return (
    <main
      ref={containerRef}
      className="relative"
      style={{ background: "#730623" }}
      data-testid="page-bio"
    >
      <div className="grain-overlay" />

      {/* Deep shadow overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 10% 90%, rgba(0,0,0,0.55) 0%, transparent 50%), radial-gradient(ellipse at 90% 10%, rgba(0,0,0,0.30) 0%, transparent 45%)",
        }}
      />

      <div className="relative z-10 pt-28 pb-0 px-6 md:px-10">

        <motion.p
          style={{
            fontFamily: GOTHIC,
            fontSize: "8px",
            letterSpacing: "0.55em",
            textTransform: "uppercase",
            color: dim(0.22),
            fontWeight: 400,
            marginBottom: "2rem",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Biography
        </motion.p>

        {/* Title + portrait 1 */}
        <div className="relative">
          <motion.h1
            style={{
              fontFamily: GOTHIC,
              fontSize: "clamp(3.2rem, 10vw, 10rem)",
              letterSpacing: "0.06em",
              lineHeight: 0.88,
              color: "#f5f4f2",
              fontWeight: 400,
              textTransform: "lowercase",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            data-testid="text-bio-name"
          >
            ótomundi
          </motion.h1>

          {/* Bio portrait 1 — floating upper right */}
          <motion.div
            className="absolute pointer-events-none hidden md:block"
            style={{
              top: "-5%",
              right: "6%",
              width: "clamp(160px, 18vw, 280px)",
              y: imgFloat1Y,
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 1 }}
          >
            <img
              src={bio1}
              alt="óto"
              className="w-full"
              data-testid="img-bio-portrait-1"
            />
          </motion.div>
        </div>

        {/* Visual poem — stanza 1 */}
        <motion.div
          className="mt-14 md:mt-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
        >
          <p
            style={{
              fontFamily: CORMORANT,
              fontSize: "clamp(1.1rem, 2vw, 1.8rem)",
              lineHeight: 1.6,
              color: dim(0.72),
              fontWeight: 300,
            }}
            data-testid="text-bio-paragraph-1"
          >
            ótomundi (b. 2000) is an interdisciplinary artist, creative director, and crosscultural designer of Angolan and Andalusian ascendance. His works crossover worldwide music, experimental fashion, and audiovisual art.
          </p>
        </motion.div>

        {/* Stanza 2 + portrait 2 */}
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row gap-12 md:gap-0 items-start">
          <motion.div
            className="md:w-5/12 flex-shrink-0"
            style={{ y: imgFloat2Y }}
          >
            <img
              src={bio2}
              alt="óto"
              className="w-full"
              style={{ maxWidth: "clamp(200px, 26vw, 380px)" }}
              data-testid="img-bio-portrait-2"
            />
          </motion.div>

          <motion.div
            className="md:w-7/12 flex flex-col gap-10 md:pl-14 md:py-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9 }}
          >
            <p
              style={{
                fontFamily: CORMORANT,
                fontSize: "clamp(0.95rem, 1.45vw, 1.2rem)",
                lineHeight: 1.82,
                color: dim(0.50),
                fontWeight: 300,
              }}
              data-testid="text-bio-paragraph-2"
            >
              ótomundi carries a practice of intercultural semotic design, of sonic cinematic productions, and focuses on expanding conciousness through giving light to the gnosis and rituals of our ancestral heritage.
            </p>

            {/* Stanza 3 */}
            <p
              className="italic"
              style={{
                fontFamily: CORMORANT,
                fontSize: "clamp(0.9rem, 1.35vw, 1.1rem)",
                lineHeight: 1.92,
                color: dim(0.32),
                fontWeight: 300,
                letterSpacing: "0.02em",
              }}
              data-testid="text-bio-paragraph-3"
            >
              ótomundi brings us the light. the recognition of a power greater than all eyes can see.{" "}
              ótomundi give your life to the enchantment of our eternal souls. long live ótomundi.
            </p>
          </motion.div>
        </div>

      </div>

      {/* Footer bar — social + contact */}
      <motion.div
        className="flex items-center justify-between px-6 md:px-12 py-5"
        style={{ borderTop: "1px solid rgba(245,244,242,0.09)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.9 }}
      >
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

        <Link href="/contact">
          <span
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
              Contact
            </span>
            <span
              className="block h-px"
              style={{ width: "28px", background: "rgba(245,244,242,0.20)" }}
            />
          </span>
        </Link>
      </motion.div>

    </main>
  );
}
