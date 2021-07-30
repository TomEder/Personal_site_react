import React from "react";
import Card from "../UI/Card";
import classes from "./Experience.module.css";

const Experience = (props) => {
 return (
  <Card className={classes.content}>
   <header className={classes.header}>
    <h3>Experience</h3>
   </header>
   <p>
    I recently graduated from KYH in Stockholm where I studied frontend
    development.
   </p>
  </Card>
 );
};

export default Experience;
