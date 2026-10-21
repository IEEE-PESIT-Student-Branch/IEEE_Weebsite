
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ieeeMainLogo from '../assets/ieeelogosmallsize.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={ieeeMainLogo} alt="IEEE PESU ECC Student Branch" />
        </Link>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="navbar-links"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="navbar-links"
        className={`navbar-links ${menuOpen ? 'open' : ''}`}
      >
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
      </div>
    </nav>
  );
}

export default Navbar;
