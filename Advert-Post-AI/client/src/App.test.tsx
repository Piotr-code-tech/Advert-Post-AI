import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

describe("App component test", () => {
  it("App is displaying properly", () => {
    const {baseElement} = render(<App/>);
    expect(baseElement).toBeInTheDocument();
  });
});
