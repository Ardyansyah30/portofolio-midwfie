"use client"
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-center py-24 md:py-32 bg-gradient-to-b from-pink-50/50 to-transparent">
      {/* Floating Decorative Blobs */}
      <div className="absolute top-10 left-[-5%] w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-[-5%] w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight">
          Jasa Home Care Bayi <span className="text-pink-500">Profesional</span>
        </h1>
        <p className="mb-10 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Memberikan perawatan terbaik untuk buah hati Anda dengan penuh kasih sayang dan dukungan profesional untuk Ibu di rumah.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/6283139266885"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-colors"
        >
          Konsultasi Sekarang
        </motion.a>
      </motion.div>
    </section>
  );
}