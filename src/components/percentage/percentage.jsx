import React from 'react';
import Chart from "react-apexcharts";
import './percentage.styles.scss';

const Percentage =({percentagePersons}) =>{
  const men = percentagePersons.percentageOfMen;
  const women = percentagePersons.percentageOfWomen;
  const children = percentagePersons.percentageOfChildren;
  
  const data = {
    series: [men, women, children],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Barbati', 'Femei', 'Copii'],
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
      <h2>Cazuri după gen</h2>
      <Chart
        className="percentage_chart"
        options={data.options}
        series={data.series}
        type="donut"
      />
      <div className="mobile">
        <p>
          <span className="description">Barbati: </span>
          <span>{men}%</span>
        </p>
        <p>
          <span  className="description">Femei: </span>
          <span>{women}%</span>
        </p>
        <p>
          <span  className="description">Copii: </span>
          <span>{children}%</span>
        </p>
      </div>
      
    </div>
  
  )
};

export default Percentage;