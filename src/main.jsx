import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // ⬅️ Das ist neu
import "./index.css";
import App from "./App";
import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";
import IphoneReparatur from "./IphoneReparatur";
import SamsungReparatur from "./SamsungReparatur";
import HandyReparatur from "./HandyReparatur";
import Datenrettung from "./Datenrettung";
import KonsolenReparatur from "./KonsolenReparatur";
import Microsoldering from "./Microsoldering";
import VerkaufZubehoer from "./VerkaufZubehoer";
import VertraegeWertgarantie from "./VertraegeWertgarantie";
import PlaystationReparatur from "./PlaystationReparatur";
import XboxReparatur from "./XboxReparatur";
import XiaomiReparatur from "./XiaomiReparatur";
import PixelReparatur from "./PixelReparatur";
import HuaweiReparatur from "./HuaweiReparatur";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider> {/* ⬅️ Damit Helmet überall funktioniert */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/iphone-reparatur-st-poelten" element={<IphoneReparatur />} />
          <Route path="/samsung-reparatur-st-poelten" element={<SamsungReparatur />} />
          <Route path="/handy-reparatur-st-poelten" element={<HandyReparatur />} />
          <Route path="/datenrettung-st-poelten" element={<Datenrettung />} />
          <Route path="/konsolen-reparatur-st-poelten" element={<KonsolenReparatur />} />
          <Route path="/microsoldering-st-poelten" element={<Microsoldering />} />
          <Route path="/handy-verkauf-zubehoer-st-poelten" element={<VerkaufZubehoer />} />
          <Route path="/handyvertraege-wertgarantie-st-poelten" element={<VertraegeWertgarantie />} />
          <Route path="/playstation-reparatur" element={<PlaystationReparatur />} />
          <Route path="/xbox-reparatur" element={<XboxReparatur />} />
          <Route path="/xiaomi-reparatur" element={<XiaomiReparatur />} />
          <Route path="/pixel-reparatur" element={<PixelReparatur />} />
          <Route path="/huawei-reparatur" element={<HuaweiReparatur />} />

        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
