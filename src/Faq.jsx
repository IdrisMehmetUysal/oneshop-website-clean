import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
  {
    q: "Wie lange dauert eine Reparatur?",
    a: "Viele Standard-Reparaturen wie Display- oder Akkutausch erledigen wir oft noch am selben Tag. In vielen Fällen dauert es nur 30 bis 60 Minuten. Bei komplexeren Schäden, z. B. Wasserschäden oder Platinenproblemen, kann es etwas länger dauern – wir informieren dich aber immer transparent vorab.",
  },
  {
    q: "Muss ich einen Termin machen?",
    a: "Nein, du kannst jederzeit spontan bei uns in St. Pölten vorbeikommen. Wenn du Wartezeit vermeiden willst, kannst du uns vorher kurz auf WhatsApp schreiben – dann wissen wir direkt Bescheid.",
  },
  {
    q: "Was kostet eine Reparatur?",
    a: "Der Preis hängt vom Modell und Schaden ab. Wir geben dir immer vorab eine ehrliche und transparente Einschätzung. Es gibt bei uns keine versteckten Kosten – du entscheidest erst nach unserer Diagnose, ob du die Reparatur machen möchtest.",
  },
  {
    q: "Werden meine Daten gelöscht?",
    a: "In den meisten Fällen bleiben deine Daten vollständig erhalten. Trotzdem empfehlen wir immer ein Backup, da bei bestimmten Defekten oder Softwareproblemen ein Datenverlust nicht ausgeschlossen werden kann.",
  },
  {
    q: "Welche Geräte repariert ihr?",
    a: "Wir reparieren Smartphones (iPhone, Samsung, Xiaomi, Huawei und mehr), Laptops, MacBooks sowie Konsolen wie PlayStation, Xbox und Nintendo Switch. Wenn du dir unsicher bist, frag einfach kurz nach.",
  },
  {
    q: "Repariert ihr auch Wasserschäden?",
    a: "Ja, wir helfen auch bei Wasserschäden. Wichtig ist, dass du dein Gerät so schnell wie möglich vorbeibringst und nicht mehr versuchst es einzuschalten. Je schneller wir reagieren, desto höher sind die Chancen, dass wir dein Gerät oder zumindest deine Daten retten können.",
  },
  {
    q: "Lohnt sich eine Reparatur überhaupt?",
    a: "In vielen Fällen ja – vor allem bei neueren Geräten. Wir beraten dich ehrlich, ob sich die Reparatur lohnt oder nicht. Wenn es wirtschaftlich keinen Sinn macht, sagen wir dir das direkt.",
  },
  {
    q: "Habt ihr Ersatzteile vor Ort?",
    a: "Für viele gängige Modelle haben wir die wichtigsten Ersatzteile direkt vor Ort. Dadurch können wir viele Reparaturen sofort durchführen, ohne lange Wartezeiten.",
  },
  {
    q: "Bietet ihr Garantie auf Reparaturen?",
    a: "Ja, wir stehen hinter unserer Arbeit. Auf viele Reparaturen geben wir eine Garantie – sprich uns einfach an, wir erklären dir genau, was abgedeckt ist.",
  },
  {
    q: "Kann ich auch ohne Reparatur einfach vorbeikommen und fragen?",
    a: "Natürlich. Du kannst jederzeit vorbeikommen und dich beraten lassen. Wir schauen uns dein Gerät an und sagen dir ehrlich, was sinnvoll ist.",
  },
  {
    q: "Bietet ihr auch Displayschutz an?",
    a: "Ja, wir bieten Schutzfolien, Panzerglas und Privacy-Displayschutz an – professionell montiert, blasenfrei und sofort einsatzbereit.",
  },
  {
    q: "Helft ihr auch bei Software-Problemen?",
    a: "Ja, wir unterstützen dich auch bei Software-Themen wie App-Problemen, Einrichtung, Datenübertragung oder Systemfehlern – besonders auch bei Huawei Geräten ohne Google-Dienste.",
  },
  {
    q: "Wo befindet sich euer Shop?",
    a: "Du findest uns direkt am Bahnhofplatz 15 in St. Pölten. Einfach vorbeikommen – wir sind gut erreichbar und beraten dich persönlich.",
  },
];

  return (
    <main className="min-h-screen text-green-900 bg-white">
      <Helmet>
        <title>FAQ – Häufige Fragen | One 1 Shop</title>
        <meta
          name="description"
          content="Antworten auf häufige Fragen zu Handy, Laptop und Konsolen Reparaturen bei One 1 Shop in St. Pölten."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Wie lange dauert eine Reparatur?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Viele Reparaturen erledigen wir noch am selben Tag.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Muss ich einen Termin machen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nein, du kannst einfach vorbeikommen oder uns auf WhatsApp schreiben.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was kostet eine Reparatur?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Das hängt vom Schaden ab – wir geben dir immer vorab eine Einschätzung.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Werden meine Daten gelöscht?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In der Regel bleiben deine Daten erhalten.",
                  },
                },
              ],
            }),
          }}
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
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
        <h2 className="text-xl md:text-3xl font-bold mb-4">Noch Fragen?</h2>

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
