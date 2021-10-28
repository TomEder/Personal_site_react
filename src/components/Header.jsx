import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
 return (
  <header className={classes.header}>
   <h1>TOM EDERSTÅL</h1>
   <p>Notice: This site is a work in progress</p>
   <nav>
    <ul>
     <li className={classes.navLinks}>
      <Link to={"/about"}>About</Link>
     </li>
     <li className={classes.navLinks}>
      <Link to={"/projects"}>Projects</Link>
     </li>
     <li className={classes.navLinks}>
      <Link to={"/cool-stuff"}>Cool Stuff</Link>
     </li>
    </ul>
   </nav>
  </header>
 );
};

export default Header;
