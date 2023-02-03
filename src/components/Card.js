import React from "react";

function Card({ id, name, imgUrl, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(id)}>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default Card;
