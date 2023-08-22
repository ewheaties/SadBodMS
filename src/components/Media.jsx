import React from 'react';
import YoutubeVideo from './widgets/YoutubeVideo';
import ImageGallery from './widgets/ImageGallery';

import BandCoverPicture from '/images/media-images/bandblackwhite.jpeg';
import GroupPic from '/images/media-images/group-pic.jpeg';

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
          {/* <h2>Videos</h2>
          <YoutubeVideo videoId={youtubeVideoId} /> */}
        </div>
      </div>
    );
  }
  
  export default Media;