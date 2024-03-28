import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should work as expected", () => {
    const { getByText, debug } = render(<App />);
    expect(getByText("Vite + React")).toBeInTheDocument();
    debug();
    expect(1 + 1).toBe(2);
  });
  it("should render the vite logo", () => {
    const { getByAltText } = render(<App />);
    expect(getByAltText("Vite logo")).toBeInTheDocument();
  });
});
