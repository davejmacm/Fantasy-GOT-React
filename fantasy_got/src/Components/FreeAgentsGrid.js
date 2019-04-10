import React from "react";
import FreeAgentsCards from "./FreeAgentsCards";

const FreeAgentsGrid = ({characters, uid, league_id, handleClick}) => {

console.log("uid grid:", uid);
console.log("characters:", league_id);

  const charNodes = characters.map((character, index) => {
    return(
      <FreeAgentsCards key={index} bio={character.bio} name={character.name}  pic_url={character.pic_url} score={character.score} uid = {uid} league_id={league_id} handleClick = {handleClick}/>
    );
  });



  return (

    <section className="character-gallery">
      {charNodes}
    </section>
  )

}
export default FreeAgentsGrid;
