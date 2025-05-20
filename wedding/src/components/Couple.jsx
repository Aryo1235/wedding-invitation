// src/components/Couple.jsx
import { motion } from "framer-motion";
import Countdown from "react-countdown";

const weddingDate = new Date("2025-07-20T09:00:00");

export default function Couple() {
  return (
    <section className="py-16 bg-white text-gray-800 text-center">
      <motion.h2
        className="text-4xl lg:text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Assalamu’alaikum Wr. Wb.
      </motion.h2>

      <motion.p
        className="mb-6 text-3xl lg:text-lg lg:max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
        menyelenggarakan pernikahan kami.
      </motion.p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-10">
        {/* Pengantin Wanita */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/foto1.jpg"
            alt="Pengantin Wanita"
            className="w-80 h-80 lg:w-52 lg:h-52 mx-auto mb-4 object-cover shadow-xl"
            style={{
              clipPath:
                "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
            }}
          />

          <h3 className="text-3xl lg:text-xl font-semibold">Dita Maharani</h3>
          <p className="text-xl lg:text-sm text-gray-500">
            Putri dari Bapak A & Ibu B
          </p>
        </motion.div>

        <p className="text-3xl font-bold">&</p>

        {/* Pengantin Pria */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/assets/groom.jpg"
            alt="Pengantin Pria"
            className="w-52 h-52 rounded-full mx-auto mb-4 object-cover shadow-md"
          />
          <h3 className="text-xl font-semibold">Reza Pratama</h3>
          <p className="text-sm text-gray-500">Putra dari Bapak C & Ibu D</p>
        </motion.div>
      </div>

      {/* Countdown */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h4 className="text-2xl font-semibold mb-2">Menuju Hari Bahagia</h4>
        <Countdown
          date={weddingDate}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              return (
                <p className="text-xl font-bold">
                  Hari ini adalah hari bahagia! 💍
                </p>
              );
            } else {
              return (
                <div className="flex justify-center gap-6 text-xl font-mono mt-10">
                  <div className="w-24 h-24 shadow-md flex flex-col justify-center bg-gray-100 rounded-md">
                    <p className="text-3xl font-bold ">{days}</p>
                    <span>Hari</span>
                  </div>
                  <div className="w-24 h-24 shadow-md flex flex-col justify-center bg-gray-100 rounded-md">
                    <p className="text-3xl font-bold">{hours}</p>
                    <span>Jam</span>
                  </div>
                  <div className="w-24 h-24 shadow-md flex flex-col justify-center bg-gray-100 rounded-md">
                    <p className="text-3xl font-bold">{minutes}</p>
                    <span>Menit</span>
                  </div>
                  <div className="w-24 h-24 shadow-md flex flex-col justify-center bg-gray-100 rounded-md">
                    <p className="text-3xl font-bold">{seconds}</p>
                    <span>Detik</span>
                  </div>
                </div>
              );
            }
          }}
        />
      </motion.div>
    </section>
  );
}
