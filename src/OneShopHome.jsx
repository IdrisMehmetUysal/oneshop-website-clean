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
    "Top Service, super freundlich und schnelle Reparatur! 🌟",
    "Sehr empfehlenswert, mein Handy funktioniert wieder perfekt! 📱",
    "Beste Beratung, top Preise und schnelle Abwicklung. 👍",
    "Super Team, haben mir sofort geholfen! Danke! 🙌",
    "Beste Handy-Reparatur in der Stadt – immer wieder gerne! 🔥",
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

          <div className="flex flex-col items-center mt-8">
            <div className="flex items-center gap-2 text-yellow-400 text-3xl">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="text-green-700 text-lg mt-2">
              5,0 Sterne aus 1115 Bewertungen 🚀
            </p>
            <a
              href="https://www.google.com/search?q=One+1+Shop+Handy+Service&rlz=1C1GCEV_enAT827AT827&oq=One+1+Shop+Handy+Service&aqs=chrome..69i57j0i512l2j0i22i30l4.4139j0j7&sourceid=chrome&ie=UTF-8#lrd=0x477278aedb1cc14b:0xb890f91911e7f4f5,1,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-gradient-to-r from-green-700 to-green-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:scale-105 transition-transform duration-300"
            >
              Bewertungen ansehen
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
      {/* Reparaturbonus Banner */}
      <div className="bg-yellow-400 text-black text-center py-3 px-6 font-semibold shadow-md">
        💸 Reparaturbonus sichern – Spare bis zu 50 % bei Handy- &
        Laptop-Reparaturen!
        <a
          href="#reparaturbonus"
          className="ml-4 underline hover:text-green-800"
        >
          Mehr erfahren
        </a>
      </div>

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
          <div>
            <img
              src="/images/logo.png"
              alt="One 1 Shop Logo"
              className="h-16"
            />
          </div>
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
            <a
              href="/impressum"
              className="text-green-800 font-medium transition-all duration-300 hover:underline hover:text-green-600"
            >
              Impressum
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

      {/* Header mit Slick Carousel */}
      <header className="bg-gradient-to-r from-green-800 to-green-500 text-white px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Slider {...settings}>
            <div>
              <img
                src="/images/header1.png"
                alt="Bild 1"
                className="w-full h-[200px] md:h-[300px] object-cover rounded-xl shadow-xl"
              />
            </div>
            <div>
              <img
                src="/images/header2.png"
                alt="Bild 2"
                className="w-full h-[200px] md:h-[300px] object-cover rounded-xl shadow-xl"
              />
            </div>
            <div>
              <img
                src="/images/header3.png"
                alt="Bild 3"
                className="w-full h-[200px] md:h-[300px] object-cover rounded-xl shadow-xl"
              />
            </div>
            <div>
              <img
                src="/images/header4.png"
                alt="Bild 4"
                className="w-full h-[200px] md:h-[300px] object-cover rounded-xl shadow-xl"
              />
            </div>
          </Slider>
        </div>
      </header>

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
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Unsere Leistungen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <Wrench className="w-12 h-12 mx-auto mb-4 text-green-800" />
              <h3 className="text-xl font-semibold">
                Handy & Tablet Reparatur
              </h3>
              <p className="text-green-700 mt-2">
                Displaytausch, Akku, Wasserschaden – schnell & zuverlässig.
              </p>
            </div>
            <div>
              <Gamepad2 className="w-12 h-12 mx-auto mb-4 text-green-800" />
              <h3 className="text-xl font-semibold">Konsolen-Service</h3>
              <p className="text-green-700 mt-2">
                PlayStation, Xbox, Nintendo – wir machen's wieder fit.
              </p>
            </div>
            <div>
              <Cpu className="w-12 h-12 mx-auto mb-4 text-green-800" />
              <h3 className="text-xl font-semibold">Microsoldering</h3>
              <p className="text-green-700 mt-2">
                Feinste Lötarbeiten an Platinen und Motherboards vom Profi.
              </p>
            </div>
            <div>
              <Smartphone className="w-12 h-12 mx-auto mb-4 text-green-800" />
              <h3 className="text-xl font-semibold">
                Verkauf: Handys & Laptops
              </h3>
              <p className="text-green-700 mt-2">
                Neue & gebrauchte Geräte – inkl. Beratung & Zubehör.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="reparaturbonus" className="py-24 px-4 bg-yellow-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            💸 Reparaturbonus vom Staat
          </h2>
          <p className="text-lg text-yellow-900 mb-4">
            Spare bis zu <strong>50 %</strong> bei deiner Reparatur! Der
            Reparaturbonus ist ein Förderprogramm, das Reparaturen an
            elektronischen Geräten günstiger macht.
          </p>
          <p className="text-yellow-900 mb-6">
            Wir sind offizieller Partner – bring dein Gerät vorbei und nutze den
            Bonus direkt vor Ort. Kein Papierkram, kein Stress.
          </p>
          <a
            href="https://www.reparaturbonus.at"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold"
          >
            Jetzt informieren & profitieren
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
            Unsere Partner
          </h2>
          <div className="flex justify-center gap-10 items-center flex-wrap">
            <img src="/images/partner1.png" alt="Partner 1" className="h-20" />
            <img src="/images/partner2.png" alt="Partner 2" className="h-20" />
            <img src="/images/partner3.png" alt="Partner 3" className="h-20" />
            <img src="/images/partner4.png" alt="Partner 4" className="h-20" />
            <img src="/images/partner5.png" alt="Partner 5" className="h-20" />
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Kontakt</h2>
          <p className="mb-6 text-green-800">
            Fragen zu Reparaturen, Produkten oder Preisen? Wir sind für dich da!
          </p>
          <form className="grid gap-4 text-left">
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded border border-green-300 w-full"
            />
            <input
              type="email"
              placeholder="E-Mail"
              className="p-3 rounded border border-green-300 w-full"
            />
            <textarea
              placeholder="Nachricht"
              rows="5"
              className="p-3 rounded border border-green-300 w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-green-800 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-105"
            >
              Absenden
            </button>

            <p className="text-xs text-green-700 mt-2">
              Mit dem Absenden erklärst du dich damit einverstanden, dass deine
              angegebenen Daten zur Bearbeitung deiner Anfrage verwendet werden.
              Weitere Informationen findest du in unserer{" "}
              <a href="/datenschutz" className="underline hover:text-green-900">
                Datenschutzerklärung
              </a>
              .
            </p>
          </form>
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
              💬 WhatsApp schreiben
            </a>
          </div>
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
    </main>
  );
}
