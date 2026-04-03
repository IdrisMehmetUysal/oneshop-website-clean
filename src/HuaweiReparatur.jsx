import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";

export default function HuaweiReparatur() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="min-h-screen text-green-900 bg-white">

      <Helmet>
        <title>Huawei Reparatur St. Pölten | Display, Akku & Software Hilfe | One 1 Shop</title>
        <meta
          name="description"
          content="Huawei Reparatur in St. Pölten: Displaybruch, Akku, Ladeprobleme und Hilfe bei Google-Diensten & Apps. Persönlich und professionell bei One 1 Shop."
        />
        <link rel="canonical" href="https://www.one1shop.at/huawei-reparatur" />
      </Helmet>

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <a href="/">
            <img src="/images/logo.png" alt="Logo" className="h-16" />
          </a>

          <div className="md:hidden">
            <button onClick={() => setNavOpen(!navOpen)}>☰</button>
          </div>

          <div className="hidden md:flex gap-6">
            <a href="/#leistungen">Leistungen</a>
            <a href="/#produkte">Produkte</a>
            <a href="/#kontakt">Kontakt</a>
          </div>

          <AnimatePresence>
            {navOpen && (
              <motion.div className="absolute top-full left-0 w-full bg-white text-center py-6 space-y-4">
                <a href="/#leistungen">Leistungen</a>
                <a href="/#produkte">Produkte</a>
                <a href="/#kontakt">Kontakt</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Huawei Reparatur in St. Pölten
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Dein Huawei funktioniert nicht mehr richtig? Display kaputt, Akku schwach
          oder Probleme mit Apps? Wir helfen dir schnell und persönlich direkt vor Ort.
        </p>
      </section>

      {/* SPEZIELL HUAWEI */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Besonderheiten bei Huawei Geräten
        </h2>

        <p className="text-green-800 leading-8 mb-4">
          Huawei Smartphones unterscheiden sich in einigen Punkten deutlich von anderen Marken.
          Vor allem neuere Modelle haben oft keine klassischen Google-Dienste mehr,
          was bei Apps und Nutzung zu Problemen führen kann.
        </p>

        <p className="text-green-800 leading-8">
          Neben der klassischen Reparatur helfen wir dir auch dabei,
          dein Gerät wieder optimal einzurichten und Lösungen für App-Probleme zu finden.
        </p>
      </section>

      {/* PROBLEME */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Häufige Huawei Probleme
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl mb-3">
                Google Dienste fehlen
              </h3>
              <p className="text-green-700">
                Viele Huawei Geräte haben kein Google Play Store. Wir helfen dir
                mit Alternativen und richtiger Einrichtung.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl mb-3">
                App Probleme
              </h3>
              <p className="text-green-700">
                Apps funktionieren nicht richtig oder fehlen? Wir zeigen dir Lösungen
                und richten alles sauber ein.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl mb-3">
                Displaybruch
              </h3>
              <p className="text-green-700">
                Gesplittertes Display oder Touch reagiert nicht mehr? Wir kümmern uns
                um einen schnellen Austausch.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl mb-3">
                Akku Probleme
              </h3>
              <p className="text-green-700">
                Akku hält nicht mehr lange oder lädt nicht richtig? Wir prüfen und ersetzen ihn.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WARUM WIR */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Warum One 1 Shop?
        </h2>

        <p className="text-green-800 max-w-3xl mx-auto leading-8">
          Bei uns bekommst du nicht nur eine Reparatur, sondern echte Beratung.
          Gerade bei Huawei Geräten ist es wichtig, sich auch mit Software und Apps auszukennen.
          Wir nehmen uns Zeit und finden die beste Lösung für dich.
        </p>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-green-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Jetzt Huawei reparieren lassen
        </h2>

        <a
          href="https://wa.me/4369917432373"
          className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold"
        >
          💬 WhatsApp schreiben
        </a>
      </section>

      <Footer />
    </main>
  );
}