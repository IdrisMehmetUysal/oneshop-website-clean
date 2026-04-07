import React from "react";
import { Helmet } from "react-helmet-async";

export default function Impressum() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-green-900 scroll-smooth">
      <Helmet>
        <title>Impressum | One 1 Shop St. Pölten</title>
        <meta
          name="description"
          content="Impressum von One 1 Shop – Handy Reparatur, Verkauf und Service in St. Pölten. Alle rechtlichen Informationen und Kontaktdaten."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.one1shop.at/impressum" />
      </Helmet>

<main className="flex-grow py-16 md:py-20 px-4 md:px-6 max-w-4xl mx-auto">

  {/* TITLE */}
  <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 text-center">
    Impressum
  </h1>

  {/* CARD */}
  <div className="bg-green-50 p-5 md:p-8 rounded-xl md:rounded-2xl shadow space-y-6">

    {/* FIRMA */}
    <div>
      <h2 className="text-lg md:text-xl font-semibold mb-2">Unternehmen</h2>
      <p className="text-sm md:text-base leading-7">
        <strong>Inhaber:</strong> Hüseyin Ulusoy<br />
        <strong>Firmenname:</strong> One1Shop<br />
        <strong>Rechtsform:</strong> Einzelunternehmen
      </p>
    </div>

    {/* ADRESSE */}
    <div>
      <h2 className="text-lg md:text-xl font-semibold mb-2">Standort</h2>
      <p className="text-sm md:text-base leading-7">
        Bahnhofplatz 15<br />
        3100 St. Pölten<br />
        Österreich
      </p>
    </div>

    {/* KONTAKT */}
    <div>
      <h2 className="text-lg md:text-xl font-semibold mb-2">Kontakt</h2>
      <p className="text-sm md:text-base leading-7">
        Telefon:{" "}
        <a href="tel:+4369917432373" className="underline hover:text-green-700">
          +43 699 174 32 373
        </a>
        <br />
        E-Mail:{" "}
        <a href="mailto:office@one1shop.at" className="underline hover:text-green-700">
          office@one1shop.at
        </a>
      </p>
    </div>

    {/* UNTERNEHMENSDATEN */}
    <div>
      <h2 className="text-lg md:text-xl font-semibold mb-2">Unternehmensdaten</h2>
      <p className="text-sm md:text-base leading-7">
        <strong>UID-Nummer:</strong> ATU62132515<br />
        <strong>Tätigkeitsbereich:</strong><br />
        Reparatur, Ankauf und Verkauf von Smartphones, Laptops und Zubehör
      </p>
    </div>

    {/* WKO */}
    <div>
      <h2 className="text-lg md:text-xl font-semibold mb-2">Gewerbe & Aufsicht</h2>
      <p className="text-sm md:text-base leading-7">
        Mitglied der Wirtschaftskammer Österreich (WKO)<br />
        <a
          href="https://www.wko.at"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-green-700"
        >
          www.wko.at
        </a>
      </p>
    </div>

    {/* HAFTUNG */}
    <div>
      <h2 className="text-lg md:text-xl font-semibold mb-2">Haftungsausschluss</h2>
      <p className="text-xs md:text-sm text-green-800 leading-6 md:leading-7">
        Die Inhalte unserer Website werden regelmäßig geprüft und aktualisiert.
        Dennoch können wir keine Garantie für die vollständige Richtigkeit aller
        Angaben übernehmen.
      </p>
    </div>

  </div>

  {/* EXTRA TRUST */}
  <div className="mt-8 md:mt-10 text-center text-xs md:text-sm text-green-700 leading-6">
    ✔️ Offizieller Handy Service in St. Pölten <br className="md:hidden"/>
    ✔️ Persönliche Beratung vor Ort
  </div>

</main>
    </div>
  );
}
