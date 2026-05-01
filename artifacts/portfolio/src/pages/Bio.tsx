import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bioPortrait from "@/assets/images/bio-portrait.png";
import artwork2 from "@/assets/images/artwork-2.png";

export default function Bio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const imgFloat1Y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const imgFloat2Y = useTransform(scrollYProgress, [0, 1], [30, -40]);

  return (
    <main ref={containerRef} className="relative bg-void" data-testid="page-bio">
      <div className="grain-overlay" />

      <div className="relative z-10 pt-28 pb-32">
        <div className="px-6 md:px-10 max-w-none">

          <motion.p
            className="text-[9px] tracking-[0.5em] uppercase text-white/25 mb-8 ml-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Biography
          </motion.p>

          <div className="relative">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1
                className="font-extralight uppercase leading-none text-white/90 tracking-tight"
                style={{
                  fontSize: "clamp(3.5rem, 10vw, 10rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: 0.88,
                }}
                data-testid="text-bio-name"
              >
                Aether
              </h1>
            </motion.div>

            <motion.div
              className="absolute pointer-events-none"
              style={{
                top: "10%",
                right: "8%",
                width: "clamp(180px, 22vw, 340px)",
                y: imgFloat1Y,
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <div className="relative" style={{ aspectRatio: "3/4" }}>
                <img
                  src={bioPortrait}
                  alt="Artist portrait"
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.7) contrast(1.1)" }}
                  data-testid="img-bio-portrait-1"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, #03030a 0%, transparent 40%)" }}
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 md:mt-16 max-w-4xl relative">
            <motion.p
              className="font-extralight text-white/55 leading-relaxed"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 2rem)", lineHeight: 1.5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              data-testid="text-bio-paragraph-1"
            >
              Working at the intersection of sound and image, Aether creates works that inhabit the space between perception and abstraction. Drawing from cosmological science, signal theory, and acoustic ecology, their practice generates environments where the invisible becomes tangible.
            </motion.p>
          </div>

          <div className="mt-16 md:mt-24 relative flex flex-col md:flex-row gap-0">
            <motion.div
              className="md:w-1/2"
              style={{ y: imgFloat2Y }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  width: "clamp(200px, 30vw, 420px)",
                  aspectRatio: "4/5",
                  marginLeft: "5vw",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <img
                  src={artwork2}
                  alt="Work in progress"
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.65) contrast(1.1) saturate(0.6)" }}
                  data-testid="img-bio-portrait-2"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(3,3,10,0.4), transparent)" }}
                />
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2 flex flex-col justify-center py-8 md:py-0 md:pl-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
            >
              <p
                className="font-extralight text-white/45 leading-relaxed mb-8"
                style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.4rem)", lineHeight: 1.6 }}
                data-testid="text-bio-paragraph-2"
              >
                Since 2018, they have presented work across international venues — from purpose-built installation spaces to planetaria, concert halls, and underground frequencies. Each work is a renegotiation of what an audience can sense.
              </p>
              <p
                className="font-extralight text-white/35 leading-relaxed"
                style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.2rem)", lineHeight: 1.6 }}
                data-testid="text-bio-paragraph-3"
              >
                Their compositions are built from field recordings, synthesized textures, and data sourced from astronomical observatories. The visual layer is developed in close dialogue with the sound — never illustrating it, but coexisting with it in a state of productive tension.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-24 md:mt-32"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <p
              className="font-extralight text-white/20 leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 7rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
              }}
            >
              Aether is based between two cities and the space between them.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 md:mt-24 border-t border-white/8 pt-12 grid grid-cols-3 md:grid-cols-6 gap-8 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { label: "Works", value: "5+" },
              { label: "Since", value: "2018" },
              { label: "Venues", value: "20+" },
              { label: "Countries", value: "8" },
              { label: "Residencies", value: "4" },
              { label: "Commissions", value: "12+" },
            ].map((stat) => (
              <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase()}`}>
                <div
                  className="font-extralight text-white/75 tracking-wider"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
                >
                  {stat.value}
                </div>
                <div className="text-[9px] tracking-[0.3em] uppercase text-white/22 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="mt-24 md:mt-32 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <div
              className="w-full relative"
              style={{ aspectRatio: "21/9", maxHeight: "60vh" }}
            >
              <img
                src={bioPortrait}
                alt="Artist — wide format"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.45) contrast(1.15) saturate(0.5)" }}
                data-testid="img-bio-wide"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, #03030a 0%, transparent 20%, transparent 80%, #03030a 100%), linear-gradient(to top, #03030a 0%, transparent 30%)",
                }}
              />
              <div className="absolute bottom-8 left-8">
                <p className="text-[9px] tracking-[0.4em] uppercase text-white/30">
                  Aether — Studio, 2024
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
