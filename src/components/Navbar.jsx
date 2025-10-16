// 🧭 --------------------------- NAVBAR COMPONENT ---------------------------
// Questo componente gestisce la barra di navigazione principale del sito.
// Include:
// - Logo e nome del brand
// - Menu di navigazione (desktop + mobile)
// - Collegamenti ai contatti (WhatsApp, email, LinkedIn)
// - Evidenziazione automatica della sezione attiva durante lo scroll
// ---------------------------------------------------------------------------

// 📦 Importo hook React e le icone necessarie
import { useEffect, useState } from "react";
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo-vecchio.png";

// --------------------------- COMPONENTE PRINCIPALE ---------------------------
export default function Navbar() {

    // 🧩 Stato per tracciare la sezione attiva (serve per evidenziare il link nel menu)
    const [activeSection, setActiveSection] = useState("home");

    // 📱 Stato per aprire/chiudere il menu su dispositivi mobili
    const [menuOpen, setMenuOpen] = useState(false);

    // --------------------------- SCROLL TRACKER ---------------------------
    // Rileva in quale sezione si trova l’utente durante lo scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "servizi", "galleria", "contatti"];
            let current = "home";

            // Controllo la posizione dello scroll rispetto alle sezioni
            sections.forEach((section) => {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop - 150; // distanza per triggerare l'attivazione
                    const height = el.offsetHeight;

                    if (window.scrollY >= top && window.scrollY < top + height) {
                        current = section;
                    }
                }
            });

            // Aggiorno la sezione attiva
            setActiveSection(current);
        };

        // Aggiungo e rimuovo l’evento scroll
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // --------------------------- LINK DI NAVIGAZIONE ---------------------------
    const links = [
        { id: "home", label: "Home" },
        { id: "servizi", label: "Servizi" },
        { id: "galleria", label: "Galleria" },
        { id: "contatti", label: "Contatti" },
    ];

    // --------------------------- DATI DI CONTATTO ---------------------------
    const whatsappNumber = "393665370259";
    const email = "martino.canevari7@gmail.com";
    const linkedinUrl = "https://www.linkedin.com/in/martino-canevari-04b626153/";

    // Messaggio predefinito per WhatsApp
    const message = encodeURIComponent("Buongiorno Dottore, vorrei prenotare una visita 🐾");

    // Rileva se l’utente è su mobile o desktop (per scegliere la versione di WhatsApp corretta)
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // URL di WhatsApp dinamico
    const whatsappUrl = isMobile
        ? `https://wa.me/${whatsappNumber}?text=${message}` // mobile
        : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`; // desktop

    // --------------------------- STRUTTURA VISIVA DELLA NAVBAR ---------------------------
    return (
        // Barra fissa in alto con sfondo semi-trasparente e effetto blur
        <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">

            {/* 🔹 Contenitore principale della navbar */}
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-10">

                {/* 🐾 LOGO + TITOLO */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="OftalZoo Logo" className="h-10 w-auto object-contain" />
                    <span className="text-xl md:text-2xl font-serif font-bold text-emerald-700 tracking-wide">
                        Oftal<span className="text-emerald-500">Zoo</span>
                    </span>
                </div>

                {/* 🖥️ MENU DESKTOP */}
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

                {/* 🌐 ICONE SOCIAL (DESKTOP) */}
                <div className="hidden md:flex items-center space-x-5 text-xl text-emerald-600">
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

                {/* 🍔 ICONA MENU MOBILE (hamburger / chiusura) */}
                <button
                    className="md:hidden text-2xl text-emerald-700 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* 📱 MENU MOBILE ESPANDIBILE */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md border-t border-gray-200 animate-slide-down">
                    {/* 🔹 Link principali */}
                    <ul className="flex flex-col items-center space-y-4 py-4 font-medium text-emerald-600">
                        {links.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    onClick={() => setMenuOpen(false)} // Chiude il menu al click
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

                    {/* 🔹 Icone di contatto anche nel menu mobile */}
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
