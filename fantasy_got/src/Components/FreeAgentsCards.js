import React from 'react';
import errorPic from "../images/2rqqg5.jpg";
import fire, {db} from '../config/fire';

const FreeAgentsCards = (props) => {
  if (!props) return null;

  console.log("charCard handleClick:", props.handleClick);
  console.log("charCard uid:", props.uid);
  console.log("charCard uid:", props.league_id);



  return(
    <div className="character-card">
      <img className="character-pic" src={props.pic_url} onError={(e)=>{e.target.onerror = null; e.target.src=errorPic}}/>

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
//onClick={props.handleClick(props.name)}

// handleClick(name){
//   this.isFull(name)
// }
// isFull(name) {
//
//   var team_id = db.collection('teams')
//                 .where ("user_id", "==", "ZZXOcgXGnOQXfrlfUe6LcE8iYvl2") //this.state.uid
//                 // .where ("league_id", "==", this.state.league_id[0])
//                    .get();
//                    .then(doc.id => {
//                      this.setState({ team_id })
//                    })
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
