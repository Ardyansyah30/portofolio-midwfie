"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Perawatan Newborn",
      desc: "Perawatan menyeluruh termasuk memandikan bayi, perawatan tali pusat, dan pemantauan kesehatan harian.",
      img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1000"
    },
    {
      title: "Pijat Bayi (Baby Massage)",
      desc: "Stimulasi pijat untuk membantu nafsu makan, kualitas tidur, dan perkembangan motorik bayi.",
      img: "https://images.unsplash.com/photo-1519689689378-43d745226c31?q=80&w=1000"
    },
    {
      title: "Perawatan Tali Pusat",
      desc: "Teknik steril dan aman untuk memastikan tali pusat kering dan lepas dengan sempurna tanpa infeksi.",
      img: "https://images.unsplash.com/photo-1629202353069-42b78f445963?q=80&w=1000"
    },
    {
      title: "Pendampingan Ibu",
      desc: "Edukasi menyusui (ASI Eksklusif) dan dukungan psikologis bagi Ibu pasca persalinan.",
      img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1000"
    },
  ];

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Layanan Kami</h2>
          <p className="text-gray-600">Pilihan layanan kesehatan terbaik untuk Anda dan si kecil.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 text-pink-500">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>
              
              <button 
                onClick={() => setSelectedImg(s.img)}
                className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-pink-500 transition-colors uppercase tracking-widest"
              >
                <Camera size={16} />
                Lihat Dokumentasi
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Popup Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-pink-500"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImg} 
              alt="Dokumentasi Layanan" 
              className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}