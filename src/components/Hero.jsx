// // 🟢 --------------------------- HERO SOLO PER MARTINO ---------------------------
// // Importiamo React e l’immagine principale dell’hero section
// import React from "react";
// import heroImage from "../assets/hero-image.jpg"; // 🔹 Sostituisci con l’immagine reale

// // 🟩 --------------------------- COMPONENTE HERO ---------------------------
// // Questo componente rappresenta l’intestazione principale del sito (“Hero Section”).
// // Mostra il nome, la professione e una panoramica dell’esperienza del Dottor Martino Canevari.
// // Include anche una lista delle principali esperienze professionali e formative.
// // Il layout è responsive grazie a TailwindCSS.
// // ------------------------------------------------------------------------
// export default function Hero() {
//     return (
//         // 🔸 Sezione principale: contiene testo (a sinistra) e immagine (a destra)
//         <section
//             id="home"
//             className="
//                 flex flex-col md:flex-row 
//                 items-center md:items-start justify-between
//                 max-w-7xl mx-auto 
//                 px-6 md:px-10 
//                 pt-20 md:pt-32 pb-16
//             "
//         >

//             {/* ===================================================================== */}
//             {/* 🟢 BLOCCO TESTO - Parte sinistra con titolo, descrizione e formazione */}
//             {/* ===================================================================== */}
//             <div className="md:w-1/2 text-center md:text-left space-y-6 md:mt-0 mt-6">

//                 {/* --------------------------- TITOLO PRINCIPALE --------------------------- */}
//                 <div className="md:mt-0">
//                     <h1 className="text-5xl md:text-6xl font-bold text-emerald-700 font-serif leading-tight">
//                         Dottor. Martino <span className="text-emerald-500">Canevari</span>
//                     </h1>
//                     <h2 className="text-xl md:text-2xl text-gray-600 mt-3 font-light">
//                         Medico Veterinario - Specialista in Oftalmologia
//                     </h2>
//                 </div>

//                 {/* --------------------------- PARAGRAFO INTRODUTTIVO --------------------------- */}
//                 <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
//                     Veterinario con esperienza internazionale in oftalmologia e chirurgia animale.
//                     Appassionato di diagnostica, microchirurgia e benessere animale, con esperienze
//                     in diversi centri di eccellenza in Italia e all’estero.
//                 </p>

//                 {/* ===================================================================== */}
//                 {/* 🎓 BLOCCO ESPERIENZE PROFESSIONALI E FORMAZIONE */}
//                 {/* ===================================================================== */}
//                 <div className="mt-8 bg-emerald-50 rounded-xl p-6 shadow-sm border border-emerald-100">

//                     {/* 🔹 Titolo sottosezione */}
//                     <h3 className="text-2xl font-semibold text-emerald-700 mb-4">
//                         Esperienze Professionali e Formazione
//                     </h3>

//                     {/* 🔹 Lista puntata esperienze */}
//                     <ul className="list-disc list-inside text-gray-800 space-y-3 text-left">

//                         {/* 🏥 Ospedale San Francesco */}
//                         <li>
//                             🏥 <span className="font-medium">Veterinary Ophthalmologist</span> –
//                             <span className="italic"> Ospedale Veterinario San Francesco, Milano</span><br />
//                             <span className="text-gray-600 text-sm">
//                                 set 2025 - Presente · 2 mesi · In sede
//                             </span>
//                         </li>

//                         {/* 🏇 Oftalzoo Freelance */}
//                         <li>
//                             🏇 <span className="font-medium">Equine Ophthalmologist</span> –
//                             <span className="italic"> Oftalzoo · Freelance</span><br />
//                             <span className="text-gray-600 text-sm">
//                                 giu 2025 - Presente · 5 mesi
//                             </span>
//                         </li>

//                         {/* 🏥 Ambulatorio Canevari */}
//                         <li>
//                             🏥 <span className="font-medium">Veterinary Ophthalmologist</span> –
//                             <span className="italic"> Ambulatorio Veterinario Canevari, Landriano (Lombardia)</span><br />
//                             <span className="text-gray-600 text-sm">
//                                 set 2023 - Presente · 2 anni 2 mesi · In sede
//                             </span>
//                         </li>

