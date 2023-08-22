import React from 'react';

const InstagramLink = ( { instagramLink }) => {
   // Replace with your actual Facebook page URL
  const imageUrl = './images/buttons/instagram.png'; // Replace with the URL of the image you want to use
  //https://www.facebook.com/sadbodband
  return (
    <a href={instagramLink} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt="Instagram Page" />
    </a>
  );
}

export default InstagramLink;