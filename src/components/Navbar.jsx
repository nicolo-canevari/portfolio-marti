// 🧭 --------------------------- NAVBAR COMPONENT ---------------------------
// Barra di navigazione principale del sito.
//
// Include:
// ✅ Logo e nome del brand
// ✅ Menu di navigazione (desktop + mobile)
// ✅ Collegamenti ai contatti (WhatsApp, Email, LinkedIn)
// ✅ Selettore lingua 🇮🇹 🇬🇧
// ✅ Evidenziazione automatica della sezione attiva durante lo scroll
// ---------------------------------------------------------------------------

import { useEffect, useState } from "react";
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo-vecchio.png";
import { useTranslation } from "react-i18next";

// --------------------------- COMPONENTE PRINCIPALE ---------------------------
export default function Navbar() {

    /* 🎯 Sezione attiva (per evidenziare nel menu la sezione corrente) */
    const [activeSection, setActiveSection] = useState("home");

    /* 📱 Stato per aprire o chiudere il menu mobile */
    const [menuOpen, setMenuOpen] = useState(false);

    /* 🌍 Gestione della traduzione */
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => i18n.changeLanguage(lang);

    // -----------------------------------------------------------------------
    // 🧭 TRACKER SCROLL
    // Rileva automaticamente quale sezione della pagina è visibile
    // e aggiorna lo stato “activeSection” per sottolinearla nella navbar
    // -----------------------------------------------------------------------
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "servizi", "galleria", "contatti"];
            let current = "home";

            sections.forEach((section) => {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop - 150;
                    const height = el.offsetHeight;
                    if (window.scrollY >= top && window.scrollY < top + height) {
                        current = section;
                    }
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // -----------------------------------------------------------------------
    // 🔗 LINK DI NAVIGAZIONE
    // Testi tradotti dinamicamente tramite i18next
    // -----------------------------------------------------------------------
    const links = [
        { id: "home", label: t("navbar.home") },
        { id: "servizi", label: t("navbar.services") },
        { id: "galleria", label: t("navbar.gallery") },
        { id: "contatti", label: t("navbar.contacts") },
    ];

    // -----------------------------------------------------------------------
    // ☎️ DATI DI CONTATTO
    // (Gestisce versioni differenti di WhatsApp su desktop e mobile)
    // -----------------------------------------------------------------------
    const whatsappNumber = "393665370259";
    const email = "martino.canevari7@gmail.com";
    const linkedinUrl = "https://www.linkedin.com/in/martino-canevari-04b626153/";
    const message = encodeURIComponent("Buongiorno Dottore, vorrei prenotare una visita 🐾");
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const whatsappUrl = isMobile
        ? `https://wa.me/${whatsappNumber}?text=${message}`
        : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

    // -----------------------------------------------------------------------
    // 🎨 STRUTTURA VISIVA
    // Contiene:
    // - Sezione logo
    // - Menu desktop con link e selettore lingua
    // - Menu mobile con burger menu e icone social
    // -----------------------------------------------------------------------
    return (
        <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">

            {/* 🟢 CONTENITORE PRINCIPALE */}
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-10">

                {/* 🐾 LOGO E BRAND */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="OftalZoo Logo" className="h-10 w-auto object-contain" />

                    {/* Scritta OftalZoo */}
                    {/* <span className="text-xl md:text-2xl font-serif font-bold text-emerald-700 tracking-wide">
                        Oftal<span className="text-emerald-500">Zoo</span>
                    </span> */}

                </div>

                {/* 💻 MENU DESKTOP */}
                <ul className="hidden md:flex space-x-10 font-medium text-emerald-600">
                    {links.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={`transition-all duration-300 pb-1 ${activeSection === link.id
                                    ? "text-emerald-800 font-semibold border-b-2 border-emerald-800"
                                    : "hover:text-emerald-700"
                                    }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* 🌐 SELETTORE LINGUA + SOCIAL (DESKTOP/TABLET) */}
                <div className="hidden md:flex items-center text-xl text-emerald-600 space-x-7">

                    {/* 🇮🇹 🇬🇧 SELETTORE LINGUA */}
                    <div className="flex items-center space-x-4 pr-8 border-r border-gray-300">
                        <button
                            onClick={() => changeLanguage("it")}
                            className={`text-2xl hover:scale-110 transition-transform ${i18n.language === "it" ? "opacity-100" : "opacity-50"
                                }`}
                            title="Italiano"
                        >
                            🇮🇹
                        </button>
                        <button
                            onClick={() => changeLanguage("en")}
                            className={`text-2xl hover:scale-110 transition-transform ${i18n.language === "en" ? "opacity-100" : "opacity-50"
                                }`}
                            title="English"
                        >
                            🇬🇧
                        </button>
                    </div>

                    {/* 🔗 SOCIAL ICONS */}
                    <div className="flex items-center space-x-5">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800">
                            <FaWhatsapp />
                        </a>
                        <a href={`mailto:${email}`} className="hover:text-emerald-800">
                            <FaEnvelope />
                        </a>
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* 🍔 ICONA MENU MOBILE */}
                <button
                    className="md:hidden text-2xl text-emerald-700 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* 📱 MENU MOBILE A COMPARSA */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md border-t border-gray-200 animate-slide-down">

                    {/* 🇮🇹 🇬🇧 — SELETTORE LINGUA MOBILE */}
                    <div className="flex justify-between px-6 py-3 items-center border-b border-gray-100">
                        <div className="flex space-x-4">
                            <button
                                onClick={() => changeLanguage("it")}
                                className={`text-2xl hover:scale-110 transition-transform ${i18n.language === "it" ? "opacity-100" : "opacity-50"
                                    }`}
                                title="Italiano"
                            >
                                🇮🇹
                            </button>
                            <button
                                onClick={() => changeLanguage("en")}
                                className={`text-2xl hover:scale-110 transition-transform ${i18n.language === "en" ? "opacity-100" : "opacity-50"
                                    }`}
                                title="English"
                            >
                                🇬🇧
                            </button>
                        </div>
                    </div>

                    {/* 🔹 LINK DI NAVIGAZIONE MOBILE */}
                    <ul className="flex flex-col items-center space-y-4 py-4 font-medium text-emerald-600">
                        {links.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    onClick={() => setMenuOpen(false)}
                                    className={`block text-lg transition-all duration-300 ${activeSection === link.id
                                        ? "text-emerald-800 font-semibold border-b-2 border-emerald-800"
                                        : "hover:text-emerald-700"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* 🔹 SOCIAL ICONS MOBILE */}
                    <div className="flex justify-center space-x-6 py-3 text-2xl text-emerald-600 border-t border-gray-200">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800">
                            <FaWhatsapp />
                        </a>
                        <a href={`mailto:${email}`} className="hover:text-emerald-800">
                            <FaEnvelope />
                        </a>
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
