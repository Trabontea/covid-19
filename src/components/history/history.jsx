import React from "react";
import './history.style.scss'
import {DateLocale} from "../utils/utils";

const History = ({history}) => {
  const head = ['Data', 'Infectati', 'Vindecati', 'Decedati'];
  
  console.log('history:', history);
  return (
    <div className="history">
      <div className="table">
        <h2>Numar de cazuri pe zile</h2>
        <ul className="head">
          {
            head.map((el,i)=>(
              <li key={i}><span>{el}</span></li>
            ))
          }
        </ul>
        <ul className="list">
        {history && history.map(item =>
          (
            <li className="row" key={item.datePublished}>
              <span className="date">{DateLocale(item.datePublishedString)}</span>
              <span className="infected">{item.infected}</span>
              <span className="cured">{item.cured}</span>
              <span className="dead">{item.deaths}</span>
             </li>
            )
          )
        }
        </ul>
      </div>
    </div>
  )
};

export default History;