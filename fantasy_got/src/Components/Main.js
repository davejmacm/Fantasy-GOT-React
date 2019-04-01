import React, {Component} from 'react';
import "../App.css";
import Navbar from "./Navbar";
import Teams from "./Teams";
import Characters from "./Characters";
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
        <div className="auth-buttons">
        <button className="btn-league">League Change</button>
        <button className="btn-logout" onClick={this.logout}>Logout</button>
        </div>
        <Route path="/teams" component={Teams} />
        <Route path="/characters" component={Characters} /> 
        <Route path="/scoring" component={Scoring} />
      </React.Fragment>
    </Router>
  );
 }
}

export default Main;
