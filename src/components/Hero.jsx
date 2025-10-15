// --------------------------- IMPORTAZIONI ---------------------------
// Importiamo React e l'immagine da assets
import React from "react";
import heroImage from "../assets/hero-image.jpg"; // 🔹 Sostituisci con il nome reale della tua immagine

// --------------------------- COMPONENTE HERO ---------------------------
export default function Hero() {
    return (
        <section
            id="home"
            className="
        flex flex-col md:flex-row 
        items-center md:items-start justify-between
        max-w-7xl mx-auto 
        px-6 md:px-10 
        pt-20 md:pt-32 pb-16
    "
        >
            {/* --------------------------- TESTO A SINISTRA --------------------------- */}
            <div className="md:w-1/2 text-center md:text-left space-y-6 md:mt-0 mt-6">

                {/* Titolo principale */}
                <div className="md:mt-0">
                    <h1 className="text-5xl md:text-6xl font-bold text-emerald-700 font-serif leading-tight">
                        Dottor. Martino <span className="text-emerald-500">Canevari</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-600 mt-3 font-light">
                        Medico Veterinario - Specialista in Oftalmologia
                    </h2>
                </div>

                {/* Paragrafo introduttivo */}
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                    Veterinario con esperienza internazionale in oftalmologia e chirurgia animale.
                    Appassionato di diagnostica, microchirurgia e benessere animale, con esperienze
                    in diversi centri di eccellenza in Italia e all’estero.
                </p>

                {/* --------------------------- LISTA ESPERIENZE --------------------------- */}
                <div className="mt-8 bg-emerald-50 rounded-xl p-6 shadow-sm border border-emerald-100">
                    <h3 className="text-2xl font-semibold text-emerald-700 mb-4">
                        Esperienze Professionali e Formazione
                    </h3>

                    <ul className="list-disc list-inside text-gray-800 space-y-3 text-left">
                        <li>
                            🏥 <span className="font-medium">Veterinary Ophthalmologist</span> –
                            <span className="italic"> Ospedale Veterinario San Francesco, Milano</span><br />
                            <span className="text-gray-600 text-sm">
                                set 2025 - Presente · 2 mesi · In sede
                            </span>
                        </li>

                        <li>
                            🏇 <span className="font-medium">Equine Ophthalmologist</span> –
                            <span className="italic"> Oftalzoo · Freelance</span><br />
                            <span className="text-gray-600 text-sm">
                                giu 2025 - Presente · 5 mesi
                            </span>
                        </li>

                        <li>
                            🏥 <span className="font-medium">Veterinary Ophthalmologist</span> –
                            <span className="italic"> Ambulatorio Veterinario Canevari, Landriano (Lombardia)</span><br />
                            <span className="text-gray-600 text-sm">
                                set 2023 - Presente · 2 anni 2 mesi · In sede
                            </span>
                        </li>

                        <li>
                            🐶 <span className="font-medium">Small Animal Rotating Internship</span> –
                            <span className="italic"> AniCura - Clinica Veterinaria dell'Orologio, Bologna</span><br />
                            <span className="text-gray-600 text-sm">
                                apr 2024 - apr 2025 · 1 anno 1 mese · In sede
                            </span>
                        </li>

                        <li>
                            🎓 <span className="font-medium">Extracurricular Externship</span> –
                            <span className="italic"> AniCura Milano Tibaldi</span><br />
                            <span className="text-gray-600 text-sm">
                                ott 2023 - gen 2024 · 4 mesi · Milano
                            </span>
                        </li>

                        <li>
                            🎓 <span className="font-medium">Extracurricular Externship</span> –
                            <span className="italic"> Universitat Autònoma de Barcelona</span><br />
                            <span className="text-gray-600 text-sm">
                                lug 2023 - ago 2023 · 2 mesi · Catalogna, Spagna
                            </span>
                        </li>

                        <li>
                            🏥 <span className="font-medium">Veterinary Ophthalmology Externship</span> –
                            <span className="italic"> Hospital Veterinario Puchol, Madrid</span><br />
                            <span className="text-gray-600 text-sm">
                                ott 2022 - apr 2023 · 7 mesi · In sede
                            </span>
                            <p className="text-gray-600 text-sm mt-1">
                                Attività: assistenza in consultazioni, diagnosi, preparazione dei pazienti, supporto in chirurgia, Journal Club.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* --------------------------- IMMAGINE A DESTRA --------------------------- */}
            <div className="md:w-1/2 flex justify-center md:justify-end md:items-start">
                <img
                    src={heroImage}
                    alt="Dott. Martino Canevari - Oftalmologo Veterinario"
                    className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg object-cover md:mt-0 mt-10"
                />
            </div>
        </section>
    );
}