import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Home.css';
import Header from '../components/Header';
import heroImage from '../styles/images/hero.png';
import intro1 from '../styles/images/intro1.jpeg';
import intro2 from '../styles/images/intro2.jpeg';
import Reachout from '../components/Reachout';

const Home = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top >= 0 && rect.bottom <= windowHeight) {
          aboutRef.current.classList.add('slide-up');
        } else {
          aboutRef.current.classList.remove('slide-up');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
      <Header />

      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-text">
            <h1 className="hero-title">Welcome to Mocha Chats!</h1>
            <h2 className="hero-tagline">Your go-to hub for Gen Z networking over coffee!</h2>
          </div>
          <div className="hero-images-container">
            <img src={intro1} alt="Mocha Chats Hero" className="hero-image small" />
            <img src={heroImage} alt="Mocha Chats Hero" className="hero-image large" />
            <img src={intro2} alt="Mocha Chats Hero" className="hero-image small" />
          </div>
        </section>

        {/* About Us Section */}
        <section className="about-section" ref={aboutRef}>
          <div className="about-content">
            <div className="about-text-container">
              <h2 className="about-title">About Us</h2>
              <p className="about-description">
                At Mocha Chats, we’re not just brewing coffee—we’re brewing connections. Our mission is to create a vibrant hub where Gen Z professionals, creatives, and innovators can come together to network, share ideas, and find inspiration. Whether you’re a digital nomad, a startup enthusiast, or just someone who loves a good chat over coffee, we’ve got you covered.
              </p>
              <Link to="/about" className="about-button btn">Learn More!</Link> {/* Updated to use Link */}
            </div>
            <div className="about-image-container">
              <img src={heroImage} alt="About Us" className="about-image" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="service-home section">
          <div className="service-home-content">
            <h2 className="service-home-title">Our Services</h2>
            <div className="service-home-cards-container">
              <div className="service-home-card" id="networking-events">
                <div className="service-home-card-inner">
                  <div className="service-home-icon">🤝</div>
                  <h3 className="service-home-card-title">Networking Events</h3>
                  <p className="service-home-card-description">Join our curated networking events designed to bring together the brightest minds in Gen Z.</p>
                </div>
              </div>
              <div className="service-home-card" id="virtual-coffee-chats">
                <div className="service-home-card-inner">
                  <div className="service-home-icon">☕</div>
                  <h3 className="service-home-card-title">Virtual Coffee Chats</h3>
                  <p className="service-home-card-description">Connect with like-minded individuals over virtual coffee chats from the comfort of your home.</p>
                </div>
              </div>
              <div className="service-home-card" id="workshops-seminars">
                <div className="service-home-card-inner">
                  <div className="service-home-icon">🛠️</div>
                  <h3 className="service-home-card-title">Workshops & Seminars</h3>
                  <p className="service-home-card-description">Participate in workshops and seminars led by industry experts to level up your skills.</p>
                </div>
              </div>
            </div>
            <Link to="/services" className="service-home-button btn">Learn More!</Link> {/* Updated to use Link */}
          </div>
        </section>

        <Reachout />
      </div>
    </div>
  );
};

export default Home;
