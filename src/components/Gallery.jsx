import React from "react";
import Slider from "react-slick"; // 🔹 Libreria per il carosello

// 🔹 Importa le immagini da assets 
import img1 from "../assets/IMG_0177.jpeg";
import img2 from "../assets/IMG_2028.jpeg";
import img3 from "../assets/IMG_2407.jpeg";
import img4 from "../assets/logo-vecchio.png";
// import img5 from "../assets/gallery5.jpg";

// --------------------------- COMPONENTE GALLERY ---------------------------
export default function Gallery() {

    // --------------------------- IMPOSTAZIONI CAROSELLO ---------------------------
    // Le impostazioni controllano il comportamento dello slider (velocità, autoplay, ecc.)
    const settings = {
        dots: true, // 🔸 Mostra i pallini di navigazione sotto le immagini
        infinite: true, // 🔸 Loop infinito (ricomincia da capo)
        speed: 800, // 🔸 Velocità dell’animazione di transizione
        slidesToShow: 3, // 🔸 Quante immagini mostrare contemporaneamente su desktop
        slidesToScroll: 1, // 🔸 Quante immagini scorrono per volta
        autoplay: true, // 🔸 Scorrimento automatico
        autoplaySpeed: 2500, // 🔸 Intervallo in millisecondi (2,5 secondi)
        pauseOnHover: true, // 🔸 Ferma lo scorrimento quando il mouse è sopra

        // 🔹 Impostazioni responsive (adattano il numero di immagini alla dimensione dello schermo)
        responsive: [
            {
                breakpoint: 1024, // 🔸 Tablet (max 1024px)
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768, // 🔸 Mobile (max 768px)
                settings: { slidesToShow: 1 }, // Una sola immagine alla volta
            },
        ],
    };

    // --------------------------- LISTA DELLE IMMAGINI ---------------------------
    // 🔸 Qui puoi aggiungere o togliere immagini in base a quante vuoi mostrare nel carosello
    const images = [img1, img2, img3, img4];

    // --------------------------- RENDER DEL COMPONENTE ---------------------------
    return (
        // 🔸 Sezione principale della galleria
        //     - Sfondo bianco
        //     - Padding verticale per dare aria
        <section id="galleria" className="bg-white py-20">
            {/* 🔹 Contenitore centrato con larghezza massima */}
            <div className="max-w-6xl mx-auto px-6 md:px-10">

                {/* --------------------------- TITOLO --------------------------- */}
                <h2 className="text-4xl font-serif font-bold text-emerald-800 mb-12 text-center">
                    Galleria <span className="text-emerald-500">OftalZoo</span>
                </h2>

                {/* --------------------------- CAROSELLO --------------------------- */}
                {/* Slider utilizza la libreria "react-slick" */}
                <Slider {...settings}>
                    {/* 🔹 Cicla su tutte le immagini e le mostra nel carosello */}
                    {images.map((src, index) => (
                        <div key={index} className="px-4">
                            {/* 🔸 Contenitore di ogni immagine */}
                            <div className="
                                rounded-2xl 
                                overflow-hidden 
                                shadow-md 
                                hover:shadow-lg 
                                transition-all 
                                duration-300
                            ">
                                {/* --------------------------- IMMAGINE --------------------------- */}
                                <img
                                    src={src} // 🔹 Percorso dell’immagine
                                    alt={`Gallery image ${index + 1}`} // 🔹 Testo alternativo per accessibilità
                                    className="
                                        w-full 
                                        h-[400px] md:h-[500px]  /* 🔸 Altezza immagini mobile/desktop */
                                        object-cover              /* 🔸 Riempie lo spazio mantenendo le proporzioni */
                                        rounded-2xl               /* 🔸 Angoli arrotondati */
                                        shadow-lg                 /* 🔸 Ombra per profondità */
                                        transition-transform 
                                        duration-500 
                                        hover:scale-[1.03]        /* 🔸 Leggera animazione di zoom al passaggio del mouse */
                                    "
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}