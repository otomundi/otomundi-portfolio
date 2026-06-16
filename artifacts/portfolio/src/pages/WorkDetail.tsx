import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams } from "wouter";
import { works, type WorkCredit } from "@/data/works";
import { ChevronLeft, ChevronRight, X, Play, Music } from "lucide-react";

const dim = (a: number) => `rgba(245,244,242,${a})`;

function Credits({ credits }: { credits: WorkCredit[] }) {
  return (
    <section className="mt-14" data-testid="credits-section">
      <p className="text-[9px] tracking-[0.4em] uppercase mb-6" style={{ color: dim(0.22) }}>
        Credits
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {credits.map((credit, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            data-testid={`credit-${i}`}
          >
            <div
              className="w-px self-stretch mt-1 flex-shrink-0"
              style={{ background: "#730623", minHeight: "36px" }}
            />
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase mb-1" style={{ color: dim(0.22) }}>
                {credit.role}
              </p>
              {credit.instagram && credit.instagram !== "#" ? (
                <a
                  href={credit.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light tracking-wide cursor-crosshair transition-colors duration-200"
                  style={{ color: dim(0.55) }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = dim(0.85))}
                  onMouseLeave={(e) => (e.currentTarget.style.color = dim(0.55))}
                  data-testid={`credit-link-${i}`}
                >
                  {credit.name}
                </a>
              ) : (
                <p className="text-sm font-light tracking-wide" style={{ color: dim(0.55) }}>
                  {credit.name}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function PhotoGallery({ photos }: { photos: string[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollBy(amount: number) {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  function prevLightbox() {
    setLightboxIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null));
  }

  function nextLightbox() {
    setLightboxIndex((i) => (i !== null ? (i + 1) % photos.length : null));
  }

  return (
    <section className="mt-16" data-testid="photo-gallery">
      <div className="flex items-center justify-between mb-6">
        <p
          className="text-[9px] tracking-[0.4em] uppercase"
          style={{ color: "rgba(245,244,242,0.25)" }}
        >
          Photography
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollBy(-320)}
            className="w-8 h-8 flex items-center justify-center transition-all duration-200 cursor-crosshair"
            style={{ border: "1px solid rgba(245,244,242,0.10)", color: "rgba(245,244,242,0.40)" }}
            data-testid="button-gallery-prev"
            aria-label="Scroll left"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={() => scrollBy(320)}
            className="w-8 h-8 flex items-center justify-center transition-all duration-200 cursor-crosshair"
            style={{ border: "1px solid rgba(245,244,242,0.10)", color: "rgba(245,244,242,0.40)" }}
            data-testid="button-gallery-next"
            aria-label="Scroll right"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-4"
        style={{ scrollbarWidth: "none" }}
        data-testid="gallery-scroll-container"
      >
        {photos.map((photo, i) => (
          <motion.button
            key={i}
            className="flex-shrink-0 relative overflow-hidden cursor-crosshair group"
            style={{ width: 280, height: 200 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            onClick={() => setLightboxIndex(i)}
            data-testid={`gallery-photo-${i}`}
          >
            <img
              src={photo}
              alt={`Gallery image ${i + 1}`}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              style={{ filter: "brightness(0.75) contrast(1.05)" }}
            />
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{ background: "rgba(17,17,17,0.3)" }}
            >
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "rgba(245,244,242,0.7)" }}
              >
                View
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: "rgba(17,17,17,0.97)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightboxIndex(null)}
            data-testid="lightbox"
          >
            <div className="grain-overlay" />
            <button
              className="absolute top-6 right-6 transition-colors cursor-crosshair z-10"
              style={{ color: "rgba(245,244,242,0.4)" }}
              onClick={() => setLightboxIndex(null)}
              data-testid="button-lightbox-close"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center transition-colors cursor-crosshair z-10"
              style={{ color: "rgba(245,244,242,0.4)" }}
              onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
              data-testid="button-lightbox-prev"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <motion.img
              key={lightboxIndex}
              src={photos[lightboxIndex]}
              alt={`Gallery image ${lightboxIndex + 1}`}
              className="max-w-4xl max-h-screen object-contain px-16"
              style={{ filter: "brightness(0.9) contrast(1.05)" }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              data-testid="lightbox-image"
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center transition-colors cursor-crosshair z-10"
              style={{ color: "rgba(245,244,242,0.4)" }}
              onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
              data-testid="button-lightbox-next"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.3em] uppercase"
              style={{ color: "rgba(245,244,242,0.25)" }}
            >
              {lightboxIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function VideoEmbed({ url }: { url: string }) {
  const [show, setShow] = useState(false);

  return (
    <section className="mt-16" data-testid="video-section">
      <p
        className="text-[9px] tracking-[0.4em] uppercase mb-6"
        style={{ color: "rgba(245,244,242,0.25)" }}
      >
        Video
      </p>
      {!show ? (
        <motion.button
          className="relative w-full group cursor-crosshair overflow-hidden"
          style={{ aspectRatio: "16/9", background: "#0d0d0d" }}
          onClick={() => setShow(true)}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-testid="button-video-play"
          whileHover={{ scale: 1.005 }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                border: "1px solid rgba(245,244,242,0.15)",
                background: "rgba(245,244,242,0.03)",
              }}
            >
              <Play
                size={18}
                className="ml-1"
                style={{ color: "rgba(245,244,242,0.5)" }}
              />
            </div>
            <span
              className="text-[9px] tracking-[0.4em] uppercase"
              style={{ color: "rgba(245,244,242,0.25)" }}
            >
              Play video
            </span>
          </div>
          <div
            className="absolute inset-0"
            style={{ border: "1px solid rgba(245,244,242,0.05)" }}
          />
        </motion.button>
      ) : (
        <motion.div
          className="relative w-full"
          style={{ aspectRatio: "16/9" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          data-testid="video-iframe-container"
        >
          <iframe
            src={url + "?autoplay=1"}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Work video"
          />
        </motion.div>
      )}
    </section>
  );
}

function AudioEmbed() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <section className="mt-12" data-testid="audio-section">
      <p
        className="text-[9px] tracking-[0.4em] uppercase mb-6"
        style={{ color: "rgba(245,244,242,0.25)" }}
      >
        Audio
      </p>
      <motion.div
        className="p-6"
        style={{ border: "1px solid rgba(245,244,242,0.08)" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-5">
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-crosshair flex-shrink-0"
            style={{ border: "1px solid rgba(245,244,242,0.15)" }}
            onClick={() => setPlaying(!playing)}
            data-testid="button-audio-play"
            aria-label={playing ? "Pause" : "Play audio"}
          >
            {playing ? (
              <div className="flex gap-0.5">
                <span className="w-0.5 h-3" style={{ background: "rgba(245,244,242,0.6)" }} />
                <span className="w-0.5 h-3" style={{ background: "rgba(245,244,242,0.6)" }} />
              </div>
            ) : (
              <Play size={12} className="ml-0.5" style={{ color: "rgba(245,244,242,0.5)" }} />
            )}
          </button>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{ color: "rgba(245,244,242,0.40)" }}
              >
                Audio composition
              </span>
              <Music size={10} style={{ color: "rgba(245,244,242,0.20)" }} />
            </div>
            <div
              className="w-full h-px relative cursor-crosshair"
              style={{ background: "rgba(245,244,242,0.08)" }}
              data-testid="audio-progress-bar"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setProgress((e.clientX - rect.left) / rect.width);
              }}
            >
              <motion.div
                className="absolute left-0 top-0 h-full"
                style={{ background: "#730623" }}
                animate={playing ? { width: "100%" } : { width: `${progress * 100}%` }}
                transition={playing ? { duration: 180, ease: "linear" } : { duration: 0 }}
              />
            </div>
          </div>
        </div>
        <p
          className="mt-4 text-[9px] font-light"
          style={{ color: "rgba(245,244,242,0.18)" }}
        >
          Replace placeholder href with your audio file or embed an external audio player
        </p>
      </motion.div>
    </section>
  );
}

export default function WorkDetail() {
  const { id } = useParams<{ id: string }>();
  const work = works.find((w) => w.id === id);

  if (!work) {
    return (
      <main className="min-h-screen bg-void relative flex items-center justify-center">
        <div className="grain-overlay" />
        <div className="text-center relative z-10">
          <p
            className="text-sm tracking-widest uppercase"
            style={{ color: "rgba(245,244,242,0.30)" }}
          >
            Work not found
          </p>
          <Link href="/works" data-testid="link-back-to-gallery">
            <span
              className="mt-4 block text-xs tracking-widest uppercase transition-colors cursor-crosshair"
              style={{ color: "rgba(245,244,242,0.20)" }}
            >
              Return to Gallery
            </span>
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = works.findIndex((w) => w.id === id);
  const prevWork = currentIndex > 0 ? works[currentIndex - 1] : null;
  const nextWork = currentIndex < works.length - 1 ? works[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-void relative pt-24 pb-24" data-testid="page-work-detail">
      <div className="grain-overlay" />

      <div className="relative z-10">
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={work.image}
            alt={work.title}
            className="w-full"
            data-testid="img-work-detail"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 mt-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Link href="/works" data-testid="link-back-to-gallery">
              <span
                className="inline-flex items-center gap-2 mb-8 block cursor-crosshair transition-colors duration-300"
                style={{
                  fontFamily: "'Cinzel', Georgia, serif",
                  fontSize: "8px",
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: "rgba(245,244,242,0.22)",
                  fontWeight: 400,
                }}
              >
                ← Gallery
              </span>
            </Link>

            <div className="w-6 h-px mb-6" style={{ background: "#730623" }} />
            <h1
              className="mb-4"
              style={{
                fontFamily: "'Cinzel', Georgia, serif",
                fontSize: "clamp(2.2rem, 6vw, 5.5rem)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#a81a2e",
                fontWeight: 400,
                lineHeight: 0.92,
              }}
              data-testid="text-work-detail-title"
            >
              {work.title}
            </h1>
            <p
              className="mb-10"
              style={{
                fontFamily: "'Cinzel', Georgia, serif",
                fontSize: "8px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(245,244,242,0.25)",
                fontWeight: 400,
              }}
            >
              {work.medium} — {work.year}
            </p>

            <div className="max-w-2xl">
              <p
                className="italic"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.78,
                  fontWeight: 300,
                  color: "rgba(245,244,242,0.52)",
                }}
                data-testid="text-work-detail-description"
              >
                {work.longDescription}
              </p>
            </div>

            {work.credits && work.credits.length > 0 && <Credits credits={work.credits} />}

            {work.media.videoUrl && <VideoEmbed url={work.media.videoUrl} />}

            {work.media.photos.length > 0 && <PhotoGallery photos={work.media.photos} />}

            <AudioEmbed />

            <div
              className="mt-20 pt-8 grid grid-cols-2 gap-4"
              style={{ borderTop: "1px solid rgba(245,244,242,0.08)" }}
            >
              <div>
                {prevWork && (
                  <Link href={`/works/${prevWork.id}`} data-testid="link-prev-work">
                    <span className="group block cursor-crosshair">
                      <span
                        className="block mb-2"
                        style={{
                          fontFamily: "'Cinzel', Georgia, serif",
                          fontSize: "7px",
                          letterSpacing: "0.4em",
                          textTransform: "uppercase",
                          color: "rgba(245,244,242,0.18)",
                          fontWeight: 400,
                        }}
                      >
                        Previous
                      </span>
                      <span
                        style={{
                          fontFamily: "'Cinzel', Georgia, serif",
                          fontSize: "clamp(0.75rem, 1.2vw, 0.95rem)",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "rgba(245,244,242,0.42)",
                          fontWeight: 400,
                        }}
                      >
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
                      <span
                        className="block mb-2"
                        style={{
                          fontFamily: "'Cinzel', Georgia, serif",
                          fontSize: "7px",
                          letterSpacing: "0.4em",
                          textTransform: "uppercase",
                          color: "rgba(245,244,242,0.18)",
                          fontWeight: 400,
                        }}
                      >
                        Next
                      </span>
                      <span
                        style={{
                          fontFamily: "'Cinzel', Georgia, serif",
                          fontSize: "clamp(0.75rem, 1.2vw, 0.95rem)",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "rgba(245,244,242,0.42)",
                          fontWeight: 400,
                        }}
                      >
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
