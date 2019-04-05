import React from 'react';

const TeamsRows = (props) => {
  if (!props) return null;

  console.log("user_id:", props.user_id);

  return(

    <tr>
      <th>0</th>
      <th>{props.name}</th>
      <th>{props.owner}</th>
      <th>{props.total_score}</th>
    </tr>
  )
}

export default TeamsRows;
