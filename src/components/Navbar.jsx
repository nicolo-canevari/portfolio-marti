// Importo i vari hook e icone da React e React Icons
import { useEffect, useState } from "react";
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo-vecchio.png"; // logo statico nella cartella assets

// --------------------------- COMPONENTE NAVBAR ---------------------------
export default function Navbar() {
    // Stato per sapere quale sezione è attiva (per evidenziare nel menu)
    const [activeSection, setActiveSection] = useState("home");

    // Stato per aprire/chiudere il menu mobile
    const [menuOpen, setMenuOpen] = useState(false);

    // --------------------------- SCROLL TRACKER ---------------------------
    useEffect(() => {
        const handleScroll = () => {
            // Elenco ID delle sezioni presenti nella pagina
            const sections = ["home", "servizi", "galleria", "contatti"];
            let current = "home"; // default

            // Controllo in quale sezione si trova lo scroll
            sections.forEach((section) => {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop - 150; // distanza dall’alto
                    const height = el.offsetHeight;

                    // Se il punto di scroll è dentro la sezione → aggiorna "current"
                    if (window.scrollY >= top && window.scrollY < top + height) {
                        current = section;
                    }
                }
            });

            // Aggiorno lo stato della sezione attiva
            setActiveSection(current);
        };

        // Aggiungo l’event listener allo scroll
        window.addEventListener("scroll", handleScroll);

        // Lo rimuovo quando il componente viene smontato
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // --------------------------- LINK DI NAVIGAZIONE ---------------------------
    const links = [
        { id: "home", label: "Home" },
        { id: "servizi", label: "Servizi" },
        { id: "galleria", label: "Galleria" },
        { id: "contatti", label: "Contatti" },
    ];

    // --------------------------- CONTATTI E LINK SOCIAL ---------------------------
    const whatsappNumber = "393665370259";
    const email = "martino.canevari7@gmail.com";
    const linkedinUrl = "https://www.linkedin.com/in/martino-canevari-04b626153/";

    // Messaggio automatico di WhatsApp
    const message = encodeURIComponent("Buongiorno Dottore, vorrei prenotare una visita 🐾");

    // Riconosce se è un dispositivo mobile o desktop (per usare la versione giusta di WhatsApp)
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // URL corretto per aprire WhatsApp
    const whatsappUrl = isMobile
        ? `https://wa.me/${whatsappNumber}?text=${message}` // per smartphone
        : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`; // per desktop

    // --------------------------- STRUTTURA VISIVA DELLA NAVBAR ---------------------------
    return (
        // Navbar fissa in alto, con sfondo bianco semi-trasparente
        <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
            {/* Contenitore principale con layout orizzontale */}
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-10">

                {/* ------------------- LOGO + NOME ------------------- */}
                <div className="flex items-center space-x-3">
                    {/* Immagine del logo */}
                    <img src={logo} alt="OftalZoo Logo" className="h-10 w-auto object-contain" />
                    {/* Nome del brand con stile elegante */}
                    <span className="text-xl md:text-2xl font-serif font-bold text-emerald-800 tracking-wide">
                        Oftal<span className="text-emerald-500">Zoo</span>
                    </span>
                </div>

                {/* ------------------- MENU DESKTOP ------------------- */}
                <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
                    {links.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`} // link ancora alla sezione
                                className={`transition-colors duration-300 ${
                                    // se la sezione è attiva → evidenziala
                                    activeSection === link.id
                                        ? "text-emerald-700 font-semibold border-b-2 border-emerald-700 pb-1"
                                        : "hover:text-emerald-600"
                                    }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* ------------------- ICONE SOCIAL (solo desktop) ------------------- */}
                <div className="hidden md:flex items-center space-x-5 text-xl text-emerald-800">
                    {/* WhatsApp */}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-600 transition-colors"
                        aria-label="Contatta su WhatsApp"
                    >
                        <FaWhatsapp />
                    </a>

                    {/* Email */}
                    <a
                        href={`mailto:${email}`}
                        className="hover:text-emerald-600 transition-colors"
                        aria-label="Invia una email"
                    >
                        <FaEnvelope />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-600 transition-colors"
                        aria-label="Profilo LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>

                {/* ------------------- ICONA HAMBURGER (solo mobile) ------------------- */}
                <button
                    className="md:hidden text-2xl text-emerald-800 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)} // apre/chiude menu mobile
                >
                    {/* Se il menu è aperto → X, altrimenti icona hamburger */}
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* ------------------- MENU MOBILE ------------------- */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md border-t border-gray-200 animate-slide-down">
                    {/* Link di navigazione (impilati verticalmente) */}
                    <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
                        {links.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    onClick={() => setMenuOpen(false)} // chiudi menu al click
                                    className={`block text-lg transition-colors duration-300 ${activeSection === link.id
                                        ? "text-emerald-700 font-semibold"
                                        : "hover:text-emerald-600"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Sezione inferiore con icone contatti */}
                    <div className="flex justify-center space-x-6 py-3 text-2xl text-emerald-800 border-t border-gray-200">
                        {/* WhatsApp */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-emerald-600"
                        >
                            <FaWhatsapp />
                        </a>
                        {/* Email */}
                        <a href={`mailto:${email}`} className="hover:text-emerald-600">
                            <FaEnvelope />
                        </a>
                        {/* LinkedIn */}
                        <a
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-emerald-600"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
