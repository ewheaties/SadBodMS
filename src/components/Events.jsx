import React from 'react';
import EmailSignUpForm from './widgets/EmailSignUpForm';
import '/css/events.css';
import Flyer1 from '/images/2_11flyer.png';
import Flyer2 from '/images/6_10flyer.png';
 
  function Events() {
    return (
      <div class="events"> 
          <h1>Events!</h1>
          <h2>We'll let you know about our upcoming shows!</h2>
          <EmailSignUpForm />
          
          <h2 class="flyer-header"> Pockets, Vero Beach 6/10/23 </h2>
          <img class="flyer" src={Flyer2} alt="SadBod" />
          <h2 class="flyer-header"> Pockets, Vero Beach 2/11/23 </h2>
          <img class="flyer" src={Flyer1} alt="SadBod" />
 
      </div>
    );
  }
  
  export default Events;