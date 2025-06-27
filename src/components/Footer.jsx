import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css'; // We'll add styles here

const Footer = () => {
  return (
    <footer className="footer-section pt-5 pb-4 border-top">
      <div className="containers-footer px-3 px-md-5">

        {/* Logo Row */}
        <div className="row mb-4">
          <div className="col-md-12 d-flex align-items-center">
            <img src={logo} alt="Logo" className="footer-logo me-3" />
            <h5 className="text-uppercase fw-bold mb-0 brand-name">TechGhuru Academy</h5>
          </div>
        </div>

        {/* Footer Links */}
        <div className="row">
          {/* Contact */}
          <div className="col-md-4 mb-4">
            <p className="footer-text w-75">
              Empowering learners with quality education and powerful tools for success. Join us and elevate your skills today.
            </p>
            <p className="mt-3 footer-contact">
              <strong>📞 Contact:</strong><br />
              +91 98765 43210
            </p>
          </div>

          {/* Explore */}
          <div className="col-md-4 mb-4 ">
            <h6 className="footer-heading">Explore</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/">FAQs</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Terms & Conditions</Link></li>
              <li><Link to="/">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="row text-center mt-4 pt-3 border-top">
          <div className="col-12">
            <p className="mb-1 text-muted">
              © 2025 TechGhuru Academy | Developed by <strong className="highlighted">Atriowings</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
