import React, { useEffect } from "react";
import "../style/resume.css"; 

export default function ResumeModal({ onClose }) {
  // Закриття при кліку на бекдроп
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal-cv")) {
      onClose();
    }
  };

  // Блокуємо прокрутку при відкритій модалці
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="modal-cv show" onClick={handleBackdropClick}>
      <div className="modal-content-cv">
        <span className="close-resume-modal" onClick={onClose}>
          &times;
        </span>
        <form
          action="send_resume.php"
          method="post"
          encType="multipart/form-data"
          className="resume-form"
        >
          <h2>Надіслати резюме</h2>

          <label htmlFor="name">ПІБ:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ваше повне ім’я"
            required
          />

          <label htmlFor="phone">Телефон:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+38 (___) ___-__-__"
            required
          />

          <label htmlFor="resume">Резюме (PDF, DOC):</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
          />

          <button type="submit" className="button">
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}
