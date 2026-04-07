import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import phoneAnim from "./loader.json";
import { Outlet, useLocation } from "react-router-dom";

export default function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // ✅ HASH SCROLL FIX
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      {/* LOADER OVERLAY */}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
          <Lottie animationData={phoneAnim} loop style={{ height: 200 }} />
        </div>
      )}

      {/* PAGES */}
      <Outlet context={{ setLoading }} />
    </>
  );
}