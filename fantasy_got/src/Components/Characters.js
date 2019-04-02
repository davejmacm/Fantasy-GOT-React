import React, {Component}  from "react";
import CharactersGrid from "./CharactersGrid";
import fire, {db} from '../config/fire';

class Characters extends Component {
  constructor(props){
    super(props);
    this.getAllCharacters = this.getAllCharacters.bind(this);
    this.state = {
      characters: {
        name:'',
        bio:'',
        pic_url: '',
        score: ''
      }
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
            console.log('character state:', this.state);
            console.log('character name:', this.state.characters[1].name);
            console.log('character bio:', this.state.characters[0].bio);
            console.log('character pic_url:', this.state.characters[0].pic_url);
          })
          }


//             if (snapshot.empty) {
//       console.log('No matching documents.');
//       return;
//     }
//
//     snapshot.forEach(doc => {
//       console.log('all character data',doc.id, '=>', doc.data());
//       console.log('doc.data', doc.data());
//       this.setState = ({characters: doc.data})
//       console.log('state:', this.state);
//     });
//   })
//
// };



  render(){

    return (
      <div className = "char-page">
      <h1>Character List</h1>
      <div className="button">
        <form action="/free_agents" method="get">
          <input type="submit" value="Free Agents"/>
        </form>
      </div>
        // <CharactersGrid characters={this.state.characters}/>
      </div>
    );
  }

}
export default Characters;

// {this.state.characters_data.name}
// {this.state.characters_data.score}
