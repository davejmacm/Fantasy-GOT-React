import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main.js';
import Login from './Components/Login.js';
import fire from './config/fire';
// import * as firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props);
    this.authListener = this.authListener.bind(this);
    this.state = {
      user: {}
    }
}

componentDidMount(){
  this.authListener();
}

  //Add realtime listener to check for logged in user
  authListener(){
  fire.auth().onAuthStateChanged((user) => {
    if(user) {
      this.setState({ user });
      console.log(user);
    } else {
      this.setState({ user: null });
      console.log('not logged in',this.setState.user);
    }
  });
}


  render() {
    return (
      <div className="home-page">
    
      {this.state.user ? (<Main />) : (<Login/>)}

      </div>
    );
  }
}

export default App;
