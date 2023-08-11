import React from 'react';
import FacebookLink from './widgets/FacebookLink'; 
import InstagramLink from './widgets/InstagramLink'; 
import '/css/footer.css';

  function Footer() {
 
    return (
      <div class="footer">
        <div class="footer-container">
            <div class="links-container">
            <FacebookLink/>
            <InstagramLink/>
            </div>
            <p> For booking and events email</p>
            <p> sadbodband@gmail.com </p>
        </div>
      </div>
    );
  }
  
  export default Footer;