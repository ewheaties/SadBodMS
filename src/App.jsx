import React from 'react';
import '../css/styles.css';
import '../css/normalize.css';


/* import Smiley from '/images/smiley.png';  */

import Header from './components/Header';
import Home from './components/Home'; 
import About from './components/About'; 
import Merch from './components/Merch';
import Events from './components/Events';
import Contact from './components/Contact';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="master-container">
    
      <Header/> 
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      
    </div>
  );
}

export default App;