import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <Link to="/" className="logo-link">
        <h1 className="logo">
          Prestige Car BNS
        </h1>
      </Link>
      <div className={`burger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav id="nav-menu" className={isMenuOpen ? 'active' : ''}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
        <Link to="/services" onClick={() => setIsMenuOpen(false)}>Nos Services</Link>
        <Link to="/flotte" onClick={() => setIsMenuOpen(false)}>Nos Véhicules</Link>
        <Link to="/reservation" onClick={() => setIsMenuOpen(false)}>Réservation</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
