/* eslint-disable jest/valid-expect */
import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";
jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");
describe("<MultipleCustomHooks />", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should show component by default", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("BreakingBad Quotes"));
    expect(screen.getByText("Loading..."));
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeTruthy();
  });
  test("should show a Quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Jesse Pinkman", quote: "I am the one who knocks." }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("I am the one who knocks.")).toBeTruthy();
    expect(screen.getByText("Jesse Pinkman")).toBeTruthy();
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeFalsy();
  });
  test("should call increment function when button is clicked", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Jesse Pinkman", quote: "I am the one who knocks." }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
