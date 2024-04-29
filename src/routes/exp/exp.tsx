import {
  Card,
  Text,
  CardBody,
  Box,
  Grid,
  GridItem,
  SimpleGrid,
  Image,
  Icon,
  Link,
} from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";

import { PageIntro } from "../../components/PageIntro";
import { Carousel } from "../../components/Carousel";
import MSWIntercept from "../../components/MSWIntercept/MSWIntercept";
import { SmartCarousel } from "../../components/SmartCarousel";

import { items } from "../../../mocks/data";

import { ErrorBoundaryFallback } from "../../components/ErrorBoundaryFallback";
import { getImageUrl } from "../../utils";
import { GitHubMark } from "../../components/CustomIcons";

import styles from "./exp.module.css";

export default function Contact() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const experiments = urlParams.get("experiments");
  return (
    <>
      <PageIntro
        pageTitle='Experiments'
        subText={<>Just playing around</>}
        detail="Don't take things too seriously here"
      />
      <div className={styles.experiments}>
        <Text
          fontSize='3xl'
          fontWeight='slim'
          textAlign='center'
          color='#95c50e'
          m='10px 0 30px 0'
        >
          What to make next...
        </Text>
        <Box maxWidth={"900px"} m='0 auto'>
          <Card variant='elevated'>
            <CardBody>
              <SimpleGrid columns={[1, 1, 1, 2]} spacing={10}>
                <Box height='auto'>
                  <Image
                    src={getImageUrl(
                      "../assets/general/resized/",
                      "ginger-software-engineer.png"
                    )}
                    alt='Cliché image of a carrier pigeon. This image was generated using AI 🤓 how ironic.'
                  />
                </Box>
                <Box>
                  <Box height='auto'>
                    <ul>
                      <li>
                        <Text mb='10px'>
                          Most of my pet projects and tech exploration code is
                          dumped on GitHub. Feel free to have a look, you might
                          even find some jQuery if you dig deep enough.
                        </Text>
                        <Link href='https://github.com/joeburton' isExternal>
                          <Text>
                            <Icon
                              as={GitHubMark}
                              width='20px'
                              height='20px'
                              mr='4px'
                            />
                            https://github.com/joeburton
                          </Text>
                        </Link>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </SimpleGrid>
            </CardBody>
          </Card>
        </Box>
        {experiments ? (
          <Box maxWidth={"900px"} m='0 auto'>
            <Card variant='elevated'>
              <CardBody>
                <SimpleGrid columns={1} spacing={8}>
                  <Box height='auto'>
                    <Carousel />
                  </Box>
                  <Box height='auto' margin='0 auto'>
                    <SmartCarousel items={items} />
                  </Box>
                  <Box bg='grey' height='auto'>
                    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
                      <MSWIntercept url='http://joe-burton.com/api/source' />
                    </ErrorBoundary>
                  </Box>
                  <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem w='100%' h='10' bg='blue.500' />
                    <GridItem w='100%' h='10' bg='blue.500' />
                    <GridItem w='100%' h='10' bg='blue.500' />
                    <GridItem w='100%' h='10' bg='blue.500' />
                    <GridItem w='100%' h='10' bg='blue.500' />
                  </Grid>
                  <Grid
                    h='300px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                  >
                    <GridItem rowSpan={2} colSpan={1} bg='tomato'>
                      1
                    </GridItem>
                    <GridItem colSpan={2} bg='papayawhip'>
                      2
                    </GridItem>
                    <GridItem colSpan={2} bg='papayawhip'>
                      3
                    </GridItem>
                    <GridItem colSpan={4} bg='tomato'>
                      4
                    </GridItem>
                  </Grid>
                </SimpleGrid>
              </CardBody>
            </Card>
          </Box>
        ) : (
          ``
        )}
      </div>
    </>
  );
}
