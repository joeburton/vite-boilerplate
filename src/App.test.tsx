import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should work as expected", () => {
    const { getByText } = render(<App />);
    expect(getByText("Vite + React")).toBeInTheDocument();
    expect(1 + 1).toBe(2);
  });
});
