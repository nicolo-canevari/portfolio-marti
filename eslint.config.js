// ============================================================================
// 🧩 ESLint Configuration for React + Vite
// ============================================================================
// Questo file imposta le regole di linting per mantenere il codice pulito,
// leggibile e coerente in tutto il progetto React.
// ============================================================================

// 🔹 Importa i pacchetti principali di configurazione ESLint
import js from '@eslint/js'                   // Regole base per JavaScript
import globals from 'globals'                 // Definisce variabili globali (es. window, document)
import reactHooks from 'eslint-plugin-react-hooks' // Regole per i React Hooks (useState, useEffect, ecc.)
import reactRefresh from 'eslint-plugin-react-refresh' // Evita problemi con Fast Refresh di Vite
import { defineConfig, globalIgnores } from 'eslint/config' // Funzioni helper per configurare ESLint

// ============================================================================
// ⚙️ CONFIGURAZIONE PRINCIPALE ESLINT
// ============================================================================
export default defineConfig([
  // --------------------------------------------------------------------------
  // 🧱 IGNORA FILE / CARTELLE
  // --------------------------------------------------------------------------
  globalIgnores(['dist']), // Ignora la cartella di build "dist"

  // --------------------------------------------------------------------------
  // 🧠 APPLICA LE REGOLE AI FILE JS / JSX
  // --------------------------------------------------------------------------
  {
    files: ['**/*.{js,jsx}'], // Applica le regole a tutti i file .js e .jsx

    // ------------------------------------------------------------------------
    // 🧩 ESTENSIONI DI CONFIGURAZIONE
    // ------------------------------------------------------------------------
    extends: [
      js.configs.recommended,                   // Regole consigliate per JavaScript
      reactHooks.configs['recommended-latest'], // Regole aggiornate per l’uso corretto degli Hooks
      reactRefresh.configs.vite,                // Supporto per React Refresh (vite + hot reload)
    ],

    // ------------------------------------------------------------------------
    // 🌍 OPZIONI LINGUAGGIO E AMBIENTE
    // ------------------------------------------------------------------------
    languageOptions: {
      ecmaVersion: 2020, // Supporta la sintassi moderna di JS
      globals: globals.browser, // Riconosce variabili globali del browser
      parserOptions: {
        ecmaVersion: 'latest',   // Usa l’ultima versione ECMAScript
        ecmaFeatures: { jsx: true }, // Abilita la sintassi JSX per React
        sourceType: 'module',    // Abilita l’uso dei moduli ES6 (import/export)
      },
    },

    // ------------------------------------------------------------------------
    // 🧾 REGOLE PERSONALIZZATE
    // ------------------------------------------------------------------------
    rules: {
      // ❌ Segnala variabili non utilizzate, ma ignora quelle scritte in MAIUSCOLO (es. costanti o componenti React)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
