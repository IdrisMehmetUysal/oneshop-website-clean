import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function KonsolenReparatur() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="min-h-screen text-green-900 overflow-x-hidden scroll-smooth bg-white">
      <Helmet>
        <title>
          Konsolen Reparatur St. Pölten | HDMI, Überhitzung & mehr | One 1 Shop
        </title>
        <meta
          name="description"
          content="Konsolen Reparatur in St. Pölten: HDMI-Probleme, Überhitzung, Abschalten, Reinigung und neue Wärmeleitpaste. Persönlich und professionell bei One 1 Shop."
        />
        <meta
          name="keywords"
          content="Konsolen Reparatur St. Pölten, HDMI Reparatur Konsole St. Pölten, PS5 Reparatur St. Pölten, Xbox Reparatur St. Pölten, Wärmeleitpaste Konsole St. Pölten, One 1 Shop"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.one1shop.at/konsolen-reparatur"
        />
      </Helmet>

      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="uppercase tracking-[0.2em] text-green-100 text-sm mb-4">
              One 1 Shop in St. Pölten
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Konsolen Reparatur in St. Pölten
            </h1>

            <p className="text-lg text-white leading-8">
              Besonders oft geht es um HDMI-Probleme, Überhitzung, starkes
              Lüftergeräusch, plötzliches Abschalten, Joystick-Drift,
              Kurzschlüsse oder Wartung durch Reinigung und neue Wärmeleitpaste.
              Wir unterstützen dich rund um PlayStation, Xbox und weitere
              Konsolen persönlich direkt in St. Pölten.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/#kontakt"
                className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition"
              >
                Jetzt Kontakt aufnehmen
              </a>

              <a
                href="https://wa.me/4369917432373"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
              >
                WhatsApp schreiben
              </a>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              src="/images/konsolen-reparatur.jpg"
              alt="Konsolen Reparatur in St. Pölten"
              loading="lazy"
              className="w-full h-[240px] md:h-[380px] object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hilfe bei typischen Konsolen-Problemen
          </h2>
          <p className="text-lg text-green-800 leading-8 mb-6">
            Wenn deine Konsole Probleme macht, nicht mehr richtig funktioniert
            oder sich ungewöhnlich verhält, bist du bei One 1 Shop in St. Pölten
            richtig. Wir helfen bei häufigen Defekten und kümmern uns um eine
            saubere, professionelle Prüfung.
          </p>
          <p className="text-lg text-green-800 leading-8">
            Besonders oft geht es um HDMI-Probleme, Überhitzung, starkes
            Lüftergeräusch, plötzliche Abschaltungen oder Wartung durch
            Reinigung und neue Wärmeleitpaste.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Häufige Konsolen Reparaturen
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Link
              to="/playstation-reparatur"
              className="block bg-white p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
            >
              🎮 PlayStation Reparatur
              <p className="text-sm text-green-700 mt-2">
                PS4 & PS5 – HDMI, Überhitzung, Lüfter & mehr
              </p>
            </Link>

            <Link
              to="/xbox-reparatur"
              className="block bg-white p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
            >
              🎮 Xbox Reparatur
              <p className="text-sm text-green-700 mt-2">
                Xbox One & Series X – Reparatur & Service
              </p>
            </Link>

            <Link
              to="/switch-reparatur"
              className="block bg-white p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
            >
              🎮 Nintendo Switch Reparatur
              <p className="text-sm text-green-700 mt-2">
                Joy-Con Drift, Display, Akku & Ladeprobleme
              </p>
            </Link>

            <Link
              to="/konsolen-reparatur"
              className="block bg-white p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 transition"
            >
              🎮 Weitere Konsolen
              <p className="text-sm text-green-700 mt-2">
                Nintendo, ältere Modelle & Spezialfälle – wir helfen weiter
              </p>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">HDMI-Probleme</h3>
              <p className="text-green-700 leading-7">
                Wenn deine Konsole kein Bild mehr liefert oder der
                HDMI-Anschluss beschädigt ist, prüfen wir die Ursache und
                kümmern uns um eine passende Lösung.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Überhitzung</h3>
              <p className="text-green-700 leading-7">
                Wird die Konsole sehr heiß oder laut, kann eine Reinigung oder
                Wartung sinnvoll sein, damit sie wieder stabil läuft.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">
                Plötzliches Abschalten
              </h3>
              <p className="text-green-700 leading-7">
                Wenn sich die Konsole einfach ausschaltet oder abstürzt, schauen
                wir uns das Gerät genauer an und beraten dich ehrlich zu den
                nächsten Schritten.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">
                Reinigung & Wärmeleitpaste
              </h3>
              <p className="text-green-700 leading-7">
                Eine professionelle Reinigung und neue Wärmeleitpaste können
                helfen, die Temperatur zu verbessern und die Lebensdauer der
                Konsole zu verlängern.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Joystick-Drift</h3>
              <p className="text-green-700 leading-7">
                Wenn dein Controller Bewegungen ausführt, obwohl du ihn gar
                nicht berührst, prüfen wir das Problem und helfen dir bei einer
                passenden Lösung.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">
                Kurzschluss & Stromprobleme
              </h3>
              <p className="text-green-700 leading-7">
                Bei Kurzschlüssen oder anderen Stromproblemen ist eine genaue
                Analyse wichtig. Wir prüfen die Konsole sorgfältig und beraten
                dich transparent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Warum One 1 Shop?
          </h2>
          <p className="text-lg text-green-800 leading-8 mb-8">
            Bei uns bekommst du persönliche Beratung, eine ehrliche Einschätzung
            und professionelle Hilfe direkt in St. Pölten. Wir schauen uns dein
            Gerät genau an und helfen dir transparent weiter.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              persönliche Beratung
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              ehrliche Einschätzung
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              professionelle Wartung
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              direkt in St. Pölten
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Konsolen und Spiele direkt vor Ort
          </h2>
          <p className="text-lg text-green-800 leading-8 mb-8">
            Bei One 1 Shop in St. Pölten bekommst du nicht nur Unterstützung bei
            der Konsolen Reparatur, sondern findest bei uns auch Konsolen und
            Spiele direkt vor Ort. So bekommst du Reparatur, Beratung und
            Gaming-Zubehör an einem Ort.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              PlayStation
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              Xbox
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              Konsolen
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              Spiele
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Weitere Leistungen
          </h2>
          <p className="text-lg text-green-800 leading-8">
            Neben der Konsolen Reparatur in St. Pölten bieten wir auch{" "}
            <Link
              to="/handy-reparatur-st-poelten"
              className="underline hover:text-green-600"
            >
              Handy Reparaturen
            </Link>
            ,{" "}
            <Link
              to="/datenrettung-st-poelten"
              className="underline hover:text-green-600"
            >
              Datenrettung
            </Link>
            ,{" "}
            <Link
              to="/iphone-reparatur"
              className="underline hover:text-green-600"
            >
              iPhone Reparaturen
            </Link>
            ,{" "}
            <Link
              to="/samsung-reparatur"
              className="underline hover:text-green-600"
            >
              Samsung Reparaturen
            </Link>{" "}
            sowie den{" "}
            <Link
              to="/handy-verkauf-zubehoer"
              className="underline hover:text-green-600"
            >
              Verkauf von Geräten und Zubehör
            </Link>{" "}
            an.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Jetzt Konsolen Reparatur anfragen
          </h2>
          <p className="text-lg text-green-800 leading-8 mb-8">
            Melde dich bei uns oder komm direkt vorbei. Wir helfen dir gerne
            weiter und beraten dich persönlich zu deiner Konsole.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#kontakt"
              className="bg-green-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="tel:+4369917432373"
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
