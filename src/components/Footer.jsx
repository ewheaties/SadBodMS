import React from 'react';
import FacebookLink from './widgets/FacebookLink'; 
import InstagramLink from './widgets/InstagramLink';
import YoutubeLink from './widgets/YoutubeLink'; 
import TiktokLink from './widgets/TiktokLink'; 
import '/css/footer.css';

  function Footer() {
    const facebookLink = 'https://www.facebook.com/sadbodband'; // Replace with your actual Facebook page URL
    const instagramLink = 'https://www.instagram.com/sadbodband';
    const youtubeLink = "https://www.youtube.com/@SadBod";
    const tiktokLink = "https://www.tiktok.com/@sadbodband?_t=8fBL5Ja8434&_r=1";
    return (
      <div class="footer">
        <div class="footer-container">
            
            <p> For booking and events email</p>
            <p> sadbodband@gmail.com </p>
            <div class="links-container">
            <FacebookLink facebookLink={facebookLink} />
            <InstagramLink instagramLink={instagramLink} />
            <YoutubeLink youtubeLink={youtubeLink} />
            <TiktokLink tiktokLink={tiktokLink} />
            </div>
        </div>
      </div>
    );
  }
  
  export default Footer;