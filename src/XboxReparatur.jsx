import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";

export default function XboxReparatur() {
  return (
    <main className="min-h-screen text-green-900">

        {/* NAVBAR */}
<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

    <a href="/" className="flex items-center">
      <img
        src="/images/logo.png"
        alt="One 1 Shop Logo"
        className="h-16"
      />
    </a>

    <div className="space-x-6 hidden md:block">
      <a href="/#leistungen" className="text-green-800 font-medium hover:underline">Leistungen</a>
      <a href="/#produkte" className="text-green-800 font-medium hover:underline">Produkte</a>
      <a href="/#kontakt" className="text-green-800 font-medium hover:underline">Kontakt</a>
    </div>

  </div>
</nav>

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Xbox Reparatur in St. Pölten – Xbox One & Series X/S Service
          </h1>

          <p className="text-lg text-green-100 mb-8">
            Deine Xbox funktioniert nicht mehr? Kein Bild, laut oder überhitzt?
            Wir reparieren deine Xbox schnell und zuverlässig direkt in St. Pölten.
          </p>

          <a
            href="https://wa.me/4369917432373"
            className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold"
          >
            💬 Jetzt auf WhatsApp schreiben
          </a>
        </div>
      </section>

      {/* PROBLEME */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Häufige Xbox Probleme
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">
                HDMI Anschluss defekt
              </h3>
              <p>
                Kein Bild oder Signal? Wir tauschen den HDMI-Port deiner Xbox fachgerecht.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">
                Konsole überhitzt
              </h3>
              <p>
                Deine Xbox wird zu heiß oder schaltet sich ab? Reinigung und neue Wärmeleitpaste helfen.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">
                Lauter Lüfter
              </h3>
              <p>
                Deine Xbox ist sehr laut? Wir reinigen sie gründlich und verbessern die Kühlung.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">
                Xbox startet nicht
              </h3>
              <p>
                Deine Konsole geht nicht mehr an? Wir finden die Ursache und reparieren sie professionell.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            So läuft die Reparatur ab
          </h2>

          <p className="text-green-800 mb-6">
            Bring deine Xbox einfach direkt zu uns nach St. Pölten.
            Wir analysieren das Problem und sagen dir sofort, was möglich ist.
          </p>

          <p className="text-green-800">
            Viele Reparaturen erledigen wir schnell, damit du wieder spielen kannst 🎮
          </p>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Dein Xbox Service in St. Pölten
          </h2>

          <p className="text-green-800">
            Unser Standort in St. Pölten ist schnell erreichbar und bietet dir eine persönliche Beratung sowie eine schnelle Reparatur vor Ort.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-green-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Jetzt Xbox reparieren lassen
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