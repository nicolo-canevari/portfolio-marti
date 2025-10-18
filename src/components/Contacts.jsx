// 📞 --------------------------- CONTACTS COMPONENT ---------------------------
// Mostra i riferimenti e contatti dell’Ambulatorio Canevari e dell’Ospedale San Francesco.
// Tutti i numeri e indirizzi sono cliccabili (telefono o Google Maps).
// ---------------------------------------------------------------------------

import React from "react";
import { Phone, Smartphone, MapPin } from "lucide-react";

export default function Contacts() {
    return (
        <section id="contatti" className="bg-emerald-50 py-20">
            <div className="max-w-5xl mx-auto px-6 md:px-10 text-gray-800">
                {/* --------------------------- TITOLO --------------------------- */}
                <h2 className="text-4xl font-serif font-bold text-emerald-800 mb-12 text-center">
                    Contatti <span className="text-emerald-500">OftalZoo</span>
                </h2>

                {/* --------------------------- SEZIONE CONTATTI --------------------------- */}
                <div className="flex flex-col md:flex-row justify-between gap-12">

                    {/* 🔹 Ambulatorio Veterinario Canevari */}
                    <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 md:w-1/2">
                        <h3 className="text-2xl font-semibold text-emerald-700 mb-4">
                            Ambulatorio Veterinario Canevari
                        </h3>

                        {/* 📍 Indirizzo cliccabile */}
                        <p className="flex items-center gap-2 text-lg mb-3">
                            <MapPin className="text-emerald-600" size={22} />
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=Via+Cattaneo+2,+27015+Landriano+PV"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Via C. Cattaneo, 2, 27015 Landriano (PV)
                            </a>
                        </p>

                        {/* ☎️ Telefono fisso cliccabile */}
                        <p className="flex items-center gap-2 text-lg mb-2">
                            <Phone className="text-emerald-600" size={22} />
                            <a href="tel:038265022" className="hover:underline">
                                0382 65022
                            </a>
                        </p>

                        {/* 📱 Cellulare professionale cliccabile */}
                        <p className="flex items-center gap-2 text-lg">
                            <Smartphone className="text-emerald-600" size={22} />
                            <a href="tel:+393665370259" className="hover:underline">
                                +39 366 537 0259
                            </a>
                        </p>
                    </div>

                    {/* 🔹 Ospedale Veterinario San Francesco */}
                    <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 md:w-1/2">
                        <h3 className="text-2xl font-semibold text-emerald-700 mb-4">
                            Ospedale Veterinario San Francesco
                        </h3>

                        {/* 📍 Indirizzo cliccabile */}
                        <p className="flex items-center gap-2 text-lg mb-3">
                            <MapPin className="text-emerald-600" size={22} />
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=Via+Isaac+Newton+2,+20148+Milano+MI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Via Isaac Newton, 2, 20148 Milano (MI)
                            </a>
                        </p>

                        {/* ☎️ Telefono fisso cliccabile */}
                        <p className="flex items-center gap-2 text-lg">
                            <Phone className="text-emerald-600" size={22} />
                            <a href="tel:0299725053" className="hover:underline">
                                02 9972 5053
                            </a>
                        </p>
                    </div>
                </div>

                {/* --------------------------- COPYRIGHT --------------------------- */}
                <div className="mt-16 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Ambulatorio Veterinario Canevari · Tutti i diritti riservati
                </div>
            </div>
        </section>
    );
}
