import React from "react";

function Scoreboard({ bestScore, currentScore }) {
  return (
    <div className="scoreboard">
      <p>Best score: {bestScore}</p>
      <p>Current score: {currentScore}</p>
    </div>
  );
}

export default Scoreboard;
