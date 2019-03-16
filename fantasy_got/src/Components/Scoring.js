import React from "react";

const Scoring = () => (
  <div className="scoring-page">
  <h1>Scoring </h1>



<p> Below you will find the scoring used for your character's actions. Your character will gain points for: </p>
<div className="scoring"> <span>
  <h3>Violence:</h3>
  <p><strong>+10 pts</strong> Kill random (caps at 50pts)</p>
  <p><strong>+15 pts</strong> Kill White Walker</p>
  <p><strong>+25 pts</strong> Kill Known Character (any character that was draftable)</p>
  <p><strong>+150 pts</strong> Kill a Dragon</p>
  <p><strong>-10 pts</strong> Body part severed (non-lethal)</p>
  <p><strong>-25 pts</strong> Death</p>

  <h3>Wits:</h3>
  <p><strong>+5 pts</strong> Mentions the Iron Throne</p>
  <p><strong>+10 pts</strong> Brutal One-liner</p>
  <p><strong>+15 pts</strong> Uses Magic (includes visions)</p>


  <h3>Status/Power:</h3>
  <p><strong>+50 pts</strong> Acquires Valyrian Steel </p>
  <p><strong>+50 pts</strong> Returns from the Dead </p>
  <p><strong>+200 pts</strong> Claims the Iron Throne</p>

</span></div>
</div>
);

export default Scoring;
