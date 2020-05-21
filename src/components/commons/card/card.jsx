import React from "react";
import './card.style.scss'
import UpdateDate from "../updataDate/update-date";

const Card = ({info, name, procent, option, updateDate}) => {
  return (
    <div className={option ? 'card card-white' : 'card card-grey'}>
      {option ?
        <h3> {name}</h3>
        : <p className='card-title'>{name} </p>
      }
      { updateDate ? <UpdateDate updateDate={updateDate} /> : ''}
      <p className='card-value'>
        <span>{info ? info : 'N/A'} </span>
        <span className="card-procent">{procent}{procent ? '% din total' : ''}</span>
      </p>
      
    </div>
  )
};

export default Card;