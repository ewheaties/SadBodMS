import React from 'react';
import YoutubeVideo from './widgets/YoutubeVideo';
import BandCoverPicture from '/images/bandblackwhite.jpeg';
import ImageGallery from './widgets/ImageGallery';

import Alex from '/images/alex.jpeg';
import James from '/images/james.jpeg';
import Joe from '/images/joe.jpeg';
import Jeremy from '/images/jeremy.jpeg';
import Cameron from '/images/cameron.jpeg';

import '/css/media.css';

  function Media() {
 
    const youtubeVideoId = 'E17BNIxDhLA';
    const images = [
      Alex,
      James,
      Joe,
      Jeremy, 
      Cameron,
      BandCoverPicture
      // Add more image URLs here
    ];
    return (

      
      <div class="media">
      <h1>Media!</h1>
        <div class="media-container">
          {/* <h2>Pictures</h2> */}
          <ImageGallery images={images} />
          {/* <h2>Videos</h2> */}
          <YoutubeVideo videoId={youtubeVideoId} />
        </div>
      </div>
    );
  }
  
  export default Media;