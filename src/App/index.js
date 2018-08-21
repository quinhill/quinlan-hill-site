import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import MainEnglish from '../Main/MainEnglish';
import MainGerman from '../Main/MainGerman';
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
        <div className="middle">
          {this.state.english ? <MainEnglish /> :
            <MainGerman />}
        </div>
        <Footer />
      </div>
    )
    
  }
}

export default App;
