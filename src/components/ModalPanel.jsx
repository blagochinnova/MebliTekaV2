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
      iframeRef.current.onload = () =>
        console.log("Iframe loaded successfully");
      iframeRef.current.onerror = () => console.log("Iframe failed to load");
    } else if (!isOpen && iframeRef.current) {
      iframeRef.current.src = ""; // Очищаємо src при закритті
    }
  }, [isOpen]);

  if (!isOpen) return null;

  console.log("ModalPanel isOpen:", isOpen); // Діагностика

  return (
    <div
      className={`modal-panel ${isOpen ? "show" : ""}`} // Додано клас show
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-panel-content">
        <span className="close-modal-quiz" onClick={onClose}>
          ×
        </span>

        <h2 className="quiz-main-title">Додаткові опції</h2>

        <div className="quiz-section">
          <h3 className="quiz-title">Пройдіть наш квіз!</h3>
          <iframe
            ref={iframeRef}
            title="Marquiz Quiz"
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen
            sandbox="allow-scripts allow-popups allow-forms"
            style={{
              minHeight: "400px",
              border: "1px solid #ccc",
              visibility: "visible",
            }}
          ></iframe>
          {process.env.NODE_ENV === "development" && (
            <p style={{ color: "red" }}>
              Quiz loaded, but not visible? Check DevTools Elements tab or
              contact Marquiz support.
            </p>
          )}
        </div>

        <div className="social-links">
          <h3 className="quiz-title">Ми у соціальних мережах:</h3>
          <a className="soc-icon" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a className="soc-icon" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>

        <button className="button-quiz" onClick={() => setShowConsultation(true)}>
          Надіслати
        </button>
        {showConsultation && (
          <ConsultationModal
            isOpen={true}
            onClose={() => setShowConsultation(false)}
          />
        )}
      </div>
    </div>
  );
}