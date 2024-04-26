import { Card, Image, Text, CardBody, Box, SimpleGrid } from "@chakra-ui/react";
import { FormikContactForm } from "../../components/FormikContactForm";
import { PageIntro } from "../../components/PageIntro";
import { generateUniqueId, getImageUrl } from "../../utils";
import { pigeons } from "../../../mocks/pigeons";
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
              <SimpleGrid columns={[1, 1, 1, 2]} spacing={10}>
                <SimpleGrid columns={[4, 4, 4, 3]} spacing={1}>
                  {pigeons.map((pigeon: string) => (
                    <Box height='auto' key={generateUniqueId()}>
                      <Image
                        src={getImageUrl(
                          "../assets/pigeons-ai/resized/",
                          pigeon
                        )}
                        alt='Cliché image of a carrier pigeon. This image was generated using AI 🤓 how ironic.'
                      />
                    </Box>
                  ))}
                </SimpleGrid>
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
