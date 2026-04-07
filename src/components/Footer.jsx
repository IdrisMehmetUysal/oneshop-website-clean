import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-800 text-white py-12 px-4 border-t border-green-700">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:grid max-w-6xl mx-auto grid-cols-4 gap-8 text-left">

        {/* BRAND */}
        <div>
          <h4 className="text-lg font-semibold mb-3">One1Shop</h4>
          <p className="text-green-200 text-sm leading-relaxed">
            Dein Ansprechpartner für Handy, Laptop & Technik Reparaturen in St. Pölten.
          </p>
          <p className="text-green-400 mt-4 text-xs">
            © {new Date().getFullYear()} Alle Rechte vorbehalten
          </p>
        </div>

        {/* LEISTUNGEN */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Leistungen</h4>
          <div className="flex flex-col gap-2 text-green-200 text-sm">
            <Link to="/handy-reparatur-st-poelten" className="hover:text-white transition">Handy Reparatur</Link>
            <Link to="/laptop-reparatur" className="hover:text-white transition">Laptop Reparatur</Link>
            <Link to="/macbook-reparatur" className="hover:text-white transition">MacBook Reparatur</Link>
            <Link to="/konsolen-reparatur" className="hover:text-white transition">Konsolen</Link>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Navigation</h4>
          <div className="flex flex-col gap-2 text-green-200 text-sm">
            <Link to="/ueber-uns" className="hover:text-white transition">Über uns</Link>
            <Link to="/faq" className="hover:text-white transition">FAQ</Link>
            <Link to="/#produkte" className="hover:text-white transition">Produkte</Link>
            <Link to="/#kontakt" className="hover:text-white transition">Kontakt</Link>
          </div>
        </div>

        {/* KONTAKT */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Kontakt</h4>

          <div className="flex flex-col gap-3 text-green-200 text-sm">
            <p className="flex items-center gap-2">
              <MapPin size={18} /> Bahnhofplatz 15, St. Pölten
            </p>

            <p className="flex items-center gap-2">
              <Phone size={18} />
              <a href="tel:+4369917432373" className="hover:text-white">
                +43 699 174 32 373
              </a>
            </p>

            <p className="flex items-center gap-2">
              <Mail size={18} />
              <a href="mailto:office@one1shop.at" className="hover:text-white">
                office@one1shop.at
              </a>
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-1 text-green-300 text-sm">
            <Link to="/impressum" className="hover:text-white">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white">Datenschutz</Link>
          </div>
        </div>

      </div>

      {/* ================= MOBILE ================= */}
<div className="md:hidden max-w-md mx-auto space-y-6 text-left">

  {/* KONTAKT */}
  <div>
    <h4 className="text-base font-semibold mb-2">Kontakt</h4>

    <div className="flex flex-col gap-2 text-green-200 text-sm">
      <p className="flex items-center gap-2">
        <MapPin size={16} /> Bahnhofplatz 15
      </p>

      <a href="tel:+4369917432373" className="flex items-center gap-2 hover:text-white transition">
        <Phone size={16} /> +43 699 174 32 373
      </a>

      <a href="mailto:office@one1shop.at" className="flex items-center gap-2 hover:text-white transition">
        <Mail size={16} /> office@one1shop.at
      </a>
    </div>
  </div>

  {/* LEISTUNGEN QUICK LINKS */}
  <div>
    <h4 className="text-base font-semibold mb-2">Leistungen</h4>
    <div className="grid grid-cols-2 gap-2 text-sm text-green-300">
      <Link to="/handy-reparatur-st-poelten" className="hover:text-white">Handy</Link>
      <Link to="/laptop-reparatur" className="hover:text-white">Laptop</Link>
      <Link to="/konsolen-reparatur" className="hover:text-white">Konsolen</Link>
      <Link to="/datenrettung-st-poelten" className="hover:text-white">Daten</Link>
    </div>
  </div>

  {/* NAVIGATION */}
  <div>
    <h4 className="text-base font-semibold mb-2">Navigation</h4>
    <div className="flex flex-wrap gap-4 text-sm text-green-300">
      <Link to="/ueber-uns" className="hover:text-white">Über uns</Link>
      <Link to="/faq" className="hover:text-white">FAQ</Link>
      <Link to="/#produkte" className="hover:text-white">Produkte</Link>
      <Link to="/#kontakt" className="hover:text-white">Kontakt</Link>
    </div>
  </div>

  {/* LEGAL */}
  <div className="border-t border-green-700 pt-4 flex flex-wrap gap-4 text-sm text-green-300">
    <Link to="/impressum" className="hover:text-white">Impressum</Link>
    <Link to="/datenschutz" className="hover:text-white">Datenschutz</Link>
  </div>

  {/* BRAND */}
  <div className="text-xs text-green-400 text-center">
    © {new Date().getFullYear()} One1Shop
  </div>

</div>

    </footer>
  );
}