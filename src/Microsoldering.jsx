import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";

export default function Microsoldering() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="min-h-screen text-green-900 overflow-x-hidden scroll-smooth bg-white">
      <Helmet>
        <title>Microsoldering St. Pölten | Platinen- & Motherboard-Reparatur | One 1 Shop</title>
        <meta
          name="description"
          content="Microsoldering in St. Pölten: Präzise Reparaturen auf Platinen und Motherboards bei komplexen Defekten. Persönlich und professionell bei One 1 Shop."
        />
        <meta
          name="keywords"
          content="Microsoldering St. Pölten, Platinen Reparatur St. Pölten, Motherboard Reparatur St. Pölten, Handy Platine reparieren St. Pölten, One 1 Shop"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.one1shop.at/microsoldering" />
      </Helmet>

      

      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="uppercase tracking-[0.2em] text-green-100 text-sm mb-4">
              One 1 Shop in St. Pölten
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Microsoldering in St. Pölten
            </h1>

            <p className="text-lg md:text-xl text-green-50 mb-8 leading-relaxed">
              Bei komplexen Defekten auf Platinen und Motherboards helfen präzise
              Reparaturen unter dem Mikroskop. Wir unterstützen dich persönlich
              und professionell direkt in St. Pölten.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/#kontakt"
                className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition"
              >
                Jetzt Kontakt aufnehmen
              </a>

              <a
                href="https://wa.me/4369917432373"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
              >
                WhatsApp schreiben
              </a>
            </div>
          </div>

<motion.div
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.3 }}
  className="overflow-hidden rounded-xl"
>
  <img
    src="/images/microsoldering.jpg"
    alt="Microsoldering in St. Pölten"
    loading="lazy"
    className="w-full h-[240px] md:h-[380px] object-cover shadow-xl"
  />
</motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Präzise Reparaturen bei komplexen Defekten
          </h2>
          <p className="text-lg text-green-800 leading-8 mb-6">
            Nicht jeder Schaden lässt sich mit einem einfachen Tausch von Display,
            Akku oder Ladebuchse lösen. Bei bestimmten Defekten auf der Platine
            oder am Motherboard ist besonders präzises Arbeiten nötig.
          </p>
          <p className="text-lg text-green-800 leading-8">
            Genau hier kommt Microsoldering ins Spiel. Bei One 1 Shop in
            St. Pölten prüfen wir komplexe Fälle sorgfältig und beraten dich
            ehrlich, ob eine Reparatur sinnvoll und möglich ist.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Wann Microsoldering sinnvoll sein kann
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Defekte auf der Platine</h3>
              <p className="text-green-700 leading-7">
                Wenn ein Problem direkt auf der Platine sitzt, reicht ein normaler
                Teiletausch oft nicht aus. Hier kann präzise Feinarbeit notwendig sein.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Lade- und Stromprobleme</h3>
              <p className="text-green-700 leading-7">
                Manche Fehler bei Stromversorgung, Aufladen oder plötzlichem Ausfall
                haben ihre Ursache tiefer im Gerät und müssen genauer analysiert werden.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Wasserschäden mit Folgeschäden</h3>
              <p className="text-green-700 leading-7">
                Nach Feuchtigkeit oder Wasserkontakt können Korrosion und feine
                Schäden auf Bauteilebene entstehen, die besondere Reparaturarbeit erfordern.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Komplexe Motherboard-Reparaturen</h3>
              <p className="text-green-700 leading-7">
                Bei bestimmten Fällen ist eine Reparatur direkt am Motherboard die
                sinnvollste Möglichkeit, um ein Gerät wieder funktionsfähig zu machen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Warum One 1 Shop?
          </h2>
          <p className="text-lg text-green-800 leading-8 mb-8">
            Bei komplexeren Defekten zählen Erfahrung, Genauigkeit und eine ehrliche
            Einschätzung. Wir schauen uns dein Gerät genau an und beraten dich
            transparent zu den nächsten sinnvollen Schritten.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              präzise Feinarbeit
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              ehrliche Einschätzung
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              persönliche Beratung
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              direkt in St. Pölten
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Weitere Leistungen
          </h2>
          <p className="text-lg text-green-800 leading-8">
  Neben Microsoldering in St. Pölten bieten wir auch{" "}
  <a href="/handy-reparatur-st-poelten" className="underline hover:text-green-600">
    Handy Reparaturen
  </a>
  ,{" "}
  <a href="/datenrettung" className="underline hover:text-green-600">
    Datenrettung
  </a>
  ,{" "}
  <a href="/konsolen-reparatur" className="underline hover:text-green-600">
    Konsolen Reparatur
  </a>
  ,{" "}
  <a href="/iphone-reparatur" className="underline hover:text-green-600">
    iPhone Reparaturen
  </a>
  ,{" "}
  <a href="/samsung-reparatur" className="underline hover:text-green-600">
    Samsung Reparaturen
  </a>{" "}
  sowie den{" "}
  <a href="/handy-verkauf-zubehoer" className="underline hover:text-green-600">
    Verkauf von Geräten und Zubehör
  </a>{" "}
  an.
</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Jetzt Microsoldering anfragen
          </h2>
          <p className="text-lg text-green-800 leading-8 mb-8">
            Wenn dein Gerät einen komplexeren Defekt hat, melde dich bei uns.
            Wir schauen uns den Fall gerne persönlich an.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
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