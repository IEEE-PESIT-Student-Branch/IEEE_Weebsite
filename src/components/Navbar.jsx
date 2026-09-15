import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    return(
        <nav className="navbar">
      <div className="navbar-logo">
        <a href="./">
          <img src='src/assets/ieeelogosmallsize.png'></img>
        </a>
      </div>

      <div className="navbar-links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
    );
}

export default Navbar;