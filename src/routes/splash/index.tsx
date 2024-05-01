import { Link as ReactRouterLink } from "react-router-dom";

import {
  Box,
  Card,
  CardBody,
  Icon,
  SimpleGrid,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { PageIntro } from "../../components/PageIntro";
import styles from "./splash.module.css";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Splash() {
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
      <div className={styles.splashPage}>
        <Box maxWidth={"900px"} m='0 auto'>
          <Card variant='elevated' m='20px'>
            <CardBody>
              <SimpleGrid columns={[1, 1, 1, 2]} spacing={5}>
                <Box>
                  <Text>
                    I have over 15 years of industry experience, predominantly
                    spent working as a Front-end Developer. During this time, I
                    have gained experience working for a broad range of
                    companies, from advertising agencies such as Ogilvy and
                    Mather and Tribal Worldwide, to the travel sector for
                    lastminute.com. I currently work for Publicis Sapient as a
                    hands-on Front-end Lead/Manager.
                  </Text>
                  <Box>
                    <ChakraLink
                      as={ReactRouterLink}
                      colorScheme='teal'
                      variant='outline'
                      to='work'
                      mr='10px'
                      alignItems='center'
                      display='inline-flex'
                    >
                      View my work
                      <Icon as={ArrowForwardIcon} m='0 0 0 4px' />
                    </ChakraLink>
                    <ChakraLink
                      as={ReactRouterLink}
                      colorScheme='teal'
                      variant='outline'
                      to='contact'
                      alignItems='center'
                      display='inline-flex'
                    >
                      Contact me
                      <Icon as={ArrowForwardIcon} m='0 0 0 4px' />
                    </ChakraLink>
                  </Box>
                </Box>
                <Box>2</Box>
              </SimpleGrid>
            </CardBody>
          </Card>
        </Box>
      </div>
    </>
  );
}
