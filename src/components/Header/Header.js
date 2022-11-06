import { Fragment } from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Credit Card System</h2>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to="addCard" activeClassName={classes.active}>
                Add Card
              </NavLink>
            </li>
            <span />
            <li>
              <NavLink to="getCards" activeClassName={classes.active}>
                Get Cards
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
