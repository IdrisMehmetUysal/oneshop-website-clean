import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-16" />
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-6 relative">

          {/* LEISTUNGEN DROPDOWN */}
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
                    <a href="/pixel-reparatur">Google Pixel</a>
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
          <button onClick={() => setNavOpen(!navOpen)}>☰</button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white text-center py-6"
            >
              <a href="/iphone-reparatur-st-poelten">iPhone</a><br />
              <a href="/samsung-reparatur-st-poelten">Samsung</a><br />
              <a href="/xiaomi-reparatur">Xiaomi</a><br />
              <a href="/pixel-reparatur">Pixel</a><br />
              <a href="/huawei-reparatur">Huawei</a><br />
              <a href="/konsolen-reparatur-st-poelten">Konsolen</a><br />
              <a href="/#kontakt">Kontakt</a>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}