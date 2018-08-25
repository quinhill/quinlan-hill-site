import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="address">
        <p className="contact-info">Address:</p>
        <p className="contact-info">
          2402 S Corona St, 80210 Denver, CO
        </p>
      </div>
      <span>Phone:
        <a 
          className="link" 
          href="tel:+17208094383"
        >
          (720) 809-4383
        </a>
      </span>
      <span>
        Email:
        <a 
          className="link"
          href="mailto:quinlan@quinlanhill.com"
        >
          quinlan@quinlanhill.com
        </a>
      </span>
    </div>
  )
}

export default Contact;