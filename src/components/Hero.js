import React from 'react';
import './Hero.css';
import profileImage from '../Profile.jpg';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-image-section">
          <div className="hero-image-wrapper">
            <img src={profileImage} alt="Profile" className="hero-image" />
          </div>
          <div className="hero-quote">
            <p>I am passionate about web development, focused on building user-friendly, visually engaging, and responsive websites.</p>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-greeting">Hello!</div>
          <h1 className="hero-title">
            I'm <span className="hero-name">Ariel Jay Lyster T. Villarta</span>
          </h1>
          <p className="hero-subtitle">Front-End Web Developer Enthusiast</p>
          
          <div className="hero-credentials">
            <div className="credential-badge">
              <span className="credential-icon">🎓</span>
              <div className="credential-text">
                <h3>BS in Information Technology</h3>
                <p>University of Science and Technology of Southern Philippines</p>
              </div>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Portfolio →</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
