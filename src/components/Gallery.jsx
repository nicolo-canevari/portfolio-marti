import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

// 🔹 Importa le immagini da assets 
import img1 from "../assets/IMG_0177.jpeg";
import img2 from "../assets/IMG_2028.jpeg";
import img3 from "../assets/IMG_2407.jpeg";
import img4 from "../assets/logo-vecchio.png";

export default function Gallery() {
    const sliderRef = useRef(null);

    // 🔹 Fix: forza un “refresh” del carosello dopo il caricamento
    useEffect(() => {
        if (sliderRef.current) {
            setTimeout(() => {
                window.dispatchEvent(new Event("resize"));
            }, 500);
        }
    }, []);

    // 🔹 Impostazioni del carosello
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024, // Tablet
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768, // Mobile
                settings: { slidesToShow: 1 },
            },
        ],
    };

    const images = [img1, img2, img3, img4];

    return (
        <section id="galleria" className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <h2 className="text-4xl font-serif font-bold text-emerald-800 mb-12 text-center">
                    Galleria <span className="text-emerald-500">OftalZoo</span>
                </h2>

                <Slider ref={sliderRef} {...settings}>
                    {images.map((src, index) => (
                        <div key={index} className="px-4">
                            <div
                                className="
                                    rounded-2xl 
                                    overflow-hidden 
                                    shadow-md 
                                    hover:shadow-lg 
                                    transition-all 
                                    duration-300
                                "
                            >
                                <img
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    className="
                                        w-full
                                        min-h-[300px]   /* 🔸 Previene schiacciamento su mobile */
                                        h-[400px] md:h-[500px]
                                        object-cover
                                        rounded-2xl
                                        shadow-lg
                                        transition-transform
                                        duration-500
                                        hover:scale-[1.03]
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
