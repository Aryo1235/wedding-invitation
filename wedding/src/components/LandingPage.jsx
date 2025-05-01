import React from "react";

function LandingPage({ onOpenDetail }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-100 text-center">
      <h1
        className="text-6xl font-bold mb-4  text-pink-600"
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        Marsya & Akri{" "}
      </h1>
      <p
        className="mb-6 text-3xl "
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        12 Desember 2025
      </p>
      <button
        onClick={onOpenDetail}
        className="bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-pink-600"
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        Lihat Undangan
      </button>
    </div>
  );
}

export default LandingPage;
