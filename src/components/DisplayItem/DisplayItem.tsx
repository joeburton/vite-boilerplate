import { Card, Image, CardBody, Text, Link, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import parse from "html-react-parser";

import { generateUniqueId, getImageUrl } from "../../utils";

import styles from "./DisplayItem.module.css";

interface Links {
  visual: string;
  url: string;
}

export type DisplayItemInterface = {
  rowEnd?: boolean;
  logo: string;
  role: string;
  company: string;
  description: string;
  skills: string;
  className?: string;
  links?: Links[];
};

export const DisplayItem = ({
  rowEnd = false,
  logo,
  role,
  company,
  description,
  skills,
  className,
  links,
}: DisplayItemInterface) => {
  return (
    <Box width={{ base: "100%", lg: "33.3%" }}>
      <Card
        variant='elevated'
        mr={rowEnd ? 0 : [0, 0, 0, 5]}
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
          <Text fontSize='sm' className={styles.contentItem}>
            Company: {company}
          </Text>
          <Text fontSize='sm' className={styles.contentItem}>
            Role: {role}
          </Text>
          <Text fontSize='sm' className={styles.contentItem}>
            Skills: {parse(skills)}
          </Text>
          <Text fontSize='sm' className={styles.contentItem}>
            {parse(description)}
          </Text>
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
  );
};
