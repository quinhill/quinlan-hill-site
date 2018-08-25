import React, { Component } from 'react';
import './nav.css';


class Nav extends Component {
  constructor() {
    super()
    this.state = {
      bio: 'active',
      projects: '',
      resume: '',
    }
  }

  toDisplay = (event) => {
    const id = event.target.id;
    this.props.toDisplay(id);
    this.setActive(id)
  }

  setActive = (id) => {
    Object.keys(this.state).forEach(key => {
      if (key === id) {
        this.setState({ [key]: 'active'})
      } else {
        this.setState({ [key] : ''})
      }
    })
  }
  
  render() {
    return (
      <nav>
        <button
          onClick={this.toDisplay} 
          id='bio'
          className={`nav ${this.state.bio}`}
        >
          Bio
        </button>
        <button
          onClick={this.toDisplay} 
          id='projects' 
          className={`nav ${this.state.projects}`}
        >
          Projects
        </button>
        <button
          onClick={this.toDisplay} 
          id='resume' 
          className={`nav ${this.state.resume}`}
        >
          Résumé
        </button>
      </nav>
    )
  }
}

export default Nav;