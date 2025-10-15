import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contacts from "./components/Contacts";

// --------------------------- COMPONENTE PRINCIPALE APP ---------------------------
// Questo è il componente "root" dell'applicazione React: tutto parte da qui.
export default function App() {
  return (
    <>

      {/* --------------------------- NAVBAR FISSA IN ALTO --------------------------- */}
      <Navbar />

      {/* --------------------------- SEZIONE HOME --------------------------- */}
      <Hero />

      {/* --------------------------- SEZIONE SERVIZI --------------------------- */}
      <Services />

      {/* --------------------------- SEZIONE GALLERIA --------------------------- */}
      <Gallery />

      {/* --------------------------- SEZIONE CONTATTI --------------------------- */}
      <Contacts />

    </>
  );
}