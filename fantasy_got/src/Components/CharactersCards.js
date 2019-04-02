import React from 'react';

const CharacterCards = (props) => {
  if (!props) return null;


  return(
    <div className="character-card">
      <img className="character-pic" src={props.pic_url} onerror="this.src='images/2rqqg5.jpg';"/>

      <div className="character-details">
        <p> Name: <a href="/characters/character.id"> {props.name} </a> </p>
        <p> Score: {props.score} </p>
      </div>
    </div>
  )
}

export default CharacterCards;
