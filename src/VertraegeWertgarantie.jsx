import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function VertraegeWertgarantie() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="min-h-screen text-green-900 overflow-x-hidden scroll-smooth bg-white">
      <Helmet>
        <title>Handyverträge & Wertgarantie St. Pölten | One 1 Shop</title>
        <meta
          name="description"
          content="Handyverträge und Wertgarantie in St. Pölten: persönliche Beratung zu passenden Tarifen, Partner-Angeboten und zusätzlicher Absicherung für dein Gerät bei One 1 Shop."
        />
        <meta
          name="keywords"
          content="Handyvertrag St. Pölten, Wertgarantie St. Pölten, Handy Tarif Beratung St. Pölten, Partnershop St. Pölten, One 1 Shop"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.one1shop.at/handyvertraege-wertgarantie" />
      </Helmet>



      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="uppercase tracking-[0.2em] text-green-100 text-sm mb-4">
              One 1 Shop in St. Pölten
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Handyverträge & Wertgarantie in St. Pölten
            </h1>

            <p className="text-lg md:text-xl text-green-50 mb-8 leading-relaxed">
              Bei uns bekommst du nicht nur Reparatur und Verkauf, sondern auch
              persönliche Beratung zu passenden Handyverträgen und zusätzlicher
              Absicherung über Wertgarantie.
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
    src="/images/vertraege-wertgarantie.jpg"
    alt="Handyverträge und Wertgarantie in St. Pölten"
    loading="lazy"
    className="w-full h-[240px] md:h-[380px] object-cover shadow-xl"
  />
</motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Persönliche Beratung zu Tarifen und Absicherung
          </h2>
          <p className="text-lg text-green-800 leading-8 mb-6">
            One 1 Shop in St. Pölten ist auch Ansprechpartner, wenn es um
            passende Handyverträge und zusätzliche Absicherung für dein Gerät geht.
            Als Partnershop beraten wir dich persönlich zu verfügbaren Optionen.
          </p>
          <p className="text-lg text-green-800 leading-8">
            So bekommst du nicht nur Technik-Service, sondern auf Wunsch auch
            Unterstützung bei Tarifen, Partner-Angeboten und Wertgarantie –
            alles an einem Ort.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Wobei wir dich unterstützen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Handyverträge</h3>
              <p className="text-green-700 leading-7">
                Wir beraten dich zu passenden Tarifen und helfen dir, eine
                Lösung zu finden, die zu deinem Bedarf passt.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Partnershop-Beratung</h3>
              <p className="text-green-700 leading-7">
                Als Partnershop mehrerer Anbieter bekommst du bei uns persönliche
                Unterstützung direkt vor Ort in St. Pölten.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Wertgarantie</h3>
              <p className="text-green-700 leading-7">
                Mit einer passenden Wertgarantie kannst du dein Gerät zusätzlich
                absichern und im Alltag entspannter nutzen.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Alles an einem Ort</h3>
              <p className="text-green-700 leading-7">
                Reparatur, Verkauf, Vertrag und Absicherung lassen sich bei uns
                einfacher kombinieren – mit persönlicher Beratung statt Stress.
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
            Bei uns bekommst du persönliche Beratung statt anonymer Abwicklung.
            Wir nehmen uns Zeit für dein Anliegen und helfen dir dabei, eine
            passende Lösung für Vertrag und Geräte-Absicherung zu finden.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              persönliche Beratung
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              Partnershop-Kompetenz
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              Wertgarantie möglich
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
      Weitere Leistungen
    </h2>

    <p className="text-lg text-green-800 leading-8">
      Neben Handyverträgen und Wertgarantie in St. Pölten bieten wir auch{" "}
      
      <Link to="/handy-reparatur-st-poelten" className="underline hover:text-green-600">
        Handy Reparaturen
      </Link>
      ,{" "}
      
      <Link to="/datenrettung-st-poelten" className="underline hover:text-green-600">
        Datenrettung
      </Link>
      ,{" "}
      
      <Link to="/konsolen-reparatur" className="underline hover:text-green-600">
        Konsolen Reparatur
      </Link>
      ,{" "}
      
      <Link to="/microsoldering-st-poelten" className="underline hover:text-green-600">
        Microsoldering
      </Link>
      ,{" "}
      
      <Link to="/iphone-reparatur" className="underline hover:text-green-600">
        iPhone Reparaturen
      </Link>
      ,{" "}
      
      <Link to="/samsung-reparatur" className="underline hover:text-green-600">
        Samsung Reparaturen
      </Link>{" "}
      und{" "}
      
      <Link to="/handy-verkauf-zubehoer" className="underline hover:text-green-600">
        Handy Verkauf & Zubehör
      </Link>{" "}
      
      an.
    </p>
  </div>
</section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Jetzt beraten lassen
          </h2>
          <p className="text-lg text-green-800 leading-8 mb-8">
            Wenn du Fragen zu einem Tarif, Partner-Angebot oder zur Wertgarantie
            hast, beraten wir dich gerne persönlich bei uns im Shop.
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