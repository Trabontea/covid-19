import React, {useState} from "react";
import {DateLocale} from "../utils/utils";
import TableHead from "../commons/tableHead/tableHead";
import _ from "lodash";
import UpdateDate from "../commons/updataDate/update-date";
import {columns} from "./columns";

const DailyHistory = ({history, updateDate}) => {
  const [show, setShow] = useState({show: false});
  const [sortColumn, setSortColumn] = useState({path: 'datePublishedString', order: 'desc'});
  
  
  
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
  
  // console.log('aaa', sortColumn);
  const sorted = _.orderBy(history, [sortColumn.path], [sortColumn.order]);
  
  return (
    <div className="daily-history" style={{ height: show ? '10rem': 'auto'}}>
      <div className="title-section">
        <div className="left">
          <h2>Numar de cazuri pe zile</h2>
          <UpdateDate updateDate={updateDate}/>
        </div>
        <div className="right">
          <button
            className='btn-toggle'
            onClick={() => setShow(!show)}>
            {show ? "Vezi tabelul" : "Ascunde Tabelul"}
          </button>
        </div>
      </div>
        <div  className="table" style={{display: show ? 'none': 'block'}}>
          <TableHead columns={columns} onSort={handleSort}/>
          <ul className="list">
            {history  && sorted.map(item =>
            (<li className="row" key={item.datePublished}>
                <span className="value">{DateLocale(item.datePublishedString)}</span>
                <span className="value">{item.infected}</span>
                <span className="value">{item.cured}</span>
                <span className="value">{item.deaths}</span>
              </li>
                )
              )
            }
          </ul>
        </div>
      </div>
  )
};

export default DailyHistory;