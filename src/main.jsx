import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // ⬅️ Das ist neu
import "./index.css";
import App from "./App";
import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";
import IphoneReparatur from "./IphoneReparatur";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider> {/* ⬅️ Damit Helmet überall funktioniert */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/iphone-reparatur-st-poelten" element={<IphoneReparatur />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
