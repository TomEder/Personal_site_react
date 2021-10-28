import React from "react";
import Card from "../UI/Card";
import classes from "./Interests.module.css";

const Interests = (props) => {
 return (
  <Card className={classes.content}>
   <header className={classes.header}>
    <h3>Interests</h3>
   </header>
   <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla doloribus ea
    esse temporibus rerum molestiae dolores cumque ipsam unde quasi et, iste
    dolor quisquam debitis, odit tempore reprehenderit perferendis velit.
   </p>
  </Card>
 );
};

export default Interests;
