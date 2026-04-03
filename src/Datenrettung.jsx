import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Footer";

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
              Datenrettung in St. Pölten
            </h1>

            <p className="text-lg md:text-xl text-green-50 mb-8 leading-relaxed">
              Wichtige Fotos, Kontakte oder Dateien verloren? Wir helfen dir bei
              der Datenrettung von Smartphones und defekten Geräten schnell,
              diskret und persönlich weiter.
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
>
  <img
    src="/images/datenrettung.jpg"
    alt="Datenrettung in St. Pölten"
    loading="lazy"
    className="w-full h-[240px] md:h-[380px] object-cover rounded-xl shadow-xl"
  />
</motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hilfe bei verlorenen oder nicht erreichbaren Daten
          </h2>
          <p className="text-lg text-green-800 leading-8 mb-6">
            Wenn ein Smartphone nicht mehr startet, einen Wasserschaden hatte
            oder plötzlich wichtige Inhalte fehlen, ist schnelle Hilfe oft
            entscheidend. Bei One 1 Shop in St. Pölten unterstützen wir dich
            bei der Datenrettung von Fotos, Videos, Kontakten und anderen
            wichtigen Dateien.
          </p>
          <p className="text-lg text-green-800 leading-8">
            Nicht jeder Fall ist gleich – deshalb schauen wir uns dein Gerät
            individuell an und beraten dich ehrlich, welche Schritte sinnvoll
            sind. Unser Ziel ist es, dir so gut wie möglich beim Retten deiner
            wichtigen Daten zu helfen.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Wann Datenrettung sinnvoll sein kann
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Handy startet nicht mehr</h3>
              <p className="text-green-700 leading-7">
                Wenn dein Gerät schwarz bleibt, nicht mehr hochfährt oder sich
                plötzlich ausgeschaltet hat, können sich wichtige Daten oft noch
                auf dem Gerät befinden.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Wasserschaden oder Feuchtigkeit</h3>
              <p className="text-green-700 leading-7">
                Nach Kontakt mit Wasser ist schnelles Handeln wichtig. Je früher
                das Gerät geprüft wird, desto besser stehen die Chancen, Inhalte
                noch zu sichern.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Fotos, Videos oder Kontakte wichtig</h3>
              <p className="text-green-700 leading-7">
                Oft geht es nicht nur um das Gerät selbst, sondern um Erinnerungen
                und wichtige persönliche oder berufliche Daten.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Defektes oder beschädigtes Smartphone</h3>
              <p className="text-green-700 leading-7">
                Auch bei Displaybruch, technischen Defekten oder anderen Schäden
                kann geprüft werden, ob eine Datenrettung noch möglich ist.
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
            Bei sensiblen Daten zählen Vertrauen, Ehrlichkeit und persönliche
            Betreuung. Wir nehmen uns Zeit für dein Anliegen und helfen dir in
            St. Pölten so transparent und professionell wie möglich weiter.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              persönliche Beratung
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              diskrete Abwicklung
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              ehrliche Einschätzung
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
  Neben der Datenrettung in St. Pölten bieten wir auch{" "}
  <a href="/handy-reparatur-st-poelten" className="underline hover:text-green-600">
    Handy Reparaturen
  </a>
  ,{" "}
  <a href="/iphone-reparatur-st-poelten" className="underline hover:text-green-600">
    iPhone Reparaturen
  </a>
  ,{" "}
  <a href="/samsung-reparatur-st-poelten" className="underline hover:text-green-600">
    Samsung Reparaturen
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
            Jetzt Datenrettung anfragen
          </h2>
          <p className="text-lg text-green-800 leading-8 mb-8">
            Wenn dir wichtige Daten fehlen oder dein Gerät Probleme macht, melde
            dich bei uns. Wir schauen uns deinen Fall gerne persönlich an.
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