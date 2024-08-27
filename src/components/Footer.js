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
              <a href="/about">About Us</a>
              <a href="https://mpara17.hashnode.dev/">Community</a>
              <a href="/services">Services</a>
            </div>
            
            <div>
              <h3>Contact</h3>
              {/* <a href="mailto:mochachatsteam@gmail.com">Email: mochachatsteam@gmail.com</a> */}
              <p>If you have any questions or need assistance, feel free to reach out to us at <strong><a href="mailto:mochachatsteam@gmail.com">mochachatsteam@gmail.com</a></strong>.</p>
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
