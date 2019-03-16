import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main.js';
import * as firebase from 'firebase';

class App extends Component {
  render() {
    return (
      <div className="home-page">
        <Main/>
      </div>
    );
  }
}

export default App;
