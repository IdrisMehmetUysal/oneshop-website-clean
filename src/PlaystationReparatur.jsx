import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";

export default function PlaystationReparatur() {
  return (
    <main className="min-h-screen text-green-900">



      {/* HERO */}
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            PlayStation Reparatur in St. Pölten – PS4 & PS5 Service
          </h1>

          <p className="text-lg text-green-100 mb-8">
            Deine PlayStation hat ein Problem? Kein Bild, HDMI defekt oder laut?
            Wir reparieren deine PS4 oder PS5 schnell und zuverlässig direkt in St. Pölten.
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
            Häufige PlayStation Probleme
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">
                HDMI Anschluss defekt
              </h3>
              <p>
                Kein Bild oder Wackelkontakt? Wir tauschen den HDMI-Port deiner PS5 oder PS4 professionell.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">
                Konsole überhitzt
              </h3>
              <p>
                Deine PlayStation wird zu heiß oder schaltet sich aus? Reinigung und neue Wärmeleitpaste helfen.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">
                Lauter Lüfter
              </h3>
              <p>
                Deine PS4 oder PS5 ist extrem laut? Wir reinigen sie gründlich und optimieren die Kühlung.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">
                Konsole startet nicht
              </h3>
              <p>
                Kein Start möglich? Wir analysieren das Problem und finden die passende Lösung.
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
            Bring deine PlayStation einfach direkt zu uns nach St. Pölten.
            Wir analysieren das Problem und sagen dir sofort, was möglich ist.
          </p>

          <p className="text-green-800">
            Viele Reparaturen erledigen wir schnell, damit du wieder zocken kannst 🎮
          </p>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Dein PlayStation Service in St. Pölten
          </h2>

          <p className="text-green-800">
            Unser Standort in St. Pölten ist schnell erreichbar und bietet dir eine persönliche Beratung sowie eine schnelle Reparatur vor Ort.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-green-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Jetzt PlayStation reparieren lassen
        </h2>

        <a
          href="https://wa.me/4369917432373"
          className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold"
        >
          💬 WhatsApp schreiben
        </a>
      </section>



    </main>
  );
}