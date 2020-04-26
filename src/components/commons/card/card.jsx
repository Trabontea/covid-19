import React from "react";
import './card.style.scss'

const Card = ({info, name, procent, option}) => {
  return (
    <div className={option ? 'card card-white' : 'card card-grey'}>
      {option ?
        <h3> {name}</h3>
        : <p className='card-title'>{name} </p>
      }
      <p className='card-value'>
        <span>{info} </span>
        <span className="card-procent">{procent}{procent ? '% din total' : ''}</span>
      </p>
      
    </div>
  )
};

export default Card;