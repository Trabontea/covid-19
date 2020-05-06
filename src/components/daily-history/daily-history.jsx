import React from "react";
import {DateLocale} from "../utils/utils";
import TableHead from "../commons/tableHead/tableHead";
import _ from "lodash";
import UpdateDate from "../commons/updataDate/update-date";

const DailyHistory = ({history, sortColumn, onSort, updateDate}) => {
  const columns = [
    {path:'datePublished', label: 'Data'},
    {path:'infected', label: 'Infectati'},
    {path:'cured', label: 'Vindecati' },
    {path:'deaths', label: 'Decedati'}
  ];
  
  console.log('aaa', sortColumn);
  const sorted = _.orderBy(history, [sortColumn.path], [sortColumn.order]);
  
  return (
    <div className="daily-history">
      <div className="table">
        <h2>Numar de cazuri pe zile</h2>
        <UpdateDate updateDate={updateDate}/>
        
        <TableHead columns={columns} onSort={onSort}/>
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