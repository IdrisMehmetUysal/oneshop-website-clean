import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

const GoogleReviews = () => {
  const reviews = [
    "Top Service, super freundlich und schnelle Reparatur! ⭐⭐⭐⭐⭐",
    "Sehr empfehlenswert, mein Handy funktioniert wieder perfekt! ⭐⭐⭐⭐⭐",
    "Beste Beratung, top Preise und schnelle Abwicklung. ⭐⭐⭐⭐⭐",
    "Super Team, haben mir sofort geholfen! Danke! ⭐⭐⭐⭐⭐",
    "Beste Handy-Reparatur in der Stadt – immer wieder gerne! ⭐⭐⭐⭐⭐",
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      id="google-reviews"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-2xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-green-900 flex justify-center items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google Logo"
            className="h-6 md:h-10"
          />
          Bewertungen
        </h2>

        {/* CARD */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">

          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index}>
                <p className="text-green-800 text-base md:text-xl font-semibold min-h-[80px] flex items-center justify-center px-2 md:px-4">
                  {review}
                </p>
              </div>
            ))}
          </Slider>

          {/* INFO */}
          <div className="flex flex-col items-center mt-6 gap-2">
            <p className="text-green-900 font-semibold text-sm md:text-base">
              ⭐ 5.0 Bewertung
            </p>

            <p className="text-green-700 text-sm md:text-lg">
              1000+ zufriedene Kunden 🚀
            </p>

            {/* BUTTON */}
            <a
              href="https://www.google.com/search?q=One+1+Shop+Handy+Service#lrd=0x477278aedb1cc14b:0xb890f91911e7f4f5,1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-sm md:text-lg shadow hover:bg-green-500 transition"
            >
              Alle Bewertungen ansehen
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
export default GoogleReviews;