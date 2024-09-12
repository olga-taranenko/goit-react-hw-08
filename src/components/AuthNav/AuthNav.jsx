import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
  return (
    <div className={css.authNavWrapper}>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          clsx(css.navLink, isActive && css.navLinkActive)
        }
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          clsx(css.navLink, isActive && css.navLinkActive)
        }
      >
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
