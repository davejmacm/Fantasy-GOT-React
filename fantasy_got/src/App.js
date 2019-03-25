import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main.js';
import Login from './Components/Login.js';
import * as firebase from 'firebase';

class App extends Component {
  render() {
    return (
      <div className="home-page">
        
        <Login/>
      </div>
    );
  }
}

export default App;
