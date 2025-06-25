import { Link } from "react-router-dom";

export default function Header({ openModal }) {
  return (
    <header className="site-header">
      <nav className="site-header">
        <div className="logo-container">
          <Link to="/Home">
            <img src="/images/logoN.jpg" alt="Логотип MebliTeka" className="logo" />
            <span className="site-title">MebliTeka</span>
          </Link>
        </div>
        <ul className="nav-link">
          <li><Link to="/Home">Головна</Link></li>
          <li><Link to="/Catalog">Каталог</Link></li>
          <li><Link to="/Services">Послуги</Link></li>
          <li><Link to="/About">Про нас</Link></li>
          <li><a href="#">Відгуки</a></li>
        </ul>
        <button className="button open-modal-btn" onClick={openModal}>
          Замовити консультацію
        </button>
      </nav>
    </header>
  );
}
