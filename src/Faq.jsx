import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Wie lange dauert eine Reparatur?",
      a: "Viele Reparaturen erledigen wir noch am selben Tag. Komplexere Fälle können etwas länger dauern – wir informieren dich aber immer vorab."
    },
    {
      q: "Muss ich einen Termin machen?",
      a: "Nein, du kannst einfach vorbeikommen. Alternativ kannst du uns auch vorab auf WhatsApp schreiben."
    },
    {
      q: "Was kostet eine Reparatur?",
      a: "Der Preis hängt vom Schaden ab. Wir geben dir immer vorab eine transparente Einschätzung – ohne versteckte Kosten."
    },
    {
      q: "Werden meine Daten gelöscht?",
      a: "In den meisten Fällen bleiben deine Daten erhalten. Trotzdem empfehlen wir immer ein Backup."
    },
    {
      q: "Repariert ihr auch Laptops und MacBooks?",
      a: "Ja, wir reparieren auch Windows Laptops und MacBooks – z.B. Display, Akku, Tastatur oder Ladeprobleme."
    },
    {
      q: "Welche Geräte repariert ihr?",
      a: "Wir reparieren Smartphones (iPhone, Samsung & mehr), Laptops, MacBooks und Konsolen wie PlayStation, Xbox und Nintendo Switch."
    }
  ];

  return (
    <main className="min-h-screen text-green-900 bg-white">

      <Helmet>
        <title>FAQ – Häufige Fragen | One 1 Shop</title>
        <meta
          name="description"
          content="Antworten auf häufige Fragen zu Handy, Laptop und Konsolen Reparaturen bei One 1 Shop in St. Pölten."
        />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-800 to-green-500 text-white px-4 md:px-6 py-16 md:py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Häufige Fragen
        </h1>

        <p className="text-sm md:text-xl max-w-2xl mx-auto">
          Antworten auf die wichtigsten Fragen rund um unsere Reparaturen.
        </p>
      </section>

      {/* FAQ LIST */}
      <section className="py-14 md:py-20 px-4 max-w-3xl mx-auto">

        <div className="space-y-4">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-xl overflow-hidden shadow-sm"
            >
              {/* QUESTION */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-sm md:text-lg"
              >
                {item.q}
                <span className="text-green-600 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 text-green-800 text-sm md:text-base"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 text-center bg-green-50">
        <h2 className="text-xl md:text-3xl font-bold mb-4">
          Noch Fragen?
        </h2>

        <p className="text-green-800 mb-6 text-sm md:text-lg">
          Schreib uns einfach – wir helfen dir sofort weiter.
        </p>

        <a
          href="https://wa.me/4369917432373"
          className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition"
        >
          💬 WhatsApp schreiben
        </a>
      </section>

    </main>
  );
}