import React, {Component}  from "react";
import fire, {db} from '../config/fire';

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      owner: ""
    };
  }

  var listOfTeams = db.collection('Teams').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(doc.data());
    })
  })


  render(){



    return (
      <div className = "teams-page">
      <h1>Team standings</h1>



        <table className = "standings">
         <tbody>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Owner</th>
            <th>Score</th>
          </tr>
          <tr>
          {listOfTeams}
          </tr>
        </tbody>

        </table>
      </div>
    );
   }
  }


  export default Teams;
