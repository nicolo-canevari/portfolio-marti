import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert'; // 👈 importa il plugin

// --------------------------- CONFIGURAZIONE VITE ---------------------------
export default defineConfig({
  plugins: [react(), mkcert()], // 🔹 Aggiunge React e HTTPS locale
  base: '/portfolio-marti/', // 🔹 Nome della repo GitHub (senza "https://...")
  server: {
    https: true, // 🔹 HTTPS per sviluppo locale
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
});