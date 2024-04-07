import { render, screen, fireEvent } from "@testing-library/react";
import { test, describe, expect, vi, renderer } from "vitest";
import NavBar from "./NavBar";

describe("Rendering test", () => {
  test("The NavBar component should render", () => {
    const view = renderer
      .create(<NavBar />)
      .toJSON()
      .expect(view)
      .toMatchSnapshot();
  });

  test("The NavBar component should render with a title", () => {
    const title = "Test application";
    render(<NavBar title={title} />);

    expect(screen.getByRole("heading")).toHaveTextContent(title);
  });
});

test("The NavBar component should respond to button clicks", () => {
  const mockFunction = vi.fn();
  render(<NavBar goBack={mockFunction} openForm={mockFunction} />);

  fireEvent.click(screen.getByText("< Go Back"));
  expect(mockFunction).toHaveBeenCalled();

  fireEvent.click(screen.getByText("+ Add Review"));
  expect(mockFunction).toHaveBeenCalledTimes(2);
});
