import React from "react";
import { useLocation } from "react-router-dom";
import AuthenticationService from "../../../../../../api/authentication/AuthenticationService";
import { NavLink } from "react-router-dom";
import styles from "../../../../../../css/Navbar.module.css";

const NavLinks = () => {
  const userLogged = AuthenticationService.isUserLoggedIn();
  const location = useLocation();

  return (
    <>
      {userLogged && (
        <ul className={styles.nav_links}>
          <li className={styles.nav_link}>
            <NavLink to="/user-home">Home</NavLink>
          </li>
          <li className={styles.nav_link}>
            <NavLink to="/bike-pickup">Pick up a bike</NavLink>
          </li>
          <li className={styles.nav_link}>
            <NavLink to="/bike-leave" className="nav-link">
              Leave bike
            </NavLink>
          </li>
          <li className={styles.nav_link}>
            <NavLink to="/account-user">Account details</NavLink>
          </li>
          <li
            className={styles.nav_link}
            onClick={AuthenticationService.logout}
          >
            <NavLink to="/"> Logout</NavLink>
          </li>
        </ul>
      )}

      {!userLogged && (
        <ul className={styles.nav_links}>
          {location.pathname !== "/signup" && location.pathname !== "/" && (
            <li className={styles.nav_link}>
              <NavLink to="/signup">Sign up</NavLink>
            </li>
          )}
          {location.pathname !== "/login" && (
            <li className={styles.nav_link}>
              <NavLink to="login">Login</NavLink>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default NavLinks;
