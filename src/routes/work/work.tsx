import { Text, Flex } from "@chakra-ui/react";

import { DisplayItem } from "../../components/DisplayItem";
import { LogoSize } from "../../components/DisplayItem";
import { PageIntro } from "../../components/PageIntro";

import { generateUniqueId } from "../../utils";

import { projects } from "../../../mocks/projects"; // temp data, will fetch from api

import styles from "./work.module.css";

export default function Work() {
  return (
    <>
      <PageIntro
        pageTitle='Welcome'
        subText={
          <>
            My name is <span>Joe Burton</span>, I'm a Web Developer.
          </>
        }
        detail='This is my portfolio and online playground.'
      />
      <div className={styles.work}>
        <Text
          fontSize='3xl'
          fontWeight='slim'
          textAlign='center'
          color='#95c50e'
          m='10px 0 30px 0'
        >
          Work and Projects
        </Text>
        <Flex flexWrap='wrap' maxWidth='1200px' margin='0 auto'>
          {projects.map((project, i) => {
            const rowEnd = (i + 1) % 3 === 0 ? true : false; // every third item.
            return (
              <DisplayItem
                logo={project.logo}
                logoSize={project.logoSize as LogoSize}
                role={project.role}
                company={project.company}
                description={project.description}
                skills={project.skills}
                className={project.className}
                links={project.links}
                rowEnd={rowEnd}
                key={generateUniqueId()}
              />
            );
          })}
        </Flex>
      </div>
    </>
  );
}
