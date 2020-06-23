import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders button text', () => {
  const { getByText } = render(<App />);
  const buttonText = getByText(/Magathrea/i);
  expect(buttonText).toBeInTheDocument();
});
