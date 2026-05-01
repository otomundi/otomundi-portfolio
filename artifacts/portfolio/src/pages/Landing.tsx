import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PlanetNav, PlanetNavMobile } from "@/components/PlanetNav";

export default function Landing() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <main
      className="relative bg-void"
      style={{ minHeight: "100svh" }}
      data-testid="page-landing"
    >
      <div className="grain-overlay" />
      <div className="stars-bg" />

      {isMobile ? (
        <div className="relative z-10 flex flex-col items-center justify-start pt-28 pb-16 px-6 min-h-screen">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-white/25 mb-5">Audiovisual Artist</p>
            <h1 className="text-5xl font-extralight tracking-[0.1em] uppercase text-white/90" data-testid="text-artist-name">
              Aether
            </h1>
            <p className="mt-4 text-[10px] tracking-[0.35em] uppercase text-white/20">Sound · Vision · Space</p>
          </motion.div>
          <motion.div
            className="w-full max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-[9px] tracking-[0.35em] uppercase text-white/20 mb-5 text-center">Works</p>
            <PlanetNavMobile />
          </motion.div>
        </div>
      ) : (
        <div
          className="relative z-10 flex items-center justify-center"
          style={{ minHeight: "100svh" }}
        >
          <motion.div
            className="absolute top-0 left-0 right-0 flex flex-col items-center"
            style={{ paddingTop: "80px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.p
              className="text-[10px] tracking-[0.5em] uppercase text-white/22 mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Audiovisual Artist
            </motion.p>
            <h1
              className="text-7xl lg:text-8xl font-extralight tracking-[0.12em] uppercase text-white/90"
              data-testid="text-artist-name"
            >
              Aether
            </h1>
            <motion.p
              className="mt-4 text-[10px] tracking-[0.35em] uppercase text-white/18"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Sound · Vision · Space
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            data-testid="cosmic-nav-container"
          >
            <PlanetNav />
          </motion.div>

          <motion.p
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.4em] uppercase text-white/18 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            Hover planets to explore · Click to enter
          </motion.p>
        </div>
      )}
    </main>
  );
}
