import React from 'react';

const FacebookLink = ({facebookLink}) => {
  const imageUrl = './images/facebook-1.png'; // Replace with the URL of the image you want to use
  //https://www.facebook.com/sadbodband
  return (
    <a href={facebookLink} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt="Facebook Page" />
    </a>
  );
}

export default FacebookLink;