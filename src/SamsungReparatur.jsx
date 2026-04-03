import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Footer";

export default function SamsungReparatur() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="min-h-screen text-green-900 overflow-x-hidden scroll-smooth bg-white">
      <Helmet>
        <title>Samsung Reparatur St. Pölten | Display, Akku & mehr | One 1 Shop</title>
        <meta
          name="description"
          content="Samsung Reparatur in St. Pölten: Displaytausch, Akkutausch, Ladeprobleme, Wasserschäden und Datenrettung. Schnell, professionell und persönlich bei One 1 Shop."
        />
        <meta
          name="keywords"
          content="Samsung Reparatur St. Pölten, Samsung Display Reparatur St. Pölten, Samsung Akku tauschen St. Pölten, Samsung Wasserschaden St. Pölten, Handy Reparatur St. Pölten, One 1 Shop"
        />
        <link rel="canonical" href="https://www.one1shop.at/samsung-reparatur-st-poelten" />
      </Helmet>

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

      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="uppercase tracking-[0.2em] text-green-100 text-sm mb-4">
              One 1 Shop in St. Pölten
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Samsung Reparatur in St. Pölten
            </h1>

            <p className="text-lg md:text-xl text-green-50 mb-8 leading-relaxed">
              Ob kaputtes Display, schwacher Akku, Ladeprobleme oder Wasserschaden –
              wir helfen dir bei deiner Samsung Reparatur schnell, professionell
              und persönlich direkt vor Ort.
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
    src="/images/samsung-reparatur.jpg"
    alt="Samsung Reparatur in St. Pölten"
    loading="lazy"
    className="w-full h-[240px] md:h-[380px] object-cover shadow-xl"
  />
</motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Schnelle Samsung Reparaturen vom Profi
          </h2>
          <p className="text-lg text-green-800 leading-8 mb-6">
            Wenn du eine zuverlässige Samsung Reparatur in St. Pölten suchst,
            bist du bei One 1 Shop richtig. Wir helfen dir bei häufigen Schäden
            und technischen Problemen schnell und sauber, damit du dein Gerät
            so bald wie möglich wieder verwenden kannst.
          </p>
          <p className="text-lg text-green-800 leading-8">
            Besonders oft unterstützen wir bei gesprungenen Displays, schwachen
            Akkus, Ladeproblemen, Feuchtigkeitsschäden und allgemeinen Defekten.
            Auch wenn du noch nicht genau weißt, was kaputt ist, schauen wir uns
            dein Samsung-Gerät gerne an und beraten dich persönlich vor Ort.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Häufige Samsung Reparaturen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Display Reparatur</h3>
              <p className="text-green-700 leading-7">
                Ein gesprungenes oder defektes Display ist einer der häufigsten
                Schäden bei Samsung-Geräten. Wir helfen dir bei der Samsung
                Display Reparatur in St. Pölten schnell und zuverlässig weiter.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Akkutausch</h3>
              <p className="text-green-700 leading-7">
                Wenn dein Samsung-Akku schnell leer wird, das Gerät plötzlich
                ausgeht oder die Leistung nachgelassen hat, kann ein Akkutausch
                sinnvoll sein.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Ladeprobleme</h3>
              <p className="text-green-700 leading-7">
                Wenn dein Samsung nicht mehr richtig lädt oder der Anschluss
                Probleme macht, prüfen wir die Ursache und kümmern uns um eine
                passende Lösung.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Wasserschaden</h3>
              <p className="text-green-700 leading-7">
                Bei Feuchtigkeit oder Wasserschäden zählt oft schnelles Handeln.
                Wir sehen uns dein Gerät an und beraten dich ehrlich zu den
                nächsten sinnvollen Schritten.
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
            Bei uns bekommst du nicht nur eine Reparatur, sondern persönliche
            Betreuung und ehrliche Beratung. Wir helfen dir in St. Pölten
            schnell, transparent und zuverlässig weiter, damit dein Samsung
            wieder sauber funktioniert.
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

      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Weitere Leistungen
          </h2>
<p className="text-lg text-green-800 leading-8">
  Neben der Samsung Reparatur in St. Pölten bieten wir auch allgemeine{" "}
  <a href="/handy-reparatur-st-poelten" className="underline hover:text-green-600">
    Handy Reparaturen
  </a>
  ,{" "}
  <a href="/datenrettung-st-poelten" className="underline hover:text-green-600">
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

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Jetzt Samsung Reparatur anfragen
          </h2>
          <p className="text-lg text-green-800 leading-8 mb-8">
            Melde dich bei uns oder komm direkt vorbei. Wir helfen dir gerne
            weiter und beraten dich persönlich zu deinem Samsung-Gerät.
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