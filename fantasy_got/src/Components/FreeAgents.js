import React, {Component}  from "react";
import CharactersGrid from "./CharactersGrid";
import fire, {db} from '../config/fire';

class Characters extends Component {
  constructor(props){
    super(props);
    this.getAllCharacters = this.getAllCharacters.bind(this);
    this.state = {
      characters: []

    }
  }

componentDidMount(){
  var characters_data = this.getAllCharacters();
};

getAllCharacters(){
var query = db.collection('characters')
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
