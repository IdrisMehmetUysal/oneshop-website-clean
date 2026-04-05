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
import GoogleReviews from "./components/GoogleReviews";



export default function OneShopHome() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

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
    <main className="min-h-screen text-green-900 scroll-smooth">
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


      {/* Hero-Bereich */}
<header className="bg-gradient-to-r from-green-800 to-green-500 text-white px-4 py-12 md:px-6 md:py-24">
  <div className="max-w-7xl mx-auto px-4 md:px-0 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
    
    <div className="text-center md:text-left">
      
      <p className="uppercase tracking-[0.2em] text-green-100 text-xs md:text-sm mb-3 md:mb-4">
        One 1 Shop in St. Pölten
      </p>

      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
        Handy Reparatur in St. Pölten – iPhone, Samsung, Datenrettung & mehr
      </h1>

      <p className="text-base md:text-xl text-green-50 mb-6 md:mb-8 leading-relaxed">
        Display kaputt? Akku schwach? Daten verloren? Wir helfen dir schnell und zuverlässig direkt in St. Pölten – von Smartphone-Reparatur bis Datenrettung und Zubehör.
      </p>

      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 md:gap-4">
        
        <a
          href="#kontakt"
          className="bg-white text-green-800 px-5 py-3 text-sm md:text-base rounded-full font-semibold hover:bg-green-100 transition"
        >
          Jetzt Kontakt aufnehmen
        </a>

        <a
          href="https://wa.me/4369917432373"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-5 py-3 text-sm md:text-base rounded-full font-semibold hover:bg-green-500 transition text-center"
          onClick={() => {
            if (window.gtag) {
              window.gtag("event", "whatsapp_click", {
                event_category: "contact",
                event_label: "whatsapp_button"
              });
            }
          }}
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
            className="w-full h-[200px] sm:h-[240px] md:h-[360px] object-cover rounded-xl shadow-xl"
          />
        </div>
        <div>
          <img
            src="/images/header2.png"
            alt="iPhone und Samsung Reparatur in St. Pölten"
            className="w-full h-[200px] sm:h-[240px] md:h-[360px] object-cover rounded-xl shadow-xl"
          />
        </div>
        <div>
          <img
            src="/images/header3.png"
            alt="Smartphone Verkauf und Zubehör in St. Pölten"
            className="w-full h-[200px] sm:h-[240px] md:h-[360px] object-cover rounded-xl shadow-xl"
          />
        </div>
        <div>
          <img
            src="/images/header4.png"
            alt="Konsolenreparatur und Service in St. Pölten"
            className="w-full h-[200px] sm:h-[240px] md:h-[360px] object-cover rounded-xl shadow-xl"
          />
        </div>
      </Slider>
    </div>

  </div>
</header>

      {/* Ziwschen Hero und Leistungen-Bereich */}
<section className="py-10 px-6 bg-white border-b">
  <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 text-center text-sm md:text-base text-green-800">
    <span>⭐ 5.0 Bewertung auf Google</span>
    <span>📍 Direkt in St. Pölten</span>
    <span>⚡ Schnelle Reparaturen</span>
    <span>🔧 Persönliche Beratung</span>
  </div>
</section>

{/* Leistungen-Bereich */}
<section
  id="leistungen"
  className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-green-50"
