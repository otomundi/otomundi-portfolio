import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { works } from "@/data/works";

export default function WorkDetail() {
  const { id } = useParams<{ id: string }>();
  const work = works.find((w) => w.id === id);

  if (!work) {
    return (
      <main className="min-h-screen bg-void relative flex items-center justify-center">
        <div className="grain-overlay" />
        <div className="text-center relative z-10">
          <p className="text-white/30 text-sm tracking-widest uppercase">Work not found</p>
          <Link href="/works" className="mt-4 block text-xs text-white/20 hover:text-white/50 tracking-widest uppercase transition-colors">
            Return to Gallery
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = works.findIndex((w) => w.id === id);
  const prevWork = currentIndex > 0 ? works[currentIndex - 1] : null;
  const nextWork = currentIndex < works.length - 1 ? works[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-void relative pt-24 pb-20" data-testid="page-work-detail">
      <div className="grain-overlay" />

      <div className="relative z-10">
        <motion.div
          className="relative w-full overflow-hidden"
          style={{ height: "60vh", minHeight: 360 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.55) contrast(1.1)" }}
            data-testid="img-work-detail"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, #03030a 0%, transparent 40%, transparent 60%, #03030a 100%), linear-gradient(to top, #03030a 0%, transparent 50%)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(ellipse at 60% 50%, ${work.planetColor}33, transparent 60%)`,
            }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 -mt-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Link href="/works" data-testid="link-back-to-gallery">
              <span className="text-[9px] tracking-[0.4em] uppercase text-white/25 hover:text-white/50 transition-colors cursor-crosshair inline-flex items-center gap-2 mb-8 block">
                ← Gallery
              </span>
            </Link>

            <div
              className="w-6 h-px mb-6"
              style={{ background: work.planetColor }}
            />
            <h1
              className="text-4xl md:text-6xl font-extralight tracking-[0.08em] uppercase text-white/90 mb-4"
              data-testid="text-work-detail-title"
            >
              {work.title}
            </h1>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-10">
              {work.medium} — {work.year}
            </p>

            <div className="max-w-2xl">
              <p className="text-white/55 text-base leading-relaxed font-light" data-testid="text-work-detail-description">
                {work.longDescription}
              </p>
            </div>

            <div className="mt-16 pt-8 border-t border-white/8 grid grid-cols-2 gap-4">
              <div>
                {prevWork && (
                  <Link href={`/works/${prevWork.id}`} data-testid="link-prev-work">
                    <span className="group block cursor-crosshair">
                      <span className="text-[9px] tracking-[0.35em] uppercase text-white/20 block mb-2">Previous</span>
                      <span className="text-sm tracking-[0.1em] uppercase text-white/50 group-hover:text-white/80 transition-colors">
                        ← {prevWork.title}
                      </span>
                    </span>
                  </Link>
                )}
              </div>
              <div className="text-right">
                {nextWork && (
                  <Link href={`/works/${nextWork.id}`} data-testid="link-next-work">
                    <span className="group block cursor-crosshair">
                      <span className="text-[9px] tracking-[0.35em] uppercase text-white/20 block mb-2">Next</span>
                      <span className="text-sm tracking-[0.1em] uppercase text-white/50 group-hover:text-white/80 transition-colors">
                        {nextWork.title} →
                      </span>
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
