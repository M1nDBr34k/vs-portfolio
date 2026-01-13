import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Ariel Jay Villarta</h3>
          <p>Front-End Web Developer Enthusiast.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <div className="social-links">
            <a href="mailto:villartaariel478@gmail.com">📧 Email</a>
            <a href="tel:09672138951">📱 Phone</a>
            <a href="https://github.com/M1nDBr34k" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Ariel Jay Villarta. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
