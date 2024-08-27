import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Ensure this path is correct
import About from './pages/About'; // Ensure this path is correct
import Services from './pages/Services'; // Ensure this path is correct
import Reachout from './components/Reachout'; // Ensure this path is correct
import Footer from './components/Footer'; // Ensure this path is correct
import './styles/GlobalStyles.css'; // Import your CSS file

const App = () => (
  <div className="app-container">
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reachout" element={<Reachout />} />
      </Routes>
    </div>
    <Footer />
  </div>
);

export default App;
