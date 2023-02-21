import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Main from "./Main";

test("main", () => {
  render(<Main />);
  const textElement = screen.getByText("mouse")
  expect(textElement).toBeInTheDocument();
});
