import React, { useState, useEffect } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error("Error caught by ErrorBoundary:", error);
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  const resetErrorBoundary = () => {
    setHasError(false);
  };

  if (hasError) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Something went wrong.</h2>
        <p>Please try again or refresh the page.</p>
        <button onClick={resetErrorBoundary}>Try Again</button>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
