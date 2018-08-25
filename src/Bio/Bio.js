import React from 'react';
import './bio.css';

const Bio = () => {
  return (
    <div className="bio-container">
      <div className="bio-text">
        <p className="text">
          "I am A Frontend Developer based in Denver, CO. Although American, I grew up in Switzerland, and moved to Denver to pursue my love for tech. The information exchange and modernization that tech has allowed on a global scale has had a huge impact on me. That same impact led me to the Turing School of Software and  Design, where I've gone from a tech enthusiast, to a proficient coder in HTML, CSS, and JavaScript."
        </p>
      </div>
      <div className="skills-container">
        <h1 className="skills-title">Skills</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Git</li>
          <li>JQuery</li>
          <li>Jest</li>
          <li>Enzyme</li>
          <li>Mocha</li>
          <li>Chai</li>
          <li>Pair Programming</li>
          <li>Agile Development</li>
        </ul>
      </div>
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
    </div>
  )
}

export default Bio;