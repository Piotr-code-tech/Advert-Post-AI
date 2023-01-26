import AdGenerator from "./AdGenerator";
import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
    })
});