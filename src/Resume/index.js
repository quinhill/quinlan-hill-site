import React from 'react';
import './resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <img className="resume-img" src="/quin-resume.jpg" />
      <p className="download-resume">
        Download résumé:
        <a 
          href="/quinlan-hill-resume-color.pdf" 
          download
        >
          color
        </a>
        |
        <a 
          href="/quinlan-hill-resume-grayscale.pdf" 
          download
        >
          printer friendly (grayscale)
        </a>
      </p>
    </div>
  )
}

export default Resume;