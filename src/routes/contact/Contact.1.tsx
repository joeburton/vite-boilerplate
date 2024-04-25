import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Link,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <Text
        fontSize='3xl'
        fontWeight='slim'
        textAlign='center'
        color='#95c50e'
        mb='6'
      >
        Contact
      </Text>
      <Flex justifyContent='center'>
        <Card maxWidth='300px'>
          <CardHeader>
            <Text fontSize='lg'>Please feel free to contact me anytime.</Text>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Text fontSize='md' fontWeight='bold'>
                  Email
                </Text>
                <Text fontSize='md'>
                  <Link href='mailto:joeburton@gmail.com'>
                    joeburton@gmail.com
                  </Link>
                </Text>
              </Box>
              <Box>
                <Text fontSize='md' fontWeight='bold'>
                  Phone
                </Text>
                <Text fontSize='md'>+ 44 [0] 77689 89321</Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </div>
  );
}
