import { motion } from "framer-motion";
import bioPortrait from "@/assets/images/bio-portrait.png";

export default function Bio() {
  return (
    <main className="min-h-screen bg-void relative pt-28 pb-20 px-6" data-testid="page-bio">
      <div className="grain-overlay" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <img
                src={bioPortrait}
                alt="Artist portrait"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.75) contrast(1.1)" }}
                data-testid="img-bio-portrait"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, #03030acc 0%, transparent 60%)",
                }}
              />
            </div>
            <div
              className="absolute -inset-px"
              style={{ border: "1px solid rgba(255,255,255,0.06)", pointerEvents: "none" }}
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center pt-0 md:pt-16"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
          >
            <p className="text-[9px] tracking-[0.5em] uppercase text-white/25 mb-4">Biography</p>
            <h1 className="text-4xl md:text-5xl font-extralight tracking-[0.08em] uppercase text-white/90 mb-10" data-testid="text-bio-name">
              Aether
            </h1>

            <div className="space-y-6 text-white/45 text-sm leading-relaxed font-light">
              <p data-testid="text-bio-paragraph-1">
                Working at the intersection of sound and image, Aether creates works that inhabit the space between
                perception and abstraction. Drawing from cosmological science, signal theory, and acoustic ecology,
                their practice generates environments where the invisible becomes tangible.
              </p>
              <p data-testid="text-bio-paragraph-2">
                Since 2018, they have presented work across international venues — from purpose-built installation
                spaces to planetaria, concert halls, and underground frequencies. Each work is a renegotiation of
                what an audience can sense, and what forces shape that sensing.
              </p>
              <p data-testid="text-bio-paragraph-3">
                Their compositions are built from field recordings, synthesized textures, and data sourced from
                astronomical observatories. The visual layer is developed in close dialogue with the sound —
                never illustrating it, but coexisting with it in a state of productive tension.
              </p>
              <p data-testid="text-bio-paragraph-4">
                Aether is based between two cities and the space between them.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/8">
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: "Works", value: "5+" },
                  { label: "Since", value: "2018" },
                  { label: "Venues", value: "20+" },
                ].map((stat) => (
                  <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase()}`}>
                    <div className="text-2xl font-extralight text-white/80 tracking-wider">{stat.value}</div>
                    <div className="text-[9px] tracking-[0.3em] uppercase text-white/25 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
