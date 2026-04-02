import React from "react";
import { Helmet } from "react-helmet-async";

export default function IphoneReparatur() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-5xl mx-auto">

      <Helmet>
        <title>iPhone Reparatur St. Pölten – schnell & professionell</title>
        <meta
          name="description"
          content="iPhone Reparatur in St. Pölten – Displaytausch, Akku, Wasserschaden und mehr. Schnell, zuverlässig und professionell beim One 1 Shop."
        />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6">
        iPhone Reparatur in St. Pölten
      </h1>

      <p className="text-lg text-green-800 mb-6">
        Du suchst eine zuverlässige iPhone Reparatur in St. Pölten? Beim One 1 Shop
        bekommst du schnelle Hilfe bei Displaybruch, Akku-Problemen,
        Ladeproblemen oder Wasserschäden.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Unsere iPhone Reparaturen
      </h2>

      <ul className="list-disc ml-6 text-green-800 space-y-2">
        <li>Displaytausch</li>
        <li>Akkutausch</li>
        <li>Ladebuchsen-Reparatur</li>
        <li>Wasserschaden-Reparatur</li>
        <li>Datenrettung</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Warum One 1 Shop?
      </h2>

      <p className="text-green-800">
        Wir sind dein Ansprechpartner in St. Pölten für schnelle und
        professionelle iPhone Reparaturen. Dank unserer Erfahrung und modernen
        Technik können wir viele Probleme direkt vor Ort lösen.
      </p>

      <a
        href="/#kontakt"
        className="inline-block mt-10 bg-green-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700"
      >
        Jetzt Termin vereinbaren
      </a>

    </main>
  );
}
