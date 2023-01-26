import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdGenerator from "../AdGenerator/AdGenerator";

describe("Post generator component test", () => {

    it("Enables generate button when text input is valid", ()=>{
        render(<AdGenerator/>);
        const textInputArea = screen.getByRole('textbox');
        userEvent.type(textInputArea, 'Text for tests');
        const generateButton = screen.getByRole('button');
        expect(!generateButton.hasAttribute("disabled").valueOf()).toBe(true);
    });

    it("Display HashLoader result after generate button click", ()=>{
        render(<AdGenerator/>);
        const textInputArea = screen.getByRole('textbox');
        userEvent.type(textInputArea, 'Text for tests');
        const generateButton = screen.getByRole('button');
        userEvent.click(generateButton);
        expect(screen.getByLabelText('Hash Loader')).toBeInTheDocument()
    })

})