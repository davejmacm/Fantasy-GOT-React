import React from 'react';

const FreeAgentsCards = (props) => {
  if (!props) return null;

  console.log("charCard bio:", props.bio);
  console.log("charCard uid:", props.uid);



  return(
    <div className="character-card">
      <img className="character-pic" src={props.pic_url} onError="this.src='images/2rqqg5.jpg';"/>

      <div className="character-details">
        <p> Name: <a href="/characters/character.id"> {props.name} </a> </p>
        <p> Score: {props.score} </p>
        <form>
          <button type="submit" value="Add Character" >Add Character</button>
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
//                .where ("team_id", "==", league_id) //var either from props (props.league_id) or from auth authListener
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
//                   .where ("user_id", "==", uid) //var
//                   .where ("league_id", "==", league_id) // var --- not totally required as settling for one team per user but adds more robustness
// //.then if promise?
//     var char_id = db.collection('characters')
//                   .where("name", "==", name) // past in props.Name
//                   .where("league_id", "==", league_id)
//                   .onSnapshot((collection => {
//                     const char_id = collection.docs.map(doc => doc.id)
//                   }))
// //.then if promise?
//     db.collection('characters').doc(char_id).update(
//       {team_id: team_id}
//     )
//
//   }
