import React, { useState } from "react";

const ReviewForm = ({ onAddReview }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text) {
      // Menambahkan review baru ke localStorage
      onAddReview(name, text);
      setName("");
      setText("");
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-1">Tulis Testimoni</h3>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama Anda"
          className="w-full max-w-xs p-2 border border-gray-300 rounded mb-4"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tulis testimoni Anda di sini..."
          className="w-full max-w-xs p-2 border border-gray-300 rounded mb-4"
          rows="4"
        />
        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded"
        >
          Kirim Testimoni
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
