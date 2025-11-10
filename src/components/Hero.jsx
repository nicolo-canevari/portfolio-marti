// 🟢 --------------------------- HERO COMPONENT ---------------------------
// Sezione introduttiva del sito, che presenta i due membri principali del team:
// 👨‍⚕️ Dott. Martino Canevari e 👩‍⚕️ Dott.ssa Simona Destefanis.
//
// Include:
// ✅ Immagini e ruoli
// ✅ CV espandibili con animazioni fluide (Framer Motion)
// ✅ Testi multilingua gestiti tramite i18next
// -------------------------------------------------------------------------

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // 🎞️ Animazioni fluide
import { ChevronUp } from "lucide-react";                // 🔹 Icona di chiusura CV
import { useTranslation } from "react-i18next";           // 🌍 Gestione traduzioni

// 📸 Immagini dei membri del team
import martinoImg from "../assets/martino-canevari.jpg";
// import simonaImg from "../assets/simona-destefanis.jpg";

// 🟢 --------------------------- COMPONENTE PRINCIPALE ---------------------------
export default function Hero() {

    // 🌍 Hook traduzione i18next
    const { t } = useTranslation();

    // =====================================================================
    // 🧠 STATE — Gestisce quale CV è attualmente aperto
    // =====================================================================
    const [openCV, setOpenCV] = useState(null);

    // =====================================================================
    // 👥 DATI MEMBRI — Estratti dinamicamente dai file di traduzione JSON
    // =====================================================================
    const membri = [
        {
            nome: t("hero.martino.nome"),
            ruolo: t("hero.martino.ruolo"),
            immagine: martinoImg,
            esperienze: t("hero.martino.esperienze", { returnObjects: true }),
        },
        // {
        //     nome: t("hero.simona.nome"),
        //     ruolo: t("hero.simona.ruolo"),
        //     immagine: simonaImg,
        //     esperienze: t("hero.simona.esperienze", { returnObjects: true }),
        // },
    ];

    // =====================================================================
    // 🎞️ VARIANTI ANIMAZIONE — Effetto "fade-in" per le card
    // =====================================================================
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    // =====================================================================
    // ⚙️ FUNZIONE toggleCV(index)
    // Apre o chiude il CV del membro cliccato
    // =====================================================================
    const toggleCV = (index) => {
        setOpenCV((prev) => (prev === index ? null : index));
    };

    // =====================================================================
    // 🎨 RENDER COMPONENTE
    // =====================================================================
    return (
        <section id="home" className="flex flex-col items-center max-w-6xl mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-20">

            {/* 🏷️ INTRODUZIONE SEZIONE CON PRESENTAZIONE */}
            {/* <div className="text-center max-w-3xl mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-emerald-700 mb-4">
                    {t("hero.titolo")}
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {t("hero.sottotitolo")}
                </p>
            </div> */}

            {/* 👩‍⚕️👨‍⚕️ CARD DEI MEMBRI */}

            {/* <div> per mettere 2 card una accanto all'altra */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full"> */}

            {/* <div> unica card centrale */}
            <div className="flex justify-center w-full">
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

                            {/* 🧾 INFORMAZIONI BASE */}
                            <h2 className="text-2xl font-serif font-bold text-emerald-700 mb-1">{membro.nome}</h2>
                            <p className="text-gray-600 mb-4">{membro.ruolo}</p>

                            {/* 🔘 BOTTONE APRI/CHIUDI CV */}
                            <button
                                onClick={() => toggleCV(index)}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full shadow transition"
                            >
                                {isOpen ? t("hero.btnChiudi") : t("hero.btnApri")}
                            </button>

                            {/* 📜 SEZIONE CV ESPANDIBILE */}
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
                                        {/* 📋 LISTA ESPERIENZE */}
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
                                            <span>{t("hero.btnChiudi")}</span>
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
