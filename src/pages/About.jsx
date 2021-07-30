import React from "react";
import Experience from "../components/Experience";
import Interests from "../components/Interests";
import classes from "./About.module.css";

const About = () => {
 return (
  <div className={classes.aboutContainer}>
   <Experience />
   <Interests />
  </div>
 );
};

export default About;
