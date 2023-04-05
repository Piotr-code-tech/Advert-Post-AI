import {render, screen, waitFor} from "@testing-library/react";
import React from "react";
import GenerateButton from "./GenerateButton";
import userEvent from "@testing-library/user-event";

describe("Generate button component", () => {
    it("When enable should be green", () => {
        render(<GenerateButton disabled={false} onClick={() => {}}/>);
        const button = screen.getByRole('button');
        expect(button.className.toString()).toBe('Button GreenButton');
    });

    it("When disabled should be gray", () => {
        render(<GenerateButton disabled={true} onClick={() => {}}/>);
        const button = screen.getByRole('button');
        expect(button.className.toString()).toBe('Button GreyButton');
    });

    it("onClick invoke function", () => {
        let testValue : boolean = false;
        render(<GenerateButton disabled={false} onClick={() => {testValue = true}}/>);
        const button = screen.getByRole("button");
        userEvent.click(button);
        expect(testValue).toBe(true);
    })

});