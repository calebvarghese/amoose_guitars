import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <span className="brand-text">A-moose</span>
              <span className="brand-subtitle">Guitars</span>
            </div>
            <p className="footer-description">
              Crafting exceptional guitars with passion and precision. 
              Every instrument tells a story of dedication and artistry.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Products</h3>
            <ul className="footer-links">
              <li><Link to="/products">Acoustic Guitars</Link></li>
              <li><Link to="/products">Electric Guitars</Link></li>
              <li><Link to="/products">Bass Guitars</Link></li>
              <li><Link to="/products">Custom Builds</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                Reston VA
              </p>
              <p>
                <i className="fas fa-phone"></i>
                (555) 123-4567
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                <a href="mailto:amosmjsmith@gmail.com">amosmjsmith@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} A-moose Guitars. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
