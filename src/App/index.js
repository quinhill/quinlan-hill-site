import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import NavEnglish from '../Main/MainEnglish';
import NavGerman from '../Main/MainGerman';
import Main from '../Main';
import Footer from '../Footer';

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
        <Header
          toggleLanguage={this.toggleLanguage}
        />
        <div className="main">
          {this.state.english ? <NavEnglish /> :
            <NavGerman />}
        <Main />
        <Footer />
        </div>
      </div>
    )
    
  }
}

export default App;
