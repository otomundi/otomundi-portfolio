import { motion } from "framer-motion";
import { SiInstagram, SiX, SiVimeo, SiSoundcloud } from "react-icons/si";

const socialLinks = [
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: SiX, href: "#", label: "X" },
  { icon: SiVimeo, href: "#", label: "Vimeo" },
  { icon: SiSoundcloud, href: "#", label: "SoundCloud" },
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
              style={{ color: "rgba(245,244,242,0.4)" }}
            >
              Creative Circle
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
              className="mt-6 font-extralight max-w-md"
              style={{
                fontSize: "clamp(0.75rem, 1.1vw, 0.95rem)",
                lineHeight: 1.7,
                color: "rgba(245,244,242,0.38)",
                letterSpacing: "0.03em",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Music, fashion, audiovisuals, and painting — in service of the spiritual nature.
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
                style={{ color: "rgba(245,244,242,0.30)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,244,242,0.80)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,244,242,0.30)")}
                data-testid={`link-social-landing-${label.toLowerCase()}`}
              >
                <Icon size={13} />
              </a>
            ))}
          </div>

          <a
            href="/works"
            className="flex items-center gap-3 group cursor-crosshair"
          >
            <span
              className="text-[9px] tracking-[0.4em] uppercase transition-colors duration-300"
              style={{ color: "rgba(245,244,242,0.30)" }}
            >
              Works
            </span>
            <span
              className="block h-px transition-all duration-300"
              style={{ width: "24px", background: "rgba(245,244,242,0.25)" }}
            />
          </a>
        </motion.div>
      </div>
    </main>
  );
}
