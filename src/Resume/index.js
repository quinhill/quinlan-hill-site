import React from 'react';
import './resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <img className="resume-img" src="/quinlan_hill_resume.jpg" />
      <p className="download-resume">
        Open résumé:
        <a 
          href="https://drive.google.com/file/d/1rZY1d1PSGv9LQ3Q2ELhQIknFrKy8wzO7/view" 
          target="_blank"
        >
          color
        </a>
        |
        <a 
          href="https://drive.google.com/file/d/12Yo8rbFo97EXS-agc_mKJ-u3abnO4xAt/view" 
          target="_blank"
        >
          printer friendly (grayscale)
        </a>
      </p>
    </div>
  )
}

export default Resume;