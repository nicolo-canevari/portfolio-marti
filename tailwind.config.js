/** 
 * ============================================================================ 
 * 🌿 Tailwind CSS Configuration
 * ============================================================================
 * Questo file definisce i percorsi dei file da scansionare per le classi Tailwind,
 * le personalizzazioni del tema (colori, font, spaziature, ecc.)
 * e i plugin opzionali da includere.
 * ============================================================================
 */

/** @type {import('tailwindcss').Config} */
export default {
    // 🔍 Specifica i file in cui Tailwind deve cercare le classi CSS da generare.
    content: [
        "./index.html",                // Include il file HTML principale
        "./src/**/*.{js,ts,jsx,tsx}",  // Include tutti i file JS/TS/React nella cartella src
    ],

    // 🎨 Tema base e personalizzazioni
    theme: {
        extend: {
            // Qui puoi aggiungere colori, font, spacing o animazioni personalizzate.
            // Esempio:
            // colors: {
            //     emerald: {
            //         950: "#033d2c",
            //     },
            // },
        },
    },

    // 🧩 Plugin opzionali (per form, typography, aspect-ratio, ecc.)
    plugins: [
        // Esempio: require('@tailwindcss/forms'),
        // Esempio: require('@tailwindcss/typography'),
    ],
};
