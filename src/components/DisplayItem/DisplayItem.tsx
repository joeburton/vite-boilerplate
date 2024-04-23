import { Card, Image, CardBody, Text, Link, Flex, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import styles from "./DisplayItem.module.css";

import publicisSapient from "../../assets/logos/publicissapient.png";

export const DisplayItem = () => {
  return (
    <>
      <Flex flexWrap='wrap'>
        <Box width={{ base: "100%", lg: "33.3%" }}>
          <Card variant='elevated' mr={[0, 0, 0, 5]} mb={5} shadow='md'>
            <CardBody className={styles.cardBody}>
              <Image
                src={publicisSapient}
                alt='Publicis Sapient'
                maxWidth={100}
              />
              <Text fontSize='sm'>Company: Publicis Sapient</Text>
              <Text fontSize='sm'>Role: Manager / Front-end Lead</Text>
              <Text fontSize='sm'>
                Skills: React, Remix, Vite, NodeJS, GraphQL, NextJS, Jest, React
                Testing Library, styled-components, Storybook, CSS, SASS
              </Text>
              <Text fontSize='sm'>
                Description: Working as a Front-end Lead / People Manager
              </Text>
              <Link
                fontSize='sm'
                href='https://www.publicissapient.com'
                isExternal
              >
                www.publicissapient.com <ExternalLinkIcon mx='2px' />
              </Link>
            </CardBody>
          </Card>
        </Box>
        <Box width={{ base: "100%", lg: "33.3%" }}>
          <Card variant='elevated' mr={[0, 0, 0, 5]} mb={5} shadow='md'>
            <CardBody className={styles.cardBody}>
              <Image
                src={publicisSapient}
                alt='Publicis Sapient'
                maxWidth={100}
              />
              <Text fontSize='sm'>Company: Publicis Sapient</Text>
              <Text fontSize='sm'>Role: Manager / Front-end Lead</Text>
              <Text fontSize='sm'>
                Skills: React, Remix, Vite, NodeJS, GraphQL, NextJS, Jest, React
                Testing Library, styled-components, Storybook, CSS, SASS
              </Text>
              <Text fontSize='sm'>
                Description: Working as a Front-end Lead / People Manager
              </Text>
              <Link
                fontSize='sm'
                href='https://www.publicissapient.com'
                isExternal
              >
                www.publicissapient.com <ExternalLinkIcon mx='2px' />
              </Link>
            </CardBody>
          </Card>
        </Box>
        <Box width={{ base: "100%", lg: "33.3%" }}>
          <Card variant='elevated' mb={5} shadow='md'>
            <CardBody className={styles.cardBody}>
              <Image
                src={publicisSapient}
                alt='Publicis Sapient'
                maxWidth={100}
              />
              <Text fontSize='sm'>Company: Publicis Sapient</Text>
              <Text fontSize='sm'>Role: Manager / Front-end Lead</Text>
              <Text fontSize='sm'>
                Skills: React, Remix, Vite, NodeJS, GraphQL, NextJS, Jest, React
                Testing Library, styled-components, Storybook, CSS, SASS
              </Text>
              <Text fontSize='sm'>
                Description: Working as a Front-end Lead / People Manager
              </Text>
              <Link
                fontSize='sm'
                href='https://www.publicissapient.com'
                isExternal
              >
                www.publicissapient.com <ExternalLinkIcon mx='2px' />
              </Link>
            </CardBody>
          </Card>
        </Box>
        <Box width={{ base: "100%", lg: "33.3%" }}>
          <Card variant='elevated' mr={[0, 0, 0, 5]} mb={5} shadow='md'>
            <CardBody className={styles.cardBody}>
              <Image
                src={publicisSapient}
                alt='Publicis Sapient'
                maxWidth={100}
              />
              <Text fontSize='sm'>Company: Publicis Sapient</Text>
              <Text fontSize='sm'>Role: Manager / Front-end Lead</Text>
              <Text fontSize='sm'>
                Skills: React, Remix, Vite, NodeJS, GraphQL, NextJS, Jest, React
                Testing Library, styled-components, Storybook, CSS, SASS
              </Text>
              <Text fontSize='sm'>
                Description: Working as a Front-end Lead / People Manager
              </Text>
              <Link
                fontSize='sm'
                href='https://www.publicissapient.com'
                isExternal
              >
                www.publicissapient.com <ExternalLinkIcon mx='2px' />
              </Link>
            </CardBody>
          </Card>
        </Box>
        <Box width={{ base: "100%", lg: "33.3%" }}>
          <Card variant='elevated' mr={[0, 0, 0, 5]} mb={5} shadow='md'>
            <CardBody className={styles.cardBody}>
              <Image
                src={publicisSapient}
                alt='Publicis Sapient'
                maxWidth={100}
              />
              <Text fontSize='sm'>Company: Publicis Sapient</Text>
              <Text fontSize='sm'>Role: Manager / Front-end Lead</Text>
              <Text fontSize='sm'>
                Skills: React, Remix, Vite, NodeJS, GraphQL, NextJS, Jest, React
                Testing Library, styled-components, Storybook, CSS, SASS
              </Text>
              <Text fontSize='sm'>
                Description: Working as a Front-end Lead / People Manager
              </Text>
              <Link
                fontSize='sm'
                href='https://www.publicissapient.com'
                isExternal
              >
                www.publicissapient.com <ExternalLinkIcon mx='2px' />
              </Link>
            </CardBody>
          </Card>
        </Box>
        <Box width={{ base: "100%", lg: "33.3%" }}>
          <Card variant='elevated' mb={5} shadow='md'>
            <CardBody className={styles.cardBody}>
              <Image
                src={publicisSapient}
                alt='Publicis Sapient'
                maxWidth={100}
              />
              <Text fontSize='sm'>Company: Publicis Sapient</Text>
              <Text fontSize='sm'>Role: Manager / Front-end Lead</Text>
              <Text fontSize='sm'>
                Skills: React, Remix, Vite, NodeJS, GraphQL, NextJS, Jest, React
                Testing Library, styled-components, Storybook, CSS, SASS
              </Text>
              <Text fontSize='sm'>
                Description: Working as a Front-end Lead / People Manager
              </Text>
              <Link
                fontSize='sm'
                href='https://www.publicissapient.com'
                isExternal
              >
                www.publicissapient.com <ExternalLinkIcon mx='2px' />
              </Link>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </>
  );
};
