import React, { Component } from 'react';
import './App.css';

import { HeaderSection, LandingSection, FooterSection } from './Sections/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderSection/>
        <LandingSection/>
        <FooterSection/>
      </div>
    );
  }
}

export default App;
