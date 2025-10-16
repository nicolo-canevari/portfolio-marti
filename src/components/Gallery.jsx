// 🖼️ --------------------------- GALLERY COMPONENT ---------------------------
// Questo componente mostra una galleria di immagini in formato carosello,
// utilizzando il plugin Swiper.js per creare un’esperienza fluida e responsive.
// ---------------------------------------------------------------------------

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";          // 🔹 Componenti base Swiper
import { Autoplay, Pagination } from "swiper/modules";       // 🔹 Moduli aggiuntivi
import "swiper/css";                                         // 🔹 Stili base Swiper
import "swiper/css/pagination";                              // 🔹 Stili per la paginazione

// --------------------------- IMPORT IMMAGINI ---------------------------
import img01 from "../assets/img01.jpeg";
import img02 from "../assets/img02.jpeg";
import img03 from "../assets/img03.jpeg";
import img04 from "../assets/img04.jpg";
import img05 from "../assets/img05.jpg";
import img06 from "../assets/img06.jpg";

// --------------------------- COMPONENTE PRINCIPALE ---------------------------
export default function Gallery() {

    // 📸 Lista immagini mostrate nel carosello
    const images = [img01, img02, img03, img04, img05, img06];

    // --------------------------- STRUTTURA VISIVA ---------------------------
    return (
        <section id="galleria" className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-4">

                {/* 🏷️ TITOLO SEZIONE */}
                <h2 className="text-4xl font-serif font-bold text-emerald-800 mb-16 text-center">
                    Galleria <span className="text-emerald-500">OftalZoo</span>
                </h2>

                {/* 🎠 CAROSELLO SWIPER */}
                <Swiper
                    modules={[Autoplay, Pagination]}   // Moduli attivi: autoplay + paginazione
                    autoplay={{
                        delay: 2500,                   // ⏱️ Cambio immagine ogni 2.5s
                        disableOnInteraction: false,   // 🔁 Continua anche se l’utente interagisce
                    }}
                    pagination={{ clickable: true }}    // 🔘 Punti di navigazione cliccabili
                    loop={true}                         // 🔄 Ripetizione infinita
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 20 },     // 📱 Mobile
                        768: { slidesPerView: 2, spaceBetween: 30 },   // 📲 Tablet
                        1024: { slidesPerView: 3, spaceBetween: 40 },  // 💻 Desktop
                    }}
                    className="rounded-3xl"
                >
                    {/* 🔹 Genero dinamicamente ogni slide */}
                    {images.map((src, i) => (
                        <SwiperSlide key={i}>
                            <div className="overflow-hidden rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105">
                                <img
                                    src={src}
                                    alt={`Slide ${i + 1}`} // 🔠 Testo alternativo dinamico
                                    className="w-full h-[400px] object-cover" // 📐 Riempie contenitore mantenendo proporzioni
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
