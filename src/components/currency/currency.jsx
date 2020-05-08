import React, {useEffect, useState} from "react";
import {DateLocale} from "../utils/utils";

const Currency = () => {
  const [currency, setCurrency] = useState({});
  const [hasError, setErrors] = useState(false);
  
  async function fetchData() {
    const res = await fetch('https://api.exchangeratesapi.io/latest');
    res
      .json()
      .then(res =>setCurrency(res))
      .catch(err => setErrors(err));
  }
  useEffect(() => {
    fetchData();
  }, []);
  
   //console.log(currency)
   const currencyArray = Object.values(currency);
   //console.log(currencyArray[0]);
  
  return(
    <div className="currency-section">
      {hasError ? '' :
        <div className="currency">
          <p className="ron">
            <span>Curs Valutar: 1 EUR = </span>
            {
              currencyArray[0] && Object.keys(currencyArray[0]).map(item =>{
                let ron;
                if (item === "RON") {
                  ron = currencyArray[0][item];
                  return ron
                }
                return <span key={item}>{ ron } </span>
                }
              )
            }
            <span>&#32;RON</span>
          </p>
          <p className="update">
            <i>Data actualizarii: {currency.date && DateLocale(currency.date)} </i>
          </p>
          <p> <i>Curs European Central Bank</i></p>
        </div>
      }
    </div>
  )
};



export default Currency;