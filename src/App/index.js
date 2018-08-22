import React, { Component } from 'react';
import './App.css';
import Aside from '../Aside';
import Main from '../Main';

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
        <Main />
      </div>
    )
    
  }
}

export default App;
