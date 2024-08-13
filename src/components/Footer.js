// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../styles/images/logo.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Mocha Chats Logo" className="logo-image" />
          </div>
          <div className="footer-links footer-right">
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
        </div>
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
          <p>© 2024 Mocha Chats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
