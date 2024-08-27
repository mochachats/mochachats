import React from 'react';
import heroImage from '../styles/images/hero.png'; // Add import for heroImage

const Reachout = () => {
  // Function to handle button click
  const handleButtonClick = () => {
    window.location.href = 'mailto:mochachatsteam@gmail.com';
  };

  return (
    // Contact Section
    <section className="contact-section">
      <div className="contact-container">
        <div className="image-collage">
          <img src={heroImage} alt="collage item1" className="collage-image image1" />
          <img src={heroImage} alt="Collage2" className="collage-image image2" />
          <img src={heroImage} alt="Collage-3" className="collage-image image3" />
        </div>
        <div className="contact-text">
          <h2 className="contact-title">Join the Club!</h2>
          <p className="contact-description">
            Reach out and join the conversation with fellow coffee enthusiasts who are as passionate about building connections as you are. Let's chat and make something amazing happen together!
          </p>
          <button className="contact-button" onClick={handleButtonClick}>
            Let’s Chat
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reachout;
