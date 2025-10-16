// 🟢 --------------------------- IMPORTAZIONI ---------------------------
import React from "react";
import { motion } from "framer-motion";
import {
    Eye,
    Scissors,
    Droplet,
    Activity,
    Syringe,
    PawPrint
} from "lucide-react";

// 🟩 --------------------------- COMPONENTE SERVICES ---------------------------
export default function Services() {
    // 🔹 Lista aggiornata dei servizi
    const services = [
        {
            titolo: "Chirurgia Palpebrale",
            descrizione: [
                "Entropion/Ectropion – di routine e complesso",
                "Chirurgia della terza palpebra, compreso il “cherry eye”",
                "Disordini ciliari (criochirurgia, termocauterio, laser diodi)",
                "Chirurgia per neoformazioni palpebrali",
            ],
            icona: <Scissors className="w-14 h-14 text-emerald-600 mx-auto" />,
        },
        {
            titolo: "Chirurgia Corneale",
            descrizione: [
                "Cross-linking corneale (PACK-CXL)",
                "Trasposizione corneo-congiuntivale, flap congiuntivali, Biosis®…",
                "Innesti/Trapianti corneali",
            ],
            icona: <Eye className="w-14 h-14 text-emerald-600 mx-auto" />,
        },
        {
            titolo: "Occhio Secco",
            descrizione: [
                "Gestione con impianti di ciclosporina A supracoroidei",
            ],
            icona: <Droplet className="w-14 h-14 text-emerald-600 mx-auto" />,
        },
        {
            titolo: "Glaucoma",
            descrizione: [
                "Terapia con laser a diodi (810nm)",
                "Gonioshunt con valvola Ahmed",
            ],
            icona: <Activity className="w-14 h-14 text-emerald-600 mx-auto" />,
        },
        {
            titolo: "Chirurgia Intraoculare",
            descrizione: [
                "Gestione dei tumori intraoculari",
                "Prelievo di umor acqueo e vitreo",
                "Lussazione del cristallino",
            ],
            icona: <Syringe className="w-14 h-14 text-emerald-600 mx-auto" />,
        },
        {
            titolo: "Oftalmologia Equina",
            descrizione: [
                "Visite oftalmologiche per cavalli su appuntamento",
            ],
            icona: <PawPrint className="w-14 h-14 text-emerald-600 mx-auto" />,
        },
    ];

    // 🟩 --------------------------- RENDER DEL COMPONENTE ---------------------------
    return (
        <section id="servizi" className="bg-emerald-100 py-20">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                {/* --------------------------- TITOLO SEZIONE --------------------------- */}
                <h2 className="text-4xl font-serif font-bold text-emerald-800 mb-12 text-center">
                    Servizi <span className="text-emerald-500">Offerti</span>
                </h2>

                {/* --------------------------- GRIGLIA SERVIZI --------------------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((servizio, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* 🔹 Icona animata */}
                            <motion.div
                                className="mb-4"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                {servizio.icona}
                            </motion.div>

                            {/* 🔹 Titolo */}
                            <h3 className="text-2xl font-semibold text-emerald-700 mb-4">
                                {servizio.titolo}
                            </h3>

                            {/* 🔹 Descrizione con lista ordinata */}
                            <ul className="list-disc list-inside text-gray-700 leading-relaxed text-left space-y-2">
                                {servizio.descrizione.map((item, i) => (
                                    <li
                                        key={i}
                                        className="pl-1"
                                        style={{
                                            textIndent: "-0.7em",
                                            paddingLeft: "1.2em",
                                        }}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
