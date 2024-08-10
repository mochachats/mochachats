import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; 
import logo from '../styles/images/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <div className="navbar-socials">
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </nav>
      {/* <div className="hero-content">
        <h1>RF Digital Solutions</h1>
        <p>Helping businesses create software and web solutions.</p>
      </div> */}
    </header>
  );
};

export default Header;