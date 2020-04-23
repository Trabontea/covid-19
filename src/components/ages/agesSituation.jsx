import React from 'react';
import Chart from "react-apexcharts";
import './ageSituation.styles.scss';


const AgesSituation =({ages, propertiesAges, valuesAges}) => {
  console.log('ages:', ages);
  console.log(propertiesAges, valuesAges);
  
  const dataChart = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: propertiesAges
      }
    },
    series: [
      {
        name: "Persoane",
        data: valuesAges
      }
    ]
  };
  
  return(
    <div className="ages-situation">
      <h3>Cazuri dupa varsta</h3>
      <Chart className="ages-situation_chart"
        options={dataChart.options}
        series={dataChart.series}
        type="bar"
        width="800"
      />
    </div>
  )
};

export default AgesSituation;