import React from 'react';
import fire, {db} from '../config/fire';

const FreeAgentsCards = (props) => {
  if (!props) return null;

  console.log("charCard bio:", props.bio);
  console.log("charCard uid:", props.uid);
  console.log("charCard uid:", props.league_id);



  return(
    <div className="character-card">
      <img className="character-pic" src={props.pic_url} onError="this.src='images/2rqqg5.jpg';"/>

      <div className="character-details">
        <p> Name: <a href="/characters/character.id"> {props.name} </a> </p>
        <p> Score: {props.score} </p>
        <form>
          <button type="submit" value="Add Character" onClick={props.handleClick(props.name)}>Add Character</button>
        </form>
      </div>
    </div>
  )
}



export default FreeAgentsCards;
// onClick={this.handleClick(props.name)}

// handleClick(name){
//   this.isFull(name)
// }
//
// isFull(name) {
//
//   var roster = db.collection('characters')
//                .where ("team_id", "==", props.league_id)
//   //.then if promise?
//
//   if(roster.length >= 6){
//     window.location.assign("/team_full") // redirect to dropping character page --- not sure if this will work example had complete url path
//   } else {
//     this.addToTeam(name)
//   }
// }
//
//   addToTeam(name){
//     console.log("Hello!");
//     var team_id = db.collection('teams')
//                   .where ("user_id", "==", props.uid)
//                   .where ("league_id", "==", props.league_id)
// //.then if promise?
//     var char_id = db.collection('characters')
//                   .where("name", "==", name) // past in props.Name
//                   .where("league_id", "==", props.league_id)
//                   .onSnapshot((collection => {
//                     const char_id = collection.docs.map(doc => doc.id)
//                   }))
// //.then if promise?
//     db.collection('characters').doc(char_id).update(
//       {team_id: team_id}
//     )
//
//   }
