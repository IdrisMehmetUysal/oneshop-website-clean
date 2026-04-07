import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function HandyReparatur() {
  return (
    <main className="min-h-screen text-green-900 bg-white">

      <Helmet>
        <title>Handy Reparatur St. Pölten | iPhone, Samsung & mehr | One 1 Shop</title>
        <meta
          name="description"
          content="Handy Reparatur in St. Pölten: iPhone, Samsung und viele weitere Marken. Display, Akku, Ladeprobleme und Wasserschäden schnell und professionell bei One 1 Shop."
        />
        <link rel="canonical" href="https://www.one1shop.at/handy-reparatur-st-poelten" />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-4 py-12 md:py-20 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          Handy Reparatur in St. Pölten
        </h1>

        <p className="text-sm sm:text-base md:text-xl max-w-xl mx-auto">
          iPhone, Samsung & mehr – schnell, professionell und zuverlässig direkt vor Ort.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-12 md:py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Dein Ansprechpartner für Smartphone Reparaturen
        </h2>

        <p className="text-sm sm:text-base text-green-800 leading-7 mb-4">
          Wenn dein Handy kaputt ist, brauchst du eine schnelle Lösung. 
          Wir helfen dir bei Displaybruch, Akkuproblemen, Ladefehlern und vielen weiteren Defekten.
        </p>

        <p className="text-sm sm:text-base text-green-800 leading-7">
          Egal welches Modell – wir beraten dich persönlich und finden die beste Lösung für dein Gerät.
        </p>
      </section>

      {/* MARKEN */}
      <section className="py-12 md:py-20 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
            Reparaturen für alle gängigen Marken
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">

            {/* iPhone */}
            <Link
              to="/iphone-reparatur"
              className="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow hover:shadow-lg hover:scale-[1.02] transition block"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2">iPhone Reparatur</h3>
              <p className="text-sm text-green-700">
                Display, Akku & Ladeprobleme schnell behoben.
              </p>
            </Link>

            {/* Samsung */}
            <Link
              to="/samsung-reparatur"
              className="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow hover:shadow-lg hover:scale-[1.02] transition block"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2">Samsung Reparatur</h3>
              <p className="text-sm text-green-700">
                Professionelle Reparaturen für alle Modelle.
              </p>
            </Link>

            {/* Xiaomi */}
            <Link
              to="/xiaomi-reparatur"
              className="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow hover:shadow-lg hover:scale-[1.02] transition block"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2">Xiaomi Reparatur</h3>
              <p className="text-sm text-green-700">
                Redmi & Poco Geräte – schnell repariert.
              </p>
            </Link>

            {/* Pixel */}
            <Link
              to="/pixel-reparatur"
              className="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow hover:shadow-lg hover:scale-[1.02] transition block"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2">Google Pixel</h3>
              <p className="text-sm text-green-700">
                Display, Akku & mehr.
              </p>
            </Link>

            {/* Huawei */}
            <Link
              to="/huawei-reparatur"
              className="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow hover:shadow-lg hover:scale-[1.02] transition block"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2">Huawei Reparatur</h3>
              <p className="text-sm text-green-700">
                Schnell & zuverlässig repariert.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Jetzt Handy reparieren lassen
        </h2>

        <p className="text-sm sm:text-base text-green-800 mb-6">
          Schreib uns einfach – wir helfen dir sofort weiter.
        </p>

        <a
          href="/#kontakt"
          className="inline-block bg-green-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
        >
          Kontakt aufnehmen
        </a>
      </section>

    </main>
  );
}