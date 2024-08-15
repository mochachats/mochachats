import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import heroImage from '../styles/images/hero.png';
import intro1 from '../styles/images/intro1.jpeg';
import intro2 from '../styles/images/intro2.jpeg';

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
              <button className="about-button btn">Learn More!</button>
            </div>
            <div className="about-image-container">
              <img src={heroImage} alt="About Us" className="about-image" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section section">
          <div className="services-content">
            <h2 className="service-title">Our Services</h2>
            <div className="service-cards-container">
              <div className="service-card" id="networking-events">
                <div className="service-card-inner">
                  <div className="service-icon">🤝</div>
                  <h3 className="service-card-title">Networking Events</h3>
                  <p className="service-card-description">Join our curated networking events designed to bring together the brightest minds in Gen Z.</p>
                </div>
              </div>
              <div className="service-card" id="virtual-coffee-chats">
                <div className="service-card-inner">
                  <div className="service-icon">☕</div>
                  <h3 className="service-card-title">Virtual Coffee Chats</h3>
                  <p className="service-card-description">Connect with like-minded individuals over virtual coffee chats from the comfort of your home.</p>
                </div>
              </div>
              <div className="service-card" id="workshops-seminars">
                <div className="service-card-inner">
                  <div className="service-icon">🛠️</div>
                  <h3 className="service-card-title">Workshops & Seminars</h3>
                  <p className="service-card-description">Participate in workshops and seminars led by industry experts to level up your skills.</p>
                </div>
              </div>
            </div>
            <button className="services-button btn">Learn More!</button>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-container">
            <div className="image-collage">
              <img src={heroImage} alt="Collage Image 1" className="collage-image image1" />
              <img src={heroImage} alt="Collage Image 2" className="collage-image image2" />
              <img src={heroImage} alt="Collage Image 3" className="collage-image image3" />
            </div>
            <div className="contact-text">
              <h2 className="contact-title">Join the Club!</h2>
              <p className="contact-description">
              Reach out and join the conversation with fellow coffee enthusiasts who are as passionate about building connections as you are. Let's chat and make something amazing happen together!
              </p>
              <button className="contact-button">Let’s Chat</button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
