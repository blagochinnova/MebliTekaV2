import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Services from "./pages/Services";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <Header openModal={() => setIsModalOpen(true)} />
        <main>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/Services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
        <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
