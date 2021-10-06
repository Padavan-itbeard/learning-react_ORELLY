import { Checkbox } from "./Checkbox";
import { render, fireEvent } from "@testing-library/react";

test("Selecting the checkbox should change the value of checked to true", () => {
    // const { getByLabelText } = render(<Checkbox />);
    // const checkbox = getByLabelText(/not checked/);
    // fireEvent.click(checkbox);
    // expect(checkbox.checked).toEqual(true);
    // fireEvent.click(checkbox);
    // expect(checkbox.checked).toEqual(false);

    const { getByTestId } = render(<Checkbox />);
    const checkbox = getByTestId("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});
