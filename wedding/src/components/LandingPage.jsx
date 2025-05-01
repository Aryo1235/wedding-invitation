import React from "react";
import { motion } from "framer-motion";

function LandingPage({ onOpenDetail }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen flex items-center justify-center px-4 py-10">
        <motion.div
          className="relative bg-white border-2 border-gray-300 rounded-xl shadow-lg w-full max-w-2xl lg:max-w-md aspect-[4/6] sm:aspect-[3/5] flex flex-col items-center justify-center p-6 sm:p-8 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Inner Border */}
          <div className="absolute inset-4 border-4 border-gray-300 rounded-md pointer-events-none" />

          {/* Ornamen Bunga */}
          <img
            src="/flower2.jpg"
            alt="floral-top"
            className="absolute top-0 right-0 w-24"
          />
          <img
            src="/flower1.jpg"
            alt="floral-bottom"
            className="absolute bottom-0 left-0 w-24"
          />

          <div className="text-center z-10">
            <h1
              className="text-6xl sm:text-6xl font-bold text-pink-600 mb-4"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Marsya & Akri
            </h1>
            <p
              className="text-3xl sm:text-4xl text-gray-700 mb-6"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              12 Desember 2025
            </p>
            <button
              onClick={onOpenDetail}
              className="bg-pink-500 text-white text-xl sm:text-2xl px-8 py-4 rounded-full hover:bg-pink-600 transition"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Lihat Undangan
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default LandingPage;
