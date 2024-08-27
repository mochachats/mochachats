import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; 
import logo from '../styles/images/logo.jpeg';
import '../styles/GlobalStyles.css';


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
          <Link to="/about">About Us</Link>
          <Link to="https://mpara17.hashnode.dev/">Community</Link>
          <Link to="/services">Services</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
