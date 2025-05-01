import React from "react";

function LandingPage({ onOpenDetail }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 px-4">
      <div className="relative bg-white border border-gray-300 rounded-lg shadow-lg w-full max-w-sm aspect-[3/5] flex flex-col items-center justify-center p-8 overflow-hidden">
        {/* Inner Border */}
        <div className="absolute inset-4 border border-gray-300 rounded-md pointer-events-none" />

        {/* Ornamen Bunga */}
        <img
          src="/foto2.jpg"
          alt="floral-top"
          className="absolute top-0 right-0 w-24"
        />
        <img
          src="/foto2.jpg"
          alt="floral-bottom"
          className="absolute bottom-0 left-0 w-24"
        />

        <div className="text-center z-10">
          <h1
            className="text-5xl font-bold text-pink-600 mb-4"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Marsya & Akri
          </h1>
          <p
            className="text-2xl text-gray-700 mb-6"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            12 Desember 2025
          </p>
          <button
            onClick={onOpenDetail}
            className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Lihat Undangan
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
