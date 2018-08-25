import React from 'react';
import './main.css';
import Bio from '../Bio/Bio';
import Projects from '../Projects/Projects';
import Resume from '../Resume';
import Skills from '../Skills';
import Contact from '../Contact';
import BioGer from '../Bio/BioGer';
import ProjectsGer from '../Projects/ProjectsGer';

const Main = ({props}) => {
  
  let display;
  if (props.display === 'bio' && props.english) {
    display = <Bio />
  } else if (props.display === 'bio' && !props.english) {
    display = <BioGer />
  } else if (props.display === 'projects' && props.english) {
    display = <Projects />
  } else if (props.display === 'projects' && !props.english) {
    display = <ProjectsGer />
  } else if (props.display === 'skills') {
    display = <Skills />
  } else if (props.display === 'resume') {
    display = <Resume />
  } else if (props.display === 'contact') {
    display = <Contact />
  } 

  return (
    <div className="main">
      {display}
    </div>
  )
}

export default Main;