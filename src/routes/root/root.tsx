import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export default function Root() {
  return (
    <Flex flexDirection='column' height='100vh'>
      <div className='main'>
        <Navigation />
        <Header />
        <Outlet />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </Flex>
  );
}
