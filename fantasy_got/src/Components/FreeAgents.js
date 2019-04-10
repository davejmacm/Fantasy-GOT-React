import React, {Component}  from "react";
import FreeAgentsGrid from "./FreeAgentsGrid";
import fire, {db} from '../config/fire';
import * as firebase from 'firebase';

class FreeAgents extends Component {
  constructor(props){
    super(props);
    this.getFreeAgents = this.getFreeAgents.bind(this);
    this.authListener = this.authListener.bind(this);
    this.state = {
      characters: [],
      user: {},
      uid: '',
      league_id: ''
    }
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


      var league_id = db.collection('leagues')
                      .where("users","array-contains", uid)
                      .onSnapshot((collection => {
                        const league_id = collection.docs.map(doc => doc.id)
                        this.setState({ league_id })

      this.getFreeAgents(this.state.league_id[0]);
    })
  )
  } else {
    this.setState({ user: null });
    console.log('not logged in',this.setState.user);
  }
});
}

getFreeAgents(league_id){
var charRef = db.collection('characters')
          .where('league_id', '==', league_id)
          .where('team_id', '==', '')
          .orderBy('score', 'desc')
          .limit(50)
          .onSnapshot(collection => {
            const characters = collection.docs.map(doc => doc.data())
            this.setState({ characters })

          })
          }




  render(){
    console.log("Freeagents league_id:", this.state.league_id[0]);
    console.log("Freeagents uid:", this.state.uid);
    return (

      <div className = "char-page">
      <h1>Free Agents</h1>
      <p>All available Characters</p>
        <FreeAgentsGrid characters={this.state.characters}
                        uid={this.state.uid}
                        league_id={this.state.league_id[0]}
        />
      </div>
    );
  }

}
export default FreeAgents;
