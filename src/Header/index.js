import React from 'react';
import './Header.css';

const Header = (props) => {
  console.log(props)
  return (
    <header>
      <div className="name-button-container">
        <h1 className="name">QUINLAN HILL</h1>
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
      <div className="language-container">
        <button
          className="language-button"
          onClick={props.toggleLanguage}
        >
          <img className="language" alt="english" src="/united-states.svg" />
          <img className="language" alt="german" src="/germany.svg" />
        </button>
      </div>
    </header>
  )
}

export default Header;