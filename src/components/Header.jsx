import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logogit.png" alt="Git Pro Logo" className="logo" />
        <h1>Git Pro</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/levels">Levels</Link></li>
          <li><Link to="/cours">Cours</Link></li>  
        </ul>
      </nav>
    </header>
  );
}

export default Header;
