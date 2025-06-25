import { useEffect, useState } from "react";
import facebookIcon from "../assets/icons/facebook-logo.svg";
import instagramIcon from "../assets/icons/instagram-logo.svg";
import telegramIcon from "../assets/icons/telegram-logo.svg";

export default function ConsultationModal({ isOpen, onClose }) {
  const [showClass, setShowClass] = useState(false);
  const [render, setRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setRender(true);
      // Через наступний цикл, щоб застосувався клас show
      setTimeout(() => setShowClass(true), 10);
      document.body.style.overflow = "hidden";
    } else {
      setShowClass(false);
      document.body.style.overflow = "";
      // Почекай анімацію закриття і потім вимкни рендер
      const timeout = setTimeout(() => setRender(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!render) return null;

  return (
    <div
      className={`modal ${showClass ? "show" : "hide"}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>&times;</span>

        <div className="contact-wrapper">
          <div className="form-column">
            <form action="telegram.php" method="post" className="consultation-form">
              <h2>Замовити консультацію</h2>

              <label htmlFor="name">Ваше ім'я:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="phone">Телефон:</label>
              <input type="tel" id="phone" name="phone" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />

              <label htmlFor="message">Коментар:</label>
              <textarea name="message" rows="4" />

              <button className="button" type="submit">Надіслати</button>
            </form>
          </div>

          <div className="info-column">
            <div className="info-overlay">
              <h2>Зв'яжіться з нами</h2>
              <p><strong>Адреса:</strong><br />вул. Гарна, 21, Київ</p>
              <p><strong>Email:</strong><br />info@site.com</p>
              <p><strong>Телефон:</strong><br />+38 (099) 473-70-98</p>

              <div className="social">
                <p>Ми у соціальних мережах:</p>
                <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
                <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
                <a href="#"><img src={telegramIcon} alt="Telegram" /></a>
              </div>
            </div>
            <img src="/images/living8.jpg" alt="Contact image" className="contact-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
