// 🌍 --------------------------- I18N CONFIG ---------------------------
// File di configurazione principale per il sistema di traduzioni del sito.
// Utilizza la libreria i18next insieme a react-i18next per gestire
// le lingue e i file JSON contenenti i testi tradotti.
// ---------------------------------------------------------------------

import i18n from "i18next";                   // 🔹 Core di i18next
import { initReactI18next } from "react-i18next"; // 🔹 Integrazione con React

// 🗂️ Importa i file di traduzione (in formato JSON)
import translationIT from "./locales/it.json"; // 🇮🇹 Italiano
import translationEN from "./locales/en.json"; // 🇬🇧 Inglese

// 🧩 Risorse disponibili — ogni lingua è mappata con la sua traduzione
const resources = {
    it: { translation: translationIT },
    en: { translation: translationEN },
};

// ⚙️ Inizializzazione di i18next
i18n
    .use(initReactI18next) // 🔌 Collega i18next a React
    .init({
        resources,          // 🌐 Oggetto con tutte le traduzioni caricate
        lng: "it",          // 🇮🇹 Lingua di default all'avvio
        fallbackLng: "it",  // 🔁 Lingua di riserva se una chiave manca
        interpolation: {
            escapeValue: false, // 🚫 Disabilita l'escape per evitare problemi con JSX
        },
    });

// 🚀 Esporta la configurazione pronta all’uso
export default i18n;
