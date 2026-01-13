import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">Have a project in mind or just want to chat? Feel free to reach out!</p>
        
        <div className="contact-content">
          <div className="contact-info-inline">
            <span>📧 <a href="mailto:villartaariel478@gmail.com">villartaariel478@gmail.com</a></span>
            <span className="separator">|</span>
            <span>📱 <a href="tel:09672138951">09672138951</a></span>
            <span className="separator">|</span>
            <span>🐙 <a href="https://github.com/M1nDBr34k" target="_blank" rel="noopener noreferrer">github.com/M1nDBr34k</a></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
