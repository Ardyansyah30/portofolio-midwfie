"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  PhoneCall,
  Clock3,
} from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yBackground = useTransform(
    scrollYProgress,
    [0, 1],
    ["-10%", "10%"]
  );

  const message = encodeURIComponent(
    "Halo BabyCare, saya ingin bertanya mengenai layanan home care bayi. Bisa dibantu?"
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative pt-32 pb-10 overflow-hidden bg-white"
    >
      {/* Background */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2000"
          alt="Background"
          className="w-full h-full object-cover opacity-[0.08]"
        />
      </motion.div>

      {/* Soft Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-pink-100/40 via-white to-blue-100/40" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-2xl border border-white rounded-[36px] shadow-2xl p-10 md:p-16 text-center"
        >
          {/* Label */}
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 font-medium">
            Contact Us
          </p>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
            Konsultasi Sekarang.
            <br />
            Kami Siap Membantu.
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hubungi tim profesional kami untuk informasi layanan perawatan bayi
            dan ibu dengan pelayanan terbaik langsung ke rumah Anda.
          </p>

          {/* Operational Hours */}
          <div className="mt-8 inline-flex items-center gap-3 bg-gray-100 px-6 py-3 rounded-full text-gray-700 font-medium">
            <Clock3 size={18} />
            Jam Operasional: 10.00 Pagi - 17.00 Sore
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={`https://wa.me/6283139266885?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition"
            >
              <MessageCircle size={20} />
              Chat via WhatsApp
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="tel:+6283139266885"
              className="inline-flex items-center justify-center gap-3 bg-gray-900 hover:bg-black text-white font-semibold px-8 py-4 rounded-full shadow-lg transition"
            >
              <PhoneCall size={20} />
              Telepon Sekarang
            </motion.a>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Respon cepat • Ramah • Profesional
          </p>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © 2026 BabyCare. All rights reserved.
        </div>
      </div>
    </section>
  );
}