import React, {Component}  from "react";
import TeamsTable from "./TeamsTable";
import fire, {db} from '../config/fire';
import * as firebase from 'firebase';

class Teams extends Component {
  constructor(props) {
    super(props);
    this.getAllTeams = this.getAllTeams.bind(this);
    this.authListener = this.authListener.bind(this);
    this.state = {
      teams: [],
      user: {},
      uid: [],
      league_id: []
    };
  }

componentDidMount(){

  this.authListener();
};

authListener(){
fire.auth().onAuthStateChanged((user) => {
  if(user) {
      this.setState({ user: user });
      var uid = firebase.auth().currentUser.uid
      this.setState({uid: uid})
console.log(uid);

      var league_id = db.collection('leagues')
                      .where("users","array-contains", uid)
                      .onSnapshot((collection => {
                        const league_id = collection.docs.map(doc => doc.id)
                        this.setState({ league_id })
      console.log(this.state.league_id[0]);
      this.getAllTeams(this.state.league_id[0]);
    })
  )
  } else {
    this.setState({ user: null });
    console.log('not logged in',this.setState.user);
  }
});
}


getAllTeams(league_id){
var query = db.collection('teams')
          .where('league_id', '==', league_id)
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
