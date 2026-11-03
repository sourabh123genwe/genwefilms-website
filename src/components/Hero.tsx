import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import MuxPlayer from "@mux/mux-player-react";

export default function Hero() {
  const containerRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVideoReady(true), 1100);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yVideo = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const scrollToFilms = () => {
    const el = document.getElementById("featured-films");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-start overflow-hidden"
    >
      {/* 🎥 Background */}
      <motion.div
        style={{ y: yVideo }}
        className="bg-video-container pointer-events-none"
      >
        <MuxPlayer
          playbackId="kAnPXCwZW9F4NzL02dcmVCTPs7l9h02UM4H4owiXTDxzM"
          autoPlay
          muted
          loop
          playsInline
          onLoadedMetadata={() => setVideoReady(true)}
          poster="https://image.mux.com/kAnPXCwZW9F4NzL02dcmVCTPs7l9h02UM4H4owiXTDxzM/thumbnail.jpg"
          className="bg-video scale-110"
        />
      </motion.div>

      {/* 🎬 Overlays */}
      <div className="absolute inset-0">

        {/* 🖤 TRUE BLACK INITIAL */}
        {!videoReady && (
          <div className="absolute inset-0 z-[20] bg-black" />
        )}

        {/* 🎬 REVEAL */}
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: videoReady ? "-100%" : "0%" }}
          transition={{
            duration: 0.9,
            ease: [0.77, 0, 0.175, 1],
          }}
          className="absolute inset-0 z-[15] pointer-events-none"
        >
          <div className="absolute inset-0 bg-black" />
          <div className="absolute right-0 top-0 h-full w-[20%] bg-gradient-to-r from-black to-transparent" />
          <div className="absolute right-0 top-0 h-full w-[2px] bg-white/20 blur-sm" />
        </motion.div>

        {/* 🌫️ LIGHTING */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent to-black/70" />

        {/* 🎯 LEFT VIGNETTE */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 h-full w-[30%] bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        </div>
      </div>

      {/* 🎯 Content */}
      <motion.div
        style={{ y: yContent }}
        className="relative z-10 px-6 md:px-12 lg:px-20 max-w-[680px] md:max-w-[760px]"
      >
        {/* Label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white/40 text-[10px] tracking-[0.4em] uppercase mb-6 block"
        >
          Genwe Films
        </motion.span>

        {/* Headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-[2.8rem] sm:text-5xl md:text-6xl lg:text-[5.8rem]
              font-heading italic
              text-white
              leading-[1.05]
              tracking-tight
            "
          >
            We craft films
            <br />
            that stay.
          </motion.h1>
        </div>

        {/* 🔥 STAGGERED TEXT BLOCK */}
        <div className="mt-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="
              text-white/70
              text-sm md:text-base
              tracking-[0.28em]
              uppercase
            "
          >
            Cinematic brand storytelling
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="
              text-white/40
              text-[10px]
              tracking-[0.3em]
              uppercase
              mt-2
            "
          >
            Powered by AI
          </motion.p>
        </div>
      </motion.div>

      {/* ⬇️ CTA */}
      <motion.button
        onClick={scrollToFilms}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-6 md:right-12 lg:right-20 z-10 flex flex-col items-center gap-1 group"
      >
        <span className="text-white/50 text-[10px] tracking-[0.25em] uppercase group-hover:text-white/80 transition">
          View Work
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-white/40 group-hover:text-white/70 transition" />
        </motion.div>
      </motion.button>
    </section>
  );
}