import { Card, Flex, Text, CardBody } from "@chakra-ui/react";
import { FormikContactForm } from "../../components/FormikContactForm";

import styles from "./contact.module.css";

export default function Contact() {
  return (
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
      <Flex flexWrap='wrap'>
        <Card variant='elevated' margin='0 auto'>
          <CardBody>
            <FormikContactForm />
          </CardBody>
        </Card>
      </Flex>
    </div>
  );
}
