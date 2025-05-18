import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";


export default function Datenschutz() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-green-900 scroll-smooth">
      <Helmet>
        <title>Datenschutzerklärung | One 1 Shop</title>
        <meta
          name="description"
          content="Informationen zum Datenschutz bei One 1 Shop – wie wir mit deinen Daten umgehen und welche Rechte du hast."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.one1shop.at/datenschutz" />
      </Helmet>

      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <a href="/">
            <img
              src="/images/logo.png"
              alt="One 1 Shop Logo"
              className="h-16"
            />
          </a>
          <div className="space-x-6 hidden md:block">
            <a href="/" className="text-green-800 font-medium hover:underline">
              Startseite
            </a>
          </div>
        </div>
      </nav>

      {/* Inhalt */}
      <main className="flex-grow py-24 px-6 max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">Datenschutzerklärung</h1>

        <p>
          Der Schutz deiner persönlichen Daten ist uns ein besonderes Anliegen.
          Wir verarbeiten deine Daten daher ausschließlich auf Grundlage der gesetzlichen
          Bestimmungen (DSGVO, TKG 2003).
        </p>

        <h2 className="text-2xl font-semibold mt-8">Kontakt mit uns</h2>
        <p>
          Wenn du per Formular auf der Website oder per E-Mail Kontakt mit uns aufnimmst,
          werden deine angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall
          von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht
          ohne deine Einwilligung weiter.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Cookies</h2>
        <p>
          Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien,
          die mit Hilfe des Browsers auf deinem Endgerät abgelegt werden. Sie richten keinen Schaden an.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Deine Rechte</h2>
        <p>
          Dir stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
          Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn du glaubst, dass die Verarbeitung
          deiner Daten gegen das Datenschutzrecht verstößt, kannst du dich bei der Aufsichtsbehörde
          beschweren. In Österreich ist dies die Datenschutzbehörde.
        </p>

        <p className="text-sm text-gray-600">
          Stand: {new Date().getFullYear()}
        </p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}