import React from "react";
import CharactersCards from "./CharactersCards";

const CharactersGrid = ({characters}) => {

  const charNodes = Object.keys(characters).map(character => {
    return(
      <CharactersCards name={character.name} bio={character.bio} pic_url={character.pic_url} score={character.score}/> //key={index}
    );
  });



  return (

    <section className="character-gallery">
      {charNodes}
    </section>
  )

}
export default CharactersGrid;
