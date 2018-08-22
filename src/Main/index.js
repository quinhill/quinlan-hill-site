import React from 'react';
import './main.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Bio from '../Bio/Bio';
import Projects from '../Projects/Projects';
import Resume from '../Resume';
import Skills from '../Skills';
import Contact from '../Contact';

const Main = () => {
  return (
    <div className="main">
      <Switch>
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" component={Bio} />
        </Switch>
    </div>
  )
}

export default Main;