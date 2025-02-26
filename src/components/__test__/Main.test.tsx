import { render } from "@testing-library/react";

import { expect, it } from "@jest/globals";
import List from "../List";
import MobileList from "../MobileList";

it("renders component List", () => {
  const { container } = render(<List data={[]} />);
  expect(container).toMatchSnapshot();
});

it("renders component Mobile List", () => {
  const { container } = render(<MobileList data={[]} />);
  expect(container).toMatchSnapshot();
});
