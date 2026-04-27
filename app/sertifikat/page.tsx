"use client"
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Award, FileText, CheckCircle, X } from "lucide-react";

export default function SertifikatPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const legalDocs = [
    {
      title: "Sertifikat Kompetensi Bidan",
      number: "STR No. XJ00001225043710",
      issuer: "Konsil Tenaga Kesehatan Indonesia",
      icon: <Award className="text-pink-500" size={32} />,
      image: "/sertifikat-bidan.jpg"
    },
    {
      title: "Sertifikasi Baby Spa & Massage",
      number: "Cert-2023-PROF",
      issuer: "Lembaga Sertifikasi Kesehatan",
      icon: <FileText className="text-pink-500" size={32} />,
      image: "/sertifikat-pelatihan.jpg"
    }
  ];

  return (
    <main className="font-sans relative py-16 px-6 bg-[#fffafa] min-h-screen">
      
      {/* Background */}
      <div className="absolute top-0 right-[-10%] w-[400px] h-[400px] bg-pink-100 blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-blue-100 blur-3xl opacity-20" />

      <div className="relative max-w-6xl mx-auto">

        {/* Back */}
        <Link href="/" className="text-pink-500 font-semibold mb-10 inline-block hover:text-pink-600 transition">
          ← Kembali ke Beranda
        </Link>

        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Legalitas & <span className="text-pink-500">Sertifikasi</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
            Semua layanan dilakukan oleh tenaga profesional bersertifikat dan berpengalaman.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {legalDocs.map((doc, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-6 bg-pink-50 w-14 h-14 rounded-xl flex items-center justify-center">
                {doc.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {doc.title}
              </h3>

              <p className="text-pink-500 font-semibold text-sm mb-1">
                {doc.number}
              </p>

              <p className="text-gray-500 text-sm mb-4">
                {doc.issuer}
              </p>

              {/* Gambar Sertifikat */}
              {doc.image && (
                <div
                  onClick={() => setSelectedImage(doc.image)}
                  className="cursor-pointer mt-4 bg-gray-50 p-3 rounded-xl"
                >
                  <Image
                    src={doc.image}
                    alt="Sertifikat"
                    width={500}
                    height={700}
                    className="rounded-lg w-full h-auto object-contain hover:scale-105 transition"
                  />
                  <p className="text-xs text-center text-gray-400 mt-2">
                    Klik untuk melihat
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Assurance */}
        <div className="bg-gray-900 text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-6">
            Terapis Berlisensi & Terverifikasi
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Lulus Uji Kompetensi",
              "STR Aktif",
              "Protokol Steril",
              "Tenaga Profesional"
            ].map((tag, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full">
                <CheckCircle size={18} className="text-green-400" />
                <span className="text-sm">{tag}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* MODAL PREVIEW */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="min-h-screen flex items-center justify-center p-6">
              
              <motion.div
                className="relative max-w-4xl w-full"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="fixed top-6 right-6 bg-white p-2 rounded-full shadow z-50"
                >
                  <X size={20} />
                </button>

                <Image
                  src={selectedImage}
                  alt="Preview Sertifikat"
                  width={1200}
                  height={1600}
                  className="w-full h-auto object-contain rounded-xl shadow-2xl"
                />
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}