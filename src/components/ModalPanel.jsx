import { useState, useRef, useEffect } from "react";
import facebookIcon from "../assets/icons/facebook-logo.svg";
import instagramIcon from "../assets/icons/instagram-logo.svg";
import ConsultationModal from "./ConsultationModal";

export default function ModalPanel({ isOpen, onClose }) {
  const [showConsultation, setShowConsultation] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (isOpen && iframeRef.current) {
      iframeRef.current.src = "https://mrqz.to/68701bb9af63bf003397084b";
      iframeRef.current.onload = () => console.log("Iframe loaded successfully");
      iframeRef.current.onerror = () => console.log("Iframe failed to load");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-panel" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-panel-content">
        <span className="close-modal-quiz" onClick={onClose}>×</span>

        <h2>Додаткові опції</h2>

        <div className="quiz-section">
          <h3>Пройдіть наш квіз!</h3>
          <iframe
            ref={iframeRef}
            title="Marquiz Quiz"
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen
            sandbox="allow-scripts allow-popups allow-forms" // Видалено allow-same-origin
            style={{ minHeight: "600px", border: "1px solid #ccc", visibility: "visible" }} // Додано visibility для тестування
          ></iframe>
          {process.env.NODE_ENV === "development" && (
            <p style={{ color: "red" }}>
              Quiz loaded, but not visible? Check DevTools Elements tab or contact Marquiz support.
            </p>
          )}
        </div>

        <div className="social-links">
          <h3>Ми у соціальних мережах:</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>

        <button onClick={() => setShowConsultation(true)}>Замовити консультацію</button>
        {showConsultation && <ConsultationModal isOpen={true} onClose={() => setShowConsultation(false)} />}
      </div>
    </div>
  );
}