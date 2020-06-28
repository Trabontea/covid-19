import React, { useState, useEffect } from "react";
import Card  from '../commons/card/card';
import DailyHistory from "../daily-history/daily-history";
import {DateLocale} from "../utils/utils";
import AgesSituation from "../age-situation/age-situation"
import Percentage from "../percentage/percentage";
import Counties from "../counties/counties";
import InfoGeneral from "../info-general/info-general";
import Loader from "../loader/loader";
import GraphBySituation from "../graph-by-situation/graph-by-situation";
import Footer from "../footer/footer";
import Cumulative from "../cumulative/cumulative";
import {dataJson} from "../_data/data";

const Directory = () => {
  const [data, setData] = useState({});
  const [hasError, setErrors] = useState(false);
  
  useEffect(() => {
    setData(dataJson)
  },[])
  
  // useEffect(() => {
  //   const abortController = new AbortController();
  //   const signal = abortController.signal;
  //   const API_URL = "https://api1.datelazi.ro/api/v2/data/ui-data";
  //
  //   fetch(API_URL, { signal: signal })
  //     .then(results => results.json())
  //     .then(data => {
  //       setData(data);
  //     })
  //     .catch(error => setErrors(error));
  //   return function cleanup() {
  //     abortController.abort();
  //   };
  // }, []);
  
  const dataArray = Object.values(data);
  //console.log(dataArray);
  const general = dataArray[0];
  const currDay = dataArray[1];
  const percentagePersons = dataArray[2];
  const counties = dataArray[5];
  const quickStats = dataArray[4];
  
  return (
    <React.Fragment>
      { hasError ? hasError :
        <div className="App" style={ {height: general ? '' : '0' }}>
          <div className="container">
          {general  ?
            <div>
              <div className="website-title" >
                <h1>Situatie COVID-19 Romania</h1>
                <p>
                  <span>Data Publicarii: </span>
                  <span>{DateLocale(general.datePublishedString)}</span>
                </p>
              </div>
              
            </div>: <Loader/>
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
                  updateDate={general.last_updated_on_string}
                />  : ''
              }
            </div>
            <div className="percentage-persons">
              {percentagePersons ?
                <Percentage
                  percentagePersons={percentagePersons}
                  updateDate={percentagePersons.last_updated_on_string}
                /> : ''
              }
              {currDay ?
                <Card info={Object.values(currDay)[3].averageAge}
                  name={'Media de varsta'}
                  option={'white'}
                  updateDate ={currDay.last_updated_on_string}
                /> : '' }
            </div>
          </section>
         
          <section className="infected-graph">
            {currDay  ?
              <GraphBySituation
                history={Object.values(currDay)[4]}
                updateDate ={currDay.last_updated_on_string}
              />  : ''
            }
          </section>
          <section className="history-section">
            {currDay  ?
              <DailyHistory
                history={Object.values(currDay)[4]}
                updateDate ={currDay.last_updated_on_string}
              />  : ''
            }
            {counties  ?
              <Counties
                dataCounties={counties.data}
                updateDate = {counties.lastUpdatedString}
              />  : ''
            }
          </section>
          
          <section className="cumulative-section">
            {quickStats ?
              <Cumulative
                history={quickStats.history}
                updateDate={quickStats.last_updated_on_string}
              /> : ''
            }
          </section>
        </div>
          {general  ? <Footer /> : ''}
        </div>
      }
    </React.Fragment>
  );
};
export default Directory;