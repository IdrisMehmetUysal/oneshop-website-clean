import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";

export default function IphoneReparatur() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="min-h-screen text-green-900 overflow-x-hidden scroll-smooth bg-white">
      <Helmet>
        <title>iPhone Reparatur St. Pölten | Display, Akku & mehr | One 1 Shop</title>
        <meta
          name="description"
          content="iPhone Reparatur in St. Pölten: Displaytausch, Akkutausch, Ladeprobleme, Wasserschäden und Datenrettung. Schnell, professionell und persönlich bei One 1 Shop."
        />
        <meta
          name="keywords"
          content="iPhone Reparatur St. Pölten, iPhone Display Reparatur St. Pölten, iPhone Akku tauschen St. Pölten, iPhone Wasserschaden St. Pölten, One 1 Shop"
        />
        <link rel="canonical" href="https://www.one1shop.at/iphone-reparatur-st-poelten" />
      </Helmet>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <a href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="One 1 Shop Logo"
              className="h-16"
            />
          </a>

          <div className="md:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-green-800 focus:outline-none"
            >
              {navOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="space-x-6 hidden md:block">
            <a
              href="/#leistungen"
              className="text-green-800 font-medium transition-all duration-300 hover:underline hover:text-green-600"
            >
              Leistungen
            </a>
            <a
              href="/#produkte"
              className="text-green-800 font-medium transition-all duration-300 hover:underline hover:text-green-600"
            >
              Produkte
            </a>
            <a
              href="/#kontakt"
              className="text-green-800 font-medium transition-all duration-300 hover:underline hover:text-green-600"
            >
              Kontakt
            </a>
          </div>

          <AnimatePresence>
            {navOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-40 py-6 space-y-4 text-center"
              >
                <a
                  href="/#leistungen"
                  onClick={() => setNavOpen(false)}
                  className="block text-green-800 font-medium hover:underline"
                >
                  Leistungen
                </a>
                <a
                  href="/#produkte"
                  onClick={() => setNavOpen(false)}
                  className="block text-green-800 font-medium hover:underline"
                >
                  Produkte
                </a>
                <a
                  href="/#kontakt"
                  onClick={() => setNavOpen(false)}
                  className="block text-green-800 font-medium hover:underline"
                >
                  Kontakt
                </a>
                <a
                  href="/impressum"
                  onClick={() => setNavOpen(false)}
                  className="block text-green-800 font-medium hover:underline"
                >
                  Impressum
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="uppercase tracking-[0.2em] text-green-100 text-sm mb-4">
              One 1 Shop in St. Pölten
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              iPhone Reparatur in St. Pölten
            </h1>

            <p className="text-lg md:text-xl text-green-50 mb-8 leading-relaxed">
              Ob Displaybruch, schwacher Akku, Ladeprobleme oder Wasserschaden –
              wir helfen dir schnell, professionell und persönlich direkt vor Ort.
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

          <div>
            <img
  src="/images/iphone-reparatur.jpg"
  alt="iPhone Reparatur in St. Pölten"
  loading="lazy"
  className="w-full h-[240px] md:h-[380px] object-cover rounded-xl shadow-xl hover:scale-105 transition duration-500"
/>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Schnelle iPhone Reparaturen vom Profi
          </h2>
          <p className="text-lg text-green-800 leading-8 mb-6">
            Wenn du eine zuverlässige iPhone Reparatur in St. Pölten suchst,
            bist du bei One 1 Shop richtig. Wir reparieren häufige Schäden und
            Probleme schnell und sauber, damit du dein Gerät so bald wie möglich
            wieder nutzen kannst.
          </p>
          <p className="text-lg text-green-800 leading-8">
            Besonders oft helfen wir bei kaputten Displays, schwachen Akkus,
            Ladeproblemen, Wasserschäden und allgemeinen Defekten. Auch wenn du
            dir unsicher bist, was genau kaputt ist, schauen wir uns dein iPhone
            gerne an und beraten dich persönlich.
          </p>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Häufige iPhone Reparaturen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Display Reparatur</h3>
              <p className="text-green-700 leading-7">
                Ein gesprungenes oder defektes Display gehört zu den häufigsten
                Schäden. Wir helfen dir bei der iPhone Display Reparatur in
                St. Pölten schnell und zuverlässig.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Akkutausch</h3>
              <p className="text-green-700 leading-7">
                Wenn dein Akku schnell leer wird oder dein iPhone plötzlich
                ausgeht, kann ein Akkutausch die beste Lösung sein.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Ladeprobleme</h3>
              <p className="text-green-700 leading-7">
                Wenn dein iPhone nicht mehr richtig lädt oder die Ladebuchse
                Probleme macht, prüfen wir die Ursache und beheben den Defekt.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Wasserschaden</h3>
              <p className="text-green-700 leading-7">
                Auch bei Feuchtigkeit oder Wasserschaden ist schnelles Handeln
                wichtig. Wir schauen uns dein Gerät an und beraten dich ehrlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warum wir */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Warum One 1 Shop?
          </h2>
          <p className="text-lg text-green-800 leading-8 mb-8">
            Bei uns bekommst du nicht nur eine Reparatur, sondern eine
            persönliche Betreuung. Wir nehmen uns Zeit für dein Anliegen und
            helfen dir in St. Pölten schnell, transparent und zuverlässig weiter.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              persönliche Beratung
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              schnelle Hilfe
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              professionelle Reparatur
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              direkt in St. Pölten
            </span>
          </div>
        </div>
      </section>

      {/* Interne Verlinkung */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Weitere Leistungen
          </h2>
          <p className="text-lg text-green-800 leading-8">
  Neben der iPhone Reparatur in St. Pölten bieten wir auch allgemeine{" "}
  <a href="/#leistungen" className="underline hover:text-green-600">
    Handy Reparaturen
  </a>
  ,{" "}
  <a href="/#leistungen" className="underline hover:text-green-600">
    Datenrettung
  </a>
  ,{" "}
  <a href="/konsolen-reparatur-st-poelten" className="underline hover:text-green-600">
    Konsolenservice
  </a>{" "}
  sowie den{" "}
  <a href="/handy-verkauf-zubehoer-st-poelten" className="underline hover:text-green-600">
    Verkauf von Geräten und Zubehör
  </a>{" "}
  an.
</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Jetzt iPhone Reparatur anfragen
          </h2>
          <p className="text-lg text-green-800 leading-8 mb-8">
            Melde dich bei uns oder komm direkt vorbei. Wir helfen dir gerne
            weiter und beraten dich persönlich zu deinem iPhone.
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

      <Footer />
    </main>
  );
}
