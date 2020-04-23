import React from 'react';
import Chart from "react-apexcharts";
import './percentage.styles.scss';

const Percentage =({men, women, children}) =>{
  
  const data = {
    series: [men, women, children],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Barbati', 'Femei', 'Copiii'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  };
  
  return (
    <div className="percentage">
      <h3>Cazuri dupa varsta</h3>
      <Chart
        options={data.options}
        series={data.series}
        type="pie" width={380} />
    </div>
  )
};

export default Percentage;