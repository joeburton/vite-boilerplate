import "./css/app.css";

import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";
import MSWIntercept from "./components/MSWIntercept/MSWIntercept";
import { Carousel } from "./components/Carousel";
import { SmartCarousel } from "./components/SmartCarousel";

function ErrorFallback({ error }: { error: Error }) {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div role="alert">
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
  console.log(import.meta.env.VITE_BANANA_MAN);

  return (
    <>
      <h1>Vite + React</h1>
      <Carousel />
      <SmartCarousel
        items={[
          {
            description: "item 1",
            image:
              "https://media.istockphoto.com/photos/vintage-rearview-mirror-on-old-blue-car-picture-id820230782?k=20&m=820230782&s=612x612&w=0&h=XDwkcCXZ_nVHI5utWvfMy33HekFDKm0icDrFUZpkDsg=",
          },
          {
            description: "item 2",
            image:
              "https://media.istockphoto.com/photos/vintage-car-detail-picture-id174566383?k=20&m=174566383&s=612x612&w=0&h=IcPCtMvbKiNRV5geYgDGqHUveR7l8lKjReX_Bgsbnuc=",
          },
          {
            description: "item 3",
            image:
              "https://media.istockphoto.com/photos/retro-car-klaxon-closeup-view-picture-id468686196?k=20&m=468686196&s=612x612&w=0&h=v4IINN1xhS9o-839BxNWsMd2rdjytDapXf-aS5PLMz8=",
          },
          {
            description: "item 4",
            image:
              "https://media.istockphoto.com/photos/pumpkins-in-antique-truck-picture-id89904301?k=20&m=89904301&s=612x612&w=0&h=YjJ-QwAQ30hjScNsiQQZLgB8VX8S9Puob-qxMV6Pklc=",
          },
          {
            description: "item 5",
            image:
              "https://media.istockphoto.com/photos/chrome-side-mirror-picture-id89356837?k=20&m=89356837&s=612x612&w=0&h=s7nd8Fz2-7_3LNQbYaQtS28jre1ls6OB8_O2kb8gYhY=",
          },
        ]}
      />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <MSWIntercept url="http://joe-burton.com/api/work" />
      </ErrorBoundary>
    </>
  );
}

export default App;
