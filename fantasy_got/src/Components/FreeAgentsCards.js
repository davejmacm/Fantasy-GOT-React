import React from 'react';

const FreeAgentsCards = (props) => {
  if (!props) return null;

  console.log("charCard bio:", props.bio);

  // addTeam(){
    console.log("Hello!");
  // }

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
// onClick={this.addTeam}
