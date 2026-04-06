import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function UeberUns() {
  return (
    <main className="min-h-screen text-green-900 bg-white">

      <Helmet>
        <title>Über uns | One 1 Shop St. Pölten</title>
        <meta
          name="description"
          content="One 1 Shop in St. Pölten – schnelle, ehrliche Reparaturen für Handy, Laptop und Konsolen. Direkt am Bahnhofplatz für dich da."
        />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-4 py-16 md:py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Über uns
        </h1>

        <p className="text-sm md:text-xl max-w-xl mx-auto">
          Dein Technik-Partner in St. Pölten – schnell, ehrlich und unkompliziert.
        </p>
      </section>

      {/* STORY */}
      <section className="py-14 md:py-20 px-4 max-w-3xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Wer wir sind
        </h2>

        <p className="mb-4 text-sm md:text-base leading-relaxed text-green-800">
          Bei One 1 Shop in St. Pölten helfen wir täglich Kunden mit kaputten Smartphones,
          Laptops und Konsolen – schnell, ehrlich und unkompliziert.
        </p>

        <p className="mb-4 text-sm md:text-base leading-relaxed text-green-800">
          Ob Displaybruch, Akku-Probleme oder Ladefehler – wir schauen uns dein Gerät direkt an
          und sagen dir sofort, was möglich ist.
        </p>

        <p className="text-sm md:text-base leading-relaxed text-green-800">
          Du bekommst bei uns keine unnötigen Reparaturen und keine versteckten Kosten –
          sondern eine klare, ehrliche Einschätzung.
        </p>

        <p className="mt-4 text-sm md:text-base font-medium text-green-900">
          📍 Direkt am Bahnhofplatz in St. Pölten sind wir persönlich für dich da.
        </p>

      </section>

      {/* SOCIAL PROOF */}
      <section className="py-14 md:py-20 px-4 bg-green-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Warum Kunden zu uns kommen
        </h2>

        <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm text-green-800">
          <span className="bg-white px-4 py-2 rounded-full shadow">⭐ Viele zufriedene Kunden</span>
          <span className="bg-white px-4 py-2 rounded-full shadow">⚡ Schnelle Reparaturen</span>
          <span className="bg-white px-4 py-2 rounded-full shadow">🔧 Erfahrung & Know-how</span>
          <span className="bg-white px-4 py-2 rounded-full shadow">📍 Zentral in St. Pölten</span>
        </div>

        <p className="mt-6 text-sm md:text-base text-green-800 max-w-xl mx-auto">
          Viele unserer Kunden kommen über Empfehlungen – weil sie wissen, dass sie bei uns fair behandelt werden.
        </p>
      </section>

      {/* WHY US */}
      <section className="py-14 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Warum One 1 Shop?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white p-5 md:p-6 rounded-xl shadow text-center"
            >
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-lg">Schnell</h3>
              <p className="mt-2 text-sm text-green-700">
                Viele Reparaturen noch am selben Tag
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white p-5 md:p-6 rounded-xl shadow text-center"
            >
              <div className="text-2xl mb-2">🤝</div>
              <h3 className="font-semibold text-lg">Ehrlich</h3>
              <p className="mt-2 text-sm text-green-700">
                Klare Einschätzung ohne unnötige Kosten
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white p-5 md:p-6 rounded-xl shadow text-center"
            >
              <div className="text-2xl mb-2">🔧</div>
              <h3 className="font-semibold text-lg">Erfahrung</h3>
              <p className="mt-2 text-sm text-green-700">
                Viele erfolgreich reparierte Geräte
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 px-4 text-center bg-green-800 text-white">
        <h2 className="text-xl md:text-3xl font-bold mb-4">
          Brauchst du Hilfe mit deinem Gerät?
        </h2>

        <p className="mb-6 text-sm md:text-lg text-green-100">
          Schreib uns kurz auf WhatsApp – wir sagen dir sofort, was möglich ist.
        </p>

        <a
          href="https://wa.me/4369917432373"
          className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition"
        >
          💬 WhatsApp schreiben
        </a>
      </section>

    </main>
  );
}