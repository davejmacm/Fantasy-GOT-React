import React, {Component}  from "react";
import CharactersGrid from "./CharactersGrid";
import fire, {db} from '../config/fire';
import * as firebase from 'firebase';

class Characters extends Component {
  constructor(props){
    super(props);
    this.getAllCharacters = this.getAllCharacters.bind(this);
    this.authListener = this.authListener.bind(this);
    this.state = {
      characters: [],
      user: {},
      uid: [],
      league_id: []
    }
  }

componentDidMount(){
  // this.getAllCharacters();
  this.authListener();
  console.log("th.st.user:", this.state.uid);
  console.log("charUser:", firebase.auth().currentUser);
};


authListener(){
fire.auth().onAuthStateChanged((user) => {
  if(user) {
    this.setState({ user: user });
    var uid = firebase.auth().currentUser.uid
    this.setState({uid: uid})
    console.log(uid);
    console.log(this.state.uid);


    var league_id = db.collection('leagues').where("users","array-contains", uid).get();
    // .then(collection => {
    //   const characters = collection.docs.map(doc => doc.data())
    //   this.setState({ league_id })
    //
    // });
    console.log("char league_id:", league_id);
    this.getAllCharacters(league_id);

  } else {
    this.setState({ user: null });
    console.log('not logged in',this.setState.user);
  }
});
}



getAllCharacters(league_id){
    console.log("th.st.user:", this.state.user);
  // var uid = firebase.auth().currentUser.uid;
  // var league_id = db.collection('leagues').where("users","array-contains", uid);
  // console.log("char league_id:", league_id);
var query = db.collection('characters')
          .where('league_id', '==', league_id)
          .orderBy('score', 'desc')
          .limit(50)
          .onSnapshot(collection => {
            const characters = collection.docs.map(doc => doc.data())
            this.setState({ characters })

          })
          }




  render(){

    return (
      <div className = "char-page">
      <h1>Character List</h1>
      <div className="button">
        <form action="/free_agents" method="get">
          <input type="submit" value="Free Agents"/>
        </form>
      </div>
        <CharactersGrid characters={this.state.characters}/>
      </div>
    );
  }

}
export default Characters;

// {this.state.characters_data.name}
// {this.state.characters_data.score}
