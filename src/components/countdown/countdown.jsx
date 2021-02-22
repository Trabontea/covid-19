import React, {useState, useEffect} from 'react';

const Countdown = () => {
  
  const calculateTimeLeft = () => {
    //an, luna, zi
    const difference = +new Date("2021-04-15") - +new Date();
    let timeLeft = {};
    
    if (difference > 0) {
      timeLeft = {
        zile: Math.floor(difference / (1000 * 60 * 60 * 24)),
        ore: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minute: Math.floor((difference / 1000 / 60) % 60),
        secunde: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return() => {
    clearTimeout(calculateTimeLeft())
    }
    
  });
  
  const timerComponents = [];
  
  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }
    
    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  
  return (
    <div className="countdown">
      <p>Timp ramas pana la terminarea starii de urgenta:</p>
      <p>{timerComponents.length ? timerComponents : <span> Gata !! </span>}</p>
    </div>
  );
};

export default Countdown;