import facebookIcon from "../assets/icons/facebook-logo.svg";
import instagramIcon from "../assets/icons/instagram-logo.svg";
import telegramIcon from "../assets/icons/telegram-logo.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          <strong>Адреса:</strong> вул. Мочульського, 10, Івано-Франківськ,
          Україна
        </p>
        <p>
          <strong>Телефон:</strong>{" "}
          <a href="tel:+380994737098">+38 (099) 473-70-98</a>
        </p>
        <div className="social-links">
          <a
            href="https://www.facebook.com/profile.php?id=61576658885220&rdid=j2hcV4T25TPqIMyx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DvvynfVmR%2F"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/mebli_teka?igsh=MWF2ZTRyMHJ2Y3R4Nw=="
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
