import React, {Component} from 'react';
import "../App.css";
import Navbar from "./Navbar";
import Teams from "./Teams";
import Scoring from "./Scoring";
import { BrowserRouter as Router, Route } from "react-router-dom";
import fire from '../config/fire'

class Main extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this)
    this.state ={
      status: "homePage"
    }
  };

logout(){
  fire.auth().signOut();
}

render(){
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <button onClick={this.logout}>Logout</button>
        <Route path="/teams" component={Teams} />
        <Route path="/scoring" component={Scoring} />
      </React.Fragment>
    </Router>
  );
 }
}

export default Main;
