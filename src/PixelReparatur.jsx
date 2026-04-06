import React from "react";
import { Helmet } from "react-helmet-async";

export default function PixelReparatur() {
  return (
    <main className="min-h-screen text-green-900">



      {/* SEO */}
      <Helmet>
        <title>Google Pixel Reparatur St. Pölten | Software, Akku & Display | One 1 Shop</title>
        <meta
          name="description"
          content="Google Pixel Reparatur in St. Pölten: Hilfe bei Software-Bugs, Akku, Display und Kamera-Problemen. Schnell & persönlich bei One 1 Shop."
        />
        <meta
          name="keywords"
          content="Google Pixel Reparatur St. Pölten, Pixel Software Probleme, Pixel Akku tauschen, Pixel Display Reparatur"
        />
        <link rel="canonical" href="https://www.one1shop.at/pixel-reparatur" />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Google Pixel Reparatur in St. Pölten
          </h1>

          <p className="text-lg text-green-100 mb-8">
            Dein Google Pixel macht Probleme? Ob Software-Bugs, Akku schnell leer oder Display kaputt –  
            wir kennen die typischen Pixel-Schwächen und helfen dir schnell direkt in St. Pölten.
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

      {/* PROBLEME */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Häufige Google Pixel Probleme
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Software Bugs & Updates</h3>
              <p>
                Nach Updates treten bei Pixel Geräten oft Probleme auf – wir helfen bei Fehlern,
                Abstürzen oder ungewöhnlichem Verhalten.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Akku schnell leer</h3>
              <p>
                Pixel Geräte sind bekannt für schwankende Akkuleistung – wir prüfen,
                ob ein Tausch sinnvoll ist.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Kamera Probleme</h3>
              <p>
                Unscharfe Bilder oder Kamera startet nicht? Gerade bei Pixel Geräten
                ist die Kamera ein wichtiger Punkt – wir helfen dir weiter.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Display & Touch Probleme</h3>
              <p>
                Risse, Touch reagiert nicht oder Ghost Touch? Wir tauschen dein Display professionell aus.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PIXEL BESONDERHEIT */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Warum Google Pixel anders ist
          </h2>

          <p className="text-green-800 leading-8">
            Google Pixel Geräte setzen stark auf Software, KI-Funktionen und regelmäßige Updates.
            Dadurch entstehen oft andere Probleme als bei klassischen Smartphones.
            Wir kennen diese Besonderheiten und helfen dir nicht nur bei der Reparatur,
            sondern auch bei der richtigen Nutzung und Einstellung deines Geräts.
          </p>
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
            Wir analysieren dein Gerät und sagen dir sofort, was möglich ist.
          </p>

          <p className="text-green-800">
            Viele Reparaturen erledigen wir noch am selben Tag ⚡
          </p>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Dein Google Pixel Service in St. Pölten
          </h2>

          <p className="text-green-800">
            Direkt in St. Pölten für dich da – wir helfen dir bei typischen Google Pixel Problemen
            schnell und persönlich vor Ort.
          </p>
        </div>
      </section>

      {/* INTERNE LINKS */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-2xl font-bold mb-6">Weitere Reparaturen</h2>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="/iphone-reparatur" className="underline">iPhone Reparatur</a>
          <a href="/samsung-reparatur" className="underline">Samsung Reparatur</a>
          <a href="/xiaomi-reparatur" className="underline">Xiaomi Reparatur</a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-green-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Jetzt Google Pixel reparieren lassen
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



    </main>
  );
}