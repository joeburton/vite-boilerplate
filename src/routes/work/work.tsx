import { Text } from "@chakra-ui/react";
import styles from "./work.module.css";

import { DisplayItem } from "../../components/DisplayItem";

export default function Work() {
  const links = [
    {
      visual: "www.publicissapient.com",
      url: "https://www.publicissapient.com",
    },
  ];
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
      <DisplayItem
        logo='publicissapient.png'
        role='Manager / Front-end Lead'
        company='Publicis Sapient'
        description='<p>Hands-on Front-end Lead / People Manager</p>'
        skills='React, Remix, Vite, NodeJS, GraphQL, NextJS, Jest, React Testing Library, styled-components, Storybook, CSS, SASS'
        className='publicis-sapient'
        links={links}
      />
    </div>
  );
}
