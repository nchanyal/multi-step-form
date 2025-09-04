import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("<Sidebar />", () => {
  it("should display the highlighted step", () => {
    render(<Sidebar activeStep={1} />);

    const step = screen.getByText("1");

    expect(step.getAttribute("aria-current")).toBe("step");
  });
});
