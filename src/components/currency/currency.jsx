import React, {useEffect, useState} from "react";
import XMLParser from 'react-xml-parser';

const Currency = () => {
  const [currency, setCurrency] = useState({});
  const [hasError, setErrors] = useState(false);
  
  async function fetchData() {
    const res = await fetch('');
    res
      .text()
      .then(res =>setCurrency(res))
      .catch(err => setErrors(err));
  }
  useEffect(() => {
    fetchData();
  }, []);
  

  
  return(
    <React.Fragment>
      {hasError ? '' :
        <div className="currency">
          <span>Curs Valutar: 1 EUR = </span>
          <span>{currency && currency.rate} RON</span>
      </div>
      }
    </React.Fragment>
  )
};



export default Currency;