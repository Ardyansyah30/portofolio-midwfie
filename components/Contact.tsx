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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 bg-transparent text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 z-0 opacity-10"
      >
        <img
          src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2000" 
          alt="Baby themed background" 
          className="w-full h-full object-cover scale-125"
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="container mx-auto px-6 relative z-10"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Hubungi Kami
        </motion.h2>
        <motion.p variants={itemVariants} className="mb-10 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
          Siap memberikan perawatan terbaik untuk buah hati Anda. Hubungi kami sekarang untuk konsultasi atau penjadwalan kunjungan rumah.
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/6283139266885"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 rounded-full shadow-lg transition-all"
          >
            Chat via WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}