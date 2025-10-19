// 🩺 --------------------------- SERVICES COMPONENT ---------------------------
// Mostra i principali servizi offerti da OftalZoo, con animazioni fluide
// e testi completamente traducibili tramite i18next.
// ------------------------------------------------------------------------------

import React from "react";
import { motion } from "framer-motion";
import {
    Eye,
    Droplet,
    Activity,
    Syringe,
    Stethoscope,
} from "lucide-react";
import { Horse } from "phosphor-react";
import { useTranslation } from "react-i18next"; // ✅ Import traduzioni


// 🟢 --------------------------- COMPONENTE PRINCIPALE ---------------------------
export default function Services() {
    const { t } = useTranslation();

    // 🔹 Servizi dinamici letti dal file JSON tramite chiavi i18n
    const services = [
        {
            key: "chirurgia_palpebrale",
            icon: <Stethoscope className="w-14 h-14 text-emerald-600 mx-auto" />,
        },
        {
            key: "chirurgia_corneale",
            icon: <Eye className="w-14 h-14 text-emerald-600 mx-auto" />,
        },
        {
            key: "occhio_secco",
            icon: <Droplet className="w-14 h-14 text-emerald-600 mx-auto" />,
        },
        {
            key: "glaucoma",
            icon: <Activity className="w-14 h-14 text-emerald-600 mx-auto" />,
        },
        {
            key: "chirurgia_intraoculare",
            icon: <Syringe className="w-14 h-14 text-emerald-600 mx-auto" />,
        },
        {
            key: "oftalmologia_equina",
            icon: <Horse className="w-14 h-14 text-emerald-600 mx-auto" />,
        },
    ];

    // 🟢 RENDER
    return (
        <section id="servizi" className="bg-emerald-100 py-20">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                {/* 🏷️ Titolo sezione */}
                <h2 className="text-4xl font-serif font-bold text-emerald-800 mb-12 text-center">
                    {t("services.title")}{" "}
                    <span className="text-emerald-500">{t("services.highlight")}</span>
                </h2>

                {/* 🧱 Griglia servizi */}
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
                                {servizio.icon}
                            </motion.div>

                            {/* 🔹 Titolo servizio */}
                            <h3 className="text-2xl font-semibold text-emerald-700 mb-4">
                                {t(`services.list.${servizio.key}.title`)}
                            </h3>

                            {/* 🔹 Elenco descrizioni (array) */}
                            <ul className="list-disc list-inside text-gray-700 leading-relaxed text-left space-y-2">
                                {t(`services.list.${servizio.key}.items`, { returnObjects: true }).map(
                                    (item, i) => (
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
                                    )
                                )}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
