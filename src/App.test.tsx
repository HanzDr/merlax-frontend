import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

function App() {
  return <h1>Hello World</h1>;
}

describe("App", () => {
  it("renders the heading", () => {
    render(<App />);
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
