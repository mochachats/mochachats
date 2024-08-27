import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reachout from './components/Reachout';
// import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/reachout" element={<Reachout />} />
      {/* <Route path="/contact" element={<Contact />} />  */}
    </Routes>
    <Footer />
  </div>
);

export default App;
