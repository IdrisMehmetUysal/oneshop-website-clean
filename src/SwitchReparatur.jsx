import React from "react";
import { Helmet } from "react-helmet-async";

export default function SwitchReparatur() {
  return (
    <main className="min-h-screen text-green-900">

      <Helmet>
        <title>Nintendo Switch Reparatur St. Pölten | Joy-Con, Display & mehr</title>
        <meta
          name="description"
          content="Nintendo Switch Reparatur in St. Pölten – Joy-Con Drift, Display, Ladeprobleme & mehr. Schnell und zuverlässig direkt vor Ort."
        />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nintendo Switch Reparatur in St. Pölten
          </h1>

          <p className="text-lg text-green-100 mb-8">
            Deine Nintendo Switch hat ein Problem? Joy-Con Drift, Display defekt oder lädt nicht mehr?
            Wir reparieren deine Konsole schnell und zuverlässig direkt vor Ort.
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
            Häufige Nintendo Switch Probleme
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">
                Joy-Con Drift
              </h3>
              <p>
                Deine Figur bewegt sich von alleine? Wir reparieren oder tauschen deine Joy-Cons professionell.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">
                Display defekt
              </h3>
              <p>
                Bildschirm gesprungen oder kein Bild mehr? Wir tauschen dein Switch Display schnell aus.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">
                Ladeprobleme
              </h3>
              <p>
                Deine Switch lädt nicht mehr oder nur schwer? Wir reparieren den Ladeanschluss zuverlässig.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">
                Konsole startet nicht
              </h3>
              <p>
                Deine Nintendo Switch bleibt schwarz oder startet nicht? Wir finden die Ursache und beheben das Problem.
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
            Bring deine Nintendo Switch einfach direkt zu uns nach St. Pölten.
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
            Dein Nintendo Switch Service in St. Pölten
          </h2>

          <p className="text-green-800">
            Unser Standort in St. Pölten ist schnell erreichbar und bietet dir persönliche Beratung sowie schnelle Reparaturen direkt vor Ort.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-green-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Jetzt Nintendo Switch reparieren lassen
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