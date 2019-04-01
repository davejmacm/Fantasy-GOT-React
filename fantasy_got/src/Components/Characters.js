import React, {Component}  from "react";
import fire, {db} from '../config/fire';

class Characters extends Component {
  constructor(props){
    super(props);
    this.getAllCharacters = this.getAllCharacters.bind(this);
    this.state = {
      characters: {}
    }
  }

componentDidMount(){
  var characters_data = this.getAllCharacters();
  this.setState = ({characters:characters_data})
  console.log('state:', this.state);
};

getAllCharacters(){
var query = db.collection('characters')
          .orderBy('score', 'desc')
          .limit(50)
          .get()
          .then(snapshot=> {
            if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }

    snapshot.forEach(doc => {
      console.log('all character data',doc.id, '=>', doc.data());
      console.log('doc.data', doc.data());
      this.setState = ({characters: doc.data})
      console.log('state:', this.state);
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
};



render(){

  return (
    <div className = "char-page">
    <h1>Character List</h1>

      <div className="button">
        <form action="/free_agents" method="get">
          <input type="submit" value="Free Agents"/>
        </form>
      </div>

    <section class="character-gallery">

      <div class="character-card">
      <img class="character-pic" src="{this.state.characters_data.pic_url}" onerror="this.src='/images/2rqqg5.jpg';"/>

      <div class="character-details">
        <p> Name: <a href="/characters/character.id"> BobbyJim </a> </p>
        <p> Score: +200! </p>
      </div>
    </div>
  </section>

 </div>
);
}

}
export default Characters;

// {this.state.characters_data.name}
// {this.state.characters_data.score}
