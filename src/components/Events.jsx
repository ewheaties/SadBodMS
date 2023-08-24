import React from 'react';
import EmailSignUpForm from './widgets/EmailSignUpForm';
import '/css/events.css';
import Flyer1 from '/images/events-images/2_11flyer.png';
import Flyer2 from '/images/events-images/6_10flyer.png';
import Flyer3 from '/images/events-images/7_22flyer.jpeg'; 

import ImageGallery from './widgets/ImageGallery';

 
  function Events() {

    const images = [
      Flyer1,
      Flyer2
      // Add more image URLs here
    ];

    return (
      <div class="events"> 
          <h1>Events!</h1>
          <h2>We'll let you know about our next shows!</h2>
          <EmailSignUpForm />
          <h2>Upcoming Shows</h2>
          <div class="image-gallery">
          <img class="gallery-images" src={Flyer3} alt="SadBod" />
          </div>
          <h2>Past Shows</h2>
          <ImageGallery images={images} />
          {/* <h2 class="flyer-header"> Pockets, Vero Beach 6/10/23 </h2>
          <img class="flyer" src={Flyer2} alt="SadBod" />
          <h2 class="flyer-header"> Pockets, Vero Beach 2/11/23 </h2>
          <img class="flyer" src={Flyer1} alt="SadBod" /> */}
 
      </div>
    );
  }
  
  export default Events;