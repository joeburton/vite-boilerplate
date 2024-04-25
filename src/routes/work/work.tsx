import { Text, Flex } from "@chakra-ui/react";

import { DisplayItem } from "../../components/DisplayItem";
import { DisplayItemInterface } from "../../components/DisplayItem";
import { generateUniqueId } from "../../utils";

import { projects } from "../../../mocks/projects"; // temp data, will fetch from api

import styles from "./work.module.css";

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
      <Flex flexWrap='wrap'>
        {projects.map((project: DisplayItemInterface, i: number) => {
          const rowEnd = (i + 1) % 3 === 0 ? true : false; // every third item.
          return (
            <DisplayItem
              {...project}
              key={generateUniqueId()}
              rowEnd={rowEnd}
            />
          );
        })}
      </Flex>
    </div>
  );
}
