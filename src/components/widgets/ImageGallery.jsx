import React, { useState } from 'react';

import DaggerLeft from '/images/dagger-left.png';
import DaggerRight from '/images/dagger-right.png';

const ImageGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-gallery">
        
        <button onClick={handlePrevClick}>
            <p>Back</p>
            <img class="dagger-left" src={DaggerLeft} alt="SadBod" />
        </button>
            <img src={images[currentImageIndex]} alt="Gallery" />
        <button onClick={handleNextClick}>
            <p>Next</p>
        <img class="dagger-right" src={DaggerRight} alt="SadBod" />
        </button>
    </div>
  );
};

export default ImageGallery;
