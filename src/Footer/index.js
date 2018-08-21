import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p className="contact-info">
        2402 S Corona St, 80210 Denver, CO
      </p>
      <span>phone
        <a className="phone" href="tel:+17208094383">(720) 809-4383</a>
      </span>
      <a 
        href="mailto:quinlan@quinlanhill.com">quinlan@quinlanhill.com
      </a>
      <a 
        href="/quinlan_hill_resume.pdf"
        download
        className="download-resume">
      download resume</a>
    </footer>
  )
}

export default Footer;