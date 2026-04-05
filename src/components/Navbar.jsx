import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3 md:py-4">

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-12 md:h-16" />
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-6 relative">
          <div className="group relative">
            <span className="cursor-pointer text-green-800 font-medium hover:text-green-600">
              Leistungen
            </span>

            <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <div className="p-4 space-y-3 text-sm">

                <div>
                  <p className="font-semibold text-green-900 mb-2">Handy</p>
                  <div className="flex flex-col gap-1">
                    <a href="/iphone-reparatur-st-poelten">iPhone</a>
                    <a href="/samsung-reparatur-st-poelten">Samsung</a>
                    <a href="/xiaomi-reparatur">Xiaomi</a>
                    <a href="/pixel-reparatur">Pixel</a>
                    <a href="/huawei-reparatur">Huawei</a>
                  </div>
                </div>

                <div className="border-t pt-2">
                  <p className="font-semibold text-green-900 mb-2">Weitere</p>
                  <div className="flex flex-col gap-1">
                    <a href="/konsolen-reparatur-st-poelten">Konsolen</a>
                    <a href="/microsoldering-st-poelten">Microsoldering</a>
                    <a href="/datenrettung-st-poelten">Datenrettung</a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <a href="/#produkte" className="text-green-800 font-medium hover:text-green-600">
            Produkte
          </a>

          <a href="/#kontakt" className="text-green-800 font-medium hover:text-green-600">
            Kontakt
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-2xl text-green-800"
          >
            {navOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white px-6 py-6 space-y-4 shadow-lg"
          >

            <p className="font-semibold text-green-900">Leistungen</p>

            <a href="/iphone-reparatur-st-poelten" className="block text-green-800">iPhone Reparatur</a>
            <a href="/samsung-reparatur-st-poelten" className="block text-green-800">Samsung Reparatur</a>
            <a href="/xiaomi-reparatur" className="block text-green-800">Xiaomi</a>
            <a href="/pixel-reparatur" className="block text-green-800">Pixel</a>
            <a href="/huawei-reparatur" className="block text-green-800">Huawei</a>

            <div className="border-t pt-3">
              <a href="/konsolen-reparatur-st-poelten" className="block text-green-800">Konsolen</a>
              <a href="/microsoldering-st-poelten" className="block text-green-800">Microsoldering</a>
              <a href="/datenrettung-st-poelten" className="block text-green-800">Datenrettung</a>
            </div>

            <div className="border-t pt-3">
              <a href="/#produkte" className="block text-green-800">Produkte</a>
              <a href="/#kontakt" className="block text-green-800">Kontakt</a>
            </div>

            {/* 🔥 CTA BUTTON */}
            <a
              href="https://wa.me/4369917432373"
              className="block bg-green-600 text-white text-center py-3 rounded-full font-semibold mt-4"
            >
              💬 WhatsApp schreiben
            </a>

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}