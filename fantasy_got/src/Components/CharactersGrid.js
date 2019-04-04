import React from "react";
import CharactersCards from "./CharactersCards";

const CharactersGrid = ({characters}) => {

  const charNodes = characters.map((character, index) => {
    return(
      <CharactersCards key={index} bio={character.bio} name={character.name}  pic_url={character.pic_url} score={character.score}/>
    );
  });



  return (

    <section className="character-gallery">
      {charNodes}
    </section>
  )

}
export default CharactersGrid;
