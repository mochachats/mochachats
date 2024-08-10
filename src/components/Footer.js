// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';
import '../styles/GlobalStyles.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Mocha Chats</div>
        <p className="footer-description">
          Building the next platform for coffee lovers and Gen Z job hunters alike for career advice and coffee meetups.
        </p>
        <div className="footer-links">
          <div>
            <h3>Company</h3>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
          <div>
            <h3>Services</h3>
            <a href="#">Career Advice</a>
            <a href="#">Coffee Meetups</a>
            <a href="#">Consultations</a>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="#">Contact Us</a>
            <a href="#">Support</a>
            <a href="#">FAQ</a>
          </div>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
        <p>© 2024 Mocha Chats. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
