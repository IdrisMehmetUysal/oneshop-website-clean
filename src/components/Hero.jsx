import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const heroSlides = [
    {
      title: "Handy kaputt?",
      highlight: "Wir reparieren es sofort.",
      desc: "iPhone, Samsung & mehr – schnell & zuverlässig.",
      img: "/images/header1.png",
    },
    {
      title: "Display gebrochen?",
      highlight: "Wie neu in kurzer Zeit.",
      desc: "Professioneller Displaytausch direkt vor Ort.",
      img: "/images/header2.png",
    },
    {
      title: "Akku schwach?",
      highlight: "Wir tauschen ihn sofort.",
      desc: "Mehr Power für dein Smartphone.",
      img: "/images/header3.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!heroSlides.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide] || heroSlides[0];

  if (!slide) return null;

  return (
    <header className="bg-gradient-to-br from-green-900 via-green-800 to-green-600 text-white px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* TEXT */}
        <div className="text-center md:text-left">
          <p className="uppercase tracking-widest text-green-200 text-xs mb-3">
            📍 St. Pölten – Bahnhofplatz 15
          </p>
          {/* FLOATING WRAPPER */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            {/* TEXT ANIMATION */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                {slide.title} <br />
                <span className="text-green-300">{slide.highlight}</span>
              </h1>

              <p className="text-green-100 mb-6 text-sm md:text-lg">
                {slide.desc}
              </p>
            </motion.div>
          </motion.div>

          {/* TRUST */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 text-xs md:text-sm">
            <span className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full">
              ⭐ 5.0 Google
            </span>
            <span className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full">
              ⚡ Schnell
            </span>
            <span className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full">
              🔧 Profi
            </span>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="https://wa.me/4369917432373"
              className="bg-green-500 text-white px-6 py-4 rounded-xl font-semibold text-lg text-center hover:bg-green-400 transition"
            >
              💬 WhatsApp schreiben
            </a>

            <a
              href="#kontakt"
              className="bg-white text-green-800 px-6 py-4 rounded-xl font-semibold text-lg text-center hover:bg-green-100 transition"
            >
              Anfrage starten
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <motion.img
            key={slide.img}
            src={slide.img}
            alt="Hero"
            className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          <div className="absolute -bottom-4 -left-4 bg-white text-green-900 px-4 py-2 rounded-xl shadow-lg text-sm font-semibold">
            ⚡ Viele Reparaturen am selben Tag
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center md:justify-start gap-2 mt-6">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentSlide === index ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
