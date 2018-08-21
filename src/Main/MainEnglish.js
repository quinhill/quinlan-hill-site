import React, { Component } from 'react';
import './main.css'
import BioEng from '../Bio/BioEng';
import ProjectsEng from '../Projects/ProjectsEng';
import Skills from '../Skills';

class MainEnglish extends Component {
  constructor() {
    super()

    this.state = {
      bio: false,
      projects: false,
      bioHover: false,
      projectsHover: false,
      skills: true,
    }
  }

  showBio = () => {
    this.setState({
      bio: !this.state.bio
    })
  }

  bioHover = () => {
    this.setState({
      bioHover: !this.state.bioHover
    })
  }

  showProjects = () => {
    this.setState({
      projects: !this.state.projects,
      skillsHover: !this.state.skillsHover
    })
  }

  projectsHover = () => {
    this.setState({
      projectsHover: !this.state.projectsHover,
      skills: !this.state.skills    
    })
  }

  render() {
    return (
      <aside>
        <div className="sidebar">
          <div className="button-container">
            <button
              className="bio-button button"
              onClick={this.showBio}
              onMouseOver={this.bioHover}
              onMouseOut={this.bioHover}
            >
              bio
            </button>
          </div>
          {this.state.bioHover || this.state.bio ? <BioEng /> : null}
          <div className="button-container">
            <button
              className="projects-button button"
              onClick={this.showProjects} 
              onMouseOver={this.projectsHover}
              onMouseOut={this.projectsHover}
            >
              projects
            </button>
          </div>
          {this.state.projectsHover || this.state.projects ?     <ProjectsEng 
              bio={this.state.bio}
              bioHover={this.state.bioHover}
            /> : null}
          <div className="button-container">
            <button
              className="skills-button button"
              onClick={this.showSkills}
              onMouseOver={this.skillsHover}
              onMouseOut={this.skillsHover}
            >
              skills
            </button>
          </div>
          {this.state.projects || this.state.projectsHover ?  null : <Skills />}
        </div>
      </aside>
    )
  }
}

export default MainEnglish;