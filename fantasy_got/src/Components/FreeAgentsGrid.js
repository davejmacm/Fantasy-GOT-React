import React from "react";
import FreeAgentsCards from "./FreeAgentsCards";

const FreeAgentsGrid = ({characters}) => {

  const charNodes = characters.map((character, index) => {
    return(
      <FreeAgentsCards key={index} bio={character.bio} name={character.name}  pic_url={character.pic_url} score={character.score}/>
    );
  });



  return (

    <section className="character-gallery">
      {charNodes}
    </section>
  )

}
export default FreeAgentsGrid;
