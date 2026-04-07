import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const heroSlides = [
    {
      title: "Handy Reparatur in St.\u00A0Pölten",
      highlight: "Schnell & professionell.",
      desc: "Display kaputt, Akku schwach oder Ladeprobleme? Wir helfen dir oft noch am selben Tag – direkt am Bahnhofplatz.",
      img: "/images/header1.png",
      alt: "Handy Reparatur St. Pölten One 1 Shop",
    },
    {
      title: "Display kaputt?",
      highlight: "Wie neu in kurzer Zeit.",
      desc: "Professioneller Displaytausch für iPhone, Samsung & mehr – schnell und zuverlässig.",
      img: "/images/header2.png",
      alt: "Display Reparatur Smartphone St. Pölten",
    },
    {
      title: "Akku schwach?",
      highlight: "Mehr Power sofort.",
      desc: "Wir tauschen deinen Akku schnell aus – damit dein Smartphone wieder den ganzen Tag hält.",
      img: "/images/header3.png",
      alt: "Akku Tausch Handy St. Pölten",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <header className="bg-gradient-to-br from-green-900 via-green-800 to-green-600 text-white px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* TEXT */}
        <div className="text-center md:text-left">
          {/* ✅ SEO H1 (unsichtbar für User) */}
          <h1 className="sr-only">Handy Reparatur St. Pölten – One 1 Shop</h1>

          <p className="uppercase tracking-widest text-green-200 text-xs mb-3">
            📍 St. Pölten – Bahnhofplatz 15
          </p>

          {/* FLOATING */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* SLIDE TEXT */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                {slide.title} <br />
                <span className="text-green-300">{slide.highlight}</span>
              </p>

              <p className="text-green-100 mb-6 text-sm md:text-lg">
                {slide.desc}
              </p>
            </motion.div>
          </motion.div>

          {/* TRUST */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 text-xs md:text-sm">
            <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">
              ⭐ Top Bewertungen
            </span>
            <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">
              ⚡ Oft am selben Tag
            </span>
            <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">
              📍 Direkt vor Ort
            </span>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="https://wa.me/4369917432373"
              className="bg-green-500 text-white px-6 py-4 rounded-xl font-semibold text-lg text-center hover:bg-green-400 transition"
            >
              💬 Sofort WhatsApp schreiben
            </a>

            <a
              href="#kontakt"
              className="bg-white text-green-800 px-6 py-4 rounded-xl font-semibold text-lg text-center hover:bg-green-100 transition"
            >
              📍 Jetzt vorbeikommen
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <motion.img
            key={slide.img}
            src={slide.img}
            alt={slide.alt}
            className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* BADGE */}
          <div className="absolute -bottom-4 -left-4 bg-white text-green-900 px-4 py-2 rounded-xl shadow-lg text-sm font-semibold">
            Persönliche Beratung im Shop
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
