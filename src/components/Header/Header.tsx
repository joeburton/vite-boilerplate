import styles from "./Header.module.css";

import ruleImage from "../../assets/line.png";

const rule = {
  background: `url(${ruleImage}) repeat-x`,
  backgroundPosition: "left 45px",
};

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1 style={rule} className={styles.introHeader}>
        <span>Welcome</span>
      </h1>
      <div>
        <h2>
          My name is <span>Joe Burton</span>, I'm a Web Developer.
        </h2>
        <h3>This is my portfolio and online playground.</h3>
      </div>
    </div>
  );
};
