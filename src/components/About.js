import React from 'react';
import './About.css';
import profileImage from '../Profile.jpg';
import resumePDF from '../Villarta_Ariel_Resume.pdf';
import backgroundImage from '../bacground.jpg';

function About() {
  return (
    <section id="about" className="about" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="about-container">
        <div className="about-header">
          <span className="about-label">ABOUT ME</span>
          <h2>Get to Know Me</h2>
        </div>

        <div className="about-main">
          <div className="about-profile-card">
            <div className="profile-image-container">
              <img src={profileImage} alt="Ivi Susej Marie E. Salas" className="profile-image" />
              <div className="availability-badge">
                <span className="status-dot"></span>
                Available for work
              </div>
            </div>
            <h3 className="profile-name">Ariel Jay Lyster T. Villarta</h3>
            <p className="profile-title">Front-End Web Developer Enthusiast passionate about turning creative concepts into responsive, user-friendly, and visually engaging websites.</p>
          </div>

          <div className="about-details">
            <h3 className="greeting">Hello, I'm Ariel Jay</h3>
            <p className="intro-text">
              An Information Technology student with a strong interest in computer systems and technology. Experienced in basic troubleshooting and system setup. Eager to apply academic knowledge, further develop technical skills, and contribute effectively to real-world IT projects and operations.
            </p>

            <div className="info-grid">
              <div className="info-box">
                <div className="info-icon education-icon">🎓</div>
                <h4>Education</h4>
                <p>BS in Information Technology student at University of Science and Technology of Southern Philippines.</p>
              </div>

              <div className="info-box">
                <div className="info-icon focus-icon">💻</div>
                <h4>Technical Focus</h4>
                <p>Front-end development with responsive and user-friendly web applications.</p>
              </div>

              <div className="info-box">
                <div className="info-icon passion-icon">❤️</div>
                <h4>Passion</h4>
                <p>Continuous learning and staying current with modern web technologies.</p>
              </div>

              <div className="info-box">
                <div className="info-icon goal-icon">🎯</div>
                <h4>Goal</h4>
                <p>Growing as a developer and contributing to meaningful projects.</p>
              </div>
            </div>

            <div className="about-actions">
              <a href="#contact" className="btn btn-work">Let's Work Together →</a>
              <a href={resumePDF} className="btn btn-cv" download="Ariel_Jay_Villarta_CV.pdf">📄 Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
