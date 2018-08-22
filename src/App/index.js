import React, { Component } from 'react';
import './App.css';
import Aside from '../Aside';
import Bio from '../Bio/Bio';
import Projects from '../Projects/Projects';
import Footer from '../Footer';
import Resume from '../Resume';
import Skills from '../Skills';
import Contact from '../Contact';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      english: true
    }
  }

  toggleLanguage = () => {
    this.setState({
      english: !this.state.english
    })
  }

  render() {
    return (
      <div className="App">
        <Aside
          toggleLanguage={this.toggleLanguage}
        />
        <Switch>
          <Route path="/" component={Bio} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    )
    
  }
}

export default App;
