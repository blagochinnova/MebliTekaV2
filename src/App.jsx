import { Routes, Route } from "react-router-dom"; // Без BrowserRouter
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";
import ModalPanel from "./components/ModalPanel";
import SideButton from "./components/SideButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Services from "./pages/Services";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Для ConsultationModal
  const [isPanelOpen, setIsPanelOpen] = useState(false); // Для ModalPanel і SideButton

  // Діагностика
  console.log("Modal Open:", isModalOpen);
  console.log("Panel Open:", isPanelOpen);

  return (
    <>
      <Header openModal={() => setIsModalOpen(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <SideButton
        isOpen={isPanelOpen}
        onOpen={() => setIsPanelOpen(true)}
        onClose={() => setIsPanelOpen(false)}
      />
    </>
  );
}

export default App;