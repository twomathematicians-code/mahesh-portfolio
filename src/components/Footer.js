import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <span className="logo-text">MS</span>
              <span className="logo-dot">.</span>
            </div>
            <p className="footer-tagline">
              Data Scientist | Mathematician | AI/ML Engineer
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a href="https://github.com/twomathematicians-code" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/mahesh-solanki-16b9a6a5" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:maheshsinh1910@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Mahesh Solanki. Crafted with <FaHeart className="heart" /> in Ghent, Belgium
          </p>
          <p className="footer-tech">
            Built with React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
