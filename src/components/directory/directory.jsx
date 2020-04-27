import React, { useState, useEffect } from "react";
import Card  from '../commons/card/card';
import DailyHistory from "../daily-history/daily-history";
import {DateLocale} from "../utils/utils";
import AgesSituation from "../age-situation/age-situation"
import './directory.style.scss'
import Percentage from "../percentage/percentage";
import Counties from "../counties/counties";
import InfoGeneral from "../info-general/info-general";
import Loader from "../loader/loader";


const Directory = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({});
  const [sortColumn, setSortColumn] = useState({path: 'datePublished', order: 'desc'});
  
  async function fetchData() {
    const res = await fetch("https://api1.datelazi.ro/api/v2/data/ui-data");
    res
      .json()
      .then(res => setData(res))
      .catch(err => setErrors(err));
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const handleSort = path => {
    setSortColumn({path: path, order: 'asc'});
    if(sortColumn.path === path && sortColumn.order ==="asc") {
      setSortColumn({path: path, order: 'desc'});
    }
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
  };
  
  const dataArray = Object.values(data);
  console.log('dataArray', dataArray);
  const general = dataArray[0];
  const currDay = dataArray[1];
  const percentagePersons = dataArray[2];
  const counties = dataArray[5];
  console.log('counties', counties);
  
  return (
    <React.Fragment>
      {hasError ? hasError :
        <div className="container">
          {general  ?
            <div className="website-title">
              <h1>Situatie COVID-19 Romania</h1>
              <p>
                <span>Data Publicarii: </span>
                <span>{DateLocale(general.datePublishedString)}</span>
              </p>
            </div> : <Loader/>
          }
          {general && currDay ?
            <InfoGeneral general={general} currDay={currDay} />
             : ''
          }
          <section className="graphic">
            <div className="age-situation">
              {general ?
                <AgesSituation
                  propertiesAges={Object.keys(general.histogram)}
                  valuesAges={Object.values(general.histogram)}
                />  : ''
              }
            </div>
            <div className="percentage-persons">
              {percentagePersons ?
                <Percentage  percentagePersons={percentagePersons}/> : ''
              }
              {currDay ?
                <Card info={Object.values(currDay)[3].averageAge}
                  name={'Media de varsta'}
                  option={'white'}
                /> : '' }
            </div>
          </section>
          <section className="history-section">
            {currDay  ?
              <DailyHistory
                history={Object.values(currDay)[4]}
                sortColumn={sortColumn}
                onSort={handleSort}
              />  : ''
            }
            {counties  ?
              <Counties
                dataCounties={counties.data}
                sortColumn={sortColumn}
                onSort={handleSort}
              />  : ''
            }
          </section>
        </div>
      }
    </React.Fragment>
  );
};
export default Directory;