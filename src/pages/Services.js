import React, { useRef } from 'react';
import Header from '../components/Header';
import Reachout from '../components/Reachout';
import '../styles/Services.css';
import Typewriter from 'typewriter-effect';
import heroImage1 from '../styles/images/hero.png';
import serviceImage1 from '../styles/images/cybersecurity.png';
import serviceImage2 from '../styles/images/career.png';
import serviceImage3 from '../styles/images/fintech.png';

const Services = () => {
  const servicesSectionRef = useRef(null);

  const scrollToServices = () => {
    if (servicesSectionRef.current) {
      servicesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header />
      <div className="services-page">
        {/* Hero Section */}
        <div className="hero">
          <img src={heroImage1} alt="Hero Background" className="hero-background" />
          <div className="hero-overlay">
            <h1 className="hero-title">Empower Your Future</h1>
            <div className="hero-typewriter">
              <Typewriter
                options={{
                  strings: [
                    'Stay ahead in Cybersecurity',
                    'Navigate your Career with Confidence',
                    'Unlock the Power of Fintech'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="hero-subtext">Discover how Mocha Chats can help you stay ahead in cybersecurity, fintech, and career development.</p>
            <div className="hero-buttons">
              <button className="hero-btn" onClick={scrollToServices}>Explore Services</button>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section" ref={servicesSectionRef}>
          <div className="service-item">
            <div className="service-content">
              <img src={serviceImage1} alt="cybersecurity-image" />
              <h2>Cybersecurity Awareness</h2>
              <p>We provide comprehensive training and resources to protect your digital life. From secure browsing habits to advanced threat detection, we cover it all.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-content">
              <img src={serviceImage2} alt="career-guidance-image" />
              <h2>Career Guidance & Networking</h2>
              <p>Navigating the professional world can be daunting, but Mocha Chats is here to guide you every step of the way. Our career guidance services are designed to help you identify your strengths, refine your goals, and craft a clear path to success.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-content">
              <img src={serviceImage3} alt="fintech-education-image" />
              <h2>Fintech Education</h2>
              <p>The financial technology (fintech) sector is revolutionizing the way we interact with money, and staying informed is essential. At Mocha Chats, our fintech education services are designed to demystify this rapidly evolving field and provide you with the knowledge you need to leverage its opportunities.</p>
            </div>
          </div>
        </div>
      </div>
      <Reachout />
    </div>
  );
};

export default Services;
