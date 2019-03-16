import React, {Component} from 'react';
import "../App.css";
import Navbar from "./Navbar";
import Scoring from "./Scoring";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state ={
      status: "homePage"
    }
  };


render(){
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Route path="/scoring" component={Scoring} />
      </React.Fragment>
    </Router>
  );
 }
}

export default Main;
