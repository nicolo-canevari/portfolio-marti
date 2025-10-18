// 🟢 --------------------------- HERO COMPONENT ---------------------------
// Questo componente mostra i due membri principali del team di OftalZoo:
// il Dott. Martino Canevari e la Dott.ssa Simona Destefanis.
// Include immagini, descrizioni e la possibilità di espandere i rispettivi CV
// con un effetto animato realizzato tramite Framer Motion.
// -------------------------------------------------------------------------

// 🟢 --------------------------- IMPORTAZIONI ---------------------------
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // 🎞️ Per animazioni fluide
import { ChevronUp } from "lucide-react";                // 🔹 Icona di chiusura sezione

// 🔹 Importa le immagini dei membri dal folder assets
import martinoImg from "../assets/martino-canevari.jpg";
import simonaImg from "../assets/simona-destefanis.jpg";

// 🟢 --------------------------- COMPONENTE PRINCIPALE ---------------------------
export default function Hero() {

    // =====================================================================
    // 🟢 STATE: Controlla quale CV è aperto
    //    - null: nessun CV aperto
    //    - 0: CV di Martino aperto
    //    - 1: CV di Simona aperto
    // =====================================================================
    const [openCV, setOpenCV] = useState(null);

    // =====================================================================
    // 🟢 DATI: Informazioni dei membri del team
    //    Ogni oggetto include nome, ruolo, immagine e lista esperienze.
    // =====================================================================
    const membri = [
        {
            nome: "Dott. Martino Canevari",
            ruolo: "Medico Veterinario",
            immagine: martinoImg,
            esperienze: [
                { icon: "🏥", ruolo: "Veterinary Ophthalmologist", luogo: "Ospedale Veterinario San Francesco, Milano", periodo: "set 2025 - Presente" },
                { icon: "🏇", ruolo: "Equine Ophthalmologist", luogo: "Oftalzoo · Freelance", periodo: "giu 2025 - Presente" },
                { icon: "🏥", ruolo: "Veterinary Ophthalmologist", luogo: "Ambulatorio Veterinario Canevari, Landriano", periodo: "set 2023 - Presente" },
                { icon: "🐶", ruolo: "Small Animal Rotating Internship", luogo: "AniCura, Bologna", periodo: "apr 2024 - apr 2025" },
                { icon: "🎓", ruolo: "Externship", luogo: "AniCura Milano Tibaldi", periodo: "ott 2023 - gen 2024" },
                { icon: "🎓", ruolo: "Curso en Oftalmologia Veterinaria", luogo: "Universitat Autònoma de Barcelona", periodo: "gen 2024 - dic 2025" },
                { icon: "🎓", ruolo: "Externship", luogo: "Universitat Autònoma de Barcelona", periodo: "lug 2023 - ago 2023" },
                { icon: "🎓", ruolo: "Externship", luogo: "Hospital Veterinario Puchol, Madrid", periodo: "ott 2022 - apr 2023" },
            ],
        },
        {
            nome: "Dott.ssa Simona Destefanis",
            ruolo: "Medico Veterinario",
            immagine: simonaImg,
            esperienze: [
                { icon: "🎤", text: "Relatrice in congressi, seminari e corsi nazionali; socia della Società Oftalmologia Veterinaria Italiana (SOVI)." },
                { icon: "📘", text: <><strong>2009–2011:</strong> Corsi SOVI–FSA per la prevenzione delle malattie oculari ereditarie e corso avanzato “Retinal Disease” (Cremona).</> },
                { icon: "👁️", text: <><strong>2007:</strong> Socia fondatrice ANVO; membro del Comitato Scientifico dal 2013.</> },
                { icon: "⚡", text: <><strong>2006:</strong> Corso Avanzato di Elettroretinografia Oculare (SOVI).</> },
                { icon: "⚡", text: <><strong>2002–2004:</strong> Formazione in Elettrofisiologia oculare (Lione e Alfort) e corsi internazionali presso la North Carolina State University (USA).</> },
                { icon: "💉", text: <><strong>2000–2002:</strong> Corsi di Facoemulsificazione Alcon (Milano) e stage presso il Dipartimento di Oftalmologia di Parigi.</> },
                { icon: "🇫🇷", text: <><strong>1999–2000:</strong> Diploma in Oftalmologia presso l’École Nationale Vétérinaire d’Alfort de Paris<br /><span className='text-gray-600 text-sm'>(Prof. B. Clerc – Diplomato ECVO)</span></> },
                { icon: "🎓", text: "Laureata in Medicina Veterinaria presso l’Università degli Studi di Milano (1998)." },
            ],
        },
    ];

    // =====================================================================
    // 🟢 VARIANTI ANIMAZIONE
    //    - Definiscono il comportamento di fade-in durante lo scroll.
    // =====================================================================
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    // =====================================================================
    // 🟢 FUNZIONE: toggleCV()
    //    - Apre il CV corrispondente e chiude gli altri.
    //    - Se clicchi di nuovo sullo stesso, si richiude.
    // =====================================================================
    const toggleCV = (index) => {
        setOpenCV((prev) => (prev === index ? null : index));
    };

    // =====================================================================
    // 🟢 RENDER COMPONENTE
    // =====================================================================
    return (
        <section id="home" className="flex flex-col items-center max-w-6xl mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-20">

            {/* 🏷️ INTRODUZIONE SEZIONE */}
            <div className="text-center max-w-3xl mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-emerald-700 mb-4">
                    Il nostro team di oftalmologia veterinaria
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Un team di medici veterinari specializzati in oftalmologia, uniti da esperienza clinica,
                    formazione internazionale e una profonda passione per la salute oculare degli animali.
                </p>
            </div>

            {/* 👩‍⚕️👨‍⚕️ CARD MEMBRI */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                {membri.map((membro, index) => {
                    const isOpen = openCV === index;

                    return (
                        <motion.div
                            key={index}
                            className="bg-emerald-50 rounded-2xl p-6 shadow-sm border border-emerald-100 text-center"
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {/* 📸 FOTO PROFILO */}
                            <img
                                src={membro.immagine}
                                alt={membro.nome}
                                className="w-64 h-64 object-cover rounded-full mx-auto mb-6 border-4 border-emerald-200 shadow-sm"
                            />

                            {/* 🧾 INFO BASE */}
                            <h2 className="text-2xl font-serif font-bold text-emerald-700 mb-1">{membro.nome}</h2>
                            <p className="text-gray-600 mb-4">{membro.ruolo}</p>

                            {/* 🔘 BOTTONE APERTURA CV */}
                            <button
                                onClick={() => toggleCV(index)}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full shadow transition"
                            >
                                {isOpen ? "Chiudi esperienze" : "Le nostre esperienze"}
                            </button>

                            {/* 📜 CV ESPANDIBILE */}
                            <AnimatePresence mode="wait">
                                {isOpen && (
                                    <motion.div
                                        key={`cv-${index}`}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="mt-6 text-left"
                                    >
                                        <ul className="space-y-3">
                                            {membro.esperienze.map((exp, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-800">
                                                    <span className="text-xl">{exp.icon}</span>
                                                    <span className="leading-relaxed">
                                                        {exp.ruolo ? (
                                                            <>
                                                                <strong>{exp.ruolo}</strong> – {exp.luogo}
                                                                <br />
                                                                <span className="text-gray-600 text-sm">{exp.periodo}</span>
                                                            </>
                                                        ) : (
                                                            exp.text
                                                        )}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* 🔼 PULSANTE CHIUSURA CV */}
                                        <button
                                            onClick={() => setOpenCV(null)}
                                            className="mt-6 flex items-center gap-2 mx-auto text-emerald-600 hover:text-emerald-800 transition"
                                        >
                                            <ChevronUp className="w-5 h-5" />
                                            <span>Chiudi</span>
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
