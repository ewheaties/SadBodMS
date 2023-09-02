import React from 'react';

const TiktokLink = ( {tiktokLink} ) => {
  const imageUrl = '/images/buttons/tiktok.png';
    return (
    <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt="Tiktok Page" />
    </a>
  );
}

export default TiktokLink;