import React, { useState, useEffect } from "react";
import Card  from '../card/card';
import History from "../history/history";
import {DateLocale} from "../utils/utils"
import './directory.style.scss'

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
  console.log('currDAy::', currDay);
  
  return (
    <div>
      {hasError ? hasError :
        <div className="container">
          <div className="current-date">
            {general && general.datePublishedString ?
              <div>
                <span>Data Publicarii: </span>
                <span>{DateLocale(general.datePublishedString)}</span>
              </div>
                : ''}
          </div>
          <div className="generals">
            {general && general.total ?
              <Card info={general.total}
                    name={'Total Imbolnaviri'}
              /> : ''
            }
            {currDay && Object.values(currDay)[3] ?
              <Card info={Object.values(currDay)[3].cured}
                    name={'Total Vindecati'}
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
        </div>
      }
    </div>
  );
};
export default Directory;