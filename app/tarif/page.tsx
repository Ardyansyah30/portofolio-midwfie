"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  MessageCircle,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function TarifPage() {
  const babyServices = [
    { name: "Baby Relaxation", price: "Rp110.000" },
    { name: "Baby Therapy Massage", price: "Rp130.000" },
    { name: "Baby Spa", price: "Rp150.000" },
  ];

  const kidsServices = [
    { name: "Kids Relaxation", price: "Rp130.000" },
    { name: "Kids Therapy Massage", price: "Rp150.000" },
    { name: "Kids Spa", price: "Rp170.000" },
  ];

  const momServices = [
    { name: "Prenatal Massage", price: "Rp170.000" },
    { name: "Postpartum Massage", price: "Rp170.000" },
    { name: "Lactation Massage", price: "Rp150.000" },
    { name: "Mom Spa", price: "Rp220.000" },
    { name: "Regular Mom Massage", price: "Rp180.000" },
  ];

  const packages = [
    { name: "Recovery Care Program (4x sesi)", price: "Rp820.000" },
    { name: "Recovery Care Intensive (6x sesi)", price: "Rp1.200.000" },
    { name: "Baby Care Program (4x sesi)", price: "Rp620.000" },
    { name: "Baby Care Intensive (6x sesi)", price: "Rp920.000" },
    { name: "Kids Care Program (4x sesi)", price: "Rp740.000" },
    { name: "Kids Care Intensive (6x sesi)", price: "Rp1.100.000" },
    { name: "Mom Recovery Program (4x sesi)", price: "Rp860.000" },
    { name: "Mom Recovery Intensive (6x sesi)", price: "Rp1.250.000" },
  ];

  const addons = [
    { name: "Lulur Bayi", price: "Rp40.000" },
    { name: "Lulur Kids", price: "Rp50.000" },
    { name: "Totok Wajah Mom", price: "Rp60.000" },
  ];

  const sections = [
    { title: "Layanan Bayi", data: babyServices },
    { title: "Layanan Anak", data: kidsServices },
    { title: "Layanan Ibu", data: momServices },
    { title: "Paket Hemat", data: packages },
    { title: "Add On", data: addons },
  ];

  interface ServiceItem {
    name: string;
    price: string;
  }

  const Card = ({ item }: { item: ServiceItem }) => (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.35 }}
      className="group relative rounded-[32px] border border-white/70 bg-white/70 backdrop-blur-2xl p-7 shadow-sm hover:shadow-2xl overflow-hidden"
    >
      {/* Glow hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-pink-100/40 via-white to-blue-100/40" />

      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {item.name}
        </h3>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-2xl font-semibold tracking-tight text-pink-500">
            {item.price}
          </p>

          <ChevronRight
            size={20}
            className="text-gray-400 group-hover:text-black group-hover:translate-x-1 transition"
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <main className="min-h-screen bg-[#f5f5f7] text-gray-900 overflow-hidden">

      {/* Apple Background Blur */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-pink-200/30 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-blue-200/30 blur-[140px]" />
        <div className="absolute top-[45%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-200/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition mb-12"
        >
          <ArrowLeft size={18} />
          Kembali ke Beranda
        </Link>

        {/* Hero Apple Style */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-5">
            Pricing
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Tarif yang Jelas.
            <br />
            Pelayanan Kelas Premium.
          </h1>

          <p className="mt-7 text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Transparan, profesional, dan dirancang untuk memberikan
            kenyamanan terbaik bagi Ibu serta buah hati Anda.
          </p>
        </motion.section>

        {/* Sections */}
        <div className="space-y-24">
          {sections.map((section, idx) => (
            <motion.section
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Title */}
              <div className="flex items-center gap-3 mb-10">
                <Sparkles size={18} className="text-pink-500" />
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  {section.title}
                </h2>
              </div>

              {/* Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.data.map((item, i) => (
                  <Card key={i} item={item} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28"
        >
          <div className="rounded-[40px] bg-white/70 backdrop-blur-2xl border border-white shadow-xl p-10 md:p-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              Booking
            </p>

            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Siap Reservasi?
            </h3>

            <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
              Hubungi kami sekarang dan dapatkan pelayanan home care
              profesional langsung ke rumah Anda.
            </p>

            <a
              href="https://wa.me/6283139266885"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition hover:scale-105"
            >
              <MessageCircle size={20} />
              Booking via WhatsApp
            </a>
          </div>
        </motion.section>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © 2026 BabyCare. All rights reserved.
        </div>
      </div>
    </main>
  );
}