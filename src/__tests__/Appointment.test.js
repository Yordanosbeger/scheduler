import React from "react";
import { render } from "@testing-library/react";
import Appointment from "components/Appointment"; // Update with the actual path

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

  it("does something it is supposed to do", () => {
    // ...
  });

  it("does something else it is supposed to do", () => {
    // ...
  });
});