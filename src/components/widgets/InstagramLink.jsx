import React from 'react';

import IgButton from '/images/buttons/instagram.png';

const InstagramLink = ( { instagramLink }) => {

  return (
    <a href={instagramLink} target="_blank" rel="noopener noreferrer">
      <img src={IgButton} alt="Instagram Page" />
    </a>
  );
}

export default InstagramLink;