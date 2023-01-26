import { render, screen } from "@testing-library/react";
import Form from "./index";

test("when input is empty, new participants cannot be added", () => {
  render(<Form />);
  //find in DOM the input
  const input = screen.getByPlaceholderText("Insert participants' names");
  //find the button
  const button = screen.getByRole("button");

  //ensure that the input is in the document
  expect(input).toBeInTheDocument();
  //ensure that the button is disabled
  expect(button).toBeDisabled();
});
