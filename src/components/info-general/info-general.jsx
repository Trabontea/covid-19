import React, {useEffect, useState} from 'react';
import Card from "../commons/card/card";
import './info-general.style.scss';
import {format} from '../utils/utils'

const InfoGeneral =({general, currDay}) => {
  const [data, setData] = useState({});
  const [hasError, setErrors] = useState(false);
  
  async function fetchData() {
    const url = "https://api.apify.com/v2/key-value-stores/KUlj8EGfDGHiB0gU1/records/LATEST?disableRedirect=true";
    const res = await fetch(url);
    res
      .json()
      .then(res => setData(res))
      .catch(err => setErrors(err));
  }
  
  useEffect(() => {
    fetchData();
    return() => {
    }
  },[]);
  
  const total = general.total;
  const cured =  Object.values(currDay)[3].cured;
  const deaths = Object.values(currDay)[3].deaths;
  const active = total - cured - deaths;
  
  return (
    <div className="info-general">
      <Card
        info={format(total)}
        name={'Cazuri Confirmate'}
      />
      <Card
        info={format(cured)}
        name={'Vindecati'}
        procent={(cured / total * 100).toFixed(2)}
      />
      <Card
        info={format(deaths)}
        name={'Decedati'}
        procent={(deaths / total * 100).toFixed(2)}
      />
      <Card
        info={format(active)}
        name={'Cazuri active'}
        procent={((total - cured - deaths)
          / total * 100).toFixed(2)}
      />
      {hasError ? hasError :
        <Card
          info={format(data.tested)}
          name={'Teste Efectuate'}
        />
      }
    </div>
  )
};
export default InfoGeneral;