//                         {/* 🐶 Internship AniCura Bologna */}
//                         <li>
//                             🐶 <span className="font-medium">Small Animal Rotating Internship</span> –
//                             <span className="italic"> AniCura - Clinica Veterinaria dell'Orologio, Bologna</span><br />
//                             <span className="text-gray-600 text-sm">
//                                 apr 2024 - apr 2025 · 1 anno 1 mese · In sede
//                             </span>
//                         </li>

//                         {/* 🎓 Externship AniCura Milano */}
//                         <li>
//                             🎓 <span className="font-medium">Extracurricular Externship</span> –
//                             <span className="italic"> AniCura Milano Tibaldi</span><br />
//                             <span className="text-gray-600 text-sm">
//                                 ott 2023 - gen 2024 · 4 mesi · Milano
//                             </span>
//                         </li>

//                         {/* 🎓 Externship Barcellona */}
//                         <li>
//                             🎓 <span className="font-medium">Extracurricular Externship</span> –
//                             <span className="italic"> Universitat Autònoma de Barcelona</span><br />
//                             <span className="text-gray-600 text-sm">
//                                 lug 2023 - ago 2023 · 2 mesi · Catalogna, Spagna
//                             </span>
//                         </li>

//                         {/* 🏥 Externship Madrid */}
//                         <li>
//                             🏥 <span className="font-medium">Veterinary Ophthalmology Externship</span> –
//                             <span className="italic"> Hospital Veterinario Puchol, Madrid</span><br />
//                             <span className="text-gray-600 text-sm">
//                                 ott 2022 - apr 2023 · 7 mesi · In sede
//                             </span>
//                             <p className="text-gray-600 text-sm mt-1">
//                                 Attività: assistenza in consultazioni, diagnosi, preparazione dei pazienti, supporto in chirurgia, Journal Club.
//                             </p>
//                         </li>
//                     </ul>
//                 </div>
//             </div>

//             {/* ===================================================================== */}
//             {/* 🖼️ BLOCCO IMMAGINE - Parte destra con foto del dottore */}
//             {/* ===================================================================== */}
//             <div className="md:w-1/2 flex justify-center md:justify-end md:items-start">
//                 <img
//                     src={heroImage}
//                     alt="Dott. Martino Canevari - Oftalmologo Veterinario"
//                     className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg object-cover md:mt-0 mt-10"
//                 />
//             </div>
//         </section>
//     );
// }

// 🟢 --------------------------- IMPORTAZIONI ---------------------------
import React from "react";

