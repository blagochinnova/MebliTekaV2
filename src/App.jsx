import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";
import SideButton from "./components/SideButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Services from "./pages/Services";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
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
          isOpen={isSidePanelOpen}
          onOpen={() => setIsSidePanelOpen(true)}
          onClose={() => setIsSidePanelOpen(false)}
        />
    </>
  );
}

export default App;
