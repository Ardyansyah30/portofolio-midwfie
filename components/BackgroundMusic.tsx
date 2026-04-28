"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Set volume ke 40% agar nyaman di telinga
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("Gagal memutar audio. Pastikan file /public/backsound.mp3 ada.", err);
          setIsPlaying(false);
        });
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Pastikan file backsound.mp3 ada di folder /public */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/backsound.mp3" type="audio/mpeg" />
      </audio>

      <motion.button
        onClick={togglePlay}
        aria-label={isPlaying ? "Matikan musik latar" : "Putar musik latar"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: [0, -4, 0] 
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-3 px-5 py-3 rounded-full shadow-2xl backdrop-blur-md border transition-all duration-500 ${
          isPlaying 
            ? "bg-pink-500 border-pink-400 text-white" 
            : "bg-white/90 border-gray-200 text-gray-600"
        }`}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Volume2 size={18} />
            </motion.div>
          ) : (
            <motion.div
              key="paused"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <VolumeX size={18} />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="text-[10px] font-bold uppercase tracking-[0.15em]">
          {isPlaying ? "Music On" : "Music Off"}
        </span>
      </motion.button>
    </div>
  );
}