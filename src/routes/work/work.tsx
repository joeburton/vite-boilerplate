import { Text } from "@chakra-ui/react";
import styles from "./work.module.css";

import { DisplayItem } from "../../components/DisplayItem";

export default function Work() {
  return (
    <div className={styles.work}>
      <Text
        fontSize='3xl'
        fontWeight='slim'
        textAlign='center'
        color='#95c50e'
        mb='6'
      >
        Work and Projects
      </Text>
      <DisplayItem />
    </div>
  );
}
