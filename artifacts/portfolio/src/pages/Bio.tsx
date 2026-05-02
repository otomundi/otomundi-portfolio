import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bioPortrait from "@/assets/images/bio-portrait.png";
import artwork3 from "@/assets/images/artwork-3.png";

const W = "#f5f4f2";
const dim = (a: number) => `rgba(245,244,242,${a})`;

export default function Bio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const imgFloat1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imgFloat2Y = useTransform(scrollYProgress, [0, 1], [40, -50]);

  return (
    <main ref={containerRef} className="relative bg-void" data-testid="page-bio">
      <div className="grain-overlay" />

      <div className="relative z-10 pt-28 pb-32 px-6 md:px-10">

        <motion.p
          className="text-[9px] tracking-[0.5em] uppercase mb-8"
          style={{ color: dim(0.22) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Biography
        </motion.p>

        <div className="relative">
          <motion.h1
            className="font-extralight lowercase leading-none"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 10rem)",
              letterSpacing: "-0.01em",
              lineHeight: 0.88,
              color: W,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            data-testid="text-bio-name"
          >
            ótomundi
          </motion.h1>

          <motion.div
            className="absolute pointer-events-none hidden md:block"
            style={{
              top: "-5%",
              right: "6%",
              width: "clamp(180px, 20vw, 320px)",
              y: imgFloat1Y,
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 1 }}
          >
            <div className="relative" style={{ aspectRatio: "3/4" }}>
              <img
                src={bioPortrait}
                alt="óto portrait"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.65) contrast(1.1)" }}
                data-testid="img-bio-portrait-1"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, #111111 0%, transparent 45%)",
                }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 md:mt-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
        >
          <p
            className="font-extralight leading-relaxed"
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.8rem)",
              lineHeight: 1.55,
              color: dim(0.55),
            }}
            data-testid="text-bio-paragraph-1"
          >
            ótomundi (est. 2020) is a creative world, directed by óto — an Angolan/Andalusian interdisciplinary artist (b. 2000) who works with music, fashion, audiovisuals, and painting.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 md:mt-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9 }}
        >
          <p
            className="font-extralight leading-relaxed"
            style={{
              fontSize: "clamp(0.9rem, 1.5vw, 1.3rem)",
              lineHeight: 1.7,
              color: dim(0.40),
            }}
            data-testid="text-bio-paragraph-2"
          >
            His practice is based on an intercultural perspective that investigates the depths of human consciousness — expanding into ancestral spirituality, world order, neo-Gnosticism, and the cultivation of universal creativity. ótomundi's work is expressed through a cross-cultural flow of surrealism, ancestral traditions, and submission to the creative being.
          </p>
        </motion.div>

        <div className="mt-20 md:mt-28 flex flex-col md:flex-row gap-12 md:gap-0 items-start">
          <motion.div
            className="md:w-5/12 flex-shrink-0"
            style={{ y: imgFloat2Y }}
          >
            <div
              className="relative overflow-hidden"
              style={{ width: "clamp(220px, 28vw, 400px)", aspectRatio: "3/4" }}
            >
              <img
                src={artwork3}
                alt="SKY — ótomundi, 2025"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.6) contrast(1.1) saturate(0.55)" }}
                data-testid="img-bio-portrait-2"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, #111111 0%, transparent 50%)",
                }}
              />
              <p
                className="absolute bottom-4 left-4 text-[8px] tracking-[0.35em] uppercase"
                style={{ color: dim(0.28) }}
              >
                SKY — 2025
              </p>
            </div>
          </motion.div>

          <motion.div
            className="md:w-7/12 md:pl-12 flex flex-col gap-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
          >
            <p
              className="font-extralight leading-relaxed"
              style={{
                fontSize: "clamp(0.9rem, 1.4vw, 1.2rem)",
                lineHeight: 1.75,
                color: dim(0.38),
              }}
              data-testid="text-bio-paragraph-3"
            >
              ótomundi's practice focuses on dissolving the boundaries between human material cultures — transcending and giving voice to the essence of the spiritual nature. He has adopted the audiovisual practice as a language to generate expressions that immerse the visual and sonic human senses in holistic voyages of perception, instinct, and presence.
            </p>
            <p
              className="font-extralight leading-relaxed"
              style={{
                fontSize: "clamp(0.85rem, 1.3vw, 1.1rem)",
                lineHeight: 1.75,
                color: dim(0.28),
              }}
            >
              His works pursue the timelessness of spiritual art — one created in determined devotion to the magic and unobstructed flow of intelligence, and moved by the existential impulses of our astral consciousness.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 md:mt-28 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
        >
          <p
            className="font-extralight leading-relaxed"
            style={{
              fontSize: "clamp(0.9rem, 1.5vw, 1.3rem)",
              lineHeight: 1.75,
              color: dim(0.38),
            }}
          >
            ótomundi's artistic identity developed from an early and sustained relationship with the sonic, literary, and plastic arts — charged with spiritual symbolism and nostalgia for a time of greater harmony between people and the Earth. From textile paintings to music videos, ótomundi creates from the understanding that artistic expression is a form of spiritual projection: meant to expand and contribute towards collective peace, heritage, and evolution.
          </p>
        </motion.div>

        <motion.div
          className="mt-20 md:mt-28"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <p
            className="font-extralight leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 5.5vw, 5.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: dim(0.14),
            }}
          >
            Creation means surrendering our minuscule, self-loathing identities to enter the infinite consciousness that elevates us all to the dignity of being in harmony, serendipity, and shared intelligence.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 md:mt-24 pt-12 grid grid-cols-3 md:grid-cols-6 gap-8 max-w-3xl"
          style={{ borderTop: `1px solid ${dim(0.07)}` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {[
            { label: "Born", value: "2000" },
            { label: "Origin", value: "AO/ES" },
            { label: "Works", value: "4+" },
            { label: "Disciplines", value: "5" },
            { label: "Est.", value: "2020" },
            { label: "World", value: "ótomundi" },
          ].map((stat) => (
            <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase()}`}>
              <div
                className="font-extralight tracking-wide lowercase"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.8rem)", color: dim(0.70) }}
              >
                {stat.value}
              </div>
              <div
                className="text-[8px] tracking-[0.3em] uppercase mt-1"
                style={{ color: dim(0.20) }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-24 md:mt-32 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 1 }}
        >
          <div
            className="w-full relative"
            style={{ aspectRatio: "21/9", maxHeight: "60vh" }}
          >
            <img
              src={bioPortrait}
              alt="óto — ótomundi"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.38) contrast(1.15) saturate(0.42)" }}
              data-testid="img-bio-wide"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #111111 0%, transparent 22%, transparent 78%, #111111 100%), linear-gradient(to top, #111111 0%, transparent 35%)",
              }}
            />
            <div className="absolute bottom-8 left-8">
              <p
                className="text-[8px] tracking-[0.4em] uppercase"
                style={{ color: dim(0.25) }}
              >
                óto — ótomundi
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 md:mt-20 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <p
            className="font-extralight leading-relaxed italic"
            style={{
              fontSize: "clamp(0.85rem, 1.3vw, 1.1rem)",
              lineHeight: 1.75,
              color: dim(0.25),
            }}
          >
            Amongst various creative methods, ótomundi searches for his ideas from a core practice of prolonged states of concentration and meditation — ideally under the sun, or a full moon — to welcome a world of spiritual unity, radiant fertility, and creative equilibrium.
          </p>
        </motion.div>

      </div>
    </main>
  );
}
