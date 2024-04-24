import { Card, Image, CardBody, Text, Link, Flex, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import styles from "./DisplayItem.module.css";
import { generateUniqueId, getImageUrl } from "../../utils";

interface Links {
  visual: string;
  url: string;
}
interface DisplayItemInterface {
  logo: string;
  role: string;
  company: string;
  description: string;
  skills: string;
  className?: string;
  links?: Links[];
}

export const DisplayItem = ({
  logo,
  role,
  company,
  description,
  skills,
  className,
  links,
}: DisplayItemInterface) => {
  return (
    <>
      <Flex flexWrap='wrap'>
        <Box width={{ base: "100%", lg: "33.3%" }}>
          <Card
            variant='elevated'
            mr={[0, 0, 0, 5]}
            mb={5}
            shadow='md'
            className={className}
          >
            <CardBody className={styles.cardBody}>
              <Image
                src={getImageUrl(logo)}
                alt='Publicis Sapient'
                maxWidth={100}
                mb='20px'
              />
              <Text fontSize='sm'>Company: {company}</Text>
              <Text fontSize='sm'>Role: {role}</Text>
              <Text fontSize='sm'>Skills: {skills}</Text>
              <Text fontSize='sm'>Description: {description}</Text>
              {links?.length &&
                links.map((link) => (
                  <Link
                    fontSize='sm'
                    href={link.url}
                    isExternal
                    key={generateUniqueId()}
                  >
                    {link.visual} <ExternalLinkIcon mx='2px' />
                  </Link>
                ))}
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </>
  );
};
