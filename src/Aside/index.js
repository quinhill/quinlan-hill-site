import React from 'react';
import './aside.css';
import Nav from '../Nav/Nav';

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="language-container">
        <button
          className="language-button"
          onClick={props.toggleLanguage}
        >
          <img className="language" alt="english" src="/united-states.svg" />
          <img className="language" alt="german" src="/germany.svg" />
        </button>
      </div>
      <div className="name-button-container">
        <img className="profile-pic" src="profile.jpg" />
        <h1 className="name">QUINLAN HILL</h1>
        <h3 className="occupation">Software Engineer</h3>
        <div className="linkContainer">
          <a 
            href="https://github.com/quinhill"
            target="_blank"
          >
            <img src="/github-logo.svg" alt="github" className="github" />
          </a>
          <a 
            href="https://www.linkedin.com/in/quinlan-hill/"
            target="_blank"
          >
            <img src="/linked_in_logo.png" alt="linkedin" className="linkedin" />
          </a>
        </div>
      </div>
      <Nav toDisplay={props.toDisplay}/>
    </div>
  )
}

export default Aside;