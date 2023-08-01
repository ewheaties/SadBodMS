import React from 'react';
import EmailSignUpForm from './EmailSignUpForm';
import '/css/events.css';
 
  function Events() {
    return (
      <div class="events"> 
      <h1>Events!</h1>
      <h2>We'll let you know about our upcoming shows!</h2>
      <EmailSignUpForm />
      </div>
    );
  }
  
  export default Events;