import React from "react";
import './tableHead.style.scss';
import { ReactComponent as Icon} from '../../../assets/sort.svg';
import ReactTooltip from "react-tooltip";

const TableHead = ({columns, onSort}) => {
  return (
    <ul className="head">
      {columns && columns.map((column, i) => (
          <li key={column.path}>
            <div className="cell">
              <span
                data-tip
                data-for={column.label}
              >
                {column.label}
              </span>
                <ReactTooltip
                  className="tooltipHead"
                  id={column.label}
                  place="top"
                  effect="solid"
                >
                  {column.label}
                </ReactTooltip>
              <span className="sort" onClick={() => onSort(column.path)}>
              <Icon/>
            </span>
            </div>
          </li>
        ))
      }
    </ul>
  );
};

export default TableHead;