import React from 'react';
import './main.css';
import Bio from '../Bio/Bio';
import Projects from '../Projects/Projects';
import Resume from '../Resume';
import Skills from '../Skills';
import Contact from '../Contact';

const Main = ({props}) => {
  console.log(props.display)
  let display;
  if (props.display === 'bio') {
    display = <Bio />
  } else if (props.display === 'projects') {
    display = <Projects />
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