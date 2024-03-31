import React, { useState } from 'react';
import "./Contact.css";

export default function Contact() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  
  const handleNameChange = (e) => {
    const inputName = e.target.value;
    setName(inputName.charAt(0).toUpperCase() + inputName.slice(1));
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="container">
        <div className="form">
          <form action='#' method='POST'>
            
            <input 
              type='text' 
              name='name' 
              placeholder='Your Name' 
              autoComplete='off' 
              required
              value={name} 
              onChange={handleNameChange} 
            />
            
            <input 
              type='email' 
              name='email' 
              placeholder='Email' 
              autoComplete='off' 
              required
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            
            <textarea 
              name='message' 
              cols={30} 
              rows={6} 
              autoComplete='off' 
              required
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            ></textarea>
            
            <input type='submit' value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
}
