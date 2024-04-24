import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

import meImage from "../../assets/me.jpg";

const spinningMe = {
  background: `url(${meImage}) 0 0`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "50px 50px",
};

export const Navigation = () => {
  const openLogin = () => {
    console.log("open login ");
  };

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink
            to={`work`}
            className={({ isActive, isPending }) =>
              isActive ? styles.active : isPending ? "pending" : ""
            }
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`contact`}
            className={({ isActive, isPending }) =>
              isActive ? styles.active : isPending ? "pending" : ""
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <button
        className={styles.logo}
        style={spinningMe}
        onClick={openLogin}
      ></button>
    </nav>
  );
};
