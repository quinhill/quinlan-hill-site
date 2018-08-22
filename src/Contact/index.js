import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div>
      <p className="contact-info">
        2402 S Corona St, 80210 Denver, CO
      </p>
      <span>phone
        <a 
          className="phone" 
          href="tel:+17208094383"
        >
          (720) 809-4383
        </a>
      </span>
      <a 
        className="email"
        href="mailto:quinlan@quinlanhill.com"
      >
        quinlan@quinlanhill.com
      </a>
    </div>
  )
}

export default Contact;