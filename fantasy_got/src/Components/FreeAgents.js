import React, {Component}  from "react";
import FreeAgentsGrid from "./FreeAgentsGrid";
import fire, {db} from '../config/fire';
import * as firebase from 'firebase';

class FreeAgents extends Component {
  constructor(props){
    super(props);
    this.getFreeAgents = this.getFreeAgents.bind(this);
    this.authListener = this.authListener.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.isFull = this.isFull.bind(this);
    // this.addToTeam = this.addToTeam.bind(this);
    this.state = {
      characters: [],
      user: {},
      uid: '',
      league_id: '',
      roster: [],
      team_id: '',
      char_id: ''
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
        };


// handleClick(name){
//     this.isFull(name);
//       };
//
//
// isFull(name) {
//
//   var team_id = db.collection('teams')
//                 .where ("user_id", "==", "ZZXOcgXGnOQXfrlfUe6LcE8iYvl2") //this.state.uid
//                 // .where ("league_id", "==", this.state.league_id[0])
//                 .onSnapshot(collection => {
//                   const team_id = collection.docs.map(doc => doc.id)
//                   this.setState({ team_id })
//                 })
//
// console.log("team_id is full:", this.state.team_id[0]);
//   var roster = db.collection('characters')
//               .where ("team_id", "==", "l4Kn6swpuFOK6sF8hKpi")//this.state.team_id
//               .onSnapshot(collection => {
//                 const roster = collection.docs.map(doc => doc.data())
//                 this.setState({ roster })
//               })
//               //.then if promise?
// console.log("Roster var:", this.state.roster)
//
//             if(this.state.roster.length >= 6){
//                 window.location.assign("/team_full") // redirect to dropping character page --- not sure if this will work example had complete url path
//               } else {
//                 this.addToTeam(name)
//               }
//             };
//
//
// addToTeam(name) {
// console.log("Hello!", this.state.team_id);
//   // var team_id = this.state.team_id
//             //.then if promise?
//   var char_id = db.collection('characters')
//                 .where("name", "==", name) // past in props.Name
//                 .where("league_id", "==", this.state.league_id[0])
//                 .onSnapshot(collection => {
//                  const char_id = collection.docs.map(doc => doc.id)
//                  this.setState({ char_id })
//                })
//                console.log("char_id:", this.state.char_id);
//                console.log("league_id:", this.state.league_id);
//             //.then if promise?
//     db.collection('characters').doc(this.state.char_id).update(
//             {team_id: this.state.team_id}
//     )
//
//   };




  render(){

    return (

      <div className = "char-page">
      <h1>Free Agents</h1>
      <p>All available Characters</p>
        <FreeAgentsGrid characters={this.state.characters}
                        uid={this.state.uid}
                        league_id={this.state.league_id[0]}
                        handleClick={this.handleClick}
        />
      </div>
    );
  }

}
export default FreeAgents;
