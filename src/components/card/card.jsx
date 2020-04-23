import React from "react";
import './card.style.scss'

const Card = ({info, name, procent}) => {
  return (
    <div className="card">
      <p className='card-title'>{name} </p>
      <p className='card-value'>
        <span>{info} </span>
        <span className="card-procent">{procent}{procent ? '% din total' : ''}</span>
      </p>
      
    </div>
  )
};

export default Card;