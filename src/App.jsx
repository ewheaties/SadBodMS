import React from 'react';
import '../css/styles.css';
import '../css/normalize.css';


/* import Smiley from '/images/smiley.png';  */

import Header from './components/Header';
import Home from './components/Home'; 
import Media from './components/Media';
import About from './components/About'; 
import Merch from './components/Merch';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './NotFound'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="master-container">
    
      <Header/> 
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/events" element={<Events />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;