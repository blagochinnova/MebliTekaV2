import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Header({ openModal }) {
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);

  // Перемикання мобільного меню
  const mobileMenu = () => {
    if (hamburgerRef.current && navMenuRef.current) {
      hamburgerRef.current.classList.toggle("active");
      navMenuRef.current.classList.toggle("active");
    }
  };

  // Закриття мобільного меню
  const closeMenu = () => {
    if (hamburgerRef.current && navMenuRef.current) {
      hamburgerRef.current.classList.remove("active");
      navMenuRef.current.classList.remove("active");
    }
  };

  // Налаштування слухачів подій
  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const navMenu = navMenuRef.current;

    // Перевірка, чи елементи існують
    if (hamburger && navMenu) {
      const navLinks = navMenu.querySelectorAll(".nav-link");

      // Додавання слухача для гамбургера
      hamburger.addEventListener("click", mobileMenu);

      // Додавання слухачів для посилань навігації
      navLinks.forEach((link) => link.addEventListener("click", closeMenu));

      // Очищення слухачів під час демонтування компонента
      return () => {
        hamburger.removeEventListener("click", mobileMenu);
        navLinks.forEach((link) =>
          link.removeEventListener("click", closeMenu)
        );
      };
    }
  }, []); // Порожній масив залежностей, щоб виконати один раз під час монтування
  return (
    <header className="site-header">
      {/* Верхній хедер */}
      <div className="top-header">
        <div className="contact">
          <span className="contact-left">+38 (099) 473-70-98</span>
        </div>
        <div className="contact-left">
          <button className="btn-header  open-modal-btn" onClick={openModal}>
            Замовити консультацію
          </button>
        </div>
      </div>
      {/*Нижній хедер */}

      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img
              src="/images/logoN.png"
              alt="Логотип MebliTeka"
              className="logo"
            />
            <span className="site-title">MebliTeka</span>
          </Link>
        </div>
        <ul className="nav-menu" ref={navMenuRef}>
          <li className="nav-item">
            <Link to="/Catalog" className="nav-link">
              Каталог
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Services" className="nav-link">
              Послуги
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">
              Про нас
            </Link>
          </li>
        </ul>
        <div className="hamburger" ref={hamburgerRef}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}
