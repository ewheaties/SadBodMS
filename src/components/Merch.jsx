import React from 'react';

import ImageGallery from './widgets/ImageGallery';

import Coasters from '/images/merch-images/coasters.jpeg';
import SkullShirt from '/images/merch-images/skullshirt.png';

import '/css/merch.css';

  function Merch() {

    const images = [
      Coasters,
      SkullShirt
      // Add more image URLs here
    ];

    return (
      <div class="merch">
      <h1>Merch!</h1>
      <ImageGallery images={images} />
      </div>
    );
  }
  
  export default Merch;