import React from "react";
import './tableHead.style.scss';
import { ReactComponent as Icon} from '../../../assets/sort.svg';


const TableHead = ({columns, onSort}) => {
  return (
    <ul className="head">
      {columns && columns.map(column => (
          <li key={column.path}>
            <p className="cell">
              <span>{column.label}</span>
              <span className="sort" onClick={() => onSort(column.path)}>
              <Icon/>
            </span>
            </p>
          </li>
        ))
      }
    </ul>
  );
}

export default TableHead;