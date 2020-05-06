import React from "react";
import {DateLocale} from "../../utils/utils";
import './update-date.style.scss';

const UpdateDate = ({updateDate}) => (
  <p className="update-date">
    <span>Data actualizarii: </span>
    <span>{DateLocale(updateDate)}</span>
  </p>
  
);

export default UpdateDate;