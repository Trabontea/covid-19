import React from 'react';
import Card from "../commons/card/card";
import './info-general.style.scss';
import {format} from '../utils/utils'


const InfoGeneral =({general, currDay}) => {
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
    </div>
  )
};
export default InfoGeneral;