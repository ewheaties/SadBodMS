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
      // Make a POST request to the C# API endpoint
      await axios.post('http://localhost:5000/api/subscribe', { email });
      console.log('Email submitted:', email);
      setEmail('');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };


  return (
    <div>
    <form onSubmit={handleSubmit}>
     {/*  <label htmlFor="email">Sign up for our email list:</label> */}
     <p>Sign up for our email list:</p>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        required
        placeholder="Enter your email"
      />
      <button type="submit">Subscribe</button>
    </form>
    {isSubmitted && <p class="email-sent">Email sent! Thank you for subscribing.</p>}
    </div>
  );
};

export default EmailSignUpForm;