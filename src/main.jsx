import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

import App from "./App";
import Layout from "./Layout";

// Seiten
import OneShopHome from "./OneShopHome";
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
import SwitchReparatur from "./SwitchReparatur";
import LaptopReparatur from "./LaptopReparatur";
import MacbookReparatur from "./MacbookReparatur";
import UeberUns from "./UeberUns";
import Faq from "./Faq";
import Produkte from "./components/Produkte";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Loader Layer */}
          <Route element={<App />}>
            {/* Layout Layer */}
            <Route element={<Layout />}>
              {/* Seiten */}
              <Route path="/" element={<OneShopHome />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />

              <Route path="/iphone-reparatur" element={<IphoneReparatur />} />
              <Route path="/samsung-reparatur" element={<SamsungReparatur />} />
              <Route
                path="/handy-reparatur-st-poelten"
                element={<HandyReparatur />}
              />
              <Route path="/datenrettung" element={<Datenrettung />} />
              <Route
                path="/konsolen-reparatur"
                element={<KonsolenReparatur />}
              />
              <Route path="/microsoldering" element={<Microsoldering />} />
              <Route
                path="/handy-verkauf-zubehoer"
                element={<VerkaufZubehoer />}
              />
              <Route
                path="/handyvertraege-wertgarantie"
                element={<VertraegeWertgarantie />}
              />

              {/* Subpages */}
              <Route
                path="/playstation-reparatur"
                element={<PlaystationReparatur />}
              />
              <Route path="/xbox-reparatur" element={<XboxReparatur />} />
              <Route path="/switch-reparatur" element={<SwitchReparatur />} />
              <Route path="/xiaomi-reparatur" element={<XiaomiReparatur />} />
              <Route path="/pixel-reparatur" element={<PixelReparatur />} />
              <Route path="/huawei-reparatur" element={<HuaweiReparatur />} />

              <Route path="/laptop-reparatur" element={<LaptopReparatur />} />
              <Route path="/macbook-reparatur" element={<MacbookReparatur />} />

              <Route path="/ueber-uns" element={<UeberUns />} />
              <Route path="/faq" element={<Faq />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
