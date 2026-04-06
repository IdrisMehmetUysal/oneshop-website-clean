import React from "react";
import { Helmet } from "react-helmet-async";

export default function MacbookReparatur() {
  return (
    <main className="min-h-screen text-green-900 bg-white">

      <Helmet>
        <title>MacBook Reparatur St. Pölten | Display, Akku & mehr</title>
        <meta
          name="description"
          content="MacBook Reparatur in St. Pölten: Display, Akku, Tastatur und Ladeprobleme schnell und professionell bei One 1 Shop."
        />
        <link rel="canonical" href="https://www.one1shop.at/macbook-reparatur" />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          MacBook Reparatur in St. Pölten
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Dein MacBook ist defekt? Display kaputt, Akku schwach oder lädt nicht mehr?
          Wir reparieren dein MacBook schnell und zuverlässig.
        </p>
      </section>

      {/* PROBLEME */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Häufige MacBook Probleme
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Display defekt</h3>
              <p>MacBook Bildschirm kaputt oder flackert? Wir tauschen dein Display schnell aus.</p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Akku schwach</h3>
              <p>Dein MacBook hält nicht mehr lange? Wir ersetzen den Akku professionell.</p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Tastatur defekt</h3>
              <p>Tasten funktionieren nicht oder hängen? Wir reparieren oder tauschen die Tastatur.</p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Ladeprobleme</h3>
              <p>MacBook lädt nicht mehr? Wir prüfen und reparieren den Ladeanschluss.</p>
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
            Bring dein MacBook einfach zu uns nach St. Pölten.
            Wir analysieren das Problem und sagen dir direkt, was möglich ist.
          </p>

          <p className="text-green-800">
            Viele Reparaturen erledigen wir schnell, damit du dein Gerät bald wieder nutzen kannst.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-green-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Jetzt MacBook reparieren lassen
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