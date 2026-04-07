import React from "react";
import { Helmet } from "react-helmet-async";

export default function Datenschutz() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-green-900 scroll-smooth">

      <Helmet>
        <title>Datenschutzerklärung | One 1 Shop St. Pölten</title>
        <meta
          name="description"
          content="Datenschutzerklärung von One 1 Shop in St. Pölten – Informationen zur Verarbeitung deiner Daten gemäß DSGVO."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.one1shop.at/datenschutz" />
      </Helmet>

      {/* CONTENT */}
      <main className="flex-grow py-16 md:py-20 px-4 md:px-6 max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Datenschutzerklärung
        </h1>

        <p className="text-center text-green-700 mb-8 text-sm md:text-base">
          Informationen darüber, wie wir deine Daten bei One 1 Shop in St. Pölten verarbeiten
        </p>

        {/* CARD */}
        <div className="bg-green-50 p-5 md:p-8 rounded-xl md:rounded-2xl shadow space-y-8">

          {/* EINLEITUNG */}
          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Allgemeine Hinweise
            </h2>
            <p className="text-sm md:text-base leading-7">
              Der Schutz deiner persönlichen Daten ist uns ein besonderes Anliegen.
              Wir verarbeiten deine Daten ausschließlich auf Grundlage der gesetzlichen
              Bestimmungen (DSGVO, TKG 2003).
            </p>
          </section>

          {/* KONTAKT */}
          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Kontakt mit uns
            </h2>
            <p className="text-sm md:text-base leading-7">
              Wenn du per Formular auf der Website oder per E-Mail Kontakt mit uns aufnimmst,
              werden deine angegebenen Daten zwecks Bearbeitung deiner Anfrage gespeichert.
              Diese Daten geben wir nicht ohne deine Einwilligung weiter.
            </p>
          </section>

          {/* COOKIES */}
          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Cookies
            </h2>
            <p className="text-sm md:text-base leading-7">
              Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien,
              die auf deinem Gerät gespeichert werden. Sie richten keinen Schaden an und
              helfen dabei, unsere Website benutzerfreundlicher zu machen.
            </p>
          </section>

          {/* GOOGLE MAPS */}
          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Einbindung von Google Maps
            </h2>
            <p className="text-sm md:text-base leading-7">
              Auf unserer Website nutzen wir Google Maps, um dir unseren Standort anzuzeigen.
              Dabei können Daten an Google übertragen werden. Weitere Informationen findest du
              in der Datenschutzerklärung von Google.
            </p>
          </section>

          {/* WHATSAPP */}
          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Kontakt über WhatsApp
            </h2>
            <p className="text-sm md:text-base leading-7">
              Wenn du uns über WhatsApp kontaktierst, werden deine Daten an WhatsApp (Meta)
              übertragen. Die Nutzung erfolgt freiwillig. Bitte beachte die Datenschutzbestimmungen
              von WhatsApp.
            </p>
          </section>

          {/* RECHTE */}
          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Deine Rechte
            </h2>
            <p className="text-sm md:text-base leading-7">
              Dir stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung,
              Einschränkung, Datenübertragbarkeit sowie Widerruf und Widerspruch zu.
            </p>

            <p className="text-sm md:text-base leading-7 mt-3">
              Wenn du glaubst, dass die Verarbeitung deiner Daten gegen das Datenschutzrecht
              verstößt, kannst du dich bei der österreichischen Datenschutzbehörde beschweren.
            </p>
          </section>

          {/* KONTAKT DATENSCHUTZ */}
          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Verantwortlicher
            </h2>
            <p className="text-sm md:text-base leading-7">
              One 1 Shop<br />
              Bahnhofplatz 15<br />
              3100 St. Pölten<br />
              Österreich<br /><br />

              E-Mail:{" "}
              <a href="mailto:office@one1shop.at" className="underline hover:text-green-700">
                office@one1shop.at
              </a>
            </p>
          </section>

        </div>

        {/* FOOT NOTE */}
        <div className="mt-8 text-center text-xs md:text-sm text-green-700">
          Stand: {new Date().getFullYear()}
        </div>

      </main>

    </div>
  );
}