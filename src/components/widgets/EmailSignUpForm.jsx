import React, { useState } from 'react';
import axios from 'axios'; // Import axios library for making HTTP requests
import '/css/events.css';

const EmailSignUpForm = () => {

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
      try {
        const response = await axios.post('https://localhost:7199/api/SignUpRequest/SignUp', {
          //firstName: firstName,
          //lastName: lastName,
          email: email
        });
  
        setResponseMessage(response.data.Message);

      } catch (error) {
        console.error('API call error:', error);
      }
    };


  return (
    <div>
       {/*  <p>Sign up for our email list:</p> */}
    <form onSubmit={handleSubmit}>
     {/*  <label htmlFor="email">Sign up for our email list:</label> */}
     
   
     <div class="email-list">
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        required
        placeholder="Enter your email"
      />
      </div>
      <button type="submit">Subscribe</button>
    </form>
    {isSubmitted && <p class="email-sent">Email sent! Thank you for subscribing.</p>}
    </div>
  );
};

export default EmailSignUpForm;