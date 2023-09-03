import React from 'react';

import TtButton from '/images/buttons/tiktok.png';

const TiktokLink = ( {tiktokLink} ) => {

    return (
    <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
      <img src={TtButton} alt="Tiktok Page" />
    </a>
  );
}

export default TiktokLink;