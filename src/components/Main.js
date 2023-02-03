import React, { useState } from "react";
import Scoreboard from "./Scoreboard";
import Card from "./Card";
import { images } from "../data/animals";

function Main() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <>
      <Scoreboard bestScore={bestScore} currentScore={currentScore} />
      <div className="cards-container">
        {images.map((image) => {
          return <Card id={image.id} imgUrl={image.src} />;
        })}
      </div>
    </>
  );
}

export default Main;
