import { render } from "@testing-library/react";

import MSWIntercept from "./MSWIntercept";

describe("MSWIntercept", () => {
  it("should work as expected", async () => {
    const { getByText, findByTestId, debug } = render(
      <MSWIntercept url='http://joe-burton.com/api/source' />
    );

    await findByTestId("list");
    debug();
    expect(getByText("Software Enginner")).toBeInTheDocument();
  });
});
