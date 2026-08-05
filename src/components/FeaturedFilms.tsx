import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { featuredProjects } from "../data/projects";
import MuxPlayer from "@mux/mux-player-react";
import LiquidChrome from "./LiquidChrome";

function getBrandStyles(title: string) {
  switch (title) {
    case "Span Floors":
      return {
        glow: "from-blue-400/40 via-cyan-300/10 to-transparent",
        border: "border-blue-400/30",
      };
    case "Royal Enfield":
      return {
        glow: "from-orange-500/50 via-red-500/10 to-transparent",
        border: "border-orange-400/30",
      };
    case "Tanishq":
      return {
        glow: "from-yellow-400/50 via-amber-200/10 to-transparent",
        border: "border-yellow-300/30",
      };
    default:
      return {
        glow: "from-white/10 to-transparent",
        border: "border-white/10",
      };
  }
}

function FeaturedCard({ project, index }: any) {
  const navigate = useNavigate();

  const videoRef = useRef<any>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const styles = getBrandStyles(project.title);

  useEffect(() => {
    const video = videoRef.current;
    const container = videoContainerRef.current;

    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = true;
          video.play?.().catch(() => {});
        } else {
          video.pause?.();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: index * 0.15 }}
      className="flex justify-center"
      onClick={() =>
        navigate(`/work/${project.slug}`, { state: { from: "home" } })
      }
    >
      {/* ✅ REMOVED WHITE CARD */}
      <div className="w-full max-w-4xl rounded-[2rem] transition duration-500 cursor-pointer">

        <div className="space-y-8">

          {/* 🎬 VIDEO */}
          <div
            ref={videoContainerRef}
            className="relative rounded-[1.5rem] overflow-hidden aspect-video bg-zinc-900 group"
          >
            <div className={`absolute inset-0 rounded-[1.5rem] border ${styles.border} opacity-60 group-hover:opacity-100 transition`} />

            <div className="absolute inset-0 rounded-[1.5rem] pointer-events-none opacity-0 group-hover:opacity-100 transition duration-700">
              <div className={`absolute inset-[-1px] rounded-[1.5rem] bg-gradient-to-r ${styles.glow} animate-pulse`} />
            </div>

            <div className={`absolute inset-0 opacity-40 group-hover:opacity-100 transition duration-700 bg-gradient-to-r ${styles.glow}`} />

            <MuxPlayer
              ref={videoRef}
              playbackId={project.playbackId}
              muted
              loop
              playsInline
              autoPlay={false}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <div className="liquid-glass-strong rounded-full w-20 h-20 flex items-center justify-center">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
          </div>

          {/* 📝 TEXT */}
          <div className="space-y-2 px-2">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
              {project.brand || project.title}
            </h3>

          <div className="text-[10px] md:text-xs tracking-[0.45em] uppercase text-white/60 font-medium">
          Made by Humans with AI
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedFilms() {
  const [showReelOpen, setShowReelOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowReelOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleOutsideClick = (e: any) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowReelOpen(false);
    }
  };

  const orderedProjects = [
    "tanishq-jewellery",
    "span-floors",
    "royal-enfield",
  ]
    .map((slug) => featuredProjects.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <section className="relative overflow-hidden px-6 py-24">

      <div className="absolute inset-0 z-0 pointer-events-none">
        <LiquidChrome className="w-full h-full opacity-15" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-white/30 text-xs tracking-[0.45em] uppercase">
            Speculative AI Advertisements
          </span>
        </div>

        <div className="flex flex-col gap-20">
          {orderedProjects.map((p: any, i: number) => (
            <FeaturedCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <div className="mt-28 flex flex-col items-center text-center">
          <p className="text-white/40 text-sm tracking-[0.4em] uppercase mb-6">
            Want to see the full picture?
          </p>

          <motion.button
            onClick={() => setShowReelOpen(true)}
            whileHover={{ scale: 1.08, y: -6 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative overflow-hidden px-10 py-4 rounded-full text-white text-sm tracking-[0.35em] uppercase border border-white/20 backdrop-blur-md group"
          >
            <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />

            <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-black">
              View Showreel
              <Play className="w-4 h-4" />
            </span>

            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-white/20" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showReelOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center"
            onClick={handleOutsideClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setShowReelOpen(false)}
              className="absolute top-6 right-8 text-white/50 hover:text-white text-sm"
            >
              Close ✕
            </button>

            <motion.div
              ref={modalRef}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
            >
              <iframe
                src="https://www.youtube.com/embed/XDsHDkLcnpY?autoplay=1&mute=0&controls=0&rel=0&modestbranding=1&playsinline=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}