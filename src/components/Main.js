import React, { useState } from "react";
import Scoreboard from "./Scoreboard";
import Card from "./Card";
import { images as imagesArr } from "../data/animals";
import { shuffle } from "../utils";

function Main() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);
  const [images, setImages] = useState(imagesArr);

  function handleClick(id) {
    if (clickedIds.includes(id)) {
      if (currentScore > bestScore) setBestScore(currentScore);
      setCurrentScore(0);
      setClickedIds([]);
      setImages(shuffle(images));
    } else {
      setClickedIds([...clickedIds, id]);
      setCurrentScore(currentScore + 1);
      setImages(shuffle(images));
    }
  }

  return (
    <>
      <Scoreboard bestScore={bestScore} currentScore={currentScore} />
      <div className="cards-container">
        {images.map((image) => {
          return (
            <Card
              key={image.id}
              id={image.id}
              name={image.name}
              imgUrl={image.src}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </>
  );
}

export default Main;
