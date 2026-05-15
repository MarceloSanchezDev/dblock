import "./nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="home-navbar">
      <Link to="/" className="home-logo">
        DBLOCK
      </Link>

      <div className="home-navbar-links">
        <Link to="/soluciones">Solutions</Link>
        <Link to="/acerca-de-nosotros">Approach</Link>
        <Link to="/beneficios">Benefits</Link>
        <Link to="/contacto">Contact</Link>
      </div>

      <Link to="/contacto" className="home-navbar-button">
        Connect
      </Link>
    </nav>
  );
};

export default Nav;
