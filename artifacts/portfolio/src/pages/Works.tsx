import { motion } from "framer-motion";
import { Link } from "wouter";
import { works } from "@/data/works";

export default function Works() {
  return (
    <main className="min-h-screen bg-void relative pt-28 pb-20 px-6" data-testid="page-works">
      <div className="grain-overlay" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-[9px] tracking-[0.5em] uppercase mb-3"
            style={{ color: "rgba(245,244,242,0.25)" }}
          >
            Selected Works
          </p>
          <h1
            className="text-4xl font-extralight tracking-[0.08em] uppercase"
            style={{ color: "#f5f4f2" }}
          >
            Gallery
          </h1>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ background: "rgba(245,244,242,0.05)" }}
          data-testid="works-grid"
        >
          {works.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
            >
              <Link href={`/works/${work.id}`} data-testid={`card-work-${work.id}`}>
                <div
                  className="group relative overflow-hidden bg-void cursor-crosshair"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.65) contrast(1.05)" }}
                    data-testid={`img-work-${work.id}`}
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(to top, #111111 0%, rgba(17,17,17,0.55) 40%, transparent 100%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "rgba(115,6,35,0.15)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div
                      className="w-4 h-px mb-4 transition-all duration-500 group-hover:w-8"
                      style={{ background: "#730623" }}
                    />
                    <h2
                      className="text-lg font-light tracking-[0.1em] uppercase mb-1"
                      style={{ color: "#f5f4f2" }}
                      data-testid={`text-work-title-${work.id}`}
                    >
                      {work.title}
                    </h2>
                    <p
                      className="text-[10px] tracking-[0.2em] uppercase"
                      style={{ color: "rgba(245,244,242,0.35)" }}
                    >
                      {work.medium} — {work.year}
                    </p>
                    <p
                      className="mt-3 text-xs font-light leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0"
                      style={{ color: "rgba(245,244,242,0.5)" }}
                    >
                      {work.description}
                    </p>
                  </div>
                  <div
                    className="absolute inset-0 border opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ borderColor: "rgba(115,6,35,0.4)" }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
