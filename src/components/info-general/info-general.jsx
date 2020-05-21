import React, {useEffect, useState} from 'react';
import Card from "../commons/card/card";
import './info-general.style.scss';
import {format} from '../utils/utils'

const InfoGeneral =({general, currDay}) => {
  const [data, setData] = useState({});
  const [hasError, setErrors] = useState(false);
  
  async function fetchData() {
    const url = "https://apifier-key-value-store-prod.s3.amazonaws.com/KUlj8EGfDGHiB0gU1/LATEST?AWSAccessKeyId=AKIAJTQHBVH6QKNNBOIQ&Expires=1589993817&Signature=Uc7uXvxbhSxo0tGQIPXq%2B%2BmwDsw%3D";
    const res = await fetch(url);
    res
      .json()
      .then(res => setData(res))
      .catch(err => setErrors(err));
  }
  
  useEffect(() => {
    let mounted = true;
    fetchData();
    return () => mounted = false;
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