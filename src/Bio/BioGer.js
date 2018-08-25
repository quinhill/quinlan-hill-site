import React from 'react';
import './bio.css';

const BioGer = () => {
  return (
    <div className="bio-container">
      <div className="bio-text">
        <p className="text">
          Ich bin ein Frontend Developer in Denver, Colorado, USA. Als Amerikaner in der Schweiz aufgewachsen, bin ich hierhin gezogen, um meiner technischen Neugier nachzugehen. Den Austausch von Information und die schnelle Modernisierung die technologische Entwicklung ermöglichte, hatte grossen Einfluss auf mein Leben. Genau dieser Einfluss, hat mich an die Turing School of Software and Design nach Denver gebracht, wo ich vom Komputerinteressierten, zum Kompetenten Coder in HTML, CSS und JavaScript geworden bin.
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

export default BioGer;