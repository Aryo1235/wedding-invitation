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

      <div className="flex justify-center gap-4 mb-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Pasangan 1"
          className="rounded-full w-32 h-32 object-cover"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Pasangan 2"
          className="rounded-full w-32 h-32 object-cover"
        />
      </div>

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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126912.29798774828!2d106.6894319!3d-6.2297284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b2b7a9e8f7%3A0x501e8f1fcf91b1a6!2sJakarta!5e0!3m2!1sen!2sid!4v1618033988749!5m2!1sen!2sid"
          width="300"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="mx-auto mb-6"
        ></iframe>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">Dresscode</h3>
        <p className="mb-4">Pria: Batik | Wanita: Kebaya / Gaun pastel</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">RSVP / Kontak</h3>
        <p className="mb-4">
          Bewok: 0812-3456-7890 <br /> Denis: 0821-9876-5432
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Musik</h3>
        <audio controls autoPlay loop className="mx-auto">
          <source
            src="https://sample-mp3-link.com/a-thousand-years.mp3"
            type="audio/mp3"
          />
          Browser Anda tidak mendukung pemutar audio.
        </audio>
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
