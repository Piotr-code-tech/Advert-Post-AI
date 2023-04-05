import {render, screen} from "@testing-library/react";
import Header from "./Header";

describe('Header component test', ()=> {

    it("Should display page name", ()=> {
        render(<Header/>);
        expect(screen.getByText('AdAI - Advert with AI')).toBeInTheDocument();
    });

    it('Should display header description', () => {
        render(<Header/>);
        expect(screen.getByText('Build and deploy an AI advertisement for Your product')).toBeInTheDocument();
    })
})
