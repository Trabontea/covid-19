import React, {useEffect, useState} from "react";

const Currency = () => {
  const [currency, setCurrency] = useState({});
  const [hasError, setErrors] = useState(false);
  
  async function fetchData() {
    const res = await fetch('http://currency.joover.com/rate/eur');
    res
      .json()
      .then(res =>setCurrency(res))
      .catch(err => setErrors(err));
   
  }
  useEffect(() => {
    fetchData();
  }, []);
  
  return(
    <p>
      {currency && currency.rate} RON
    </p>
  )
  
};



export default Currency;