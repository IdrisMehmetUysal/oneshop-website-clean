import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";

export default function HandyReparatur() {
  const [navOpen, setNavOpen] = useState(false);

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
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Handy Reparatur in St. Pölten
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Egal ob iPhone, Samsung oder andere Marken – wir reparieren dein Smartphone schnell,
          professionell und zuverlässig direkt vor Ort.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Dein Ansprechpartner für Smartphone Reparaturen
        </h2>

        <p className="text-green-800 leading-8 mb-4">
          Wenn dein Handy kaputt ist, brauchst du eine schnelle und zuverlässige Lösung.
          Bei One 1 Shop in St. Pölten kümmern wir uns um Displaybrüche, Akkuprobleme,
          Ladefehler und viele weitere Defekte.
        </p>

        <p className="text-green-800 leading-8">
          Wir arbeiten mit vielen bekannten Marken und bieten dir eine persönliche Beratung,
          damit dein Gerät schnell wieder einsatzbereit ist.
        </p>
      </section>

      {/* MARKEN */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Reparaturen für alle gängigen Marken
          </h2>

         <div className="grid md:grid-cols-3 gap-8">

            {/* iPhone */}
            <a
              href="/iphone-reparatur-st-poelten"
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition block"
            >
              <h3 className="text-xl font-semibold mb-3">iPhone Reparatur</h3>
              <p className="text-green-700">
                Display, Akku, Ladeprobleme und Wasserschäden beim iPhone schnell behoben.
              </p>
            </a>

            {/* Samsung */}
            <a
              href="/samsung-reparatur-st-poelten"
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition block"
            >
              <h3 className="text-xl font-semibold mb-3">Samsung Reparatur</h3>
              <p className="text-green-700">
                Professionelle Reparaturen für Samsung Smartphones aller Modelle.
              </p>
            </a>

            {/* Xiaomi */}
<a
  href="/xiaomi-reparatur"
  className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition block"
>
  <h3 className="text-xl font-semibold mb-3">Xiaomi Reparatur</h3>
  <p className="text-green-700">
    Reparatur für Xiaomi, Redmi & Poco Geräte – Display, Akku & mehr.
  </p>
</a>

            {/* Pixel */}
<a
  href="/pixel-reparatur"
  className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition block"
>
  <h3 className="text-xl font-semibold mb-3">Google Pixel Reparatur</h3>
  <p className="text-green-700">
    Reparatur für Google Pixel Geräte – Display, Akku & mehr.
  </p>
</a>

{/* Huawei */}
<a
  href="/huawei-reparatur"
  className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition block"
>
  <h3 className="text-xl font-semibold mb-3">Huawei Reparatur</h3>
  <p className="text-green-700">
    Reparatur für Huawei Geräte – Display, Akku & mehr.
  </p>
</a>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Jetzt Handy reparieren lassen
        </h2>

        <p className="text-green-800 mb-8">
          Komm vorbei oder kontaktiere uns – wir helfen dir schnell weiter.
        </p>

        <a
          href="/#kontakt"
          className="bg-green-800 text-white px-6 py-3 rounded-full font-semibold"
        >
          Kontakt aufnehmen
        </a>
      </section>

    </main>
  );
}