import { render } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
    render(<App />);
});

test("matches snapshot", function() {
    const {asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
  
