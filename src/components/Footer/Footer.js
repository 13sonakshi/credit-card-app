import React from "react";
import classes from "./Footer.module.css";
import { Link, NavLink } from "react-router-dom";

const Footer = () => (
  <div className={classes.footer}>
    <label className={classes.label}>Sonakshi Srivastava</label>
    <div className={classes.label}>
      <a target="_github" href="https://github.com/13sonakshi">
        GitHub
      </a>
    </div>
  </div>
);

export default Footer;
