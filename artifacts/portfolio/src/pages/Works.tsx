import { motion } from "framer-motion";
import { Link } from "wouter";
import { works } from "@/data/works";

const GOTHIC = "'Cinzel', Georgia, serif";
const CRIMSON = "#a81a2e";
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
          <p
            style={{
              fontFamily: GOTHIC,
              fontSize: "8px",
              letterSpacing: "0.55em",
              textTransform: "uppercase",
              color: dim(0.20),
              fontWeight: 400,
              marginBottom: "0.75rem",
            }}
          >
            Published Works
          </p>
          <h1
            style={{
              fontFamily: GOTHIC,
              fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: CRIMSON,
              fontWeight: 400,
            }}
          >
            Audiovisual
          </h1>
        </motion.div>

        <div className="flex flex-col" data-testid="works-list">
          {works.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.9, ease: "easeOut" }}
              className="group"
              style={{ borderTop: `1px solid ${dim(0.06)}` }}
              data-testid={`work-row-${work.id}`}
            >
              <Link href={`/works/${work.id}`} data-testid={`card-work-${work.id}`}>
                <div className="flex flex-col md:flex-row gap-0 cursor-crosshair py-12 md:py-16">
                  <div className="md:w-2/5 flex-shrink-0">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
                      data-testid={`img-work-${work.id}`}
                    />
                  </div>

                  <div className="md:w-3/5 flex flex-col justify-between md:pl-12 md:py-2 pt-6 md:pt-0">
                    <div>
                      <div className="flex items-start justify-between mb-6">
                        <p
                          style={{
                            fontFamily: GOTHIC,
                            fontSize: "8px",
                            letterSpacing: "0.4em",
                            color: dim(0.18),
                            fontWeight: 400,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <p
                          style={{
                            fontFamily: GOTHIC,
                            fontSize: "8px",
                            letterSpacing: "0.35em",
                            color: dim(0.18),
                            fontWeight: 400,
                          }}
                        >
                          {work.releaseDate}
                        </p>
                      </div>

                      <div
                        className="mb-6 transition-all duration-500 group-hover:w-12"
                        style={{ width: "20px", height: "1px", background: "#730623" }}
                      />

                      <h2
                        className="mb-3"
                        style={{
                          fontFamily: GOTHIC,
                          fontSize: "clamp(1.6rem, 3.2vw, 3rem)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: CRIMSON,
                          lineHeight: 0.95,
                          fontWeight: 400,
                        }}
                        data-testid={`text-work-title-${work.id}`}
                      >
                        {work.title}
                      </h2>
                      <p
                        style={{
                          fontFamily: GOTHIC,
                          fontSize: "8px",
                          letterSpacing: "0.3em",
                          textTransform: "uppercase",
                          color: dim(0.22),
                          marginBottom: "2rem",
                          fontWeight: 400,
                        }}
                      >
                        {work.medium}
                      </p>
                    </div>

                    <div>
                      <p
                        className="mb-8 max-w-sm italic"
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
                          lineHeight: 1.7,
                          color: dim(0.40),
                          fontWeight: 300,
                        }}
                      >
                        {work.description}
                      </p>
                      <span
                        style={{
                          fontFamily: GOTHIC,
                          fontSize: "8px",
                          letterSpacing: "0.4em",
                          textTransform: "uppercase",
                          color: dim(0.20),
                          fontWeight: 400,
                        }}
                      >
                        View work →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          <div style={{ borderTop: `1px solid ${dim(0.06)}` }} />
        </div>
      </div>
    </main>
  );
}
