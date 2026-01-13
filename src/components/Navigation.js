import React, { useEffect, useState } from 'react';
import './Navigation.css';

function Navigation({ darkMode, onToggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <h1>Portfolio</h1>
        </div>
        
        <button
          type="button"
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>

        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleDarkMode}
          aria-label="Toggle theme"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
