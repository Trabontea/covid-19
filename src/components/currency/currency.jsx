import React, {useEffect, useState} from "react";
import {DateLocale} from "../utils/utils";

const Currency = () => {
  const [currency, setCurrency] = useState({});
  const [hasError, setErrors] = useState(false);
  
  async function fetchData() {
    const response = await fetch('https://api.exchangeratesapi.io/latest');
    response
      .json()
      .then(response =>setCurrency(response))
      .catch(err => setErrors(err));
  }
  useEffect(() => {
    fetchData();
  }, []);
  
   const currencyArray = Object.values(currency);
   //console.log(currencyArray[0]);
  
  return(
    <div className="currency-section">
      { hasError ? '' :
        <div className="currency">
          <p className="ron">
            <span>Curs Valutar: 1 EUR = </span>
            {
              currencyArray[0] && Object.keys(currencyArray[0])
                .filter(item => item === 'RON')
                .map(item => <span key={item}>{ currencyArray[0][item]} {item} </span> )
            }
          </p>
          <p className="update">
            <i>Data actualizarii: {currency.date && DateLocale(currency.date)} </i>
          </p>
          <p className="update">
            <i>Curs European Central Bank</i>
          </p>
        </div>
      }
    </div>
  )
};

export default Currency;