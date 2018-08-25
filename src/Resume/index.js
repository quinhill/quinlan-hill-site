import React from 'react';
import './resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <img className="resume-img" src="/quinlan_hill_resume.jpg" />
      <p className="download-resume">
        Open résumé:
        <a 
          href="https://drive.google.com/file/d/1n0_umSyzOSV66OhPn6hscMBM18AdsIuT/view" 
          target="_blank"
        >
          color
        </a>
        |
        <a 
          href="https://drive.google.com/file/d/1yb0Ko0y9KYaUcnwEbQlA0j8snXQq-yRN/view" 
          target="_blank"
        >
          printer friendly (grayscale)
        </a>
      </p>
    </div>
  )
}

export default Resume;