"use client"
import { motion } from "framer-motion";
import Link from "next/link";

export default function TarifPage() {
  const babyServices = [
    { name: "Baby Relaxation", price: "Rp110.000" },
    { name: "Baby Therapy Massage", price: "Rp130.000" },
    { name: "Baby Spa", price: "Rp150.000" },
    { name: "Baby Physiotherapy", price: "Rp170.000" },
  ];

  const kidsServices = [
    { name: "Kids Relaxation", price: "Rp130.000" },
    { name: "Kids Therapy Massage", price: "Rp150.000" },
    { name: "Kids Spa", price: "Rp170.000" },
    { name: "Kids Physiotherapy", price: "Rp200.000" },
  ];

  const momServices = [
    { name: "Prenatal Massage", price: "Rp170.000" },
    { name: "Postpartum Massage", price: "Rp170.000" },
    { name: "Lactation Massage", price: "Rp150.000" },
    { name: "Mom Spa", price: "Rp220.000" },
    { name: "Reguler Mom Massage", price: "Rp180.000" },
  ];

  const physioServices = [
    { name: "Prenatal Physiotherapy", price: "Rp230.000" },
    { name: "Postpartum Physiotherapy", price: "Rp230.000" },
    { name: "Physiotherapy General", price: "Rp220.000" },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const Section = ({ title, data }: any) => (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="mb-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item: any, i: number) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="bg-white p-6 rounded-2xl shadow-sm border border-pink-100 hover:shadow-md hover:scale-[1.02] transition-all"
          >
            <h3 className="font-semibold text-lg text-gray-700">{item.name}</h3>
            <p className="text-pink-500 font-extrabold text-xl mt-3">
              {item.price}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <main className="py-24 px-6 bg-[#fffafa] min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <Link href="/" className="text-pink-500 font-medium mb-8 inline-block hover:underline">
          ← Kembali ke Beranda
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-900">
          Daftar Tarif Layanan
        </h1>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
          Investasi terbaik untuk kesehatan dan kenyamanan Ibu serta buah hati tercinta.
        </p>

        <Section title="👶 Layanan Bayi" data={babyServices} />
        <Section title="🧒 Layanan Anak" data={kidsServices} />
        <Section title="👩 Layanan Ibu" data={momServices} />
        <Section title="🏥 Fisioterapi" data={physioServices} />
        <Section title="🎁 Paket Hemat" data={packages} />
        <Section title="✨ Add On" data={addons} />

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-20"
        >
          <a
            href="https://wa.me/6283139266885"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            Booking via WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}