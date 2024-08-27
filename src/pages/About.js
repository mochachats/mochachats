import React from 'react';
import Header from '../components/Header';
import '../styles/About.css';
import logo from '../styles/images/logo.jpeg';
import founder from '../styles/images/intro1.jpeg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      {/* <section className="hero-a">
          <img src={founder} alt="Mocha Chats Hero" className="hero-image" />
          <div className="hero-overlay">
            <h1 className="about-page-title">Mocha Chats</h1>
            <p className="hero-subtitle">A story of community, innovation, and inspiration for Gen Z professionals.</p>
          </div>
        </section> */}
      <div className="about-container">
        {/* Original Article Header */}
        <motion.header 
          className="article-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="Mocha Chats logo" className="article-logo"/>
          <div className="article-meta">
            <h1 className="article-title">Brewing Connections Over Coffee: The Mocha Chats Story</h1>
            <p className="article-byline">By Mocha Chats Team | August 26, 2024</p>
          </div>
        </motion.header>

        {/* Original Article Content */}
        <div className="article-content">
          {/* Mission Section */}
          <motion.section 
            className="article-section"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Our Mission</h2>
            <p>
              At Mocha Chats, we’re creating more than just a space to connect. We are cultivating a vibrant community where Gen Z professionals, creatives, and innovators come together to network, share ideas, and get inspired. Whether you’re building a startup, exploring new tech trends, or simply enjoying a meaningful conversation, we’ve got the perfect blend of opportunities waiting for you.
            </p>
          </motion.section>

          {/* Meet Our Founder Section */}
          <motion.section 
            className="article-section"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Meet Our Founder</h2>
            <div className="founder-content">
              <img src={founder} alt="Monica Para" className="founder-image"/>
              <div className="founder-text">
                <p>
                  Monica Para, a Forbes 30 Under 30 candidate, founded Mocha Chats with a vision to connect Gen Z professionals across tech, branding, and fintech. With a BS in Computer Science + Advertising from the University of Illinois, Monica has gained significant experience through her roles as a Kode With Klossy Instructor, Fed Chicago Web Marketing Intern, and Technical Product Manager Intern at Motorola Solutions. She currently serves as a Backend Systems Developer for Derivatives Trading at Bank of America.
                </p>
                <blockquote className="founder-quote">
                  “At Mocha Chats, we believe in the power of connection and collaboration. Our goal is to create a space where ideas flow freely and innovation thrives.” – Monica Para
                </blockquote>
                <p>
                  Monica’s commitment to fostering a supportive and innovative community is reflected in the diverse range of events and resources Mocha Chats offers. From networking opportunities to educational workshops, her dedication to empowering the next generation of professionals drives every aspect of the organization. Through her leadership, Mocha Chats has become a beacon for those seeking to make meaningful connections and advance their careers.
                </p>
              </div>
            </div>
          </motion.section>
{/* Brand Goals Section */}
<motion.section 
          className="article-section"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our Goals and Vision</h2>
          <p>
            At Mocha Chats, our mission extends beyond simply providing a platform for networking. We aim to cultivate a community that inspires and empowers Gen Z professionals to reach their full potential. Our core goals include:
          </p>
          <ul>
            <li><strong>Empowerment:</strong> Equip our members with the tools and knowledge needed to excel in their careers.</li>
            <li><strong>Innovation:</strong> Foster a space where new ideas and innovative solutions can be discussed and developed.</li>
            <li><strong>Connection:</strong> Build meaningful relationships and collaborations within the professional community.</li>
            <li><strong>Growth:</strong> Provide opportunities for personal and professional development through workshops, events, and resources.</li>
          </ul>
          <p>
            Through these initiatives, we aspire to create a thriving ecosystem where our members can thrive, innovate, and make impactful connections.
          </p>
        </motion.section>
          {/* Awareness & Education Section */}
          <motion.section 
            className="article-section"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Awareness & Education</h2>
            <div className="awareness-content">
              <motion.div 
                className="awareness-item"
                whileHover={{ scale: 1.05 }}
              >
                <h3>Cybersecurity</h3>
                <p>Learn how to protect your digital assets and stay ahead of evolving threats in the online world.</p>
              </motion.div>
              <motion.div 
                className="awareness-item"
                whileHover={{ scale: 1.05 }}
              >
                <h3>Branding</h3>
                <p>Develop a compelling brand identity that resonates with your audience and drives engagement.</p>
              </motion.div>
              <motion.div 
                className="awareness-item"
                whileHover={{ scale: 1.05 }}
              >
                <h3>Fintech Education</h3>
                <p>Delve into the innovative world of fintech, where finance and technology converge to shape the future.</p>
              </motion.div>
            </div>
          </motion.section>

          {/* Join Our Community Section */}
          <motion.section 
          className="article-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Join Our Community</h2>
          <p>Connect with like-minded professionals on Slack and Discord, where collaboration and innovation thrive.</p>
          <div className="community-buttons">
            <motion.a 
              href="https://discord.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="join-button"
              whileHover={{ scale: 1.1 }}
            >
              Join Discord
            </motion.a>
            <motion.a 
              href="https://mochachats.slack.com/join/shared_invite/zt-2o19asgzk-AvLIe2glc1o_K7cO_S23Tw#/shared-invite/email" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="join-button"
              whileHover={{ scale: 1.1 }}
            >
              Join Slack
            </motion.a>
          </div>
        </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;
