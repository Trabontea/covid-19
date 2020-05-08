import React from "react";
import { ReactComponent as Icon} from '../../assets/hands-and-gestures.svg';
import './footer.style.scss';
import Currency from "../currency/currency";

const Footer =()=> (
  <div className="footer">
    <div className="footer-content">
      <div className="footer-message">
        <h2>Spalati-va pe maini !</h2>
        <Icon/>
      </div>
        <Currency />
    </div>
    
  </div>
);

export default Footer;

