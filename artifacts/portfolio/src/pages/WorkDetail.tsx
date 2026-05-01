import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams } from "wouter";
import { works } from "@/data/works";
import { ChevronLeft, ChevronRight, X, Play, Music } from "lucide-react";

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
        <p className="text-[9px] tracking-[0.4em] uppercase text-white/25">Photography</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollBy(-320)}
            className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-white/25 text-white/40 hover:text-white/70 transition-all duration-200 cursor-crosshair"
            data-testid="button-gallery-prev"
            aria-label="Scroll left"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={() => scrollBy(320)}
            className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-white/25 text-white/40 hover:text-white/70 transition-all duration-200 cursor-crosshair"
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
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <span className="text-white/0 group-hover:text-white/60 text-xs tracking-widest uppercase transition-all duration-300">
                View
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightboxIndex(null)}
            data-testid="lightbox"
          >
            <div className="grain-overlay" />
            <button
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors cursor-crosshair z-10"
              onClick={() => setLightboxIndex(null)}
              data-testid="button-lightbox-close"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-crosshair z-10"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-crosshair z-10"
              onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
              data-testid="button-lightbox-next"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.3em] uppercase text-white/25">
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
      <p className="text-[9px] tracking-[0.4em] uppercase text-white/25 mb-6">Video</p>
      {!show ? (
        <motion.button
          className="relative w-full group cursor-crosshair overflow-hidden"
          style={{ aspectRatio: "16/9", background: "#0a0a12" }}
          onClick={() => setShow(true)}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-testid="button-video-play"
          whileHover={{ scale: 1.005 }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <Play size={18} className="text-white/50 group-hover:text-white/80 transition-colors ml-1" />
            </div>
            <span className="text-[9px] tracking-[0.4em] uppercase text-white/25 group-hover:text-white/40 transition-colors">
              Play video
            </span>
          </div>
          <div className="absolute inset-0 border border-white/5" />
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
      <p className="text-[9px] tracking-[0.4em] uppercase text-white/25 mb-6">Audio</p>
      <motion.div
        className="border border-white/8 p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-5">
          <button
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-white/30 transition-all duration-200 cursor-crosshair flex-shrink-0"
            onClick={() => setPlaying(!playing)}
            data-testid="button-audio-play"
            aria-label={playing ? "Pause" : "Play audio"}
          >
            {playing ? (
              <div className="flex gap-0.5">
                <span className="w-0.5 h-3 bg-white/60" />
                <span className="w-0.5 h-3 bg-white/60" />
              </div>
            ) : (
              <Play size={12} className="text-white/50 ml-0.5" />
            )}
          </button>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">
                Audio composition
              </span>
              <Music size={10} className="text-white/20" />
            </div>
            <div
              className="w-full h-px bg-white/8 relative cursor-crosshair"
              data-testid="audio-progress-bar"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setProgress((e.clientX - rect.left) / rect.width);
              }}
            >
              <motion.div
                className="absolute left-0 top-0 h-full bg-white/40"
                animate={playing ? { width: "100%" } : { width: `${progress * 100}%` }}
                transition={playing ? { duration: 180, ease: "linear" } : { duration: 0 }}
              />
            </div>
          </div>
        </div>
        <p className="mt-4 text-[9px] text-white/20 font-light">
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
    <main className="min-h-screen bg-void relative pt-24 pb-24" data-testid="page-work-detail">
      <div className="grain-overlay" />

      <div className="relative z-10">
        <motion.div
          className="relative w-full overflow-hidden"
          style={{ height: "55vh", minHeight: 320 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.5) contrast(1.1)" }}
            data-testid="img-work-detail"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, #03030a 0%, transparent 35%, transparent 65%, #03030a 100%), linear-gradient(to top, #03030a 0%, transparent 50%)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background: `radial-gradient(ellipse at 60% 50%, ${work.planetColor}55, transparent 55%)`,
            }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 -mt-20 relative">
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
              className="text-4xl md:text-6xl font-extralight tracking-[0.06em] uppercase text-white/90 mb-4"
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

            {work.media.videoUrl && <VideoEmbed url={work.media.videoUrl} />}

            {work.media.photos.length > 0 && <PhotoGallery photos={work.media.photos} />}

            <AudioEmbed />

            <div className="mt-20 pt-8 border-t border-white/8 grid grid-cols-2 gap-4">
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
