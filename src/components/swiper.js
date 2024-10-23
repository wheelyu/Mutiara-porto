// SwiperCard.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const SwiperCard = () => {
  const slides = [
    {
      image: "Muti.jpg",
      title:
        "Master Of Ceremonies Indonesian Foresty Student Seminar Regional Forum II",
      description:
        "Membawa acara dan memberikan arahan kepada peserta Memanajemen waktu dalam rangkaian acara Memantau serta bertanggung jawab dalam kegiatan pelaksanaan sesuai rundown yang telah dibuat Memandu proses berjalannya acara dari awal hingga akhir",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Master Of Ceremonies Rimbawan Talk 4 ",
      description:
        "Membawa acara dan memberikan arahan kepada peserta Memanajemen waktu dalam rangkaian acara Memantau serta bertanggung jawab dalam kegiatan pelaksanaan sesuai rundown yang telah dibuat Memandu proses berjalannya acara dari awal hingga akhir",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Head Forest Product Technology Division Ekspedisi Angsana ITERA ",
      description:
        "Mengikuti kegiatan Ekpedisi yang diadakan oleh Program Studi Rekayasa Kehutanan, Bertanggung jawab atas penganalisisan data yang di lakukan di lokasi Tahura Wan Abdul Rachman, Gunung Betung, Memberi arahan mengenai data kepada para tim, Bertanggung jawab dalam pembuatan laporan Teknologi hasil hutan ",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Vise Head Acara Seminar Nasional Ekspedisi Angsana ITERA ",
      description:
        "Memberi ide serta gagasan terkait rangkaian seminar, Memanajemen rundown terkait kegiatan acara, Mengkoordinir terkait pembawa acara serta pembawa materi,Melakukan pengontrolan terhadap penampilan di acara seminar ",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Anggota aktif Himpunan FORESTA",
      description:
        "Berpartisipasi dalam program pengabdian Masyarakat, Memanajemen keuangan dalam divisi pengabdian masyarakat, Berpartisipasi dalam kegiatan seminar himpunan sebagai panitia, Berpartisipasi dalam kegiatan dengan acara himpuman lainnya ",
    },
  ];

  return (
    <div className="flex justify-center items-center  bg-transparent">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20} // Jarak antar slide
        slidesPerView={1.2} // Menampilkan sebagian slide berikutnya
        centeredSlides={true} // Membuat slide tengah berada di tengah-tengah viewport
        className="w-3/4"
        grabCursor={true}
        //membuat slide otomatis
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-slate-100 rounded-lg shadow-lg overflow-hidden flex">
              {/* Kontainer gambar, diatur ukurannya dan tidak memenuhi seluruh card */}
              <div className="w-1/2  p-4 flex justify-center items-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="max-w-full  max-h-96 object-cover"
                />
              </div>
              {/* Kontainer teks */}
              <div className="w-1/2 p-4 flex flex-col justify-center">
                <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
                <p className="text-gray-600">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCard;