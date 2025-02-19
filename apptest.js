import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders Online Auction heading", () => {
  render(<App />);
  expect(screen.getByText(/Online Auction/i)).toBeInTheDocument();
});
