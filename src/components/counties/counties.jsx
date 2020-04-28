import React from "react";
import TableHead from "../commons/tableHead/tableHead";
import {twoDecimals} from "../utils/utils";
import _ from "lodash";

const Counties =({dataCounties,sortColumn, onSort}) => {
  
  const columns = [
    {path:'county', label: 'Judet'},
    {path:'numberInfected', label: 'Cazuri pe judet'},
    {path:'infectionPercentage', label: 'Procent Infectati' },
    {path:'totalPopulation', label: 'Total Locuitori'}
  ];
  
  const  sorted = _.orderBy(dataCounties, [sortColumn.path], [sortColumn.order]);
  return(
    <div className="counties-situation">
      <div className="table">
        <h2>Cazuri confirmate pe judet</h2>
  
        <TableHead columns={columns} onSort={onSort} />
        
        <ul className="list">
          {dataCounties && sorted.map((item, i) =>
            (
              <li className="row" key={`J-${i}`}>
                <span className="value">{item.county}</span>
                <span className="value">{item.numberInfected}</span>
                <span className="value">{twoDecimals(item.infectionPercentage)}%</span>
                <span className="value">{item.totalPopulation}</span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
};

export default Counties;