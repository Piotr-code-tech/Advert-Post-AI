import AdGenerator from "./AdGenerator";
import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostGenerator from "../PostGenerator/PostGenerator";

describe("AdGenerator component test", () => {

    it("AdGenerator is displaying properly", () => {
        const {baseElement} = render(<AdGenerator/>);
        expect(baseElement).toBeInTheDocument();
    });

    it('Ad generator displaying result', () => {
        render(<AdGenerator/>);
        const textInputArea = screen.getByRole('textbox');
        userEvent.type(textInputArea, 'Text for tests');
        const generateButton = screen.getByRole('button');
        userEvent.click(generateButton);
        waitFor(()=>{expect(screen.getByLabelText('Text result')).toBeInTheDocument()});
    });

    it('Ad generator textarea display', () => {
        let testText : string = '';
        const setTestText = (text: string) => {testText = text};
        render(<PostGenerator setAdText={setTestText}/>);
        const textArea = screen.getByRole("textbox");
        userEvent.type(textArea, 'Text for tests');
        expect(textArea.textContent).toBe('Text for tests');
    });

});