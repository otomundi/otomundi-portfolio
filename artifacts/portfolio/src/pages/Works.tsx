import { motion } from "framer-motion";
import { Link } from "wouter";
import { works } from "@/data/works";

const dim = (a: number) => `rgba(245,244,242,${a})`;

export default function Works() {
  return (
    <main className="min-h-screen bg-void relative pt-28 pb-24" data-testid="page-works">
      <div className="grain-overlay" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[9px] tracking-[0.5em] uppercase mb-3" style={{ color: dim(0.22) }}>
            Selected Works
          </p>
          <h1 className="text-4xl font-extralight tracking-[0.08em] uppercase" style={{ color: "#f5f4f2" }}>
            Gallery
          </h1>
        </motion.div>

        <div className="flex flex-col" data-testid="works-list">
          {works.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: "easeOut" }}
              className="group"
              style={{ borderTop: `1px solid ${dim(0.07)}` }}
              data-testid={`work-row-${work.id}`}
            >
              <Link href={`/works/${work.id}`} data-testid={`card-work-${work.id}`}>
                <div className="flex flex-col md:flex-row gap-0 cursor-crosshair py-12 md:py-16">
                  <div className="md:w-2/5 flex-shrink-0 relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-103"
                      style={{
                        filter: "brightness(0.6) contrast(1.05)",
                        transform: "scale(1)",
                      }}
                      data-testid={`img-work-${work.id}`}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "rgba(115,6,35,0.12)" }}
                    />
                  </div>

                  <div className="md:w-3/5 flex flex-col justify-between md:pl-12 md:py-2 pt-6 md:pt-0">
                    <div>
                      <div className="flex items-start justify-between mb-6">
                        <p
                          className="text-[9px] tracking-[0.4em] uppercase"
                          style={{ color: dim(0.22) }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <p
                          className="text-[9px] tracking-[0.3em] uppercase"
                          style={{ color: dim(0.22) }}
                        >
                          {work.year}
                        </p>
                      </div>

                      <div
                        className="w-5 h-px mb-5 transition-all duration-500 group-hover:w-10"
                        style={{ background: "#730623" }}
                      />

                      <h2
                        className="font-extralight uppercase mb-3 tracking-[0.05em]"
                        style={{
                          fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                          color: "#f5f4f2",
                          lineHeight: 0.95,
                        }}
                        data-testid={`text-work-title-${work.id}`}
                      >
                        {work.title}
                      </h2>
                      <p
                        className="text-[10px] tracking-[0.25em] uppercase mb-8"
                        style={{ color: dim(0.28) }}
                      >
                        {work.medium}
                      </p>
                    </div>

                    <div>
                      <p
                        className="font-extralight leading-relaxed mb-8 max-w-sm"
                        style={{
                          fontSize: "clamp(0.82rem, 1.2vw, 0.95rem)",
                          lineHeight: 1.75,
                          color: dim(0.38),
                        }}
                      >
                        {work.description}
                      </p>
                      <span
                        className="text-[9px] tracking-[0.4em] uppercase transition-colors duration-300"
                        style={{ color: dim(0.22) }}
                      >
                        View work →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          <div style={{ borderTop: `1px solid ${dim(0.07)}` }} />
        </div>
      </div>
    </main>
  );
}
