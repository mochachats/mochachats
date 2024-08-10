import React, { useState } from 'react';
import Animation from '../components/Animation';
import '../styles/Home.css'; // Ensure the CSS file is correctly linked

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  return (
    <div className="home-page">
      {!showContent && <Animation onComplete={handleAnimationComplete} />}
      {showContent && (
        <div className="home-content">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <h1>Welcome to Mocha Chats!</h1>
              <p>Explore our platform for coffee lovers and career seekers.</p>
              <button className="cta-button">Get Started</button>
            </div>
          </section>

          {/* Additional homepage content */}
          <div className="additional-content">
            {/* Your homepage content here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
