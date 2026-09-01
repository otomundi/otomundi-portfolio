import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects as works, type Work } from "@/data/projects";

interface PlanetProps {
  work: Work;
  scale: number;
  onClick: () => void;
}

function Planet({ work, scale, onClick }: PlanetProps) {
  const r = (work.orbitRadius ?? 120) * scale;
  const size = (work.planetSize ?? 24) * scale;
  const planetColor = work.planetColor ?? "#730623";
  const planetGlowColor = work.planetGlowColor ?? "rgba(115,6,35,0.35)";

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
        border: "1px solid rgba(139,26,46,0.12)",
        pointerEvents: "none",
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: work.orbitDuration ?? 30,
        ease: "linear",
        repeat: Infinity,
      }}
              initial={{ rotate: work.orbitOffset ?? 0 }}
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
          background: `radial-gradient(circle at 35% 35%, ${planetColor}ff, ${planetColor}88)`,
          boxShadow: `0 0 ${size * 1.2}px ${planetGlowColor}, 0 0 ${size * 0.4}px ${planetColor}99`,
          pointerEvents: "auto",
        }}
        whileHover={{ scale: 1.35 }}
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
            className="block whitespace-nowrap tracking-[0.18em] uppercase px-3 py-1 rounded"
            style={{
              fontSize: Math.max(9, 10 * scale),
              color: "#e8a0a8",
              background: "rgba(0,0,0,0.9)",
              border: `1px solid ${planetColor}55`,
            }}
          >
            {work.title}
          </span>
        </motion.div>
      </motion.button>
    </motion.div>
  );
}

function SunCenter({ scale }: { scale: number }) {
  const coreSize = 20 * scale;
  const numRays = 12;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ zIndex: 10, width: coreSize * 6, height: coreSize * 6, marginLeft: -(coreSize * 3), marginTop: -(coreSize * 3) }}
      data-testid="star-center"
    >
      {Array.from({ length: numRays }).map((_, i) => {
        const angle = (i / numRays) * 360;
        const rayLength = (i % 3 === 0 ? 42 : i % 3 === 1 ? 30 : 22) * scale;
        const rayWidth = (i % 2 === 0 ? 1.5 : 1) * scale;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: rayWidth,
              height: rayLength,
              background: `linear-gradient(to top, rgba(255,200,100,0.7), rgba(255,220,140,0))`,
              top: "50%",
              left: "50%",
              marginLeft: -rayWidth / 2,
              marginTop: -(coreSize / 2),
              transformOrigin: `${rayWidth / 2}px 0px`,
              transform: `rotate(${angle}deg) translateY(-${coreSize / 2 + 1}px)`,
            }}
            animate={{ opacity: [0.5, 1, 0.5], scaleY: [1, 1.08, 1] }}
            transition={{
              duration: 3 + (i % 4) * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i / numRays) * 2,
            }}
          />
        );
      })}

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: coreSize * 2,
          height: coreSize * 2,
          background: "radial-gradient(circle, #fffde7 0%, #ffd54f 30%, #ff8f00 60%, rgba(180,50,0,0.3) 80%, transparent 100%)",
          boxShadow: `0 0 ${coreSize * 3}px rgba(255,200,80,0.6), 0 0 ${coreSize * 6}px rgba(255,140,0,0.2)`,
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: coreSize * 5,
          height: coreSize * 5,
          background: "radial-gradient(circle, rgba(255,200,80,0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function PlanetNav() {
  const [scale, setScale] = useState(1);
  const maxOrbit = Math.max(...works.map((w) => w.orbitRadius ?? 120));
  const naturalSize = (maxOrbit + 40) * 2;

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
      className="relative"
      style={{ width: displaySize, height: displaySize }}
      data-testid="planet-nav-desktop"
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{ background: "radial-gradient(ellipse at center, rgba(139,26,46,0.05) 0%, transparent 70%)" }}
      />

      {works.map((work) => (
        <Planet
          key={work.id}
          work={work}
          scale={scale}
          onClick={() => navigateTo(`/works/${work.id}`)}
        />
      ))}

      <SunCenter scale={scale} />
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
                background: work.planetColor ?? "#730623",
                boxShadow: `0 0 8px ${work.planetGlowColor ?? "rgba(115,6,35,0.35)"}`,
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
