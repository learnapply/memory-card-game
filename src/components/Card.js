import React from "react";

function Card({ id, imgUrl }) {
  return (
    <div>
      <img src={imgUrl} alt="" />
      <p></p>
    </div>
  );
}

export default Card;
