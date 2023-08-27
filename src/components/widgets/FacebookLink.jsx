import React from 'react';

const FacebookLink = ({facebookLink}) => {
  const imageUrl = './images/buttons/facebook.png'; 
  return (
    <a href={facebookLink} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt="Facebook Page" />
    </a>
  );
}

export default FacebookLink;