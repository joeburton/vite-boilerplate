import { render } from "@testing-library/react";

import MSWIntercept from "./MSWIntercept";

describe("MSWIntercept", () => {
  it("should render a list of data", async () => {
    const { getByText, findByTestId } = render(
      <MSWIntercept url='http://joe-burton.com/api/source' />
    );

    await findByTestId("list");
    expect(getByText(/Software Enginner/)).toBeInTheDocument();
  });
});
