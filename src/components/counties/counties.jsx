import React, {useState} from "react";
import TableHead from "../commons/tableHead/tableHead";
import {twoDecimals} from "../utils/utils";
import _ from "lodash";
import UpdateDate from "../commons/updataDate/update-date";
import {columns} from "./columns"

const Counties =({dataCounties, updateDate}) => {
  const [show, setShow] = useState({show: false});
  const [sortColumn, setSortColumn] = useState({path: 'numberInfected', order: 'desc'});
  
  const handleSort = path => {
    setSortColumn({path: path, order: 'asc'});
    if(sortColumn.path === path && sortColumn.order === "asc") {
      setSortColumn({path: path, order: 'desc'});
    }
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
  };
  
  const  sorted = _.orderBy(dataCounties, [sortColumn.path], [sortColumn.order]);
  return (
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
        <TableHead columns={columns} onSort={handleSort} />
        
        <ul className="list">
          {dataCounties && sorted.map(item =>
            (
              <li className="row" key={item.county}>
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