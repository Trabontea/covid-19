import React, {useEffect, useState} from "react";
import {DateLocale} from "../utils/utils";
import Axios from "axios";

const Currency = () => {
  const [currency, setCurrency] = useState({});
  const [hasError, setErrors] = useState(false);
  
  const url = 'https://api.exchangeratesapi.io/latest';
  
  useEffect(()=> {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = await Axios.get(url, {
          cancelToken: source.token
        });
        setCurrency(response.data);
      }
      catch(error) {
        setErrors(true)
        throw error
      }
    };
    
    loadData();
    return() => {
      source.cancel();
    };
  }, [url]);
  
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