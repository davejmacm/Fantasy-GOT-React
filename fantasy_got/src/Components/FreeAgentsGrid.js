import React from "react";
import FreeAgentsCards from "./FreeAgentsCards";

const FreeAgentsGrid = ({characters}, {uid}) => {

  const charNodes = characters.map((character, index) => {
    return(
      <FreeAgentsCards key={index} bio={character.bio} name={character.name}  pic_url={character.pic_url} score={character.score}  />
    );
  });



  return (
console.log("charNodes charGrid:", charNodes),
    <section className="character-gallery">
      {charNodes} 
    </section>
  )

}
export default FreeAgentsGrid;
