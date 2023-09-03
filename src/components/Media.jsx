import React from 'react';
import YoutubeVideo from './widgets/YoutubeVideo';
import ImageGallery from './widgets/ImageGallery';

import BandCoverPicture from '/images/media-images/bandblackwhite.jpeg';
import GroupPic from '/images/media-images/group-pic.jpeg';

import SpotifyPlayer from 'react-spotify-player';


import '/css/media.css';

  function Media() {
 // size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '90%',
  height: 500,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'


    const youtubeVideoId = 'fPFaF_R3WBk';
    const images = [
      BandCoverPicture,
      GroupPic
      // Add more image URLs here
    ];
    return (

      
      <div class="media">
      <h1>Media!</h1>
        <div class="media-container">
        <h2>Setlists</h2>
          <div class="spotify-container">
          
          <SpotifyPlayer
          uri="spotify:playlist:2byCq9diCIezK0MuojAUAs"
          size={size}
          view={view}
          theme={theme}
        />
          </div>
        
          <h2>Pictures</h2>
          <ImageGallery images={images} />
          <h2>Videos</h2>
          <YoutubeVideo videoId={youtubeVideoId} />
        </div>
      </div>
    );
  }
  
  export default Media;