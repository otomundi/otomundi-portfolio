import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bio1 from "@/assets/images/bio-1.jpg";
import bio2 from "@/assets/images/bio-2.jpg";
import bio3 from "@/assets/images/bio-3.jpg";

const GOTHIC = "'Cinzel', Georgia, serif";
const CORMORANT = "'Cormorant Garamond', Georgia, serif";
const dim = (a: number) => `rgba(245,244,242,${a})`;

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

      {/* Deep shadow overlays — same treatment as landing */}
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

        {/* Paragraph 1 */}
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
              lineHeight: 1.55,
              color: dim(0.70),
              fontWeight: 300,
            }}
            data-testid="text-bio-paragraph-1"
          >
            ótomundi (b. 2000) is an Angolan/Andalusian interdisciplinary artist and creative director, working across music, audiovisual art, and painting.
          </p>
        </motion.div>

        {/* Paragraph 2 */}
        <motion.div
          className="mt-10 md:mt-12 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9 }}
        >
          <p
            className="italic"
            style={{
              fontFamily: CORMORANT,
              fontSize: "clamp(0.95rem, 1.45vw, 1.2rem)",
              lineHeight: 1.75,
              color: dim(0.42),
              fontWeight: 300,
            }}
            data-testid="text-bio-paragraph-2"
          >
            His practice is rooted in an intercultural perspective — expanding into ancestral spirituality, surrealism, and the cultivation of universal creativity.
            He moves through sound, image, and form as one continuous language.
          </p>
        </motion.div>

        {/* Bio portrait 2 + paragraph 3 */}
        <div className="mt-20 md:mt-28 flex flex-col md:flex-row gap-12 md:gap-0 items-start">
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
            className="md:w-7/12 flex flex-col gap-8 md:pl-14 md:py-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
          >
            <p
              className="italic"
              style={{
                fontFamily: CORMORANT,
                fontSize: "clamp(0.95rem, 1.45vw, 1.2rem)",
                lineHeight: 1.78,
                color: dim(0.40),
                fontWeight: 300,
              }}
              data-testid="text-bio-paragraph-3"
            >
              He sees artistic expression as a form of spiritual projection — a devotion to the ancestral codes embedded in human experience, and to the magic of the unobstructed creative flow.
            </p>
          </motion.div>
        </div>

        {/* Bio portrait 3 — closing image, full bleed */}
        <motion.div
          className="mt-20 md:mt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <img
            src={bio3}
            alt="óto — ótomundi"
            className="w-full"
            data-testid="img-bio-portrait-3"
          />
        </motion.div>

      </div>
    </main>
  );
}
