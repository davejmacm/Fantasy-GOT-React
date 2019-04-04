import React, {Component}  from "react";
import TeamsTable from "./TeamsTable";
import fire, {db} from '../config/fire';

class Teams extends Component {
  constructor(props) {
    super(props);
    this.getAllTeams = this.getAllTeams.bind(this);
    this.state = {
      teams: []
    };
  }

componentDidMount(){
  var team_data = this.getAllTeams();
};

getAllTeams(){
var query = db.collection('teams')
          .orderBy('total_score', 'desc')
          .limit(50)
          .onSnapshot(collection => {
            const teams = collection.docs.map(doc => doc.data())
            this.setState({ teams })
          console.log('team state:', this.state.teams);
          })
          }


  render(){

    return (
      <div className = "teams-page">
      <h1>Team standings</h1>

      <TeamsTable teams={this.state.teams}/>

      </div>
    );
   }
  }


  export default Teams;
