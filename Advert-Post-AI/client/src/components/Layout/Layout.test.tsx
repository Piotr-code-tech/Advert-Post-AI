import {render, screen} from "@testing-library/react";
import {Layout} from "./Layout";
import React from "react";

describe('Layout component test', () => {
    it('Should display Header and description', () => {
        render(<Layout/>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    })

    it('Should display description', () => {
        render(<Layout/>);
        expect(screen.getByText('Build and deploy an AI advertisement for Your product')).toBeInTheDocument();
    })
})