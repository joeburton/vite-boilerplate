import { Text } from "@chakra-ui/react";

import styles from "./PageIntro.module.css";
import ruleImage from "../../assets/line.png";

const rule = {
  background: `url(${ruleImage}) repeat-x`,
  backgroundPosition: "left 40px",
};

interface PageIntroInterface {
  pageTitle: string;
  subText: string | React.ReactNode;
  detail?: string | React.ReactNode;
}

export const PageIntro = ({
  pageTitle,
  subText,
  detail,
}: PageIntroInterface) => {
  return (
    <div className={styles.pageIntro}>
      <Text
        fontSize='5xl'
        fontWeight='slim'
        textAlign='center'
        style={rule}
        className={styles.intro}
      >
        <span>{pageTitle}</span>
      </Text>
      <Text
        as='div'
        fontSize='2xl'
        fontWeight='slim'
        className={styles.introText}
        textAlign='center'
      >
        {subText}
      </Text>
      {detail && (
        <Text
          as='div'
          fontSize='2xl'
          fontWeight='slim'
          className={styles.introText}
          textAlign='center'
        >
          {detail}
        </Text>
      )}
    </div>
  );
};
