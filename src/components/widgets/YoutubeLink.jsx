import React from 'react';

import YtButton from '/images/buttons/youtube.png';

const YoutubeLink = ({youtubeLink}) => {

  return (
    <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
      <img src={YtButton} alt="YouTube Page" />
    </a>
  );
}

export default YoutubeLink;