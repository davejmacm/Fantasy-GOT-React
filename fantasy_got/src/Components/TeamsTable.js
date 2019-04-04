import React from "react";
import TeamsRows from "./TeamsRows";

const TeamsTable = ({teams}) => {

  const teamNodes = teams.map((team, index) => {
    return(
      <TeamsRows key={index} league_id={team.league_id} name={team.name} owner={team.owner}  total_score={team.total_score} user_id={team.user_id}/>
    );
  });



  return (
    <table className = "standings">
     <tbody>
     <tr>
       <th>Rank</th>
       <th>Name</th>
       <th>Owner</th>
       <th>Score</th>
     </tr>
      {teamNodes}
     </tbody>
    </table>
  )

}
export default TeamsTable;
