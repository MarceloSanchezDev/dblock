import { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const navLinks = [
  {
    path: "/soluciones",
    label: "Soluciones",
  },
  {
    path: "/servicios-web",
    label: "Servicios web",
  },
  {
    path: "/servicios-cloud",
    label: "Cloud",
  },
  {
    path: "/servicios-automatizacion",
    label: "Automatización",
  },
  {
    path: "/acerca-de-nosotros",
    label: "Nosotros",
  },
  {
    path: "/beneficios",
    label: "Beneficios",
  },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((currentValue) => !currentValue);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="home-navbar" aria-label="Navegación principal">
      <Link
        to="/"
        className="home-logo"
        aria-label="Ir al inicio de Dblock"
        onClick={handleCloseMenu}
      >
        <img src="/logo.png" alt="Logo de Dblock" className="img-logo" />
        <span>DBLOCK</span>
      </Link>

      <button
        type="button"
        className={`home-navbar-toggle ${isMenuOpen ? "is-open" : ""}`}
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isMenuOpen}
        aria-controls="home-navbar-menu"
        onClick={handleToggleMenu}
      >
        <span className="home-navbar-toggle-line" />
        <span className="home-navbar-toggle-line" />
        <span className="home-navbar-toggle-line" />
      </button>

      <div
        id="home-navbar-menu"
        className={`home-navbar-menu ${isMenuOpen ? "is-open" : ""}`}
      >
        <div className="home-navbar-links">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={handleCloseMenu}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contacto"
          className="home-navbar-button"
          onClick={handleCloseMenu}
        >
          Solicitar consulta
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
