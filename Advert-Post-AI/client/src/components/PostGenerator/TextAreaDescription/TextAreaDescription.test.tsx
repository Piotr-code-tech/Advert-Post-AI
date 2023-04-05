import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextAreaDescription from "./TextAreaDescription";

describe("Test area description component", () => {
    it("Text area description should be displayed", () => {
        render(<TextAreaDescription/>);
        const textAreaDescription = screen.getByText('Describe your Product');
        expect(textAreaDescription).toBeInTheDocument();
    })
})