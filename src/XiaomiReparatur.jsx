import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "./components/Footer";

export default function XiaomiReparatur() {
  return (
    <main className="min-h-screen text-green-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <a href="/" className="flex items-center">
            <img src="/images/logo.png" alt="One 1 Shop Logo" className="h-16" />
          </a>

          <div className="space-x-6 hidden md:block">
            <a href="/#leistungen" className="text-green-800 font-medium hover:underline">Leistungen</a>
            <a href="/#produkte" className="text-green-800 font-medium hover:underline">Produkte</a>
            <a href="/#kontakt" className="text-green-800 font-medium hover:underline">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* SEO */}
      <Helmet>
        <title>Xiaomi Reparatur St. Pölten | Mi, Redmi & Poco Service | One 1 Shop</title>
        <meta
          name="description"
          content="Xiaomi Reparatur in St. Pölten für Mi, Redmi & Poco Geräte. Display, Akku, Ladeprobleme und Ersatzteile schnell & zuverlässig bei One 1 Shop."
        />
        <meta
          name="keywords"
          content="Xiaomi Reparatur St. Pölten, Redmi Reparatur, Poco Reparatur, Xiaomi Display tauschen, Xiaomi Akku wechseln"
        />
        <link rel="canonical" href="https://www.one1shop.at/xiaomi-reparatur" />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Xiaomi Reparatur in St. Pölten – Mi, Redmi & Poco
          </h1>

          <p className="text-lg text-green-100 mb-8">
            Dein Xiaomi ist kaputt? Display gebrochen, Akku schwach oder lädt nicht mehr?
            Wir reparieren dein Gerät schnell und zuverlässig – egal ob Mi, Redmi oder Poco.
          </p>

          <a
            href="https://wa.me/4369917432373"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition"
          >
            💬 Jetzt auf WhatsApp schreiben
          </a>
        </div>
      </section>

      {/* SPEZIELL XIAOMI */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Besonderheiten bei Xiaomi Geräten
          </h2>

          <p className="text-green-800 leading-8 mb-4">
            Xiaomi Smartphones bieten viel Leistung für einen guten Preis, aber genau das bringt auch Herausforderungen mit sich.
            Je nach Modell unterscheiden sich Aufbau und Ersatzteile stark – besonders bei Redmi und Poco Geräten.
          </p>

          <p className="text-green-800 leading-8">
            Wir kennen die Unterschiede zwischen den Modellen und wissen, worauf es bei einer schnellen und sauberen Reparatur ankommt.
          </p>
        </div>
      </section>

      {/* PROBLEME */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Häufige Xiaomi Probleme
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl mb-3">Displaybruch</h3>
              <p className="text-green-700">
                Xiaomi Displays sind oft groß und empfindlich – ein Sturz reicht und sie springen.
                Wir tauschen dein Display schnell und sauber aus.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl mb-3">Akku schnell leer</h3>
              <p className="text-green-700">
                Besonders bei intensiver Nutzung verlieren Xiaomi Akkus schnell an Leistung.
                Wir prüfen und tauschen den Akku bei Bedarf.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl mb-3">Ladeprobleme</h3>
              <p className="text-green-700">
                Wackelkontakt oder kein Laden mehr? Oft liegt es am Anschluss –
                wir finden die Ursache und beheben das Problem.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl mb-3">Ersatzteile schwer verfügbar</h3>
              <p className="text-green-700">
                Bei manchen Xiaomi Modellen sind Ersatzteile nicht sofort verfügbar.
                Wir beraten dich ehrlich und finden die beste Lösung für dein Gerät.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            So läuft die Reparatur ab
          </h2>

          <p className="text-green-800 mb-6">
            Komm einfach direkt zu uns nach St. Pölten.
            Wir schauen uns dein Xiaomi Gerät an und sagen dir sofort, was möglich ist.
          </p>

          <p className="text-green-800">
            Viele Reparaturen erledigen wir schnell – damit du dein Handy nicht lange vermisst ⚡
          </p>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Dein Xiaomi Service in St. Pölten
          </h2>

          <p className="text-green-800">
            Direkt in St. Pölten für dich da – schnell, persönlich und zuverlässig.
          </p>
        </div>
      </section>

      {/* INTERNE LINKS */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-2xl font-bold mb-6">Weitere Reparaturen</h2>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="/iphone-reparatur-st-poelten" className="underline">iPhone Reparatur</a>
          <a href="/samsung-reparatur-st-poelten" className="underline">Samsung Reparatur</a>
          <a href="/pixel-reparatur" className="underline">Google Pixel Reparatur</a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-green-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Jetzt Xiaomi reparieren lassen
        </h2>

        <a
          href="https://wa.me/4369917432373"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition"
        >
          💬 WhatsApp schreiben
        </a>
      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}