import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Datenrettung() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="min-h-screen text-green-900 overflow-x-hidden scroll-smooth bg-white">
      <Helmet>
        <title>Datenrettung St. Pölten | Fotos, Kontakte & Dateien retten | One 1 Shop</title>
        <meta
          name="description"
          content="Datenrettung in St. Pölten für Smartphones und defekte Geräte. Wir helfen bei Fotos, Kontakten, Dateien, Wasserschäden und Geräten, die nicht mehr richtig starten."
        />
        <meta
          name="keywords"
          content="Datenrettung St. Pölten, Handy Daten retten St. Pölten, Fotos retten Handy St. Pölten, Smartphone Datenrettung St. Pölten, One 1 Shop"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.one1shop.at/datenrettung-st-poelten" />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center">
          
          {/* TEXT */}
          <div className="text-center md:text-left">
            <p className="uppercase tracking-[0.2em] text-green-100 text-xs md:text-sm mb-3 md:mb-4">
              One 1 Shop in St. Pölten
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
              Datenrettung in St. Pölten
            </h1>

            <p className="text-base md:text-xl text-green-50 mb-6 md:mb-8 leading-relaxed">
              Wichtige Fotos, Kontakte oder Dateien verloren? Wir helfen dir bei
              der Datenrettung von Smartphones und defekten Geräten schnell,
              diskret und persönlich weiter.
            </p>

            {/* BUTTONS FIXED */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <a
                href="/#kontakt"
                className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition text-center"
              >
                Jetzt Kontakt aufnehmen
              </a>

              <a
                href="https://wa.me/4369917432373"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition text-center"
              >
                WhatsApp schreiben
              </a>
            </div>
          </div>

          {/* IMAGE FIX */}
          <motion.div
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.3 }}
>
  <img
    src="/images/datenrettung-st-poelten.jpg"
    alt="Datenrettung in St. Pölten"
    loading="lazy"
    className="w-full h-[240px] md:h-[380px] object-cover rounded-xl shadow-xl"
  />
</motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Hilfe bei verlorenen oder nicht erreichbaren Daten
          </h2>

          <p className="text-base md:text-lg text-green-800 leading-7 md:leading-8 mb-4 md:mb-6">
            Wenn ein Smartphone nicht mehr startet, einen Wasserschaden hatte
            oder plötzlich wichtige Inhalte fehlen, ist schnelle Hilfe oft
            entscheidend. Bei One 1 Shop in St. Pölten unterstützen wir dich
            bei der Datenrettung von Fotos, Videos, Kontakten und anderen
            wichtigen Dateien.
          </p>

          <p className="text-base md:text-lg text-green-800 leading-7 md:leading-8">
            Nicht jeder Fall ist gleich – deshalb schauen wir uns dein Gerät
            individuell an und beraten dich ehrlich, welche Schritte sinnvoll
            sind. Unser Ziel ist es, dir so gut wie möglich beim Retten deiner
            wichtigen Daten zu helfen.
          </p>
        </div>
      </section>

      {/* GRID FIX */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Wann Datenrettung sinnvoll sein kann
          </h2>

          <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2">
            <div className="bg-white rounded-xl md:rounded-2xl shadow p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                Handy startet nicht mehr
              </h3>
              <p className="text-green-700 leading-7 text-sm md:text-base">
                Wenn dein Gerät schwarz bleibt, nicht mehr hochfährt oder sich
                plötzlich ausgeschaltet hat, können sich wichtige Daten oft noch
                auf dem Gerät befinden.
              </p>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl shadow p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                Wasserschaden oder Feuchtigkeit
              </h3>
              <p className="text-green-700 leading-7 text-sm md:text-base">
                Nach Kontakt mit Wasser ist schnelles Handeln wichtig.
              </p>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl shadow p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                Fotos, Videos oder Kontakte wichtig
              </h3>
              <p className="text-green-700 leading-7 text-sm md:text-base">
                Oft geht es nicht nur um das Gerät selbst.
              </p>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl shadow p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                Defektes oder beschädigtes Smartphone
              </h3>
              <p className="text-green-700 leading-7 text-sm md:text-base">
                Auch bei Displaybruch oder Defekten möglich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FIX */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Jetzt Datenrettung anfragen
          </h2>

          <p className="text-base md:text-lg text-green-800 leading-7 md:leading-8 mb-6 md:mb-8">
            Wenn dir wichtige Daten fehlen oder dein Gerät Probleme macht, melde
            dich bei uns.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#kontakt"
              className="bg-green-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Kontakt aufnehmen
            </a>

            <a
              href="tel:+4369917432373"
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
