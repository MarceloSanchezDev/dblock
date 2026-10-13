import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { trackEvent } from "../../lib/analytics";
import "./nav.css";

const navLinks = [
  {
    path: "/software-a-medida",
    label: "Software a medida",
  },
  {
    path: "/servicios-web",
    label: "Desarrollo web",
  },
  {
    path: "/infraestructura-y-soporte",
    label: "Infraestructura",
  },
  {
    path: "/automatizacion-de-procesos",
    label: "Automatización",
  },
  {
    path: "/acerca-de-nosotros",
    label: "Nosotros",
  },
  {
    path: "/beneficios",
    label: "Cómo trabajamos",
  },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const { pathname } = useLocation();

  const handleToggleMenu = () => {
    setIsMenuOpen((currentValue) => !currentValue);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    handleCloseMenu();
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) handleCloseMenu();
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") handleCloseMenu();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <nav ref={navRef} className="home-navbar" aria-label="Navegación principal">
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
        <span className="material-symbols-outlined home-navbar-toggle-icon" aria-hidden="true">
          {isMenuOpen ? "close" : "menu"}
        </span>
      </button>

      <div
        id="home-navbar-menu"
        className={`home-navbar-menu ${isMenuOpen ? "is-open" : ""}`}
      >
        <div className="home-navbar-links">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.path} onClick={() => {
              trackEvent("navigation_click", { navigation_label: link.label });
              handleCloseMenu();
            }}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contacto"
          className="home-navbar-button"
          onClick={() => {
            trackEvent("cta_click", { cta_name: "nav_hablemos", cta_location: "navigation" });
            handleCloseMenu();
          }}
        >
          Contactanos
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
