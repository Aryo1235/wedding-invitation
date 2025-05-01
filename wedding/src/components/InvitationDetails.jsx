import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

function InvitationDetail() {
  const eventDate = new Date("2025-12-12T09:00:00");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(savedReviews);
  }, []);

  const addReview = (name, text) => {
    const newReview = { name, text };
    const updatedReviews = [...reviews, newReview];
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    setReviews(updatedReviews);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-center font-[Lora] text-gray-950"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen px-4 sm:px-6 py-10 backdrop-blur-sm">
        {/* Header */}
        <motion.h2
          className="text-4xl sm:text-3xl font-semibold mb-4 font-[Playfair Display] text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Dengan Mengucap Syukur
        </motion.h2>

        <motion.p
          className="mb-6 italic text-center max-w-3xl mx-auto text-lg sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          untukmu pasangan-pasangan dari jenismu sendiri, agar kamu merasa
          tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
          sayang.” (QS. Ar-Rum: 21)
        </motion.p>

        {/* Nama pasangan */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl sm:text-2xl font-bold mb-2 font-[Playfair Display] text-primary">
            Marsya Ardwifa & Akri Bima Septianto
          </h3>
          <p className="mb-4 text-base sm:text-sm">
            Putri dari Ahok & Ibu Dwi <br /> Putra dari Bapak Karjo & Ibu Lina
          </p>
        </motion.div>

        {/* Foto pasangan */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src="/foto1.jpg"
            alt="Pasangan 1"
            className="rounded-full w-64 h-64 sm:w-48 sm:h-48 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.img
            src="/foto2.jpg"
            alt="Pasangan 2"
            className="rounded-full w-64 h-64 sm:w-48 sm:h-48 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Countdown */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl sm:text-xl font-semibold mb-2">Countdown</h3>
          <div className="text-3xl sm:text-2xl text-pink-700 font-bold">
            <Countdown date={eventDate} />
          </div>
        </motion.div>

        {/* Detail acara */}
        <div className="mb-8 text-base sm:text-sm">
          <h3 className="text-xl font-semibold mb-1">Akad Nikah</h3>
          <p>Sabtu, 12 Desember 2025 | 09.00 WIB</p>

          <h3 className="text-xl font-semibold mt-4 mb-1">Resepsi</h3>
          <p>Sabtu, 12 Desember 2025 | 11.00 WIB - selesai</p>

          <h3 className="text-xl font-semibold mt-4 mb-1">Lokasi</h3>
          <p className="mb-4">
            Lapangan Mes <br /> Bojonggede, Bogor
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d548.2393735440791!2d106.79287203343486!3d-6.4911964854498665"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="mx-auto w-full max-w-xs mb-6 border rounded-lg"
          ></iframe>
        </div>

        {/* Kontak */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-1">RSVP / Kontak</h3>
          <p>
            Bewok: 0812-3456-7890 <br />
            Denis: 0821-9876-5432
          </p>
        </div>

        {/* Musik */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Musik</h3>
          <p className="mb-2 italic text-sm">
            Lagu: A Thousand Years (Instrumental)
          </p>
          <div className="hidden">
            <iframe
              width="0"
              height="0"
              src="https://www.youtube.com/embed/QgaTQ5-XfMM?autoplay=1&loop=1&playlist=QgaTQ5-XfMM"
              title="YouTube audio"
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Ucapan */}
        <div className="my-6 text-lg sm:text-base">
          <p className="italic max-w-xl mx-auto">
            “Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.”
          </p>
        </div>

        {/* Review */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ReviewList reviews={reviews} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ReviewForm onAddReview={addReview} />
        </motion.div>

        {/* Footer */}
        <footer className="mt-12 py-4 text-center text-sm text-gray-600">
          © 2025 Marsya & Akri — With Love 💖
        </footer>
      </div>
    </div>
  );
}

export default InvitationDetail;
