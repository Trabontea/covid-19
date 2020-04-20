import React from "react";
import './history.style.scss'

const History = ({history}) => {
  const head = ['Data', 'Infectati', 'Vindecati', 'Decedati'];
  
  const DateLocale = (value) => {
    const arr =  value.split('-');
    let cutOut = arr.splice(0, 1) [0];
    arr.splice(1, 0, cutOut);
    return `${arr[2]}-${arr[0]}-${arr[1]}`;
  };
  
  console.log('history:', history);
  return (
    <div className="history">
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
  )
};

export default History;