>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="max-w-6xl mx-auto px-4 md:px-0 text-center"
  >
    <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
      Unsere Leistungen in St. Pölten
    </h2>

    <p className="text-sm md:text-base text-green-800 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
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

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">

      {/* CARD */}
      <a
        href="/handy-reparatur-st-poelten"
        className="block bg-white rounded-xl md:rounded-2xl shadow p-4 md:p-6 hover:shadow-lg hover:scale-[1.02] transition"
      >
        <Wrench className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-green-800" />
        <h3 className="text-lg md:text-xl font-semibold">Handy Reparatur</h3>
        <p className="text-sm md:text-base text-green-700 mt-1 md:mt-2">
          iPhone, Samsung und viele weitere Marken. Display, Akku,
          Ladeprobleme oder Wasserschäden – wir helfen schnell.
        </p>
      </a>

      <a
        href="/datenrettung-st-poelten"
        className="block bg-white rounded-xl md:rounded-2xl shadow p-4 md:p-6 hover:shadow-lg hover:scale-[1.02] transition"
      >
        <Smartphone className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-green-800" />
        <h3 className="text-lg md:text-xl font-semibold">Datenrettung</h3>
        <p className="text-sm md:text-base text-green-700 mt-1 md:mt-2">
          Wir retten Fotos, Kontakte und wichtige Daten auch bei defekten
          oder beschädigten Smartphones.
        </p>
      </a>

      <a
        href="/konsolen-reparatur-st-poelten"
        className="block bg-white rounded-xl md:rounded-2xl shadow p-4 md:p-6 hover:shadow-lg hover:scale-[1.02] transition"
      >
        <Gamepad2 className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-green-800" />
        <h3 className="text-lg md:text-xl font-semibold">Konsolen Reparatur</h3>
        <p className="text-sm md:text-base text-green-700 mt-1 md:mt-2">
          HDMI-Probleme, Überhitzung oder Abschalten – inkl. Service mit neuer
          Wärmeleitpaste.
        </p>
      </a>

      <a
        href="/microsoldering-st-poelten"
        className="block bg-white rounded-xl md:rounded-2xl shadow p-4 md:p-6 hover:shadow-lg hover:scale-[1.02] transition"
      >
        <Cpu className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-green-800" />
        <h3 className="text-lg md:text-xl font-semibold">Microsoldering</h3>
        <p className="text-sm md:text-base text-green-700 mt-1 md:mt-2">
          Präzise Lötarbeiten auf Platinen und Motherboards vom Profi.
        </p>
      </a>

      <a
        href="/handy-verkauf-zubehoer-st-poelten"
        className="block bg-white rounded-xl md:rounded-2xl shadow p-4 md:p-6 hover:shadow-lg hover:scale-[1.02] transition"
      >
        <Smartphone className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-green-800" />
        <h3 className="text-lg md:text-xl font-semibold">Verkauf & Zubehör</h3>
        <p className="text-sm md:text-base text-green-700 mt-1 md:mt-2">
          Neue, gebrauchte und erneuerte Smartphones ♻️ sowie Zubehör direkt vor Ort.
        </p>
      </a>

      <a
        href="/handyvertraege-wertgarantie-st-poelten"
        className="block bg-white rounded-xl md:rounded-2xl shadow p-4 md:p-6 hover:shadow-lg hover:scale-[1.02] transition"
      >
        <Wrench className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-green-800" />
        <h3 className="text-lg md:text-xl font-semibold">Verträge & Wertgarantie</h3>
        <p className="text-sm md:text-base text-green-700 mt-1 md:mt-2">
          Beratung als Partnershop – inklusive Absicherung über Wertgarantie.
        </p>
      </a>

    </div>
  </motion.div>
</section>


<section className="py-14 md:py-20 px-4 bg-green-800 text-white">
  <div className="max-w-4xl mx-auto px-4 md:px-0 text-center">

    <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">
      Alles rund ums Smartphone – an einem Ort
    </h2>

    <p className="text-sm md:text-lg text-green-100 leading-relaxed mb-6 md:mb-8">
      Unser Ziel ist, dass du nach deinem Besuch nicht noch woanders suchen musst. 
      Ob Reparatur, Datenrettung, Verkauf oder Zubehör – bei One 1 Shop bekommst du alles aus einer Hand.
    </p>

    <div className="flex flex-wrap justify-center gap-2 md:gap-4">

      <span className="bg-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
        Reparatur
      </span>

      <span className="bg-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
        Datenrettung
      </span>

      <span className="bg-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
        Verkauf
      </span>

      <span className="bg-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
        Zubehör
      </span>

      <span className="bg-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
        Verträge
      </span>

    </div>

  </div>
</section>

