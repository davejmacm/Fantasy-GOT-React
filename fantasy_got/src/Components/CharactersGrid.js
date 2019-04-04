import React from "react";
import CharactersCards from "./CharactersCards";

const CharactersGrid = ({characters}) => {
console.log("chargrid:", characters);
  const charNodes = characters.map((character, index) => {
    return(
      <CharactersCards key={index} bio={character.bio} name={character.name}  pic_url={character.pic_url} score={character.score}/>
    );
  });



  return (
console.log("charNodes:", charNodes),
    <section className="character-gallery">
      {charNodes}
    </section>
  )

}
export default CharactersGrid;
