import { render } from "@testing-library/react";
import Todo from "../components/Todo";

test("renders learn react link", () => {
    render(<Todo />);
});

test("matches snapshot", function() {
    const {asFragment} = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
  });
  