{/* Vorteile-Bereich */}
<section className="py-16 md:py-20 px-4 md:px-6 bg-green-50">
  <div className="max-w-6xl mx-auto text-center">
    
    <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-green-900">
      Deine Vorteile bei One 1 Shop
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">

      <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow hover:shadow-md transition">
        <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3 text-green-900">
          ⚡ Schnelle Hilfe
        </h3>
        <p className="text-sm md:text-base text-green-800">
          Viele Reparaturen erledigen wir so schnell wie möglich, damit du dein Gerät nicht lange missen musst.
        </p>
      </div>

      <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow hover:shadow-md transition">
        <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3 text-green-900">
          🤝 Persönliche Beratung
        </h3>
        <p className="text-sm md:text-base text-green-800">
          Kein anonymer Service – wir nehmen uns Zeit für dich und finden gemeinsam die beste Lösung.
        </p>
      </div>

      <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow hover:shadow-md transition">
        <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3 text-green-900">
          📍 Direkt vor Ort
        </h3>
        <p className="text-sm md:text-base text-green-800">
          Wir sind direkt in St. Pölten für dich da und beraten dich persönlich.
        </p>
      </div>

    </div>

  </div>
</section>


      {/* Geräte Retter-Bereich */}
<section id="geraete-praemie" className="py-16 md:py-24 px-4 bg-yellow-100">
  <div className="max-w-3xl mx-auto px-4 md:px-0 text-center">

    <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">
      💸 Geräte Retter Prämie vom Staat
    </h2>

    <p className="text-sm md:text-lg text-yellow-900 mb-4 leading-relaxed">
      Spare bei deiner Reparatur bares Geld! Die Geräte Retter Prämie unterstützt dich finanziell bei Reparaturen.
    </p>

    <p className="text-sm md:text-base text-yellow-900 mb-6">
      Wir helfen dir direkt vor Ort in St. Pölten – einfach und unkompliziert.
    </p>

    <a
      href="https://www.xn--gerte-retter-prmie-ntbm.at/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-3 text-sm md:text-base rounded-full font-semibold transition"
    >
      Mehr Infos zur Prämie
    </a>

  </div>
</section>

