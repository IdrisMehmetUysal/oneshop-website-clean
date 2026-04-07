import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useOutletContext, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const { setLoading } = useOutletContext();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  // ✅ SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3 md:py-4">
        {/* LOGO */}
        <button
          onClick={() => {
            setNavOpen(false);
            setLoading(true);

            setTimeout(() => {
              navigate("/");
              setLoading(false);
            }, 600);
          }}
          className="flex items-center"
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            className={`h-12 md:h-16 transition-all duration-300 ${
              scrolled ? "bg-white rounded-md px-1" : ""
            }`}
          />
        </button>

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
                    <Link
                      to="/iphone-reparatur"
                      className="hover:text-green-600"
                    >
                      iPhone
                    </Link>
                    <Link
                      to="/samsung-reparatur"
                      className="hover:text-green-600"
                    >
                      Samsung
                    </Link>
                    <Link
                      to="/xiaomi-reparatur"
                      className="hover:text-green-600"
                    >
                      Xiaomi
                    </Link>
                    <Link
                      to="/pixel-reparatur"
                      className="hover:text-green-600"
                    >
                      Pixel
                    </Link>
                    <Link
                      to="/huawei-reparatur"
                      className="hover:text-green-600"
                    >
                      Huawei
                    </Link>
                                        <Link to="/displayschutz">Displayschutz</Link>

                  </div>
                </div>

                {/* COMPUTER */}
                <div className="border-t pt-2">
                  <p className="font-semibold text-green-900 mb-2">Computer</p>
                  <div className="flex flex-col gap-1">
                    <Link
                      to="/laptop-reparatur"
                      className="hover:text-green-600"
                    >
                      Laptop
                    </Link>
                    <Link
                      to="/macbook-reparatur"
                      className="hover:text-green-600"
                    >
                      MacBook
                    </Link>
                  </div>
                </div>

                {/* WEITERE */}
                <div className="border-t pt-2">
                  <p className="font-semibold text-green-900 mb-2">Weitere</p>
                  <div className="flex flex-col gap-1">
                    <Link
                      to="/konsolen-reparatur"
                      className="hover:text-green-600"
                    >
                      Konsolen
                    </Link>
                    <Link
                      to="/datenrettung-st-poelten"
                      className="hover:text-green-600"
                    >
                      Datenrettung
                    </Link>
                    <Link
                      to="/microsoldering-st-poelten"
                      className="hover:text-green-600"
                    >
                      Microsoldering
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <Link
            to="/#produkte"
            className="text-green-800 font-medium hover:text-green-600"
          >
            Produkte
          </Link>

          <Link
            to="/ueber-uns"
            className="text-green-800 font-medium hover:text-green-600"
          >
            Über uns
          </Link>

          <Link
            to="/faq"
            className="text-green-800 font-medium hover:text-green-600"
          >
            FAQ
          </Link>

          <Link
            to="/#kontakt"
            className="text-green-800 font-medium hover:text-green-600"
          >
            Kontakt
          </Link>
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
            <Link
              to="/iphone-reparatur"
              onClick={() => setNavOpen(false)}
              className="block text-green-800"
            >
              iPhone
            </Link>
            <Link
              to="/samsung-reparatur"
              onClick={() => setNavOpen(false)}
              className="block text-green-800"
            >
              Samsung
            </Link>
            <Link
              to="/xiaomi-reparatur"
              onClick={() => setNavOpen(false)}
              className="block text-green-800"
            >
              Xiaomi
            </Link>
            <Link
              to="/pixel-reparatur"
              onClick={() => setNavOpen(false)}
              className="block text-green-800"
            >
              Pixel
            </Link>
            <Link
              to="/huawei-reparatur"
              onClick={() => setNavOpen(false)}
              className="block text-green-800"
            >
              Huawei
            </Link>
                        <Link
              to="/displayschutz"
              onClick={() => setNavOpen(false)}
              className="block text-green-800"
            >
              Displayschutz
            </Link>
            

            {/* COMPUTER */}
            <div className="border-t pt-3">
              <Link
                to="/laptop-reparatur"
                onClick={() => setNavOpen(false)}
                className="block text-green-800"
              >
                Laptop
              </Link>
              <Link
                to="/macbook-reparatur"
                onClick={() => setNavOpen(false)}
                className="block text-green-800"
              >
                MacBook
              </Link>
            </div>

            {/* WEITERE */}
            <div className="border-t pt-3">
              <Link
                to="/konsolen-reparatur"
                onClick={() => setNavOpen(false)}
                className="block text-green-800"
              >
                Konsolen
              </Link>
              <Link
                to="/datenrettung-st-poelten"
                onClick={() => setNavOpen(false)}
                className="block text-green-800"
              >
                Datenrettung
              </Link>
              <Link
                to="/microsoldering-st-poelten"
                onClick={() => setNavOpen(false)}
                className="block text-green-800"
              >
                Microsoldering
              </Link>
            </div>

            {/* EXTRA */}
            <div className="border-t pt-3">
              <Link
                to="/ueber-uns"
                onClick={() => setNavOpen(false)}
                className="block text-green-800"
              >
                Über uns
              </Link>
              <Link
                to="/faq"
                onClick={() => setNavOpen(false)}
                className="block text-green-800"
              >
                FAQ
              </Link>
            </div>

            {/* NAV */}
            <div className="border-t pt-3">
              <Link
                to="/#produkte"
                onClick={() => setNavOpen(false)}
                className="block text-green-800"
              >
                Produkte
              </Link>
              <Link
                to="/#kontakt"
                onClick={() => setNavOpen(false)}
                className="block text-green-800"
              >
                Kontakt
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
