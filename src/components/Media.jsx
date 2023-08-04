import React from 'react';
import YoutubeVideo from './YoutubeVideo';

import '/css/media.css';

  function Media() {
 
    const youtubeVideoId = 'E17BNIxDhLA';

    return (
      <div class="media">
      <h1>Media!</h1>
      <YoutubeVideo videoId={youtubeVideoId} />
      </div>
    );
  }
  
  export default Media;