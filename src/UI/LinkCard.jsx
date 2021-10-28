import React from "react";
import classes from "./LinkCard.module.css";

const LinkCard = (props) => {
 return (
  <div className={`${classes.LinkCard} ${props.className}`}>
   {props.children}
  </div>
 );
};

export default LinkCard;
