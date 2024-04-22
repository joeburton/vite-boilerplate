import styles from "./Header.module.css";

import ruleImage from "../../assets/line.png";

const rule = {
  background: `url(${ruleImage}) repeat-x`,
  backgroundPosition: "left 45px",
};

export const Header = () => {
  return (
    <h1 style={rule} className={styles.introHeader}>
      <span>Welcome</span>
    </h1>
  );
};
