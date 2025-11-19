// 📞 --------------------------- CONTACTS COMPONENT ---------------------------
// Sezione dedicata ai contatti ufficiali di OftalZoo 🐾
// Contiene le informazioni dell’Ambulatorio Veterinario Canevari,
// dell’Ospedale Veterinario San Francesco,
// del CDC Vet Codogno
// e del Pronto Soccorso Veterinario Laudense.
// ---------------------------------------------------------------------------

import React from "react";
import { Phone, Smartphone, MapPin } from "lucide-react"; // 🔹 Icone eleganti
import { useTranslation } from "react-i18next";            // 🌍 Traduzioni i18next

// --------------------------- COMPONENTE PRINCIPALE ---------------------------
export default function Contacts() {
    const { t } = useTranslation(); // 🌐 Hook per gestire testi multilingua
    // const year = new Date().getFullYear(); // 📆 Anno dinamico per il footer

    return (
        <section id="contatti" className="bg-emerald-50 py-20">
            <div className="max-w-5xl mx-auto px-6 md:px-10 text-gray-800">

                {/* 🏷️ TITOLO SEZIONE */}
                <h2 className="text-4xl font-serif font-bold text-emerald-800 mb-12 text-center">
                    {t("contacts.title")}{" "}
                    <span className="text-emerald-500">{t("contacts.highlight")}</span>
                </h2>

                {/* 🏥 BLOCCO CONTATTI PRINCIPALI */}
                <div className="flex flex-col md:flex-row justify-between gap-12">

                    {/* 🔹 AMBULATORIO VETERINARIO CANEVARI */}
                    <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 md:w-1/3">
                        {/* Nome struttura */}
                        <h3 className="text-2xl font-semibold text-emerald-700 mb-4">
                            {t("contacts.clinic1.name")}
                        </h3>

                        {/* 📍 Indirizzo cliccabile (Google Maps) */}
                        <p className="flex items-center gap-2 text-lg mb-3">
                            <MapPin className="text-emerald-600" size={22} />
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=Via+Cattaneo+2,+27015+Landriano+PV"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {t("contacts.clinic1.address")}
                            </a>
                        </p>

                        {/* ☎️ Telefono fisso */}
                        <p className="flex items-center gap-2 text-lg mb-2">
                            <Phone className="text-emerald-600" size={22} />
                            <a href="tel:038265022" className="hover:underline">
                                {t("contacts.clinic1.phone")}
                            </a>
                        </p>

                        {/* 📱 Numero mobile */}
                        <p className="flex items-center gap-2 text-lg">
                            <Smartphone className="text-emerald-600" size={22} />
                            <a href="tel:+393665370259" className="hover:underline">
                                {t("contacts.clinic1.mobile")}
                            </a>
                        </p>
                    </div>

                    {/* 🔹 OSPEDALE VETERINARIO SAN FRANCESCO */}
                    <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 md:w-1/3">
                        {/* Nome struttura */}
                        <h3 className="text-2xl font-semibold text-emerald-700 mb-4">
                            {t("contacts.clinic2.name")}
                        </h3>

                        {/* 📍 Indirizzo cliccabile (Google Maps) */}
                        <p className="flex items-center gap-2 text-lg mb-3">
                            <MapPin className="text-emerald-600" size={22} />
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=Via+Isaac+Newton+2,+20148+Milano+MI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {t("contacts.clinic2.address")}
                            </a>
                        </p>

                        {/* ☎️ Numero di telefono */}
                        <p className="flex items-center gap-2 text-lg">
                            <Phone className="text-emerald-600" size={22} />
                            <a href="tel:0299725053" className="hover:underline">
                                {t("contacts.clinic2.phone")}
                            </a>
                        </p>
                    </div>

                    {/* 🔹 CDC VET - Sede di Codogno */}
                    <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 md:w-1/3">
                        {/* Nome struttura */}
                        <h3 className="text-2xl font-semibold text-emerald-700 mb-4">
                            {t("contacts.clinic3.name")}
                        </h3>

                        {/* 📍 Indirizzo cliccabile (Google Maps) */}
                        <p className="flex items-center gap-2 text-lg mb-3">
                            <MapPin className="text-emerald-600" size={22} />
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=Viale+Trieste+24,+26845+Codogno+LO"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {t("contacts.clinic3.address")}
                            </a>
                        </p>

                        {/* ☎️ Numero di telefono */}
                        <p className="flex items-center gap-2 text-lg">
                            <Phone className="text-emerald-600" size={22} />
                            <a href="tel:0377431619" className="hover:underline">
                                {t("contacts.clinic3.phone")}
                            </a>
                        </p>
                    </div>

                    {/* 🔹 PRONTO SOCCORSO VETERINARIO LAUDENSE */}
                    <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6">
                        {/* Nome struttura */}
                        <h3 className="text-2xl font-semibold text-emerald-700 mb-4">
                            {t("contacts.clinic4.name")}
                        </h3>

                        {/* 📍 Indirizzo cliccabile (Google Maps) */}
                        <p className="flex items-center gap-2 text-lg mb-3">
                            <MapPin className="text-emerald-600" size={22} />
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=Viale+Milano+22,+26900+Lodi+LO"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {t("contacts.clinic4.address")}
                            </a>
                        </p>

                        {/* ☎️ Numero di telefono */}
                        <p className="flex items-center gap-2 text-lg">
                            <Phone className="text-emerald-600" size={22} />
                            <a href="tel:0371422408" className="hover:underline">
                                {t("contacts.clinic4.phone")}
                            </a>
                        </p>
                    </div>

                </div>

                {/* 🔸 COPYRIGHT (opzionale, può essere riattivato se necessario) */}
                {/*
                <div className="mt-16 text-center text-gray-500 text-sm">
                    {t("contacts.copyright", { year })}
                </div>
                */}

            </div>
        </section>
    );
}
