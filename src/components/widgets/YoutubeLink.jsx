import React from 'react';

const YoutubeLink = ({youtubeLink}) => {
  const imageUrl = './images/youtube-1.png'; 
 
  return (
    <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt="YouTube Page" />
    </a>
  );
}

export default YoutubeLink;