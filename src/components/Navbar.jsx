// components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/" onClick={closeMenu}>
        <img src="/featured-events-logo-remove.png" className="featured-events-logo" alt="Logo" />
          {/* <i className="fas fa-calendar-alt me-2"></i> */}
          {/* SharedEvents */}
        </Link>
        
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items with transition */}
        <div
          className={`collapse navbar-collapse custom-collapse ${
            isOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li> */}
            <li className="nav-item px-1">
              <Link className="nav-link" to="/events" onClick={closeMenu}>
                Upcoming Events
              </Link>
            </li>
            <li className="nav-item px-1">
              <Link className="nav-link" to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item px-1">
              <Link className="nav-link" to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>

          
            <button className="btn btn-outline-primary fw-bold">
              Register
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
