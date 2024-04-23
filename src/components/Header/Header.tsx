import styles from "./Header.module.css";
import { Text } from "@chakra-ui/react";

import ruleImage from "../../assets/line.png";

const rule = {
  background: `url(${ruleImage}) repeat-x`,
  backgroundPosition: "left 40px",
};

export const Header = () => {
  return (
    <div className={styles.header}>
      <Text
        fontSize='5xl'
        fontWeight='slim'
        textAlign='center'
        style={rule}
        className={styles.welcome}
      >
        <span>Welcome</span>
      </Text>
      <Text
        fontSize='2xl'
        fontWeight='slim'
        className={styles.introText}
        textAlign='center'
      >
        My name is <span>Joe Burton</span>, I'm a Web Developer.
      </Text>
      <Text
        fontSize='2xl'
        fontWeight='slim'
        className={styles.introText}
        textAlign='center'
      >
        This is my portfolio and online playground.
      </Text>
    </div>
  );
};
