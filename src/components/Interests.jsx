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
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil mollitia
    dolor veniam aperiam, culpa molestias excepturi. Maxime consequuntur, quas
    aliquam eveniet necessitatibus ullam aspernatur nesciunt alias. Fugit in
    corrupti ipsam.
   </p>
  </Card>
 );
};

export default Interests;
