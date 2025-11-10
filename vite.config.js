import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';  // 🔹 Abilita JSX, Fast Refresh e ottimizzazioni React.
import mkcert from 'vite-plugin-mkcert';  // 🔹 Genera certificati SSL locali per HTTPS su localhost.

// --------------------------- CONFIGURAZIONE VITE ---------------------------
export default defineConfig({
  plugins: [react(), mkcert()], // 🔹 Abilita React e HTTPS locale
  base: '/', // 🔹 Base URL per GitHub Pages
  server: {
    https: true,        // Abilita HTTPS in locale
    host: '127.0.0.1',  // Usa l'indirizzo locale
    port: 5173,         // Porta standard Vite
    strictPort: true,   // Errore se la porta è già occupata
  },
});


