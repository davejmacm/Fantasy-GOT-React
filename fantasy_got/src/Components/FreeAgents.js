import React, {Component}  from "react";
import FreeAgentsGrid from "./CharactersGrid";
import fire, {db} from '../config/fire';

class FreeAgents extends Component {
  constructor(props){
    super(props);
    this.getFreeAgents = this.getFreeAgents.bind(this);
    this.state = {
      characters: []

    }
  }

componentDidMount(){
  this.getFreeAgents();
};

getFreeAgents(){
var charRef = db.collection('characters');
var query = charRef.where('')

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
        <FreeAgentsGrid characters={this.state.characters}/>
      </div>
    );
  }

}
export default FreeAgents;

// {this.state.characters_data.score}
