import React from "react";
import { Helmet } from "react-helmet-async";

export default function Impressum() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-green-900 scroll-smooth">
      {/* Header */}

      <Helmet>
  <title>Impressum | One 1 Shop</title>
  <meta
    name="description"
    content="Offizielle Kontaktdaten und rechtliche Informationen zu One 1 Shop Handy Service in St. Pölten."
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.one1shop.at/impressum" />
</Helmet>


      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div>
            <a href="/">
              <img
                src="/images/logo.png"
                alt="One 1 Shop Logo"
                className="h-16"
              />
            </a>
          </div>
          <div className="space-x-6 hidden md:block">
            <a
              href="/"
              className="text-green-800 font-medium hover:underline"
            >
              Startseite
            </a>
          </div>
        </div>
      </nav>

      {/* Impressum Inhalt */}
      <main className="flex-grow py-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Impressum</h1>
        <p className="mb-4">
          <strong>One 1 Shop Handy Service</strong><br />
          Bahnhofplatz 15<br />
          3100 St. Pölten<br />
          Österreich
        </p>
        <p className="mb-4">
          <strong>Telefon:</strong> <a href="tel:+4369917432373" className="underline">+43 699 174 32 373</a><br />
          <strong>E-Mail:</strong> <a href="mailto:imuysal@outlook.com" className="underline">imuysal@outlook.com</a>
        </p>
        <p className="mb-4">
          <strong>Firmenbuchnummer:</strong> 12345678<br />
          <strong>Gerichtsstand:</strong> St. Pölten
        </p>
        <p className="text-sm text-gray-600 mt-10">
          Diese Website dient der Information über unsere Produkte und Dienstleistungen.
        </p>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-green-800 py-6 bg-green-50">
        <p>©️ {new Date().getFullYear()} OneShop – Alle Rechte vorbehalten</p>
        <p className="mt-2 font-semibold">
          PREMIUM HANDY SHOP in ST.PÖLTEN •{" "}
          <a
            href="tel:+4369917432373"
            className="underline hover:text-green-600"
          >
            +43 699 174 32 373
          </a>
        </p>
      </footer>
    </div>
  );
}