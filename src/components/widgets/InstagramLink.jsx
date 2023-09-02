import React from 'react';

const InstagramLink = ( { instagramLink }) => {

  const imageUrl = '/images/buttons/instagram.png';
  return (
    <a href={instagramLink} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt="Instagram Page" />
    </a>
  );
}

export default InstagramLink;