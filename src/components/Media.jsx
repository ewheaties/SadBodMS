import React from 'react';
import YoutubeVideo from './widgets/YoutubeVideo';
import BandCoverPicture from '/images/gallery-images/bandblackwhite.jpeg';
import GroupPic from '/images/gallery-images/group-pic.jpeg';
import ImageGallery from './widgets/ImageGallery';

import '/css/media.css';

  function Media() {
 
    const youtubeVideoId = 'E17BNIxDhLA';
    const images = [
      BandCoverPicture,
      GroupPic
      // Add more image URLs here
    ];
    return (

      
      <div class="media">
      <h1>Media!</h1>
        <div class="media-container">
          <h2>Pictures</h2>
          <ImageGallery images={images} />
          <h2>Videos</h2>
          <YoutubeVideo videoId={youtubeVideoId} />
        </div>
      </div>
    );
  }
  
  export default Media;