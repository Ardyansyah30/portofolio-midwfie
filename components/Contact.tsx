"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const message = encodeURIComponent(
    "Halo BabyCare, saya ingin bertanya tentang layanan home care bayi. Bisa dibantu?"
  );

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 text-center overflow-hidden">
      
      {/* Background */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 z-0 opacity-10"
      >
        <img
          src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2000" 
          alt="Baby background" 
          className="w-full h-full object-cover scale-125"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Hubungi Kami
        </h2>

        <p className="mb-10 text-lg text-gray-600 max-w-xl mx-auto">
          Siap memberikan perawatan terbaik untuk buah hati Anda.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`https://wa.me/6283139266885?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 rounded-full shadow-lg"
        >
          Chat via WhatsApp
        </motion.a>
      </div>
    </section>
  );
}