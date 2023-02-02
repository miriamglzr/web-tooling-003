import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test.skip("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); //toBeVisible
});

describe("Counter Buttons", () => {
  it("should render 2 buttons", () => {
    render(<App />);
    const btn1 = screen.getByTestId("button-increase");
    expect(btn1).toBeInTheDocument();
    const btn2 = screen.getByTestId("button-decrease");
    expect(btn2).toBeInTheDocument();
  });
  it("should increase the counter", () => {
    render(<App />);
    const btn = screen.getByTestId("button-increase");
    const counter = screen.getByTestId("counter-number");
    expect(counter).toHaveTextContent("0");
    expect(counter).toBeInTheDocument();
    userEvent.click(btn);
    console.log(counter.textContent);
    expect(counter).toHaveTextContent("1");
  });
  it("should decrease the counter", () => {
    render(<App />);
    const btn = screen.getByTestId("button-decrease");
    const counter = screen.getByTestId("counter-number");
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent("0");
    userEvent.click(btn);
    console.log(counter.textContent);
    expect(counter).toHaveTextContent("-1");
  });
});
