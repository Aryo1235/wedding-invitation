// src/components/Cover.jsx
import { motion } from "framer-motion";

export default function Cover({ onOpen }) {
  return (
    <motion.div
      className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-black text-center"
      style={{ backgroundImage: `url('/assets/cover.jpg')` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold">Undangan Pernikahan</h1>
      <p className="mt-4 text-2xl md:text-3xl">Dita & Reza</p>
      <motion.button
        onClick={onOpen}
        className="mt-8 bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Buka Undangan
      </motion.button>
    </motion.div>
  );
}
