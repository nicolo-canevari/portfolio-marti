// 📞 --------------------------- CONTACTS COMPONENT ---------------------------
// Questo componente mostra tutte le informazioni di contatto dell’Ambulatorio
// Veterinario Canevari: indirizzo, numeri di telefono, orari e link ai social.
// Strutturato con Tailwind CSS per un layout responsive e leggibile.
// ---------------------------------------------------------------------------

import React from "react";
import { Phone, Smartphone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
// 🔹 Icone importate da lucide-react per rappresentare visivamente i contatti e i social

// --------------------------- COMPONENTE PRINCIPALE ---------------------------
export default function Contacts() {
    return (
        // 🔸 Sezione principale dedicata ai contatti
        <section id="contatti" className="bg-emerald-50 py-20">

            {/* 🔹 Contenitore centrale con padding e larghezza massima */}
            <div className="max-w-6xl mx-auto px-6 md:px-10 text-gray-800">

                {/* --------------------------- TITOLO DELLA SEZIONE --------------------------- */}
                <h2 className="text-4xl font-serif font-bold text-emerald-800 mb-12 text-center">
                    Contatti <span className="text-emerald-500">OftalZoo</span>
                </h2>

                {/* --------------------------- CONTENUTO PRINCIPALE --------------------------- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">

                    {/* ===================================================================== */}
                    {/* 🔹 SEZIONE INFORMAZIONI: indirizzo, telefono, orari di apertura */}
                    {/* ===================================================================== */}
                    <div className="md:w-2/3 space-y-6">

                        {/* 🏥 Nome ambulatorio e indirizzo */}
                        <div>
                            <h3 className="text-2xl font-semibold text-emerald-700 mb-2">
                                Ambulatorio Veterinario Canevari
                            </h3>
                            <p className="flex items-center gap-2 text-lg">
                                <MapPin className="text-emerald-600" size={22} />
                                <span>Via C. Cattaneo, 2, 27015 Landriano (PV)</span>
                            </p>
                        </div>

                        {/* ☎️ Telefono fisso */}
                        <div className="flex items-center gap-2 text-lg">
                            <Phone className="text-emerald-600" size={22} />
                            <span>Telefono: 0382 65022</span>
                        </div>

                        {/* 📱 Cellulare professionale */}
                        <div className="flex items-center gap-2 text-lg">
                            <Smartphone className="text-emerald-600" size={22} />
                            <span>Cellulare: +39 366 537 0259</span>
                        </div>

                        {/* 🕓 Orari di apertura */}
                        <div className="mt-8">
                            <h4 className="text-xl font-semibold text-emerald-700 mb-3 flex items-center gap-2">
                                <Clock className="text-emerald-600" size={22} />
                                Orari di Apertura
                            </h4>

                            {/* 📅 Lista orari settimanali */}
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-gray-700">
                                <li><strong>Lunedì:</strong> 10–12:30, 15:30–19</li>
                                <li><strong>Martedì:</strong> 10–12:30, 15:30–19</li>
                                <li><strong>Mercoledì:</strong> 10–12:30, 15:30–19</li>
                                <li><strong>Giovedì:</strong> 10–12:30, 15:30–19</li>
                                <li><strong>Venerdì:</strong> 10–12:30, 15:30–19</li>
                                <li><strong>Sabato:</strong> 10–12:30</li>
                                <li><strong>Domenica:</strong> Chiuso</li>
                            </ul>
                        </div>
                    </div>

                    {/* ===================================================================== */}
                    {/* 🔹 SEZIONE SOCIAL: collegamenti ai profili Facebook e Instagram */}
                    {/* ===================================================================== */}
                    <div className="md:w-1/3 flex flex-col items-center justify-center space-y-6">

                        {/* 📢 Titolo sottosezione social */}
                        <h4 className="text-xl font-semibold text-emerald-700 mb-2">
                            Seguici sui social
                        </h4>

                        {/* 🔗 Icone social (aggiungi i link reali ai profili ufficiali) */}
                        <div className="flex gap-6">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-emerald-100 hover:bg-emerald-200 rounded-full transition-all"
                            >
                                <Facebook className="text-emerald-700" size={26} />
                            </a>

                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-emerald-100 hover:bg-emerald-200 rounded-full transition-all"
                            >
                                <Instagram className="text-emerald-700" size={26} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* ===================================================================== */}
                {/* 🔹 COPYRIGHT FINALE */}
                {/* ===================================================================== */}
                <div className="mt-16 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Ambulatorio Veterinario Canevari · Tutti i diritti riservati
                </div>
            </div>
        </section>
    );
}
