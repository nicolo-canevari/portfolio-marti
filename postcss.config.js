// ============================================================================
// 🎨 PostCSS Configuration
// ============================================================================
// Questo file definisce i plugin PostCSS utilizzati nel progetto.
// PostCSS elabora i file CSS (incluso Tailwind) prima della build finale,
// aggiungendo compatibilità e ottimizzazioni automatiche.
// ============================================================================

export default {
    plugins: {
        // 🪶 Tailwind CSS
        // Integra Tailwind all'interno del flusso PostCSS, 
        // permettendo di usare le utility class e la configurazione del tema.
        "@tailwindcss/postcss": {},

        // 🌍 Autoprefixer
        // Aggiunge automaticamente i prefissi vendor (-webkit-, -moz-, ecc.)
        // per garantire la compatibilità cross-browser del CSS.
        autoprefixer: {},
    },
};
