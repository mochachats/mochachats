// src/components/Animation.js
import React, { useEffect, useState } from 'react';
import '../styles/Animation.css'; // Ensure the CSS file is correctly linked

const Animation = ({ onComplete }) => {
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    // Set a timer to call onComplete after the animation duration
    const timer = setTimeout(() => {
      setAnimationFinished(true);
      if (onComplete) onComplete();
    }, 5000); // Adjust this duration to match the animation time

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`animation-container ${animationFinished ? 'hide' : ''}`}>
      <div className="cups-animation">
        {/* Your mocha cups animation here */}
      </div>
      {animationFinished && (
        <div className="company-name">Mocha Chats</div>
      )}
    </div>
  );
};

export default Animation;
