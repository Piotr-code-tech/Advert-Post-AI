import {getByRole, render, screen} from "@testing-library/react";
import React from "react";
import TextArea from "./TextArea";
import userEvent from "@testing-library/user-event";

describe("Text area component", () => {
    it("product text should display", () => {
        render(<TextArea
            setIsTextLengthAcceptable={(isTextLengthAcceptable: boolean) => {}}
            setProductText={(text: string) => {}}
            productText={"Text for tests"}
        />);

        const textArea = screen.getByRole('textbox');
        expect(textArea.textContent).toBe("Text for tests");
    });

    it("setProductText function invokes after typing", () => {
        let testText: string = "";
        render(<TextArea
            setIsTextLengthAcceptable={(isTextLengthAcceptable: boolean) => {}}
            setProductText={(text: string) => {testText = text}}
            productText={""}
        />);

        const textArea = screen.getByRole('textbox');
        userEvent.type(textArea, 'Text for tests');
        expect(testText).toBe("Text for tests");
    });

    it("setIsTextLengthAcceptable function invokes after typing", () => {
        let isTextAcceptable: boolean = false;
        render(<TextArea
            setIsTextLengthAcceptable={(isTextLengthAcceptable: boolean) => {isTextAcceptable = isTextLengthAcceptable}}
            setProductText={(text: string) => {}}
            productText={""}
        />);

        const textArea = screen.getByRole('textbox');
        userEvent.type(textArea, 'Text for tests');
        expect(isTextAcceptable.valueOf()).toBe(true);
    });

});