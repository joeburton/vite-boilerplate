import { Text } from "@chakra-ui/react";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <Text fontSize='sm'>© JB</Text>
      </p>
    </footer>
  );
};
