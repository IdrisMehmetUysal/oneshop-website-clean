import React from "react";
import { Helmet } from "react-helmet-async";

export default function LaptopReparatur() {
  return (
    <main className="min-h-screen text-green-900 bg-white">

      <Helmet>
        <title>Laptop & MacBook Reparatur St. Pölten | Display, Akku & mehr</title>
        <meta
          name="description"
          content="Laptop & MacBook Reparatur in St. Pölten: Display, Akku, Tastatur, Ladeprobleme und Wasserschäden. Schnell und professionell bei One 1 Shop."
        />
        <link rel="canonical" href="https://www.one1shop.at/laptop-reparatur" />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Laptop & MacBook Reparatur in St. Pölten
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Egal ob MacBook oder Windows Laptop – wir reparieren dein Gerät schnell,
          professionell und zuverlässig direkt vor Ort.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Dein Ansprechpartner für Laptop Reparaturen
        </h2>

        <p className="text-green-800 leading-8 mb-4">
          Wenn dein Laptop Probleme macht, brauchst du eine schnelle Lösung.
          Wir kümmern uns um Displayschäden, Akkuprobleme, Tastaturdefekte,
          Ladeprobleme und vieles mehr.
        </p>

        <p className="text-green-800 leading-8">
          Ob MacBook oder Windows Laptop – wir bieten dir eine professionelle
          Reparatur und persönliche Beratung, damit dein Gerät schnell wieder
          einsatzbereit ist.
        </p>
      </section>

      {/* MARKEN */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Reparaturen für alle gängigen Geräte
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* MacBook */}
            <a
              href="/macbook-reparatur"
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition block"
            >
              <h3 className="text-xl font-semibold mb-3">MacBook Reparatur</h3>
              <p className="text-green-700">
                Display, Akku, Tastatur und Ladeprobleme bei MacBooks schnell behoben.
              </p>
            </a>

            {/* Windows Laptop */}
            <a
              href="/laptop-reparatur"
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition block"
            >
              <h3 className="text-xl font-semibold mb-3">Windows Laptop Reparatur</h3>
              <p className="text-green-700">
                Reparatur für alle Laptop Marken – Hardware, Software und mehr.
              </p>
            </a>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Jetzt Laptop reparieren lassen
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