import React from "react";

// --------------------------- COMPONENTE SERVICES ---------------------------
export default function Services() {
    // 🔹 Lista dei servizi offerti dal Dottor Martino Canevari
    const services = [
        {
            titolo: "Oftalmologia veterinaria",
            descrizione: "Diagnosi e trattamento delle patologie oculari in cani, gatti e animali esotici, inclusi esami con lampada a fessura e tonometria.",
        },
        {
            titolo: "Chirurgia oftalmica",
            descrizione: "Interventi chirurgici su palpebre, cornea, cristallino e glaucoma. Utilizzo di tecniche microchirurgiche avanzate.",
        },
        {
            titolo: "Chirurgia generale e dei tessuti molli",
            descrizione: "Procedure chirurgiche per animali di piccola taglia, con particolare attenzione alla sicurezza anestesiologica e al recupero post-operatorio.",
        },
        {
            titolo: "Diagnostica oculare avanzata",
            descrizione: "Ecografia oculare, test di Schirmer, colorazioni corneali, gonioscopia e altri esami specialistici.",
        },
        {
            titolo: "Visite oftalmologiche di riferimento",
            descrizione: "Collaborazione con ambulatori e cliniche veterinarie per la gestione di casi oftalmologici complessi.",
        },
        {
            titolo: "Oftalmologia equina",
            descrizione: "Valutazione e trattamento delle principali patologie oculari nel cavallo, sia in clinica che in campo.",
        },
    ];

    return (
        // 🔸 Sezione Servizi con sfondo colorato e spaziatura generosa
        <section id="servizi" className="bg-emerald-100 py-20">
            <div className="max-w-6xl mx-auto px-6 md:px-10">

                {/* --------------------------- TITOLO SEZIONE --------------------------- */}
                <h2 className="text-4xl font-serif font-bold text-emerald-800 mb-12 text-center">
                    Servizi <span className="text-emerald-500">Offerti</span>
                </h2>

                {/* --------------------------- LISTA SERVIZI --------------------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((servizio, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
                                {servizio.titolo}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {servizio.descrizione}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}