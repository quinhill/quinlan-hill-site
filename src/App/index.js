import React, { Component } from 'react';
import './App.css';
import Aside from '../Aside';
import Main from '../Main';

class App extends Component {
  constructor() {
    super()
    this.state = {
      display: 'bio',
      english: true
    }
  }

  toggleLanguage = () => {
    this.setState({
      english: !this.state.english
    })
  }

  toDisplay = (id) => {
    this.setState({ display: id })
  }

  render() {
    return (
      <div className="App">
        <Aside
          toDisplay={this.toDisplay}
          toggleLanguage={this.toggleLanguage}
        />
        <Main props={this.state}/>
      </div>
    )
    
  }
}

export default App;
