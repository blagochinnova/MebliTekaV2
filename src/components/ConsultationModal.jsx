import { useEffect, useState } from "react";
import facebookIcon from "../assets/icons/facebook-logo.svg";
import instagramIcon from "../assets/icons/instagram-logo.svg";
import telegramIcon from "../assets/icons/telegram-logo.svg";

export default function ConsultationModal({ isOpen, onClose }) {
  const [showClass, setShowClass] = useState(false);
  const [render, setRender] = useState(isOpen);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setRender(true);
      setTimeout(() => setShowClass(true), 10);
      document.body.style.overflow = "hidden";
    } else {
      setShowClass(false);
      document.body.style.overflow = "";
      const timeout = setTimeout(() => setRender(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://mebliteka-backend-1.onrender.com/api/consult",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      setSubmitStatus(result.message || result.error);

      if (response.ok) {
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 3000);
      }
    } catch (error) {
      setSubmitStatus("Помилка відправки. Спробуйте ще раз.");
    }
  };

  if (!render) return null;

  return (
    <div
      className={`modal ${showClass ? "show" : "hide"}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-content">
        <span
          className="close-modal"
          onClick={onClose}
          role="button"
          aria-label="Закрити"
        >
          ×
        </span>

        <div className="contact-wrapper">
          <div className="form-column">
            <form onSubmit={handleSubmit} className="consultation-form">
              <h2>Замовити консультацію</h2>
              <label htmlFor="name">Ваше ім'я:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Введіть ім'я"
              />
              <label htmlFor="phone">Телефон:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+38 (XXX) XXX-XX-XX"
                pattern="\+38\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}"
                title="Формат: +38 (XXX) XXX-XX-XX"
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
              />
              <label htmlFor="message">Коментар:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Ваш коментар"
              />
              <button className="button" type="submit">
                Надіслати
              </button>
              {submitStatus && <p className="form-status">{submitStatus}</p>}
            </form>
          </div>
          <div className="info-column">
            <div className="info-overlay">
              <h2>Зв'яжіться з нами</h2>
              <p>
                <strong>Адреса:</strong>
                <br />
                вул. Гарна, 21, Київ
              </p>
              <p>
                <strong>Телефон:</strong>
                <br />
                +38 (099) 473-70-98
              </p>
              <div className="social">
                <p>Ми у соціальних мережах:</p>
                <a href="https://www.facebook.com/profile.php?id=61576658885220&rdid=j2hcV4T25TPqIMyx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DvvynfVmR%2F">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/mebli_teka?igsh=MWF2ZTRyMHJ2Y3R4Nw==">
                  <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="https://t.me/+380994737098">
                  <img src={telegramIcon} alt="Telegram" />
                </a>
              </div>
            </div>
            <img
              src="/images/living8.jpg"
              alt="Інтер'єр кімнати"
              className="contact-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}