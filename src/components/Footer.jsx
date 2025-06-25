import facebookIcon from "../assets/icons/facebook-logo.svg";
import instagramIcon from "../assets/icons/instagram-logo.svg";
import telegramIcon from "../assets/icons/telegram-logo.svg";
export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p><strong>Адреса:</strong> вул. Центральна, 12, Київ, Україна</p>
          <p>
            <strong>Телефон:</strong>{" "}
            <a href="tel:+380994737098">+38 (099) 473-70-98</a>
          </p>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <img src={telegramIcon} alt="Telegram" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
  