{/* Produkte-Bereich */}
<section id="produkte" className="py-16 md:py-24 px-4 bg-white">
  <div className="max-w-6xl mx-auto px-4 md:px-0 text-center">

    <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-10">
      Unsere Produkte
    </h2>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10"
    >
      {products.map((p) => (
        <motion.div
          key={p.id}
          onClick={() => setSelectedProduct(p)}
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: p.id * 0.1 }}
          className="cursor-pointer bg-white p-4 md:p-6 rounded-xl shadow hover:shadow-md transition"
        >
          <img
            src={p.img}
            alt={p.title}
            className="h-32 sm:h-40 md:h-48 w-full object-contain mb-3 md:mb-4"
          />

          <h3 className="font-semibold text-base md:text-lg">
            {p.title}
          </h3>

          <p className="text-green-700 text-sm mt-1">
            {p.desc}
          </p>
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

{/*Wertgarantie Bereich*/}
      <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
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

{/*Kontakt bereich*/}
<section id="kontakt" className="py-16 md:py-24 px-4 bg-white">
  <div className="max-w-xl mx-auto text-center">

    <h2 className="text-2xl md:text-4xl font-bold mb-4">
      Brauchst du Hilfe mit deinem Gerät?
    </h2>

    <p className="mb-6 text-green-800 text-sm md:text-lg">
      Schreib uns jetzt kurz auf WhatsApp – wir sagen dir direkt, was möglich ist.
    </p>

    {/* TRUST BOX */}
    <div className="bg-green-50 p-4 md:p-6 rounded-xl mb-6 border border-green-100">
      <p className="text-green-900 font-semibold text-sm md:text-lg">
        ⚡ Schnelle Rückmeldung – wir melden uns so rasch wie möglich
      </p>
    </div>

    {/* FORM */}
    <div className="grid gap-4 text-left">

      <input
        id="kontakt-name"
        type="text"
        placeholder="Dein Name (optional)"
        className="p-3 rounded border border-green-300 w-full text-sm"
      />

      <textarea
        id="kontakt-nachricht"
        placeholder="Was ist kaputt?"
        rows="3"
        className="p-3 rounded border border-green-300 w-full text-sm"
      ></textarea>

      {/* BUTTONS */}
      <div className="flex flex-col gap-3">

        {/* WHATSAPP MAIN */}
        <button
          onClick={() => {
            const name = document.getElementById("kontakt-name").value.trim();
            const nachricht = document.getElementById("kontakt-nachricht").value.trim();
            const text = `Hallo, ich bin ${name || "ein Kunde"}. ${nachricht || "Ich habe eine Frage."}`;
            const encoded = encodeURIComponent(text);
            window.open(`https://wa.me/4369917432373?text=${encoded}`, "_blank");
          }}
          className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold text-lg shadow hover:bg-green-500 transition"
        >
          💬 WhatsApp senden
        </button>

        {/* EMAIL SECONDARY */}
        <button
          onClick={() => {
            const name = document.getElementById("kontakt-name").value.trim();
            const nachricht = document.getElementById("kontakt-nachricht").value.trim();
            const subject = encodeURIComponent("Anfrage über Website");
            const body = encodeURIComponent(`Name: ${name || "-"}\n\nNachricht:\n${nachricht || "-"}`);
            window.location.href = `mailto:office@one1shop.at?subject=${subject}&body=${body}`;
          }}
          className="w-full bg-green-800 text-white py-3 rounded-xl font-semibold text-sm hover:bg-green-700 transition"
        >
          ✉️ E-Mail senden
        </button>

      </div>

      <p className="text-xs text-green-700 mt-2">
        Mit dem Absenden erklärst du dich damit einverstanden, dass deine Daten verwendet werden.
        <a href="/datenschutz" className="underline ml-1 hover:text-green-900">
          Datenschutz
        </a>
      </p>

    </div>

    {/* TELEFON (einzige alternative unten) */}
    <div className="flex justify-center items-center mt-8">

      <a
        href="tel:+4369917432373"
        onClick={() => {
          if (window.gtag) {
            window.gtag("event", "phone_click", {
              event_category: "contact",
              event_label: "phone_button"
            });
          }
        }}
        className="bg-green-800 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition"
      >
        📞 +43 699 174 32 373
      </a>

    </div>

    {/* TRUST TEXT */}
    <p className="text-xs text-green-700 mt-4 text-center">
      ✔️ Kostenlos & unverbindlich • ⚡ Antwort in Minuten • 👨‍🔧 Direkt vom Profi
    </p>

  </div>
</section>

{/*Google Reviews Bereich*/}
<GoogleReviews />

{/*StandortBereich*/}
<section id="standort" className="py-16 md:py-24 px-4 bg-white">
  <div className="max-w-5xl mx-auto px-4 md:px-0 text-center">

    <h2 className="text-2xl md:text-4xl font-bold mb-4">
      Unser Standort
    </h2>

    <p className="mb-6 text-green-800 text-sm md:text-lg">
      Komm vorbei – wir sind direkt in St. Pölten für dich da.
    </p>

    {/* MAP */}
    <motion.div
      className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow mb-6"
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
        loading="lazy"
      ></iframe>
    </motion.div>

    {/* NAVIGATION BUTTON */}
    <a
      href="https://www.google.com/maps/dir/?api=1&destination=One+1+Shop+Handy+Service+St+Pölten"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-500 transition"
    >
      📍 Route starten
    </a>

    {/* ADDRESS */}
    <p className="text-sm text-green-700 mt-4">
      Bahnhofplatz 15, 3100 St. Pölten
    </p>

    {/* DATENSCHUTZ */}
    <p className="text-xs text-green-700 mt-3">
      Beim Laden der Karte werden Daten an Google übermittelt.
      <a href="/datenschutz" className="underline ml-1 hover:text-green-900">
        Datenschutz
      </a>
    </p>

  </div>
</section>


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
