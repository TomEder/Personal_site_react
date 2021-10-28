import React from "react";
import { Link } from "react-router-dom";
import LinkCard from "../UI/LinkCard";
import classes from "./Home.module.css";

const Home = () => {
 return (
  <div className={classes.HomeContainer}>
   <ul className={classes.Links}>
    <li>
     <Link to={"/about"}>About</Link>
    </li>
    <li>
     <Link to={"/projects"}>Projects</Link>
    </li>
    <li>
     <Link to={"/cool-stuff"}>Cool Stuff</Link>
    </li>
   </ul>
  </div>
 );
};

export default Home;
