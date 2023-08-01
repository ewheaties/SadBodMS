import React from 'react';

import '/css/about.css';

import AlexBio from './friends/AlexBio';
import JamesBio from './friends/JamesBio';
import JoeBio from './friends/JoeBio';
import JeremyBio from './friends/JeremyBio';
import CameronBio from './friends/CameronBio';


  function About() {
    return (

      
      <div class="about">
        <h1 class="about-title">About!</h1>
        <AlexBio />
        <JamesBio />
        <JoeBio />
        <JeremyBio />
        <CameronBio />
      
        {/*** Page Ends ***/}  
      </div>
    );
  }
  
  export default About;