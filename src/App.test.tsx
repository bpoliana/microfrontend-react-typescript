import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test("it should render note form", async () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

});
