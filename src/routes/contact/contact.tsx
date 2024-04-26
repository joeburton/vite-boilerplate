import {
  Card,
  Image,
  Text,
  CardBody,
  Box,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { FormikContactForm } from "../../components/FormikContactForm";
import { PageIntro } from "../../components/PageIntro";
import carrierPigeon from "../../assets/carrier-pigeon.png";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <PageIntro
        pageTitle='Contact'
        subText={
          <>
            Please feel free to contact me anytime.
            <br /> You're welcome to email me, call or just drop me a message
            using the form below.
          </>
        }
        detail={
          <ul>
            <li>
              e: <a href='mailto:joeburton@gmail.com'>joeburton@gmail.com</a>
            </li>
            <li>t: + 44 (0) 7768989321</li>
          </ul>
        }
      />
      <div className={styles.contact}>
        <Text
          fontSize='3xl'
          fontWeight='slim'
          textAlign='center'
          color='#95c50e'
          m='10px 0 30px 0'
        >
          Get in touch
        </Text>
        <Box maxWidth={"900px"} m='0 auto'>
          <Card variant='elevated'>
            <CardBody>
              <SimpleGrid columns={[1, 1, 2]} spacing={10}>
                <Box m='0 0 20px 0'>
                  <Image
                    objectFit='cover'
                    src={carrierPigeon}
                    alt='Carrier pigeon, the old ways are the best ways. This image was generated using AI 🤓 how ironic.'
                  />
                </Box>
                <Box>
                  <FormikContactForm />
                </Box>
              </SimpleGrid>
            </CardBody>
          </Card>
        </Box>
      </div>
    </>
  );
}
