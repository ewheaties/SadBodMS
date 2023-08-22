import React from 'react';
import FacebookLink from './widgets/FacebookLink'; 
import InstagramLink from './widgets/InstagramLink';
import YoutubeLink from './widgets/YoutubeLink'; 
import '/css/footer.css';

  function Footer() {
    const facebookLink = 'https://www.facebook.com/sadbodband'; // Replace with your actual Facebook page URL
    const instagramLink = 'https://www.instagram.com/sadbodband';
    const youtubeLink = "https://www.youtube.com/watch?v=E17BNIxDhLA";
    return (
      <div class="footer">
        <div class="footer-container">
            
            <p> For booking and events email</p>
            <p> sadbodband@gmail.com </p>
            <div class="links-container">
            <FacebookLink facebookLink={facebookLink} />
            <InstagramLink instagramLink={instagramLink} />
            <YoutubeLink youtubeLink={youtubeLink} />
            </div>
        </div>
      </div>
    );
  }
  
  export default Footer;