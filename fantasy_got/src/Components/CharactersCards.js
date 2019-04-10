import React from 'react';
import errorPic from "../images/2rqqg5.jpg";

const CharactersCards = (props) => {
  if (!props) return null;

  console.log("charCard bio:", props.bio);

  return(
    <div className="character-card">
      <img className="character-pic" src={props.pic_url} onError={(e)=>{e.target.onerror = null; e.target.src=errorPic}}/>

      <div className="character-details">
        <p> Name: <a href="/characters/character.id"> {props.name} </a> </p>
        <p> Score: {props.score} </p>
      </div>
    </div>
  )
}

export default CharactersCards;
