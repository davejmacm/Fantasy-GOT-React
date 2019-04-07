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


      var league_id = db.collection('leagues')
                      .where("users","array-contains", uid)
                      .onSnapshot((collection => {
                        const league_id = collection.docs.map(doc => doc.id)
                        this.setState({ league_id })

      this.getAllCharacters(this.state.league_id[0]);
    })
  )
  } else {
    this.setState({ user: null });
    console.log('not logged in',this.setState.user);
  }
});
}



getAllCharacters(league_id){

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
