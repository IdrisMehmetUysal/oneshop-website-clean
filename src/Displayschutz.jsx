import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";

/* ================= FAQ ================= */
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-green-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-semibold text-sm sm:text-base">{question}</h3>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 text-green-700 text-sm overflow-hidden"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ================= PAGE ================= */
export default function Displayschutz() {
  return (
    <main className="min-h-screen text-green-900 bg-white">

      <Helmet>
        <title>Displayschutz St. Pölten | Schutzfolie, Privacy & Panzerglas</title>
        <meta
          name="description"
          content="Displayschutz in St. Pölten: Schutzfolie, Privacy & Panzerglas. Professionell, blasenfrei und sofort montiert bei One 1 Shop."
        />

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Wie lange dauert die Montage?",
                acceptedAnswer: { "@type": "Answer", text: "Nur wenige Minuten direkt im Shop." }
              },
              {
                "@type": "Question",
                name: "Was ist besser: Folie oder Panzerglas?",
                acceptedAnswer: { "@type": "Answer", text: "Panzerglas schützt stärker, Folie ist dünner." }
              }
            ]
          })
        }} />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-4 py-12 md:py-16 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          Displayschutz in St. Pölten
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-green-100 mb-5 max-w-xl mx-auto">
          Schutzfolie, Panzerglas & Privacy – blasenfrei montiert in wenigen Minuten.
        </p>

        <div className="bg-white/10 inline-block px-3 py-1 rounded-full mb-5 text-xs sm:text-sm">
          🔥 Beliebt bei unseren Kunden
        </div>

        <a
          href="https://wa.me/4369917432373"
          className="inline-block bg-white text-green-800 px-5 py-3 rounded-full font-semibold text-sm sm:text-base"
        >
          💬 Jetzt anfragen
        </a>
      </section>

      {/* WARUM */}
      <section className="py-12 md:py-20 px-4 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
          Warum Displayschutz?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto text-left">
          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="font-semibold">🛡 Schutz</h3>
            <p className="text-sm">Verhindert Kratzer & Displaybruch.</p>
          </div>

          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="font-semibold">💸 Kosten sparen</h3>
            <p className="text-sm">Günstiger als Reparatur.</p>
          </div>

          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="font-semibold">✨ Perfekt</h3>
            <p className="text-sm">Blasenfrei montiert.</p>
          </div>
        </div>
      </section>

      {/* VARIANTEN */}
      <section className="py-12 md:py-20 px-4 bg-green-50 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
          Unsere Varianten
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto text-left">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3>📱 Schutzfolie</h3>
            <p className="text-sm">Dünn & kaum sichtbar.</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3>💎 Panzerglas</h3>
            <p className="text-sm">Maximaler Schutz.</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3>🔒 Privacy</h3>
            <p className="text-sm">Nur frontal sichtbar.</p>
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="py-12 md:py-20 px-4 bg-white text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10">
          So läuft es ab
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          <div className="bg-green-50 p-5 rounded-xl">
            <h3 className="font-semibold">1. Gerät wählen</h3>
            <p className="text-sm">Passende Folie auswählen.</p>
          </div>

          <div className="bg-green-50 p-5 rounded-xl">
            <h3 className="font-semibold">2. Reinigung</h3>
            <p className="text-sm">Staubfrei vorbereitet.</p>
          </div>

          <div className="bg-green-50 p-5 rounded-xl">
            <h3 className="font-semibold">3. Montage</h3>
            <p className="text-sm">Blasenfrei angebracht.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center">
            FAQ
          </h2>

          <FAQItem question="Wie lange dauert es?" answer="5–10 Minuten." />
          <FAQItem question="Privacy möglich?" answer="Ja, verfügbar." />
          <FAQItem question="Ohne Termin?" answer="Ja, jederzeit." />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4 bg-green-800 text-white text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
          Jetzt Displayschutz holen
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