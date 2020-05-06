import React from "react";
import {DateLocale} from "../utils/utils";
import CompGraph from "./comp-graph";

const GraphBySituation =({history, updateDate}) => {
  const date = history.map(item => DateLocale(item.datePublishedString));
  const infected  = history.map(item => item.infected);
  const cured  = history.map(item => item.cured);
  const deaths  = history.map(item => item.deaths);
  
  return (
    <div>
      <CompGraph
        date={date}
        number={infected}
        updateDate={updateDate}
        nameComp={"Situatie infectati"}
        name={"infectati"}
      />
      <CompGraph
        date={date}
        number={cured}
        updateDate={updateDate}
        nameComp={"Situatie vindecati"}
        name={"vindecati"}
      />
      <CompGraph
        date={date}
        number={deaths}
        updateDate={updateDate}
        nameComp={"Situatie decedati"}
        name={"decedati"}
      />
    </div>
  )
};

export default GraphBySituation;