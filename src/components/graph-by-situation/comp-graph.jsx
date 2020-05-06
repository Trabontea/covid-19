import React from "react";
import Chart from "react-apexcharts";
import UpdateDate from "../commons/updataDate/update-date";

const CompGraph = ({date, number, name, updateDate, nameComp}) => {
  
  const series =  [{
    name: name,
    data: number
  }];
  
 const options = {
    chart: {
      height: 350,
        type: 'line',
        zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: '',
        align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
      },
    },
    xaxis: {
      categories: date,
    }
  };
 
  return (
    <div  className="border-component">
      <h2>{nameComp}</h2>
      <UpdateDate updateDate={updateDate} />
      <Chart
        options={options}
        series={series}
        type="area"
        height={350} />
    </div>
  )
};

export default CompGraph;