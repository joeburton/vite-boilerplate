import { Link as ReactRouterLink } from "react-router-dom";

import {
  Box,
  Card,
  CardBody,
  Icon,
  SimpleGrid,
  Text,
  Link as ChakraLink,
  Image,
  Flex,
} from "@chakra-ui/react";

import { PageIntro } from "../../components/PageIntro";
import styles from "./splash.module.css";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { getImageUrl } from "../../utils";

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
        <Box maxWidth={"720px"} m='0 auto'>
          <Card variant='elevated'>
            <CardBody>
              <Text mb='10px' fontSize='md'>
                I have over 20 years of industry experience working as a
                Developer, with much of the last 15 years focused on Front-end
                Development. During this time, I have gained experience working
                for a broad range of companies, from advertising agencies such
                as{" "}
                <ChakraLink
                  href='https://www.ogilvy.com/uk/about'
                  isExternal
                  textDecoration='underline'
                >
                  Ogilvy & Mather
                </ChakraLink>{" "}
                and{" "}
                <ChakraLink
                  href='https://www.tribalworldwide.co.uk/'
                  isExternal
                  textDecoration='underline'
                >
                  Tribal Worldwide
                </ChakraLink>
                , to the travel sector for{" "}
                <ChakraLink
                  href='https://www.lastminute.com/'
                  isExternal
                  textDecoration='underline'
                >
                  lastminute.com
                </ChakraLink>
                .
              </Text>
            </CardBody>
          </Card>
          <Card variant='elevated' mt='20px'>
            <CardBody>
              <SimpleGrid columns={[1, 1, 2, 2]} spacing={5}>
                <Box justifyContent='center'>
                  <Image
                    src={getImageUrl("../assets/", "joe-burton-framed.jpg")}
                    borderRadius='full'
                    boxSize='100%'
                    maxWidth='300px'
                  />
                </Box>
                <Box>
                  <Text fontStyle='italic'>
                    I currently work for{" "}
                    <ChakraLink
                      href='https://www.publicissapient.com/'
                      isExternal
                      textDecoration='underline'
                    >
                      Publicis Sapient
                    </ChakraLink>{" "}
                    as a hands-on Front-end Lead/ Manager.
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
              </SimpleGrid>
            </CardBody>
          </Card>
        </Box>
      </div>
    </>
  );
}
