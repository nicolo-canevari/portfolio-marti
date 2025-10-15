// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// 💡 Il problema in breve:

// Il problema era una differenza tra IPv4 e IPv6 nella gestione del loopback (localhost) su Windows.


// 🧠 Cosa succede dietro le quinte:

// Quando apri http://localhost:5173/, Windows deve “risolvere” il nome localhost in un indirizzo IP locale.
// Esistono due indirizzi di loopback possibili:

// Tipo	Indirizzo	Descrizione:
// IPv4	127.0.0.1	vecchio standard, usato dalla maggior parte dei server
// IPv6	::1	nuovo standard, usato da Windows e Firefox per default

// ➡️ Nel tuo caso:

// Windows + Firefox cercavano di collegarsi a ::1 (IPv6)
// ma Vite (e Node.js) ascoltavano solo su 127.0.0.1 (IPv4)

// Risultato:
// il server esisteva e funzionava, ma su un indirizzo diverso
// quindi i browser tentavano di collegarsi al “posto sbagliato” → pagina non raggiungibile

// Quando hai aggiunto nel file vite.config.js:
// Hai forzato Vite a usare IPv4 invece di lasciare che scegliesse automaticamente.
// Da quel momento, browser e server hanno iniziato a “parlarsi” sullo stesso indirizzo (127.0.0.1) → tutto funziona ✅
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '127.0.0.1',
//     port: 5173,
//     strictPort: true,
//   },
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert'; // 👈 importa il plugin

export default defineConfig({
  plugins: [react(), mkcert()], // 👈 aggiungi mkcert qui
  server: {
    https: true, // 👈 abilita HTTPS
    host: '127.0.0.1', // o 'localhost'
    port: 5173,
    strictPort: true,
  },
});
