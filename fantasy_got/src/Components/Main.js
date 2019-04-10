import React, {Component} from 'react';
import "../App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Teams from "./Teams";
import Characters from "./Characters";
import Scoring from "./Scoring";
import FreeAgents from "./FreeAgents";
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
      <div className ="background">
        <Navbar />
        <div className="auth-buttons">
        <button className="btn-league">League Change</button>
        <button className="btn-logout" onClick={this.logout}><a href="/">Logout</a></button>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/teams" component={Teams} />
        <Route path="/characters" component={Characters} />
        <Route path="/scoring" component={Scoring} />
        <Route path="/free_agents" component={FreeAgents} />
      </div>
      </React.Fragment>
    </Router>
  );
 }
}

export default Main;
