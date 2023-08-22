import React, { useState } from 'react';

import DaggerLeft from '/images/buttons/dagger-left.png';
import DaggerRight from '/images/buttons/dagger-right.png';

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
        <img class="gallery-images" src={images[currentImageIndex]} alt="Gallery" />
        <div class="gallery-buttons">
            <button onClick={handlePrevClick}>
                <p>Back</p>
                <img class="dagger-left" src={DaggerLeft} alt="SadBod" />
            </button>
            <button onClick={handleNextClick}>
                <p>Next</p>
            <img class="dagger-right" src={DaggerRight} alt="SadBod" />
            </button>
        </div>
    </div>
  );
};

export default ImageGallery;
