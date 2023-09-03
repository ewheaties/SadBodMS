import React from 'react';

import FbButton from '/images/buttons/facebook.png';

const FacebookLink = ({facebookLink}) => {

  return (
    <a href={facebookLink} target="_blank" rel="noopener noreferrer">
      <img src={FbButton} alt="Facebook Page" />
    </a>
  );
}

export default FacebookLink;