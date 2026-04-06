import React, { useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Produkte() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      title: "Smartphones",
      desc: "Neue & gebrauchte Geräte",
      img: "/images/iphone-produkt.png",
      seoText:
        "Bei uns findest du Smartphones in St. Pölten – iPhone, Samsung, Xiaomi und viele weitere Marken. Neue und gebrauchte Geräte direkt vor Ort verfügbar.",
    },
    {
      title: "Handyhüllen",
      desc: "Schutz & Style",
      img: "/images/produkt1.png",
      seoText:
        "Große Auswahl an Handyhüllen in St. Pölten – von transparent bis robust. Perfekter Schutz für dein Smartphone.",
    },
    {
      title: "Panzerglas & Folien",
      desc: "Display Schutz",
      img: "/images/panzerglas-handyfolie-st-poelten.webp",
      seoText:
        "Panzerglas und Handyfolien in St. Pölten – wir bringen Schutzfolien professionell an. Auch Privacy-Folien verfügbar.",
    },
    {
      title: "Konsolen & Zubehör",
      desc: "Gaming Produkte",
      img: "/images/konsolen-zubehoer-st-poelten.webp",
      seoText:
        "PlayStation, Xbox und Nintendo Zubehör in St. Pölten. Controller, Kabel und Gaming Zubehör direkt im Shop.",
    },
    {
      title: "Smartphone Zubehör",
      desc: "Ladegeräte & Kabel",
      img: "/images/smartphone-zubehoer-st-poelten.webp",
      seoText:
        "Smartphone Zubehör in St. Pölten – Ladegeräte, Kabel, Kopfhörer und mehr. Alles sofort verfügbar.",
    },
    {
      title: "Ersatzteile & Akkus",
      desc: "Original & kompatibel",
      img: "/images/handy-ersatzteile-akku-st-poelten.webp",
      seoText:
        "Akkus und Ersatzteile für Smartphones in St. Pölten. Ideal für Reparaturen und längere Nutzung deines Geräts.",
    },
  ];

  // Custom Arrows
  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="hidden md:flex absolute right-[-40px] top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 cursor-pointer hover:scale-110 transition z-10"
    >
      <ChevronRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="hidden md:flex absolute left-[-40px] top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 cursor-pointer hover:scale-110 transition z-10"
    >
      <ChevronLeft />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-green-50">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Produkte & Zubehör in St. Pölten
        </h2>

        <p className="text-green-800 mb-6 max-w-xl mx-auto">
          Smartphones, Handyhüllen, Panzerglas, Zubehör und mehr – alles direkt bei uns im Shop erhältlich.
        </p>

        {/* SEO Hidden Text */}
        <p className="hidden">
          Handy Zubehör St. Pölten, Panzerglas St. Pölten, Smartphone kaufen St. Pölten, Handyhüllen kaufen St. Pölten, Konsolen Zubehör St. Pölten.
        </p>

        <Slider {...settings}>
          {products.map((p, i) => (
            <div key={i} className="px-3">
              <div
                onClick={() => setSelectedProduct(p)}
                className="group cursor-pointer bg-white p-6 rounded-2xl shadow-md border border-green-100 
                hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-28 mx-auto mb-4 object-contain group-hover:scale-110 transition duration-300"
                />

                <h3 className="font-semibold text-lg">
                  {p.title}
                </h3>

                <p className="text-sm text-green-700 mt-2">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        {/* MODAL */}
        {selectedProduct && (
          <div
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-8 rounded-2xl max-w-lg w-full mx-4 text-center shadow-2xl animate-fadeIn"
            >
              <h2 className="text-2xl font-bold mb-4">
                {selectedProduct.title}
              </h2>

              <p className="text-green-800 leading-relaxed">
                {selectedProduct.seoText}
              </p>

              <button
                onClick={() => setSelectedProduct(null)}
                className="mt-6 bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
              >
                Schließen
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}