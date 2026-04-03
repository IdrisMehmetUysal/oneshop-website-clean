import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative text-sm text-white bg-green-900 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Branding */}
        <div>
          <h4 className="text-lg font-semibold mb-2">One1Shop</h4>
          <p>Ihr Fachhandel in St. Pölten</p>
          <p>© {new Date().getFullYear()} Alle Rechte vorbehalten</p>
        </div>

        {/* Kontakt */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Kontakt</h4>
          <p>📍 Bahnhofplatz 15, St. Pölten</p>
          <p>
            📞{" "}
            <a
              href="tel:+4369917432373"
              className="underline hover:text-green-300"
            >
              +43 699 174 32 373
            </a>
          </p>
          <p>
            📧{" "}
            <a
              href="mailto:office@one1shop.at"
              className="underline hover:text-green-300"
            >
              office@one1shop.at
            </a>
          </p>
        </div>

        {/* Rechtliches */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Rechtliches</h4>
          <p>
            <a href="/impressum" className="underline hover:text-green-300">
              Impressum
            </a>
          </p>
          <p>
            <a href="/datenschutz" className="underline hover:text-green-300">
              Datenschutz
            </a>
          </p>

          <div className="mt-8 flex justify-end">
            <motion.a
              href="https://wa.me/4367761614355"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 1 }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, -2, 2, -2, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="relative md:absolute md:top-16 md:right-6 mt-6 md:mt-0 mx-auto bg-white border border-green-700 text-green-800 px-5 py-4 rounded-full shadow-lg text-sm font-bold hover:scale-110 hover:bg-green-100 transition z-20 text-center leading-tight"
            >
              <div className="text-base">🚀 High-End Webdesign</div>
              <div className="text-sm">smart, modern & wow – schreib mir.</div>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
