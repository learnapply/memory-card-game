import React from 'react'

function Scoreboard({bestScore, currentScore}) {
  return (
    <div>
      <p>{bestScore}</p>
      <p>{currentScore}</p>
    </div>
  )
}

export default Scoreboard