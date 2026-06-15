"use client";

import React, { useState, useRef, useEffect } from "react"; // 1. Tambahkan useEffect
import Link from "next/link";

export default function PengalamanPage() {
  const videoPlaylist = [
    "/gunung bromo.mp4",
    "/Taman Nasional Gunung Leuser - Banda Aceh.mp4",
    "/Ngarai Sianok-Sumatera Barat.mp4",
    "/danau toba.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  // 2. Tambahkan useEffect agar video otomatis memuat ulang dan berputar saat index berubah
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Memuat ulang video baru
      videoRef.current.play().catch((err) => {
        console.log("Autoplay dicegah oleh browser:", err);
      });
    }
  }, [currentVideoIndex]);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => {
      if (prevIndex === videoPlaylist.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const destinations = [
    {
      id: 1,
      name: "Raja Ampat",
      rating: "4.9",
      location: "Papua barat daya",
      img: "/raja ampat.webp",
    },
    {
      id: 2,
      name: "Pulau Komodo & Pulau Padar",
      rating: "4.8",
      location: "Nusa Tenggara Timur",
      img: "/pulau komodo.webp",
    },
    {
      id: 3,
      name: "Candi Borobudur",
      rating: "4.7",
      location: "Magelang, Jawa Tengah",
      img: "/candi borobudur.webp",
    },
    {
      id: 4,
      name: "Ubud & Kuta",
      rating: "4.8",
      location: "Bali",
      img: "/ubud.webp",
    },
    {
      id: 5,
      name: "Danau Toba",
      rating: "4.7",
      location: "Sumatera Utara",
      img: "/danau toba.webp",
    },
    {
      id: 6,
      name: "Gunung Bromo",
      rating: "4.8",
      location: "jawa timur",
      img: "/gunung bomo.webp",
    },
    {
      id: 7,
      name: "Kepulauan Derawan",
      rating: "4.8",
      location: "Kalimantan Timur",
      img: "/kepulauan derawan.webp",
    },
    {
      id: 8,
      name: "Labuan Bajo ",
      rating: "4.7",
      location: "Nusa Tenggara Timur",
      img: "/labuan bajjo.webp",
    },
    {
      id: 9,
      name: "Nusa Penida",
      rating: "4.8",
      location: "Bali",
      img: "/nusa panida.webp",
    },
    {
      id: 10,
      name: "Dataran Tinggi Dieng",
      rating: "4.7",
      location: "Jawa Tengah",
      img: "/dataran tinggi dieng.webp",
    },
    {
      id: 11,
      name: "Taman Nasional Bunaken",
      rating: "4.7",
      location: "Sulawesi Utara",
      img: "/taman nasional bunaken.webp",
    },
    {
      id: 12,
      name: "Kawah Ijen",
      rating: "4.8",
      location: " Banyuwangi, Jawa Timur",
      img: "/kawah ijen.webp",
    },
    {
      id: 13,
      name: "Desa Wisata Penglipuran",
      rating: "4.8",
      location: "Bali",
      img: "/desa palipuran.webp",
    },
  ];

  const informations = [
    {
      id: 1,
      name: "Berita Terbaru Indonesia",
      img: "/raja ampat.webp",
      link: "https://www.indonesia.travel/id/id/travel-ideas/",
    },
    {
      id: 2,
      name: "Informasi Umum",
      img: "/foto orang liat map.jpg",
      link: "https://www.indonesia.travel/id/id/general-information/",
    },
    {
      id: 3,
      name: "Buku & Brosur Elektronik",
      img: "/buku dan brouser.jpg",
      link: "https://www.indonesia.travel/id/id/inspiration/",
    },
    {
      id: 4,
      name: "Peraturan Bali",
      img: "/budaya bali.jpg",
      link: "https://www.indonesia.travel/id/id/travel-ideas/adventure/bali-vacation-in-mind-get-informed-of-the-latest-regulations/",
    },
    {
      id: 5,
      name: "Panduan Brand",
      img: "/panduan brand.jpg",
      link: "https://www.indonesia.travel/id/id/brand-guidelines/",
    },
    {
      id: 6,
      name: "Kesempatan Kemitraan",
      img: "/gunung bomo.webp",
      link: "https://www.indonesia.travel/id/id/partnership-opportunity/",
    },
    {
      id: 7,
      name: "Informasi Terkini",
      img: "/kepulauan derawan.webp",
      link: "https://www.indonesia.travel/id/id/crisis-management/",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Siti Nur Aisyah",
      origin: "Surabaya",
      flag: "🇮🇩",
      role: "Wisatawan Domestik",
      rating: 5,
      text: '"Memenangkan kompetisi keindahan alam madani Indonesia! Situs ini memberikan panduan wisata yang sangat detail, mempermudah liburan keluarga kami saat menjelajahi wilayah Nusantara."',
    },
    {
      id: 2,
      name: "John Smith",
      origin: "London",
      flag: "🇬🇧",
      role: "International Traveler",
      rating: 5,
      text: '"I love the rich cultural insights and standardized navigation links. It makes booking local custom guides and understanding regulations completely stress-free!"',
    },
    {
      id: 3,
      name: "Jean Dupont",
      origin: "Paris",
      flag: "🇫🇷",
      role: "International Traveler",
      rating: 5,
      text: '"There is an instant trust built when using this platform. Seamless connection to the official destination resources and incredible transparency of information."',
    },
  ];

  return (
    <div className="bg-[#fcfbf7] min-h-screen text-[#0f2a3a] font-sans relative">
      {/* ==================== BANNER NAVBAR UTAMA ==================== */}
      <header className="absolute top-0 w-full px-6 py-8 flex flex-col md:flex-row justify-between items-center z-20 text-white bg-transparent">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <img
            src="/logo.png"
            alt="Logo Wisata Indonesia"
            className="w-12 h-12 object-contain drop-shadow-lg"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              if (e.currentTarget.nextSibling) {
                e.currentTarget.nextSibling.style.display = "block";
              }
            }}
          />
          <span className="text-4xl drop-shadow-lg hidden">🕊️</span>

          <div className="leading-tight drop-shadow-md">
            <h1 className="text-xl font-serif font-bold tracking-wide">
              wisata
            </h1>
            <h1 className="text-xl font-serif font-bold tracking-wide">
              indonesia
            </h1>
          </div>
        </Link>

        <nav className="hidden lg:flex gap-10 text-[15px] font-medium drop-shadow-md tracking-wide mt-4 md:mt-0">
          <Link href="/" className="hover:text-gray-300 transition">
            Destinasi
          </Link>
          <Link
            href="/pengalaman"
            className="text-amber-400 font-semibold tracking-wide"
          >
            Pengalaman
          </Link>
          <Link href="#" className="hover:text-gray-300 transition">
            Login Admin
          </Link>
        </nav>
      </header>

      {/* ==================== 1. HERO BANNER ==================== */}
      <section className="relative h-[650px] w-full overflow-hidden bg-gray-900 flex flex-col justify-center items-center text-white px-4">
        <div className="absolute inset-0 z-0">
          {/* 3. PERBAIKAN: Pindahkan src langsung ke elemen video, hapus tag <source> */}
          <video
            ref={videoRef}
            src={videoPlaylist[currentVideoIndex]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center max-w-2xl mt-20">
          <h1 className="text-4xl md:text-6xl font-serif tracking-wide mb-4 drop-shadow-lg">
            Layanan Pilihan
          </h1>
          <p className="text-center text-sm md:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed drop-shadow-md">
            Segala yang Anda butuhkan untuk perjalanan mempesona melalui
            kepulauan ini, mulai dari kearifan lokal hingga mobilitas mewah.
          </p>
        </div>
      </section>

      {/* ==================== KONTEN UTAMA (LAYOUT DUA KOLOM SINKRON) ==================== */}
      <main className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* ==================== KOLOM KIRI: TOP DESTINATIONS ==================== */}
        <section className="lg:col-span-7">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif text-[#0f2a3a] mb-1">
              Top Destinations
            </h2>
            <p className="text-sm text-gray-400">
              Explore our highly-rated spots across the islands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {destinations.map((item) => (
              <div
                key={item.id}
                className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col"
              >
                <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-100 relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500";
                    }}
                  />
                </div>

                <div className="pt-4 pb-2 px-1 flex flex-col flex-grow">
                  <div className="flex justify-between items-center gap-2 mb-1">
                    <h3 className="text-[15px] font-medium text-gray-900 leading-snug">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-0.5 text-gray-500 text-[11px] shrink-0">
                      <span className="text-amber-400 text-xs">⭐</span>
                      <span className="font-medium">{item.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-gray-400 mt-1">
                    <span>📍</span>
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== KOLOM KANAN: ESSENTIAL INSIGHTS & INFORMASI ==================== */}
        <div className="lg:col-span-5 flex flex-col gap-12">
          {/* SUB-SEKSYEN: WAWASAN PENTING */}
          <section>
            <p className="text-xs tracking-widest text-gray-400 uppercase font-semibold mb-1">
              INFORMASI PERJALANAN
            </p>
            <h2 className="text-3xl font-serif mb-6">Wawasan Penting</h2>

            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-48 bg-amber-100 relative">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/candi borobudur.webp')" }}
                  ></div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-serif mb-2">The Art of Adat</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">
                    Indonesia memiliki ratusan suku dan tradisi yang beragam.
                    Wisatawan dianjurkan menghormati adat setempat, berpakaian
                    sopan saat mengunjungi tempat ibadah, serta menjaga etika
                    saat berinteraksi dengan masyarakat. Memahami budaya lokal
                    akan membuat perjalanan lebih berkesan.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">
                      Etiquette
                    </span>
                    <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">
                      Culture
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <span className="text-2xl mb-2 block">🌡️</span>
                  <h4 className="font-serif text-base mb-1">Panduan Iklim</h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed">
                    Indonesia memiliki iklim tropis dengan dua musim utama,
                    yaitu musim kemarau (Mei–September) dan musim hujan
                    (Oktober–April). Musim kemarau cocok untuk wisata alam dan
                    pantai, sedangkan musim hujan menawarkan pemandangan hijau
                    yang lebih segar dan suasana yang lebih tenang.
                  </p>
                </div>

                <div className="bg-[#0b3546] text-white p-5 rounded-xl shadow-sm">
                  <span className="text-2xl mb-2 block">💵</span>
                  <h4 className="font-serif text-base mb-1">
                    Mata Uang & Konektivitas
                  </h4>
                  <p className="text-gray-300 text-[11px] leading-relaxed">
                    Mata uang resmi Indonesia adalah Rupiah (IDR). Pembayaran
                    non-tunai melalui QRIS, kartu debit, dan dompet digital
                    tersedia di sebagian besar kota besar serta destinasi wisata
                    populer. Jaringan 4G dan 5G juga tersedia di banyak wilayah
                    perkotaan, meskipun beberapa daerah terpencil masih memiliki
                    keterbatasan sinyal.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SUB-SEKSYEN: INFORMASI GRID */}
          <section>
            <div className="flex justify-between items-center mb-6 border-b pb-3">
              <h2 className="text-2xl font-serif">Informasi</h2>
              <button className="text-gray-500 hover:text-gray-700 text-lg">
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {informations.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group shadow-md cursor-pointer block"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
                  <div className="absolute bottom-3 left-3 right-3 z-10 text-white flex items-center justify-between gap-1">
                    <h3 className="text-xs md:text-sm font-medium leading-tight shadow-sm">
                      {item.name}
                    </h3>
                    <span className="text-xs text-gray-300 group-hover:text-white shrink-0">
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* ==================== 4. TANGGAPAN WISATAWAN (BACKGROUND FOTO DERAWAN) ==================== */}
      <section
        className="py-16 px-6 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/kepulauan derawan.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-white mb-2 drop-shadow-md">
              Tanggapan Wisatawan (Traveler Reviews)
            </h2>
            <p className="text-sm text-gray-200 drop-shadow-sm">
              Ulasan dari Dalam dan Luar Negeri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-teal-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner">
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                          {rev.name} ({rev.origin})
                          <span className="text-xs">{rev.flag}</span>
                        </h4>
                        <p className="text-[11px] text-gray-400 font-medium">
                          {rev.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex text-amber-400 text-xs mb-3">
                    {"★".repeat(rev.rating)}
                  </div>

                  <p className="text-gray-600 text-xs italic leading-relaxed mb-6">
                    {rev.text}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center">
                  <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md tracking-wider">
                    WisataReview API
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
