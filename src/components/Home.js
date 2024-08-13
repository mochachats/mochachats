import React, { useState, useEffect } from 'react';
// import Animation from '../components/Animation';
import '../styles/Home.css';
import Header from '../components/Header';
import heroImage from '../styles/images/hero.png';
import '../styles/GlobalStyles.css';

const Home = () => {
  // const [showContent, setShowContent] = useState(false);

  // const handleAnimationComplete = () => {
  //   setShowContent(true);
  // };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const svgs = document.querySelectorAll('.roadmap-line');

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const svg = svgs[index];
        const title = section.querySelector('.section-title');

        if (title) {
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            title.classList.add('in-view');
          } else {
            title.classList.remove('in-view');
          }
        }

        if (svg) {
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            svg.classList.add('in-view');
          } else {
            svg.classList.remove('in-view');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <div className="home-page">
      <Header />
      {/* {!showContent && <Animation onComplete={handleAnimationComplete} />}
      {showContent && (
        <div className="home-content">
          
        </div>
      )} */}
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-text">
            <h1 className="hero-title">Welcome to Mocha Chats</h1>
            <h2 className="hero-tagline">Your go-to hub for Gen Z networking over coffee!</h2>
          </div>
          <div className="hero-image-container">
            <img src={heroImage} alt="Mocha Chats Hero" className="hero-image" />
          </div>
        </section>

        {/* About Us Section */}
        <section className="about-section section">
          <div className="about-content">
            <h2 className="section-title">About Us</h2>
            <p>
              Mocha Chats is dedicated to creating meaningful connections over coffee. We help Gen Z career seekers find networking opportunities in the tech industry while enjoying their favorite brews.
            </p>
          </div>
        </section>

        {/* Roadmap Line SVG */}
        <svg className="roadmap-line" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100" y2="100" />
        </svg>
{/* Contact Section */}
<section className="services-section section">
          <div className="services-content">
            <h2 className="section-title">Our Services</h2>
          </div>
        </section>
        {/* Services Overview Section */}
        <section className="services-section section">
          <div className="services-content">
            <div className="service-card">
              <h3>Coffee Meetups</h3>
              <p>Join our coffee meetups to network with other professionals in the tech industry. It's the perfect blend of career growth and caffeine!</p>
            </div>
            <div className="service-card">
              <h3>Career Advice</h3>
              <p>Get personalized career advice from experts in the tech field. We offer consultations to help you navigate your career path.</p>
            </div>
            <div className="service-card">
              <h3>Consultations</h3>
              <p>Schedule one-on-one consultations with industry experts to get insights on your career journey and strategies for success.</p>
            </div>
          </div>
        </section>

        {/* Roadmap Line SVG */}
        <svg className="roadmap-line" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100" y2="100" />
        </svg>

        {/* Contact Section */}
        <section className="contact-section section">
          <div className="contact-content">
            <h2 className="section-title">Contact Us</h2>
            <p>We'd love to hear from you! Feel free to reach out to us at:</p>
            <p><strong>Email:</strong> contact@mochachats.com</p>
            <p><strong>Phone:</strong> +1 (234) 567-8901</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
