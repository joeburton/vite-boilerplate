import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";
import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";

import MSWIntercept from "./components/MSWIntercept/MSWIntercept";
import { Carousel } from "./components/Carousel";
import { SmartCarousel } from "./components/SmartCarousel";
import { items } from "../mocks/data";

function ErrorFallback({ error }: { error: Error }) {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      {error.message && (
        <pre style={{ color: "red", marginTop: "10px" }}>{error.message}</pre>
      )}
      <button onClick={resetBoundary}>Try again</button>
    </div>
  );
}

function App() {
  // env variables
  console.log(import.meta.env.MODE);
  console.log(import.meta.env.BASE_URL);
  console.log(import.meta.env.DEV);
  console.log(import.meta.env.VITE_CHIEF);

  return (
    <SimpleGrid columns={1} spacing={8}>
      <Box bg='lightgrey' height='auto'>
        <h1>Vite + React</h1>
      </Box>
      <Box height='auto'>
        <Carousel />
      </Box>
      <Box height='auto' margin='0 auto'>
        <SmartCarousel items={items} />
      </Box>
      <Box bg='grey' height='auto'>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
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
  );
}

export default App;
