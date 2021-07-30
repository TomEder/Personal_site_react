import React from "react";
import classes from "./Header.module.css";

const Header = () => {
 return (
  <header className={classes.header}>
   <h1>TOM EDERSTÅL</h1>
   <p>Notice: This site is a work in progress</p>
   <nav>
    <ul>
     <li className={classes.navLinks}>
      <a>About</a>
     </li>
     <li className={classes.navLinks}>
      <a>Portfolio</a>
     </li>
     <li className={classes.navLinks}>
      <a>Cool stuff</a>
     </li>
    </ul>
   </nav>
  </header>
 );
};

export default Header;
