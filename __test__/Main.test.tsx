import { render } from "@testing-library/react";

import List from "@/components/List";
import MobileList from "@/components/MobileList";

it("renders component List", () => {
  const { container } = render(<List data={[]} />);
  expect(container).toMatchSnapshot();
});

it("renders component Mobile List", () => {
  const { container } = render(<MobileList data={[]} />);
  expect(container).toMatchSnapshot();
});
