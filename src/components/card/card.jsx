import React from "react";

const Card = ({info, name}) => {
  return (
    <div className="Card">
      <span>{name} : </span>
      <span>{info}</span>
    </div>
  )
};

export default Card;