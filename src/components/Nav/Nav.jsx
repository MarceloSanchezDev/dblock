import "./nav.css";

const Nav = () => {
  return (
    <nav className="home-navbar">
      <a href="/" className="home-logo">
        DBLOCK
      </a>

      <div className="home-navbar-links">
        <a href="#solutions">Solutions</a>
        <a href="#approach">Approach</a>
        <a href="#benefits">Benefits</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="home-navbar-button">
        Connect
      </a>
    </nav>
  );
};

export default Nav;
