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
        <div className="flex-1 flex flex-col items-start justify-end px-6 md:px-12 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p
              className="text-[9px] tracking-[0.5em] uppercase mb-6"
              style={{ color: "rgba(245,244,242,0.45)" }}
            >
              Audiovisual Artist
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
          </motion.div>
        </div>

        <motion.div
          className="flex items-center justify-between px-6 md:px-12 py-6 border-t"
          style={{ borderColor: "rgba(245,244,242,0.12)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex items-center gap-7">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors duration-300 cursor-crosshair"
                style={{ color: "rgba(245,244,242,0.35)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,244,242,0.85)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,244,242,0.35)")}
                data-testid={`link-social-landing-${label.toLowerCase()}`}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          <a
            href="/works"
            className="flex items-center gap-3 group cursor-crosshair"
          >
            <span
              className="text-[9px] tracking-[0.4em] uppercase transition-colors duration-300"
              style={{ color: "rgba(245,244,242,0.35)" }}
            >
              Works
            </span>
            <span
              className="block h-px transition-all duration-400"
              style={{ width: "24px", background: "rgba(245,244,242,0.35)" }}
            />
          </a>
        </motion.div>
      </div>
    </main>
  );
}
