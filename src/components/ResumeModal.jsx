import React, { useEffect } from "react";
import "../style/resume.css";

export default function ResumeModal({ onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal-cv")) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://mebliteka-backend-1.onrender.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Резюме надіслано успішно!");
        form.reset();
        onClose();
      } else {
        alert("Помилка відправки. Спробуйте ще раз.");
      }
    } catch (error) {
      console.error("Помилка:", error);
      alert("Помилка з'єднання з сервером.");
    }
  };

  return (
    <div className="modal-cv show" onClick={handleBackdropClick}>
      <div className="modal-content-cv">
        <span className="close-resume-modal" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit} className="resume-form">
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
