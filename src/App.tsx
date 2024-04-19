import "./css/app.css";

import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";
import MSWIntercept from "./components/MSWIntercept/MSWIntercept";
import { Carousel } from "./components/Carousel";
import { SmartCarousel } from "./components/SmartCarousel";
import { items } from "../mocks/data";

function ErrorFallback({ error }: { error: any }) {
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
    <>
      <h1>Vite + React</h1>
      <Carousel />
      <SmartCarousel items={items} />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <MSWIntercept url='http://joe-burton.com/api/source' />
      </ErrorBoundary>
    </>
  );
}

export default App;
