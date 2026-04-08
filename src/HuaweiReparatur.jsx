import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HuaweiReparatur() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="min-h-screen text-green-900 bg-white">
      <Helmet>
        <title>
          Huawei Reparatur St. Pölten | Display, Akku & Software Hilfe | One 1 Shop
        </title>
        <meta
          name="description"
          content="Huawei Reparatur in St. Pölten: Displaybruch, Akku, Ladeprobleme und Hilfe bei Google-Diensten & Apps. Persönlich und professionell bei One 1 Shop."
        />
        <link rel="canonical" href="https://www.one1shop.at/huawei-reparatur" />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-4 md:px-6 py-16 md:py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
          Huawei Reparatur in St. Pölten
        </h1>

        <p className="text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
          Dein Huawei funktioniert nicht mehr richtig? Display kaputt, Akku
          schwach oder Probleme mit Apps? Wir helfen dir schnell und persönlich
          direkt vor Ort.
        </p>
      </section>

      {/* SPEZIELL HUAWEI */}
      <section className="py-16 md:py-20 px-4 md:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Besonderheiten bei Huawei Geräten
        </h2>

        <p className="text-green-800 leading-7 md:leading-8 mb-4">
          Huawei Smartphones unterscheiden sich in einigen Punkten deutlich von
          anderen Marken. Vor allem neuere Modelle haben oft keine klassischen
          Google-Dienste mehr, was bei Apps und Nutzung zu Problemen führen
          kann.
        </p>

        <p className="text-green-800 leading-7 md:leading-8">
          Neben der klassischen Reparatur helfen wir dir auch dabei, dein Gerät
          wieder optimal einzurichten und Lösungen für App-Probleme zu finden.
        </p>
      </section>

      {/* PROBLEME */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Häufige Huawei Probleme
          </h2>

          <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2">
            
            <div className="bg-white p-5 md:p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3">
                Google Dienste fehlen
              </h3>
              <p className="text-green-700 text-sm md:text-base">
                Viele Huawei Geräte haben kein Google Play Store. Wir helfen dir
                mit Alternativen und richtiger Einrichtung.
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3">
                App Probleme
              </h3>
              <p className="text-green-700 text-sm md:text-base">
                Apps funktionieren nicht richtig oder fehlen? Wir zeigen dir
                Lösungen und richten alles sauber ein.
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3">
                Displaybruch
              </h3>
              <p className="text-green-700 text-sm md:text-base">
                Gesplittertes Display oder Touch reagiert nicht mehr? Wir
                kümmern uns um einen schnellen Austausch.
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3">
                Akku Probleme
              </h3>
              <p className="text-green-700 text-sm md:text-base">
                Akku hält nicht mehr lange oder lädt nicht richtig? Wir prüfen
                und ersetzen ihn.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WARUM WIR */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Warum One 1 Shop?
        </h2>

        <p className="text-green-800 max-w-3xl mx-auto leading-7 md:leading-8 text-sm md:text-base">
          Bei uns bekommst du nicht nur eine Reparatur, sondern echte Beratung.
          Gerade bei Huawei Geräten ist es wichtig, sich auch mit Software und
          Apps auszukennen. Wir nehmen uns Zeit und finden die beste Lösung für
          dich.
        </p>
      </section>

      {/* Weitere Leistungen */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-green-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Weitere Leistungen
          </h2>

          <p className="text-base md:text-lg text-green-800 leading-7 md:leading-8">
            Neben der Huawei Reparatur in St. Pölten bieten wir auch{" "}
            <Link to="/iphone-reparatur" className="underline hover:text-green-600">
              iPhone Reparaturen
            </Link>
            ,{" "}
            <Link to="/samsung-reparatur" className="underline hover:text-green-600">
              Samsung Reparaturen
            </Link>
            ,{" "}
            <Link to="/datenrettung-st-poelten" className="underline hover:text-green-600">
              Datenrettung
            </Link>
            ,{" "}
            <Link to="/microsoldering-st-poelten" className="underline hover:text-green-600">
              Microsoldering
            </Link>{" "}
            sowie den{" "}
            <Link to="/handy-reparatur-st-poelten" className="underline hover:text-green-600">
              allgemeinen Handy Reparatur Service
            </Link>{" "}
            an.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-green-800 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Jetzt Huawei reparieren lassen
        </h2>

        <a
          href="https://wa.me/4369917432373"
          className="inline-block w-full sm:w-auto bg-white text-green-800 px-6 py-3 rounded-full font-semibold text-center"
        >
          💬 WhatsApp schreiben
        </a>
      </section>
    </main>
  );
}