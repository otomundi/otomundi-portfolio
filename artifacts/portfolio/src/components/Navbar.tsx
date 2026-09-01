import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import logoWhite from "@/assets/images/pages/home/otomundi-logo-white.png";

const GOTHIC = "'Cinzel', Georgia, serif";

const navLinks = [
  { href: "/bio", label: "Bio" },
  { href: "/works", label: "Works" },
  { href: "/music", label: "Music" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? location === "/bio"
              ? "backdrop-blur-md border-b border-[#f5f4f2]/5"
              : "bg-[#111111]/80 backdrop-blur-md border-b border-[#f5f4f2]/5"
            : ""
        }`}
        style={scrolled && location === "/bio" ? { background: "rgba(115,6,35,0.82)" } : undefined}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Link href="/" data-testid="link-home">
          <img
            src={logoWhite}
            alt="ótomundi"
            className="cursor-pointer"
            style={{ height: "28px", width: "auto", opacity: 0.88 }}
            data-testid="img-logo"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10" data-testid="nav-desktop">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
              <span
                className="text-[10px] tracking-[0.25em] uppercase transition-all duration-300 cursor-pointer relative group"
                style={{
                  fontFamily: GOTHIC,
                  color: location === link.href ? "#f5f4f2" : "rgba(245,244,242,0.32)",
                  fontWeight: 400,
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                  style={{
                    background: "#730623",
                    width: location === link.href ? "100%" : "0%",
                  }}
                />
              </span>
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden transition-colors cursor-crosshair"
          style={{ color: "rgba(245,244,242,0.5)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="button-menu-toggle"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <motion.span
              className="block h-px bg-current"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-px bg-current"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-px bg-current"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: "#0e0304" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            data-testid="nav-mobile-menu"
          >
            <div className="grain-overlay" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 40% 60%, rgba(115,6,35,0.35), transparent 65%)",
              }}
            />
            <nav className="flex flex-col items-center gap-10 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link href={link.href} data-testid={`link-mobile-${link.label.toLowerCase()}`}>
                    <span
                      className="uppercase transition-colors duration-300 cursor-crosshair"
                      style={{
                        fontFamily: GOTHIC,
                        fontSize: "clamp(1.6rem, 6vw, 2.8rem)",
                        color: "rgba(245,244,242,0.75)",
                        letterSpacing: "0.18em",
                        fontWeight: 400,
                      }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
