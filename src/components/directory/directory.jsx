import React, { useState, useEffect } from "react";
import Card  from '../card/card';
import History from "../history/history";
import {DateLocale} from "../utils/utils"
import AgesSituation from "../ages/agesSituation"
import './directory.style.scss'
import Percentage from "../percentage/percentage";

const Directory = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetchData();
  }, []);
  
  
  async function fetchData() {
    const res = await fetch("https://api1.datelazi.ro/api/v2/data/ui-data");
    res
      .json()
      .then(res => setData(res))
      .catch(err => setErrors(err));
  }
  
  const dataArray = Object.values(data);
  console.log('dataArray', dataArray);
  const general = dataArray[0];
  const currDay = dataArray[1];
  const percentagePersons = dataArray[2];
  

 
  
  
  return (
    <div>
      {hasError ? hasError :
        <div className="container">
            {general && general.datePublishedString ?
              <div className="website-title">
                <h1>Situatie COVID-19 Romania</h1>
                <p>
                  <span>Data Publicarii: </span>
                  <span>{DateLocale(general.datePublishedString)}</span>
                </p>
              </div> : ''
            }
          <div className="generals">
            {general && general.total ?
              <Card info={general.total}
                    name={'Cazuri Confirmate'}
              /> : ''
            }
            {currDay && Object.values(currDay)[3] ?
              <Card info={Object.values(currDay)[3].cured}
                    name={'Vindecati'}
                    procent = {(Object.values(currDay)[3].cured /general.total *100).toFixed(2) }
              /> : ''
            }
            {currDay && Object.values(currDay)[3] ?
              <Card info={Object.values(currDay)[3].deaths}
                    name={'Decedati'}
                    procent = {(Object.values(currDay)[3].deaths /general.total * 100).toFixed(2) }
              /> : ''
            }
            {currDay && Object.values(currDay)[3] ?
              <Card info={Object.values(currDay)[3].averageAge}
                    name={'Media de varsta'}
              /> : ''
            }
          </div>
          
          <div className="history-section">
            {currDay && Object.values(currDay)[4] ?
              <History history={Object.values(currDay)[4]}/>
              : ''
            }
          </div>
          
          {general && general.histogram ?
            <AgesSituation propertiesAges={Object.keys(general.histogram)}
            valuesAges={Object.values(general.histogram)}/>
            : ''
          }
  
        <div className="percentage-persons">
          {percentagePersons && percentagePersons.percentageOfMen
          && percentagePersons.percentageOfWomen && percentagePersons.percentageOfChildren ?
          <Percentage
            men={percentagePersons.percentageOfMen}
            women={percentagePersons.percentageOfWomen}
            children={percentagePersons.percentageOfChildren}
          /> : ''}
        </div>
          
          
        </div>
      }
    </div>
  );
};
export default Directory;