import React, { useState } from "react";
import { Wrench, Gamepad2, Cpu, Smartphone } from "lucide-react";
import Modal from "./Modal"; // Produkt-Modal-Komponente
import Slider from "react-slick"; // Slick-Import in React
import "slick-carousel/slick/slick.css"; // Slick Carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Carousel Theme CSS
import { Helmet } from "react-helmet-async";
import CookieConsent from "react-cookie-consent";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Footer";

const GoogleReviews = () => {
  const reviews = [
    "Top Service, super freundlich und schnelle Reparatur! ⭐⭐⭐⭐⭐",
    "Sehr empfehlenswert, mein Handy funktioniert wieder perfekt! ⭐⭐⭐⭐⭐",
    "Beste Beratung, top Preise und schnelle Abwicklung. ⭐⭐⭐⭐⭐",
    "Super Team, haben mir sofort geholfen! Danke! ⭐⭐⭐⭐⭐",
    "Beste Handy-Reparatur in der Stadt – immer wieder gerne! ⭐⭐⭐⭐⭐",
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <section
      id="google-reviews"
      className="py-24 px-4 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-green-900 flex justify-center items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google Logo"
            className="h-10"
          />
          Unsere Google-Bewertungen
        </h2>

        <div className="bg-white p-8 rounded-2xl shadow-2xl transition-all duration-500">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-green-800 text-2xl font-semibold min-h-[120px] flex items-center justify-center px-4">
                  {review}
                </p>
              </motion.div>
            ))}
          </Slider>

          <div className="flex flex-col items-center mt-8 gap-4">
            <p className="text-green-900 font-semibold">
              ⭐ 5.0 Bewertung auf Google
            </p>
            <p className="text-green-700 text-lg">
              5,0 Sterne aus 1115 Bewertungen 🚀
            </p>
            <a
              href="https://www.google.com/search?q=One+1+Shop+Handy+Service#lrd=0x477278aedb1cc14b:0xb890f91911e7f4f5,1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-gradient-to-r from-green-700 to-green-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:scale-105 transition-transform duration-300"
            >
              Alle Bewertungen ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function OneShopHome() {
  const [navOpen, setNavOpen] = useState(false);

  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setShowHint(true);
    }, 15000); // nach 15 Sekunden

    const hideTimeout = setTimeout(() => {
      setShowHint(false);
    }, 25000); // nach insgesamt 25 Sekunden

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  const settings = {
    dots: true, // Zeigt Punkte zur Navigation an
    infinite: true, // Lässt das Karussell unendlich durchlaufen
    speed: 500, // Übergangsgeschwindigkeit in Millisekunden
    slidesToShow: 1, // Zeigt nur 1 Bild pro Ansicht
    slidesToScroll: 1, // Scrollt 1 Bild pro Mal
    autoplay: true, // Aktiviert den automatischen Wechsel
    autoplaySpeed: 3000, // Zeit in Millisekunden bis der nächste Slide kommt
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      title: "iPhone Hülle Transparent",
      desc: "Stoßfest, elegant – perfekt fürs iPhone.",
      img: "/images/produkt1.png",
    },
    {
      id: 2,
      title: "Gaming Headset Pro",
      desc: "Für PC, PS5 & Xbox – mit Mikro & Bass.",
      img: "/images/produkt2.png",
    },
    {
      id: 3,
      title: "MagSafe Ladegerät",
      desc: "Kabelloses Laden – schnell & sicher.",
      img: "/images/produkt3.png",
    },
  ];

  return (
    <main className="min-h-screen text-green-900 overflow-x-hidden scroll-smooth">
      {/* Geraete Retter Premie Banner*/}
<motion.div
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="bg-yellow-400 text-black text-center py-3 px-6 font-semibold shadow-md"
>
  💸 Geräte Retter Prämie sichern – Spare bei Handy- & Laptop-Reparaturen!
  <a
    href="https://www.xn--gerte-retter-prmie-ntbm.at/"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-4 underline hover:text-green-800"
  >
    Mehr erfahren
  </a>
</motion.div>

      <Helmet>
        <title>One 1 Shop – Handy Reparatur & Verkauf in St. Pölten</title>
        <meta
          name="description"
          content="Handy Reparatur, Laptop Service und Smartphone-Zubehör am Bahnhofplatz 15 in St. Pölten – schnell, günstig & professionell. Jetzt vorbeikommen!"
        />
        <meta
          name="keywords"
          content="Handy Reparatur St. Pölten, Displaytausch, iPhone Reparatur, Samsung Reparatur, Laptop Service, Handy Zubehör, One 1 Shop"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.one1shop.at/" />

        {/* Open Graph für Social Media */}
        <meta
          property="og:title"
          content="One 1 Shop – Handy Reparatur & Verkauf in St. Pölten"
        />
        <meta
          property="og:description"
          content="Handy Reparatur und Smartphone-Zubehör am Bahnhofplatz 15, St. Pölten. Schnell & günstig!"
        />
        <meta
          property="og:image"
          content="https://www.one1shop.at/images/logo.png"
        />
        <meta property="og:url" content="https://www.one1shop.at/" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Obere Leiste mit Logo und Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
<a href="/" className="flex items-center">
  <img
    src="/images/logo.png"
    alt="One 1 Shop Logo"
    className="h-16"
  />
</a>
          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-green-800 focus:outline-none"
            >
              {navOpen ? (
                // X Icon
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Burger Icon
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="space-x-6 hidden md:block">
            <a
              href="#leistungen"
              className="text-green-800 font-medium transition-all duration-300 hover:underline hover:text-green-600"
            >
              Leistungen
            </a>
            <a
              href="#produkte"
              className="text-green-800 font-medium transition-all duration-300 hover:underline hover:text-green-600"
            >
              Produkte
            </a>
            <a
              href="#kontakt"
              className="text-green-800 font-medium transition-all duration-300 hover:underline hover:text-green-600"
            >
              Kontakt
            </a>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {navOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-40 py-6 space-y-4 text-center"
              >
                <a
                  href="#leistungen"
                  onClick={() => setNavOpen(false)}
                  className="block text-green-800 font-medium hover:underline"
                >
                  Leistungen
                </a>
                <a
                  href="#produkte"
                  onClick={() => setNavOpen(false)}
                  className="block text-green-800 font-medium hover:underline"
                >
                  Produkte
                </a>
                <a
                  href="#kontakt"
                  onClick={() => setNavOpen(false)}
                  className="block text-green-800 font-medium hover:underline"
                >
                  Kontakt
                </a>
                <a
                  href="/impressum"
                  onClick={() => setNavOpen(false)}
                  className="block text-green-800 font-medium hover:underline"
                >
                  Impressum
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero-Bereich */}
      <header className="bg-gradient-to-r from-green-800 to-green-500 text-white px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="uppercase tracking-[0.2em] text-green-100 text-sm mb-4">
              One 1 Shop in St. Pölten
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
  Handy Reparatur in St. Pölten – iPhone, Samsung, Datenrettung & mehr
</h1>

<p className="text-lg md:text-xl text-green-50 mb-8 leading-relaxed">
  Display kaputt? Akku schwach? Daten verloren? Wir helfen dir schnell und zuverlässig direkt in St. Pölten – von Smartphone-Reparatur bis Datenrettung und Zubehör.
</p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#kontakt"
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

          <div>
            <Slider {...settings}>
              <div>
                <img
                  src="/images/header1.png"
                  alt="Handy Reparatur in St. Pölten"
                  className="w-full h-[220px] md:h-[360px] object-cover rounded-xl shadow-xl"
                />
              </div>
              <div>
                <img
                  src="/images/header2.png"
                  alt="iPhone und Samsung Reparatur in St. Pölten"
                  className="w-full h-[220px] md:h-[360px] object-cover rounded-xl shadow-xl"
                />
              </div>
              <div>
                <img
                  src="/images/header3.png"
                  alt="Smartphone Verkauf und Zubehör in St. Pölten"
                  className="w-full h-[220px] md:h-[360px] object-cover rounded-xl shadow-xl"
                />
              </div>
              <div>
                <img
                  src="/images/header4.png"
                  alt="Konsolenreparatur und Service in St. Pölten"
                  className="w-full h-[220px] md:h-[360px] object-cover rounded-xl shadow-xl"
                />
              </div>
            </Slider>
          </div>
        </div>
      </header>

      
<section className="py-10 px-6 bg-white border-b">
  <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 text-center text-sm md:text-base text-green-800">
    <span>⭐ 5.0 Bewertung auf Google</span>
    <span>📍 Direkt in St. Pölten</span>
    <span>⚡ Schnelle Reparaturen</span>
    <span>🔧 Persönliche Beratung</span>
  </div>
</section>

<section
  id="leistungen"
  className="py-24 px-4 bg-gradient-to-b from-white to-green-50"
>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="max-w-6xl mx-auto text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Unsere Leistungen in St. Pölten
    </h2>

<p className="text-green-800 max-w-3xl mx-auto mb-12">
  Wir sind dein Allrounder rund um Smartphone- und Technik-Service. Von{" "}
  <a href="/iphone-reparatur-st-poelten" className="underline hover:text-green-600">
    iPhone Reparatur in St. Pölten
  </a>{" "}
  und{" "}
  <a href="/samsung-reparatur-st-poelten" className="underline hover:text-green-600">
    Samsung Reparatur in St. Pölten
  </a>{" "}
  über{" "}
  <a href="/datenrettung-st-poelten" className="underline hover:text-green-600">
    Datenrettung in St. Pölten
  </a>
  ,{" "}
  <a href="/konsolen-reparatur-st-poelten" className="underline hover:text-green-600">
    Konsolen Reparatur in St. Pölten
  </a>
  ,{" "}
  <a href="/microsoldering-st-poelten" className="underline hover:text-green-600">
    Microsoldering in St. Pölten
  </a>
  ,{" "}
  <a href="/handy-verkauf-zubehoer-st-poelten" className="underline hover:text-green-600">
    Handy Verkauf & Zubehör in St. Pölten
  </a>{" "}
  sowie{" "}
  <a href="/handyvertraege-wertgarantie-st-poelten" className="underline hover:text-green-600">
    Handyverträge & Wertgarantie in St. Pölten
  </a>{" "}
  – bei uns bekommst du alles aus einer Hand.
</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a
  href="/handy-reparatur-st-poelten"
  className="block bg-white rounded-2xl shadow p-6 hover:shadow-lg hover:scale-105 transition"
>
  <Wrench className="w-12 h-12 mx-auto mb-4 text-green-800" />
  <h3 className="text-xl font-semibold">Handy Reparatur</h3>
  <p className="text-green-700 mt-2">
    iPhone, Samsung und viele weitere Marken. Display, Akku,
    Ladeprobleme oder Wasserschäden – wir helfen schnell.
  </p>
</a>

<a
  href="/datenrettung-st-poelten"
  className="block bg-white rounded-2xl shadow p-6 hover:shadow-lg hover:scale-105 transition"
>
  <Smartphone className="w-12 h-12 mx-auto mb-4 text-green-800" />
  <h3 className="text-xl font-semibold">Datenrettung</h3>
  <p className="text-green-700 mt-2">
    Wir retten Fotos, Kontakte und wichtige Daten auch bei defekten
    oder beschädigten Smartphones.
  </p>
</a>

<a
  href="/konsolen-reparatur-st-poelten"
  className="block bg-white rounded-2xl shadow p-6 hover:shadow-lg hover:scale-105 transition"
>
  <Gamepad2 className="w-12 h-12 mx-auto mb-4 text-green-800" />
  <h3 className="text-xl font-semibold">Konsolen Reparatur</h3>
  <p className="text-green-700 mt-2">
    HDMI-Probleme, Überhitzung oder Abschalten – inkl. Service mit neuer
    Wärmeleitpaste.
  </p>
</a>

<a
  href="/microsoldering-st-poelten"
  className="block bg-white rounded-2xl shadow p-6 hover:shadow-lg hover:scale-105 transition"
>
  <Cpu className="w-12 h-12 mx-auto mb-4 text-green-800" />
  <h3 className="text-xl font-semibold">Microsoldering</h3>
  <p className="text-green-700 mt-2">
    Präzise Lötarbeiten auf Platinen und Motherboards vom Profi.
  </p>
</a>

<a
  href="/handy-verkauf-zubehoer-st-poelten"
  className="block bg-white rounded-2xl shadow p-6 hover:shadow-lg hover:scale-105 transition"
>
  <Smartphone className="w-12 h-12 mx-auto mb-4 text-green-800" />
  <h3 className="text-xl font-semibold">Verkauf & Zubehör</h3>
  <p className="text-green-700 mt-2">
    Neue, gebrauchte und erneuerte Smartphones ♻️ sowie Zubehör direkt vor Ort.
  </p>
</a>

<a
  href="/handyvertraege-wertgarantie-st-poelten"
  className="block bg-white rounded-2xl shadow p-6 hover:shadow-lg hover:scale-105 transition"
>
  <Wrench className="w-12 h-12 mx-auto mb-4 text-green-800" />
  <h3 className="text-xl font-semibold">Verträge & Wertgarantie</h3>
  <p className="text-green-700 mt-2">
    Beratung als Partnershop – inklusive Absicherung über Wertgarantie.
  </p>
</a>

    </div>
  </motion.div>
</section>


      <section className="py-20 px-4 bg-green-800 text-white">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Alles rund ums Smartphone – an einem Ort
    </h2>

    <p className="text-lg text-green-100 leading-8">
      Unser Ziel ist, dass du nach deinem Besuch auf unserer Website oder in unserem Shop
      nicht noch woanders suchen musst. Ob Reparatur, Datenrettung, Verkauf, Zubehör,
      Vertrag oder Beratung – bei One 1 Shop in St. Pölten bekommst du eine rundum Betreuung
      für fast jedes Anliegen rund um dein Smartphone.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <span className="bg-white/20 px-4 py-2 rounded-full">Reparatur</span>
      <span className="bg-white/20 px-4 py-2 rounded-full">Datenrettung</span>
      <span className="bg-white/20 px-4 py-2 rounded-full">Verkauf</span>
      <span className="bg-white/20 px-4 py-2 rounded-full">Zubehör</span>
      <span className="bg-white/20 px-4 py-2 rounded-full">Verträge</span>
    </div>
  </div>
</section>

<section className="py-20 px-6 bg-green-50">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-900">
      Deine Vorteile bei One 1 Shop
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="font-semibold text-xl mb-3 text-green-900">⚡ Schnelle Hilfe</h3>
        <p className="text-green-800">
          Viele Reparaturen erledigen wir so schnell wie möglich, damit du dein Gerät nicht lange missen musst.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="font-semibold text-xl mb-3 text-green-900">🤝 Persönliche Beratung</h3>
        <p className="text-green-800">
          Kein anonymer Service – wir nehmen uns Zeit für dich und finden gemeinsam die beste Lösung.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
  <h3 className="font-semibold text-xl mb-3 text-green-900">📍 Direkt vor Ort</h3>
  <p className="text-green-800">
    Kein anonymer Online-Service – wir sind direkt in St. Pölten für dich da und beraten dich persönlich.
  </p>
</div>
    </div>
  </div>
</section>


      
<section id="geraete-praemie" className="py-24 px-4 bg-yellow-100">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">
      💸 Geräte Retter Prämie vom Staat
    </h2>

    <p className="text-lg text-yellow-900 mb-4">
      Spare bei deiner Reparatur bares Geld! Die Geräte Retter Prämie ist ein
      Förderprogramm, das Reparaturen an elektronischen Geräten unterstützt.
    </p>

    <p className="text-yellow-900 mb-6">
      Wir beraten dich direkt vor Ort in St. Pölten und helfen dir dabei, die
      Prämie optimal zu nutzen – einfach, schnell und ohne Stress.
    </p>

    <a
      href="https://www.xn--gerte-retter-prmie-ntbm.at/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold transition"
    >
      Mehr Infos zur Prämie
    </a>
  </div>
</section>

      <section id="produkte" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Unsere Produkte
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {products.map((p) => (
              <motion.div
                key={p.id}
                onClick={() => setSelectedProduct(p)}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: p.id * 0.1 }}
                className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-48 w-full object-contain mb-4"
                />
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-green-700 text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {selectedProduct && (
            <Modal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </div>
      </section>

     <section id="partner" className="py-24 px-4 bg-green-50">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10">
      Unsere Vertragspartner
    </h2>

    <p className="text-green-800 max-w-3xl mx-auto mb-10 leading-8">
  Als Partnershop mehrerer Anbieter beraten wir dich nicht nur bei Reparaturen,
  sondern auch bei passenden Handyverträgen und Zusatzleistungen. Zusätzlich
  bieten wir mit Wertgarantie eine weitere Möglichkeit, dein Gerät sinnvoll
  abzusichern – alles direkt bei uns in St. Pölten.
</p>

    {/* Erste Reihe: Mobilnetzpartner */}
    <div className="flex justify-center gap-10 items-center flex-wrap mb-10">
      <img src="/images/partner1.png" alt="Magenta" className="h-20" />
      <img src="/images/partner2.png" alt="Drei" className="h-20" />
      <img src="/images/partner3.png" alt="MTEL" className="h-20" />
      <img src="/images/partner6-a1.png" alt="A1" className="h-20" />
    </div>

    {/* Zweite Reihe: Versicherung / Förderungen */}
    <div className="flex justify-center gap-10 items-center flex-wrap">
      <img src="/images/partner4-wertgarantie.png" alt="WERTGARANTIE" className="h-20" />
      <img src="/images/geraete-praemie.png" alt="Geräte Retter Prämie" className="h-20" />
    </div>
  </div>
</section>

      <section className="py-20 px-4 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Wertgarantie für dein Gerät
    </h2>

    <p className="text-green-800 leading-8 mb-8">
      Schütze dein Smartphone zusätzlich mit einer passenden Wertgarantie.
      So bist du bei vielen Schäden besser abgesichert und kannst dein Gerät
      langfristig mit einem guten Gefühl nutzen. Gerne beraten wir dich auch
      persönlich direkt bei uns in St. Pölten.
    </p>

    <a
      href="#kontakt"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
    >
      Jetzt zur Wertgarantie
    </a>
  </div>
</section>

      <section id="kontakt" className="py-24 px-4 bg-white">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">
      Brauchst du Hilfe mit deinem Gerät?
    </h2>

    <p className="mb-6 text-green-800 text-lg">
      Schreib uns jetzt kurz auf WhatsApp oder ruf uns an – wir sagen dir direkt, was möglich ist.
    </p>

    <div className="bg-green-50 p-6 rounded-xl mb-6 border border-green-100">
<p className="text-green-900 font-semibold text-lg">
  ⚡ Schnelle Rückmeldung – wir melden uns so rasch wie möglich
</p>
    </div>

    <div className="grid gap-4 text-left">
      <input
        id="kontakt-name"
        type="text"
        placeholder="Dein Name"
        className="p-3 rounded border border-green-300 w-full"
      />
      <textarea
        id="kontakt-nachricht"
        placeholder="Dein Anliegen (z.B. iPhone Display kaputt)"
        rows="4"
        className="p-3 rounded border border-green-300 w-full"
      ></textarea>

<div className="flex flex-col md:flex-row gap-4">

  {/* WhatsApp */}
  <button
    onClick={() => {
      const name = document.getElementById("kontakt-name").value.trim();
      const nachricht = document.getElementById("kontakt-nachricht").value.trim();
      const text = `Hallo, ich bin ${name || "ein Kunde"}. ${nachricht || "Ich habe eine Frage."}`;
      const encoded = encodeURIComponent(text);
      window.open(`https://wa.me/4369917432373?text=${encoded}`, "_blank");
    }}
    className="flex-1 bg-green-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
  >
    💬 WhatsApp senden
  </button>

  {/* Mail */}
  <button
    onClick={() => {
      const name = document.getElementById("kontakt-name").value.trim();
      const nachricht = document.getElementById("kontakt-nachricht").value.trim();
      const subject = encodeURIComponent("Anfrage über Website");
      const body = encodeURIComponent(`Name: ${name || "-"}\n\nNachricht:\n${nachricht || "-"}`);
      window.location.href = `mailto:office@one1shop.at?subject=${subject}&body=${body}`;
    }}
    className="flex-1 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition"
  >
    ✉️ E-Mail senden
  </button>

</div>

      <p className="text-xs text-green-700 mt-2">
        Mit dem Absenden erklärst du dich damit einverstanden, dass deine
        angegebenen Daten zur Bearbeitung deiner Anfrage verwendet werden.
        Weitere Informationen findest du in unserer{" "}
        <a href="/datenschutz" className="underline hover:text-green-900">
          Datenschutzerklärung
        </a>
        .
      </p>
    </div>

    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">

  <a
    href="tel:+4369917432373"
    className="bg-green-800 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700"
  >
    📞 +43 699 174 32 373
  </a>

  <a
    href="https://wa.me/4369917432373"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-500"
  >
    💬 Direkt auf WhatsApp schreiben
  </a>

</div>

<p className="text-sm text-green-700 mt-4 text-center">
  ✔️ Kostenlos & unverbindlich • ⚡ Antwort in Minuten • 👨‍🔧 Direkt vom Profi
</p>

</div>
</section>

      <GoogleReviews />
      <section id="standort" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Unser Standort
          </h2>
          <p className="mb-10 text-green-800">
            Komm vorbei und lass dich beraten – wir freuen uns auf dich!
          </p>

          <motion.div
            className="w-full h-72 rounded-xl overflow-hidden shadow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Google Maps Standort"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.5196443647267!2d15.62535814688253!3d48.2081361041844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477278aedb1cc14b%3A0xb890f91911e7f4f5!2sOne%201%20Shop%20Handy%20Service!5e0!3m2!1sde!2sat!4v1745510539310!5m2!1sde!2sat"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <p className="text-xs text-green-700 mt-4">
            Beim Laden der Karte werden personenbezogene Daten (z. B.
            IP-Adresse) an Google übermittelt. Mehr Infos findest du in unserer{" "}
            <a href="/datenschutz" className="underline hover:text-green-900">
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />

      <CookieConsent
        location="bottom"
        buttonText="Okay, verstanden"
        style={{ background: "#f0fdf4", color: "#14532d" }}
        buttonStyle={{
          background: "#14532d",
          color: "#fff",
          fontSize: "13px",
          borderRadius: "9999px",
          padding: "10px 20px",
        }}
        expires={150}
      >
        Diese Website verwendet Cookies zur Verbesserung der
        Benutzerfreundlichkeit und zur Einbindung von Diensten wie Google Maps.
      </CookieConsent>

      {showHint && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-24 left-4 z-40 bg-white border border-green-700 text-green-800 px-4 py-3 rounded-xl shadow-lg text-sm"
        >
          Tolle Angebote warten auf dich ✌️
        </motion.div>
      )}

      <a
  href="https://wa.me/4369917432373"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg z-50 hover:bg-green-500 transition"
>
  💬 WhatsApp
</a>
    </main>
  );
}
