# 🐾 OftalZoo — Sito Web di Oftalmologia Veterinaria

[![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![i18next](https://img.shields.io/badge/i18next-Multilingual-26A69A?style=for-the-badge&logo=i18next&logoColor=white)](https://www.i18next.com/)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)

---

## 🌍 Descrizione

**OftalZoo** è un sito web moderno e responsive sviluppato in **React.js** per uno studio di **Oftalmologia Veterinaria**.  
Il progetto presenta in modo elegante e professionale il team medico, i servizi offerti, una galleria fotografica e le informazioni di contatto.

L’interfaccia è **multilingua (Italiano / Inglese)** grazie a **i18next**, e offre un’esperienza fluida e accessibile su ogni dispositivo.

---

## 🧠 Funzionalità principali

### 🧭 Navbar
- Logo e navigazione fluida tra le sezioni
- Cambio lingua 🇮🇹 / 🇬🇧 in tempo reale  
- Evidenziazione della sezione attiva durante lo scroll
- Menu mobile responsive con animazioni

### 👩‍⚕️ Hero (Team)
- Presenta i due medici veterinari con foto, nome e ruolo  
- Sezione espandibile con esperienze professionali animate  
- Ogni esperienza include icona, ruolo, luogo e periodo  

### 🩺 Services
- Elenco dei servizi offerti con icone e descrizioni  
- Contenuti caricati dinamicamente tramite JSON tradotto  
- Griglia responsive con effetti hover e transizioni fluide  

### 🖼️ Gallery
- Carosello di immagini realizzato con **Swiper.js**  
- Slide automatiche e navigazione a punti cliccabili  
- Testi alt tradotti e layout responsive  

### 📞 Contacts
- Dati di due strutture veterinarie:
  - Ambulatorio Canevari (Landriano)
  - Ospedale San Francesco (Milano)
- Link diretti a Google Maps e numeri cliccabili (tel:)  
- Tutto il contenuto è gestito da **i18next**

---


## 🧩 Stack Tecnologico

| Tecnologia                     | Utilizzo                        |
| ------------------------------ | ------------------------------- |
| **React.js (Vite)**            | Framework principale            |
| **Tailwind CSS**               | Stile e layout responsive       |
| **Framer Motion**              | Animazioni e transizioni fluide |
| **i18next + react-i18next**    | Gestione traduzioni multilingua |
| **Swiper.js**                  | Carosello immagini              |
| **Lucide React / React Icons** | Icone moderne e accessibili     |

---


🌍 Traduzioni (i18next)

Tutti i testi dell’app sono gestiti tramite i file JSON in:
src/locales/
├── it.json  🇮🇹 Italiano
└── en.json  🇬🇧 Inglese

La configurazione si trova in src/i18n.js, che definisce:

Lingua di default: Italiano

Fallback automatico

Integrazione con React tramite initReactI18next

Per cambiare lingua, la Navbar utilizza:
i18n.changeLanguage("en");

---


🗂️ Struttura del Progetto
src/
│
├── assets/            # Immagini e logo
├── components/        # Componenti React
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Gallery.jsx
│   └── Contacts.jsx
│
├── locales/           # Traduzioni i18next
│   ├── it.json
│   └── en.json
│
├── i18n.js            # Configurazione multilingua
├── App.jsx            # Struttura generale dell’app
└── main.jsx           # Entry point React

---


👨‍💻 Autore
Nicolò Canevari
Sviluppatore Front-End & Web Designer