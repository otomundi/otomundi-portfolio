import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { works, type Work } from "@/data/works";

interface PlanetProps {
  work: Work;
  scale: number;
  onClick: () => void;
}

function Planet({ work, scale, onClick }: PlanetProps) {
  const r = work.orbitRadius * scale;
  const size = work.planetSize * scale;

  return (
    <motion.div
      className="absolute"
      style={{
        width: r * 2,
        height: r * 2,
        top: "50%",
        left: "50%",
        marginTop: -r,
        marginLeft: -r,
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.04)",
        pointerEvents: "none",
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: work.orbitDuration,
        ease: "linear",
        repeat: Infinity,
      }}
      initial={{ rotate: work.orbitOffset }}
    >
      <motion.button
        className="absolute cursor-crosshair group"
        style={{
          width: size,
          height: size,
          top: 0,
          left: "50%",
          marginLeft: -size / 2,
          marginTop: -size / 2,
          borderRadius: "50%",
          background: `radial-gradient(circle at 35% 35%, ${work.planetColor}cc, ${work.planetColor}44)`,
          boxShadow: `0 0 ${size * 0.8}px ${work.glowColor}, 0 0 ${size * 0.3}px ${work.planetColor}66`,
          pointerEvents: "auto",
        }}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        data-testid={`planet-${work.id}`}
        aria-label={`View ${work.title}`}
      >
        <motion.div
          className="absolute bottom-full left-1/2 mb-3 pointer-events-none"
          style={{ x: "-50%" }}
          initial={{ opacity: 0, y: 5 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          <span
            className="block whitespace-nowrap tracking-[0.2em] uppercase px-3 py-1 rounded"
            style={{
              fontSize: Math.max(9, 10 * scale),
              color: work.planetColor,
              background: "rgba(0,0,0,0.85)",
              border: `1px solid ${work.planetColor}33`,
            }}
          >
            {work.title}
          </span>
        </motion.div>
      </motion.button>
    </motion.div>
  );
}

export function PlanetNav() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const maxOrbit = Math.max(...works.map((w) => w.orbitRadius));
  const naturalRadius = maxOrbit + 40;
  const naturalSize = naturalRadius * 2;

  useEffect(() => {
    function computeScale() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const available = Math.min(vw * 0.82, vh * 0.72);
      setScale(available / naturalSize);
    }
    computeScale();
    window.addEventListener("resize", computeScale);
    return () => window.removeEventListener("resize", computeScale);
  }, [naturalSize]);

  const displaySize = naturalSize * scale;

  function navigateTo(href: string) {
    window.location.href = href;
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ width: displaySize, height: displaySize }}
      data-testid="planet-nav-desktop"
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{ background: "radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 70%)" }}
      />

      {works.map((work) => (
        <Planet
          key={work.id}
          work={work}
          scale={scale}
          onClick={() => navigateTo(`/works/${work.id}`)}
        />
      ))}

      <motion.button
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-crosshair"
        style={{ zIndex: 10 }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => navigateTo("/")}
        data-testid="star-center"
      >
        <div
          className="rounded-full"
          style={{
            width: 16 * scale,
            height: 16 * scale,
            background: "radial-gradient(circle, #ffffff 0%, #ffffffcc 40%, transparent 70%)",
            boxShadow: `0 0 ${30 * scale}px rgba(255,255,255,0.6), 0 0 ${60 * scale}px rgba(255,255,255,0.15)`,
          }}
        />
      </motion.button>
    </div>
  );
}

export function PlanetNavMobile() {
  return (
    <div className="w-full" data-testid="planet-nav-mobile">
      <div className="flex flex-col gap-px">
        {works.map((work, i) => (
          <motion.a
            key={work.id}
            href={`/works/${work.id}`}
            className="group flex items-center gap-4 py-4 border-b border-white/5 last:border-0"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            data-testid={`mobile-work-${work.id}`}
          >
            <div
              className="flex-shrink-0 rounded-full"
              style={{
                width: 10,
                height: 10,
                background: work.planetColor,
                boxShadow: `0 0 8px ${work.glowColor}`,
              }}
            />
            <div className="flex-1 min-w-0">
              <span className="block text-sm tracking-[0.12em] uppercase text-white/70 group-hover:text-white transition-colors duration-300">
                {work.title}
              </span>
              <span className="block text-xs text-white/30 mt-0.5">
                {work.medium} — {work.year}
              </span>
            </div>
            <span className="text-white/20 group-hover:text-white/50 transition-colors text-xs tracking-widest">→</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
