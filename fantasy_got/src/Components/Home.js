import React, {Component}  from "react";
import Teams from "./Teams";

class Home extends Component {
  constructor(props){
    super(props);

  }

  render(){

    return (
      <div className="home-wall"><span>

        <div className="home-heading">
          <h1>Welcome to a Game of Game of Thrones</h1>
          <h4>"When you play the Game of Thrones: You win or you die"</h4>
        </div>

        <div className="home-content">
          <h3> <a href="/teams"> Team standings</a></h3>

        </div>

        <div className="home-content">
          <h3>Top free agents</h3>
          <img src="/images/crown.jpg" alt="" />
        </div>

        <div className="home-content">
          <h3>Top scorers</h3>
          <img src="/images/crown.jpg" alt=""/>
        </div>
      </span></div>

    )
  }


}
export default Home;
