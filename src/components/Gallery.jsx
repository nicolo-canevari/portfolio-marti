// 🖼️ --------------------------- GALLERY COMPONENT ---------------------------
// Sezione dedicata alla galleria fotografica di OftalZoo 🐾
// Utilizza Swiper.js per creare un carosello elegante e reattivo,
// con immagini animate e testi completamente traducibili tramite i18next.
// ---------------------------------------------------------------------------

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useTranslation } from "react-i18next"; // 🌍 Supporto multilingua

// --------------------------- IMPORT IMMAGINI ---------------------------
// Ogni immagine rappresenta un momento o un caso clinico del centro OftalZoo.
import img01 from "../assets/img01.jpeg";
import img02 from "../assets/img02.jpeg";
import img03 from "../assets/img03.jpeg";
import img04 from "../assets/img04.jpg";
import img05 from "../assets/img05.jpg";
import img06 from "../assets/img06.jpg";
import img07 from "../assets/img07.jpg";
import img08 from "../assets/img08.jpg";
import img09 from "../assets/img09.jpeg";

// --------------------------- COMPONENTE PRINCIPALE ---------------------------
export default function Gallery() {
    const { t } = useTranslation(); // 🌐 Inizializzazione hook traduzioni

    // 📸 Array contenente le immagini mostrate nel carosello
    const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09];

    return (
        <section id="galleria" className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-4">

                {/* 🏷️ TITOLO SEZIONE */}
                <h2 className="text-4xl font-serif font-bold text-emerald-800 mb-16 text-center">
                    {/* Titolo principale + parola evidenziata in verde */}
                    {t("gallery.title")}{" "}
                    <span className="text-emerald-500">{t("gallery.highlight")}</span>
                </h2>

                {/* 🎠 CAROSELLO SWIPER */}
                <Swiper
                    modules={[Autoplay, Pagination]}          // 🧩 Moduli attivi
                    autoplay={{
                        delay: 2500,                         // ⏱️ Tempo di rotazione
                        disableOnInteraction: false,          // ▶️ Continua dopo interazione
                    }}
                    pagination={{ clickable: true }}          // 🔘 Pallini di navigazione
                    loop={true}                               // 🔁 Scorrimento infinito
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                    }}
                    className="rounded-3xl"
                >
                    {/* 🖼️ CICLO IMMAGINI */}
                    {images.map((src, i) => (
                        <SwiperSlide key={i}>
                            <div className="overflow-hidden rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105">
                                <img
                                    src={src}
                                    alt={`${t("gallery.title")} ${i + 1}`} // 🈴 Testo ALT tradotto
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
