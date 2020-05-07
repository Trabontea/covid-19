import React, {useState} from "react";
import TableHead from "../commons/tableHead/tableHead";
import {twoDecimals} from "../utils/utils";
import _ from "lodash";
import UpdateDate from "../commons/updataDate/update-date";

const Counties =({dataCounties,sortColumn, onSort, updateDate}) => {
  const [show, setShow] = useState({show: false});
  
  const columns = [
    {path:'county', label: 'Judet'},
    {path:'numberInfected', label: 'Cazuri pe judet'},
    {path:'infectionPercentage', label: 'Procent Infectati' },
    {path:'totalPopulation', label: 'Total Locuitori'}
  ];
  
  const  sorted = _.orderBy(dataCounties, [sortColumn.path], [sortColumn.order]);
  return(
    <div className="counties-situation"  style={{ height: show ? '10rem': 'auto'}}>
  
      <div className="title-section">
        <div className="left">
          <h2>Cazuri confirmate pe judet</h2>
          <UpdateDate updateDate={updateDate}/>
        </div>
        <div className="right">
          <button className='btn-toggle' onClick={() => setShow(!show)}
          >{show ? "Vezi tabelul" : "Ascunde Tabelul"}</button>
        </div>
      </div>
      <div  className="table" style={{display: show ? 'none': 'block'}}>
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