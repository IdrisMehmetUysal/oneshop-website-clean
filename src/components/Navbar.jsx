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
        <div className="hidden md:flex gap-6 items-center relative">

          {/* DROPDOWN */}
          <div className="group relative">
            <span className="cursor-pointer text-green-800 font-medium hover:text-green-600">
              Leistungen
            </span>

            <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <div className="p-4 space-y-4 text-sm">

                {/* HANDY */}
                <div>
                  <p className="font-semibold text-green-900 mb-2">Handy</p>
                  <div className="flex flex-col gap-1">
                    <a href="/iphone-reparatur" className="hover:text-green-600">iPhone</a>
                    <a href="/samsung-reparatur" className="hover:text-green-600">Samsung</a>
                    <a href="/xiaomi-reparatur" className="hover:text-green-600">Xiaomi</a>
                    <a href="/pixel-reparatur" className="hover:text-green-600">Pixel</a>
                    <a href="/huawei-reparatur" className="hover:text-green-600">Huawei</a>
                  </div>
                </div>

                {/* COMPUTER */}
                <div className="border-t pt-2">
                  <p className="font-semibold text-green-900 mb-2">Computer</p>
                  <div className="flex flex-col gap-1">
                    <a href="/laptop-reparatur" className="hover:text-green-600">Laptop</a>
                    <a href="/macbook-reparatur" className="hover:text-green-600">MacBook</a>
                  </div>
                </div>

                {/* WEITERE */}
                <div className="border-t pt-2">
                  <p className="font-semibold text-green-900 mb-2">Weitere</p>
                  <div className="flex flex-col gap-1">
                    <a href="/konsolen-reparatur" className="hover:text-green-600">Konsolen</a>
                    <a href="/datenrettung" className="hover:text-green-600">Datenrettung</a>
                    <a href="/microsoldering" className="hover:text-green-600">Microsoldering</a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* LINKS */}
          <a href="/#produkte" className="text-green-800 font-medium hover:text-green-600">
            Produkte
          </a>

          <a href="/ueber-uns" className="text-green-800 font-medium hover:text-green-600">
            Über uns
          </a>

          <a href="/faq" className="text-green-800 font-medium hover:text-green-600">
            FAQ
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

            {/* HANDY */}
            <a href="/iphone-reparatur" className="block text-green-800">iPhone</a>
            <a href="/samsung-reparatur" className="block text-green-800">Samsung</a>
            <a href="/xiaomi-reparatur" className="block text-green-800">Xiaomi</a>
            <a href="/pixel-reparatur" className="block text-green-800">Pixel</a>
            <a href="/huawei-reparatur" className="block text-green-800">Huawei</a>

            {/* COMPUTER */}
            <div className="border-t pt-3">
              <a href="/laptop-reparatur" className="block text-green-800">Laptop</a>
              <a href="/macbook-reparatur" className="block text-green-800">MacBook</a>
            </div>

            {/* WEITERE */}
            <div className="border-t pt-3">
              <a href="/konsolen-reparatur" className="block text-green-800">Konsolen</a>
              <a href="/datenrettung" className="block text-green-800">Datenrettung</a>
              <a href="/microsoldering" className="block text-green-800">Microsoldering</a>
            </div>

            {/* EXTRA PAGES */}
            <div className="border-t pt-3">
              <a href="/ueber-uns" className="block text-green-800">Über uns</a>
              <a href="/faq" className="block text-green-800">FAQ</a>
            </div>

            {/* NAV */}
            <div className="border-t pt-3">
              <a href="/#produkte" className="block text-green-800">Produkte</a>
              <a href="/#kontakt" className="block text-green-800">Kontakt</a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}