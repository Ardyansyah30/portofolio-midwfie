"use client"
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Tentang Kami</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            Kami adalah tim tenaga kesehatan yang berdedikasi tinggi dalam menyediakan layanan home care bayi. 
            Berpengalaman bertahun-tahun dalam merawat <span className="font-semibold italic text-pink-500">newborn</span>, teknik pijat bayi yang aman, serta memberikan edukasi menyeluruh bagi Ibu pasca melahirkan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}