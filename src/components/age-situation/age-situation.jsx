import React from 'react';
import Chart from "react-apexcharts";
import './age-situation.styles.scss';
import UpdateDate from "../commons/updataDate/update-date";

const AgeSituation =({ propertiesAges, valuesAges, updateDate}) => {
  //console.log('ages:', ages);
  //console.log(propertiesAges, valuesAges);
  
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
      <h2>Cazuri dupa varsta</h2>
      <UpdateDate updateDate={updateDate} />
      <Chart className="ages-situation_chart"
        options={dataChart.options}
        series={dataChart.series}
        type="bar"
      />
    </div>
  )
};

export default AgeSituation;