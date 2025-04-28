import React from "react";

export default function Modal({ product, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-xl">✖</button>
        <img src={product.img} alt={product.title} className="rounded mb-4" />
        <h3 className="text-xl font-semibold">{product.title}</h3>
        <p className="text-green-700">{product.desc}</p>
        <a href="https://wa.me/4369917432373" target="_blank" rel="noopener noreferrer" className="block mt-4 bg-green-700 text-white px-4 py-2 rounded text-center">
          Jetzt anfragen
        </a>
      </div>
    </div>
  );
}