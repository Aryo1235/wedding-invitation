import React from "react";

function InvitationDetail() {
  return (
    <div className="p-6 bg-pink-100 min-h-screen text-center font-[Lora]">
      <h2 className="text-3xl font-semibold mb-4 font-[Playfair Display]">
        Dengan Mengucap Syukur
      </h2>
      <p className="mb-6 italic">
        “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan untukmu
        pasangan-pasangan dari jenismu sendiri, agar kamu merasa tenteram
        kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.” (QS.
        Ar-Rum: 21)
      </p>

      <h3 className="text-2xl font-bold mb-2 font-[Playfair Display]">
        Marsya Ardwifa & Akri Bima Septianto
      </h3>
      <p className="mb-4">
        Putri dari Ahok & Ibu Dwi <br /> Putra dari Bapak Karjo & Ibu Lina
      </p>

      {/* Gambar pasangan */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <img
          src="/foto1.jpg"
          alt="Pasangan 1"
          className="rounded-full w-32 h-32 object-cover"
        />
        <img
          src="/foto2.jpg"
          alt="Pasangan 2"
          className="rounded-full w-32 h-32 object-cover"
        />
      </div>

      {/* Detail Acara */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">Akad Nikah</h3>
        <p className="mb-2">Sabtu, 12 Desember 2025 | 09.00 WIB</p>

        <h3 className="text-xl font-semibold mb-1">Resepsi</h3>
        <p className="mb-4">Sabtu, 12 Desember 2025 | 11.00 WIB - selesai</p>

        <h3 className="text-xl font-semibold mb-1">Lokasi</h3>
        <p className="mb-4">
          Lapangan Mes <br /> Bojonggede, Bogor
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d548.2393735440791!2d106.79287203343486!3d-6.4911964854498665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c3fcd3b31815%3A0xf2b2f39651c2be3!2sTerminal%20Dan%20Stasiun%20Bojong%20Gede!5e0!3m2!1sid!2sid!4v1746116976193!5m2!1sid!2sid"
          width="300"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="mx-auto w-full max-w-xs mb-6"
        ></iframe>
      </div>

      {/* Dresscode */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">Dresscode</h3>
        <p className="mb-4">Pria: Batik | Wanita: Kebaya / Gaun pastel</p>
      </div>

      {/* Kontak */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">RSVP / Kontak</h3>
        <p className="mb-4">
          Bewok: 0812-3456-7890 <br /> Denis: 0821-9876-5432
        </p>
      </div>

      {/* Musik YouTube (audio-only) */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Musik</h3>
        <p className="mb-2 italic text-sm">
          Lagu: A Thousand Years (Instrumental)
        </p>

        {/* Hidden YouTube Embed */}
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

      <div className="mt-6">
        <p className="italic">
          “Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.”
        </p>
      </div>
    </div>
  );
}

export default InvitationDetail;
