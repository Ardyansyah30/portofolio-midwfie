"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface GalleryItem {
  image: string;
  text: string;
}

interface Service {
  title: string;
  sub: string;
  desc: string;
  detail: string;
  img: string;
  gallery: GalleryItem[];
}

export default function Services() {
  const services: Service[] = [
    {
      title: "Baby Massage",
      sub: "Pijat Bayi",
      desc: "Sentuhan lembut untuk mendukung tumbuh kembang optimal si kecil.",
      detail:
        "Manfaat Utama: Meningkatkan kualitas tidur, melancarkan pencernaan, serta menstimulasi saraf motorik bayi.",
      img: "/bayi-pijat1.jpeg",
      gallery: [
        { image: "/bayi-pijat1.jpeg", text: "Membantu bayi tidur lebih nyenyak dan nyaman." },
        { image: "/bayi-pijat2.jpeg", text: "Merangsang perkembangan motorik dan sensorik bayi." },
        { image: "/bayi-pijat3.jpeg", text: "Melancarkan sistem pencernaan dan mengurangi kolik." },
        { image: "/bayi-pijat4.jpeg", text: "Meningkatkan bonding antara ibu dan bayi." },
        { image: "/bayi-pijat5.jpeg", text: "Membantu meningkatkan daya tahan tubuh bayi." },
      ],
    },
    {
      title: "Mom Treatment",
      sub: "Perawatan Ibu",
      desc: "Waktu istirahat berkualitas untuk memulihkan kebugaran.",
      detail:
        "Manfaat Utama: Mengurangi ketegangan otot, melancarkan sirkulasi darah, dan memberikan efek relaksasi mendalam.",
      img: "/mom1.jpeg",
      gallery: [
        { image: "/mom1.jpeg", text: "Meredakan pegal dan kelelahan setelah aktivitas harian." },
        { image: "/mom2.jpeg", text: "Membantu tubuh lebih rileks dan nyaman." },
        { image: "/mom3.jpeg", text: "Melancarkan peredaran darah dan metabolisme." },
        { image: "/mom4.jpeg", text: "Menjaga mood agar lebih positif dan tenang." },
        { image: "/mom5.jpeg", text: "Meningkatkan kualitas istirahat dan tidur." },
      ],
    },
  ];

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setCurrentImage(0);
  };

  const closeModal = () => {
    setSelectedService(null);
    setCurrentImage(0);
  };

  const nextSlide = () => {
    if (!selectedService) return;

    setCurrentImage((prev) =>
      prev === selectedService.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    if (!selectedService) return;

    setCurrentImage((prev) =>
      prev === 0 ? selectedService.gallery.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!selectedService) return;

    const timer = setInterval(() => {
      setCurrentImage((prev) =>
        prev === selectedService.gallery.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(timer);
  }, [selectedService]);

  return (
    <section id="services" className="bg-[#f5f5f7] py-28 font-[SF Pro Display,Inter,sans-serif]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-gray-500 font-medium mb-4">
            PREMIUM CARE
          </p>

          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 leading-tight">
            Designed for
            <br />
            Moms & Babies.
          </h2>

          <p className="text-lg md:text-xl text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
            Perawatan eksklusif dengan sentuhan profesional dan nyaman.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              onClick={() => openModal(service)}
              className="group cursor-pointer rounded-[32px] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition"
            >
              <div className="relative h-[420px]">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width:768px)100vw,50vw"
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <p className="text-sm font-medium opacity-80">
                    {service.sub}
                  </p>

                  <h3 className="text-3xl font-semibold mt-1">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm md:text-base text-white/85 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="absolute top-6 right-6 bg-white/80 rounded-full p-3">
                  <ArrowUpRight size={20} className="text-black" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[36px] overflow-hidden max-w-4xl w-full relative shadow-2xl max-h-[92vh] overflow-y-auto"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              {/* Close */}
              <button
                onClick={closeModal}
                aria-label="Tutup detail layanan"
                className="absolute top-5 right-5 z-50 bg-white rounded-full p-3 shadow-lg"
              >
                <X size={22} />
              </button>

              <div className="p-6 md:p-10">

                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
                  {selectedService.title}
                </h3>

                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                  {selectedService.detail}
                </p>

                {/* Slider */}
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImage}
                      className="relative w-full h-[280px] md:h-[420px] bg-gray-100 rounded-3xl overflow-hidden"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.45 }}
                    >
                      <Image
                        src={selectedService.gallery[currentImage].image}
                        alt=""
                        fill
                        sizes="100vw"
                        className="object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Prev */}
                  <button
                    onClick={prevSlide}
                    aria-label="Foto sebelumnya"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/85 rounded-full p-3 shadow-xl"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  {/* Next */}
                  <button
                    onClick={nextSlide}
                    aria-label="Foto selanjutnya"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/85 rounded-full p-3 shadow-xl"
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>

                {/* Caption */}
                <motion.p
                  key={currentImage + "-text"}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-base md:text-lg text-gray-700 mt-6 font-medium leading-relaxed"
                >
                  {selectedService.gallery[currentImage].text}
                </motion.p>

                {/* Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {selectedService.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`h-2 rounded-full transition-all ${
                        currentImage === index
                          ? "w-8 bg-black"
                          : "w-2 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}