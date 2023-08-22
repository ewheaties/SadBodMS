import React from 'react';

const YoutubeLink = ({youtubeLink}) => {
  const imageUrl = './images/buttons/youtube.png'; 
 
  return (
    <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt="YouTube Page" />
    </a>
  );
}

export default YoutubeLink;