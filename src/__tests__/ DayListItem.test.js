import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DayListItem from "components/DayListItem";

describe("Integration Test for DayListItem", () => {
  it("renders the correct appointments in the schedule after clicking", () => {
    // Mock props
    const mockSetDay = jest.fn();

    // Render the DayListItem component
    const { getByTestId } = render(
      <DayListItem name="Monday" spots={2} setDay={mockSetDay} />
    );

    // Click on the DayListItem
    fireEvent.click(getByTestId("day"));

    // Confirm that the setDay function is called with the correct value
    expect(mockSetDay).toHaveBeenCalledWith("Monday");

    // Additional assertions for the appointments in the schedule
    // You may need to add more specific assertions based on your application logic

    // Example: Assuming there's an element with a data-testid for the appointments
    // const appointmentsElement = getByTestId("appointments");
    // expect(appointmentsElement).toHaveTextContent("Some expected text");
  });
});
describe("render with out crashing",()=> {
  it("renders without crashing", () => {
    render(<DayListItem />);
  });
})