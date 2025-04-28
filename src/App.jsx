import React, { useState, useEffect } from "react";
import OneShopHome from "./OneShopHome";
import Lottie from "lottie-react";
import phoneAnim from "./loader.json";


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-white">
        <Lottie animationData={phoneAnim} loop style={{ height: 200 }} />
      </div>
    );
  }

  return <OneShopHome />;
}