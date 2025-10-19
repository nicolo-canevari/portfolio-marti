// ============================================================================
// 🌐 ENTRY POINT PRINCIPALE DELL'APPLICAZIONE REACT
// ============================================================================

// 🔹 Import di React e del metodo ReactDOM per montare il componente principale
import React from "react";
import ReactDOM from "react-dom/client";

// 🔹 Import del componente principale dell’app
import App from "./App.jsx";

// 🔹 Import di i18n per le traduzioni
import "./i18n.js";

// ============================================================================
// 🧩 STILI E LIBRERIE GLOBALI
// ============================================================================

// ✅ Bootstrap JS (per far funzionare componenti come modali, dropdown, ecc.)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ✅ Foglio di stile principale personalizzato
import "./index-v2.css";

// ============================================================================
// 🚀 MONTAGGIO DELL'APPLICAZIONE
// ============================================================================
// React crea la "root" dentro al div con id="root" definito in index.html.
// Tutta la Single Page Application (SPA) viene gestita qui.
ReactDOM.createRoot(document.getElementById("root")).render(
  // 🔒 StrictMode aiuta a individuare potenziali problemi in fase di sviluppo.
  <React.StrictMode>
    {/* 🧱 App è il componente principale dell’applicazione */}
    <App />
  </React.StrictMode>
);

// ============================================================================
// 🧾 NOTE:
// - Questo file è il punto d’ingresso della tua app React.
// - Qui puoi aggiungere wrapper globali come Router, Redux Provider, ecc.
// ============================================================================
