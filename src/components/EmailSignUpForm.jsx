import React, { useState } from 'react';
import '/css/events.css';

const EmailSignUpForm = () => {

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic here to submit the email to your backend or email service
    console.log('Email submitted:', email);
    // You can also clear the input field after submission if needed
    setEmail('');
    setIsSubmitted(true);
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