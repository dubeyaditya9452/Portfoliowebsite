import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About'; 
import Home from './components/Home'; 
import Contact from './components/Contact';
import Portfolio from './components/Portfolio'

import {   Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />

        </Routes>
      </div>
    
  );
}
