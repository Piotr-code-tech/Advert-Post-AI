import {render, screen} from "@testing-library/react";
import {Loader} from "./Loader";

describe("Loader is displaying ", () => {
    it('should display properly', function () {
        render(<Loader/>);
        const loader = screen.getByLabelText("Hash Loader");
        expect(loader).toBeInTheDocument();
    });
})