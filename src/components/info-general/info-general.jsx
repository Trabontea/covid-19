import React from 'react';
import Card from "../commons/card/card";
import './info-general.style.scss';

const InfoGeneral =({general, currDay}) => {
  return (
    <div className="info-general">
      <Card
        info={general.total}
        name={'Cazuri Confirmate'}
      />
      <Card
        info={Object.values(currDay)[3].cured}
        name={'Vindecati'}
        procent={(Object.values(currDay)[3].cured / general.total * 100).toFixed(2)}
      />
      <Card
        info={Object.values(currDay)[3].deaths}
        name={'Decedati'}
        procent={(Object.values(currDay)[3].deaths / general.total * 100).toFixed(2)}
      />
      <Card
        info={general.total - Object.values(currDay)[3].cured - Object.values(currDay)[3].deaths}
        name={'Cazuri active'}
        procent={((general.total - (Object.values(currDay)[3].cured) - Object.values(currDay)[3].deaths)
          / general.total * 100).toFixed(2)}
      />
    </div>
  )
};
export default InfoGeneral;