// 🟩 --------------------------- COMPONENTE HERO ---------------------------
export default function Hero() {
    return (
        <section
            id="home"
            className="
                flex flex-col 
                items-center justify-center
                max-w-7xl mx-auto 
                px-6 md:px-10 
                pt-24 md:pt-32 pb-20
            "
        >
            {/* ===================================================================== */}
            {/* 🟢 INTRODUZIONE DEL TEAM */}
            {/* ===================================================================== */}
            <div className="text-center max-w-3xl mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-emerald-700 mb-4">
                    Il nostro team di oftalmologia veterinaria
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Un team di medici veterinari specializzati in oftalmologia, uniti da esperienza clinica,
                    formazione internazionale e una profonda passione per la salute oculare degli animali.
                </p>
            </div>

            {/* ===================================================================== */}
            {/* 🟢 BLOCCO DOPPIO - MARTINO / SIMONA */}
            {/* ===================================================================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

                {/* ===================================================================== */}
                {/* 🔹 COLONNA SINISTRA - DOTT. MARTINO CANEVARI */}
                {/* ===================================================================== */}
                <div className="bg-emerald-50 rounded-2xl p-8 shadow-sm border border-emerald-100">
                    <h2 className="text-3xl font-serif font-bold text-emerald-700 mb-2">
                        Dott. Martino <span className="text-emerald-500">Canevari</span>
                    </h2>
                    <h3 className="text-lg text-gray-600 mb-6">
                        Medico Veterinario
                    </h3>

                    <ul className="space-y-4 text-gray-800">
                        <li className="flex gap-2 items-start">
                            <span className="text-lg">🏥</span>
                            <span>
                                <strong>Veterinary Ophthalmologist</strong> – Ospedale Veterinario San Francesco, Milano
                                <br /><span className="text-gray-600 text-sm">set 2025 - Presente</span>
                            </span>
                        </li>

                        <li className="flex gap-2 items-start">
                            <span className="text-lg">🏇</span>
                            <span>
                                <strong>Equine Ophthalmologist</strong> – Oftalzoo · Freelance
                                <br /><span className="text-gray-600 text-sm">giu 2025 - Presente</span>
                            </span>
                        </li>

                        <li className="flex gap-2 items-start">
                            <span className="text-lg">🏥</span>
                            <span>
                                <strong>Veterinary Ophthalmologist</strong> – Ambulatorio Veterinario Canevari, Landriano
                                <br /><span className="text-gray-600 text-sm">set 2023 - Presente</span>
                            </span>
                        </li>

                        <li className="flex gap-2 items-start">
                            <span className="text-lg">🐶</span>
                            <span>
                                <strong>Small Animal Rotating Internship</strong> – AniCura, Bologna
                                <br /><span className="text-gray-600 text-sm">apr 2024 - apr 2025</span>
                            </span>
                        </li>

                        <li className="flex gap-2 items-start">
                            <span className="text-lg">🎓</span>
                            <span>
                                <strong>Externship</strong> – AniCura Milano Tibaldi
                                <br /><span className="text-gray-600 text-sm">ott 2023 - gen 2024</span>
                            </span>
                        </li>

                        <li className="flex gap-2 items-start">
                            <span className="text-lg">🎓</span>
                            <span>
                                <strong>Curso en Oftalmologia Veterinaria</strong> – Universitat Autònoma de Barcelona
                                <br /><span className="text-gray-600 text-sm">gen 2024 - dic 2025</span>
                            </span>
                        </li>

                        <li className="flex gap-2 items-start">
                            <span className="text-lg">🎓</span>
                            <span>
                                <strong>Externship</strong> – Universitat Autònoma de Barcelona
                                <br /><span className="text-gray-600 text-sm">lug 2023 - ago 2023</span>
                            </span>
                        </li>

                        <li className="flex gap-2 items-start">
                            <span className="text-lg">🎓</span>
                            <span>
                                <strong>Externship</strong> – Hospital Veterinario Puchol, Madrid
                                <br /><span className="text-gray-600 text-sm">ott 2022 - apr 2023</span>
                            </span>
                        </li>
                    </ul>
                </div>

                {/* ===================================================================== */}
                {/* 🔹 COLONNA DESTRA - DOTT.SSA SIMONA DESTEFANIS */}
                {/* ===================================================================== */}
                <div className="bg-emerald-50 rounded-2xl p-8 shadow-sm border border-emerald-100">
                    <h2 className="text-3xl font-serif font-bold text-emerald-700 mb-2">
                        Dott.ssa Simona <span className="text-emerald-500">Destefanis</span>
                    </h2>
                    <h3 className="text-lg text-gray-600 mb-6">
                        Medico Veterinario
                    </h3>

                    <ul className="space-y-3">
                        {[
                            { icon: "🎤", text: "Relatrice in congressi, seminari e corsi nazionali; socia della Società Oftalmologia Veterinaria Italiana (SOVI)." },
                            { icon: "📘", text: <><strong>2009–2011:</strong> Corsi SOVI–FSA per la prevenzione delle malattie oculari ereditarie e corso avanzato “Retinal Disease” (Cremona).</> },
                            { icon: "👁️", text: <><strong>2007:</strong> Socia fondatrice dell’Associazione Nazionale Veterinari Oftalmologi (ANVO); membro del Comitato Scientifico dal 2013.</> },
                            { icon: "⚡", text: <><strong>2006:</strong> Corso Avanzato di Elettroretinografia Oculare (SOVI).</> },
                            { icon: "⚡", text: <><strong>2002–2004:</strong> Formazione in Elettrofisiologia oculare (Lione e Alfort) e corsi internazionali presso la North Carolina State University (USA).</> },
                            { icon: "💉", text: <><strong>2000–2002:</strong> Corsi di Facoemulsificazione Alcon (Milano) e stage presso il Dipartimento di Oftalmologia di Parigi.</> },
                            { icon: "🇫🇷", text: <><strong>1999–2000:</strong> Diploma in Oftalmologia presso l’École Nationale Vétérinaire d’Alfort de Paris<br /><span className='text-gray-600 text-sm'>(Prof. B. Clerc – Diplomato ECVO)</span></> },
                            { icon: "🎓", text: "Laureata in Medicina Veterinaria presso l’Università degli Studi di Milano (1998)." },
                        ].map((item, i) => (
                            <li key={i} className="flex items-start">
                                <span className="mr-3 text-xl leading-6">{item.icon}</span>
                                <span className="text-gray-800 leading-relaxed">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
